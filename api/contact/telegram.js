import { redis } from '../_lib/redis.js';

import { Ratelimit } from '@upstash/ratelimit';

const telegramContactRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '10 m'),
  prefix: 'contact-telegram',
  analytics: false,
});

const TURNSTILE_VERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const ip = req.headers['x-real-ip'] || 'unknown';

    const rateLimit = await telegramContactRateLimit.limit(ip);

    if (!rateLimit.success) {
      const retryAfter = Math.max(
        1,
        Math.ceil((rateLimit.reset - Date.now()) / 1000)
      );

      res.setHeader('Retry-After', String(retryAfter));

      return res.status(429).json({
        ok: false,
        error: 'Too many requests. Please try again later.',
      });
    }

    const {
      name,
      telegram,
      message,
      turnstileToken,
    } = req.body || {};

    if (
      typeof name !== 'string' ||
      typeof telegram !== 'string' ||
      typeof message !== 'string' ||
      typeof turnstileToken !== 'string' ||
      name.trim().length < 2 ||
      name.trim().length > 100 ||
      telegram.trim().length > 100 ||
      message.trim().length < 5 ||
      message.trim().length > 4000 ||
      turnstileToken.length === 0 ||
      turnstileToken.length > 2048
    ) {
      return res.status(400).json({
        ok: false,
        error: 'Please check the submitted fields.',
      });
    }

    if (
      !process.env.TURNSTILE_SECRET_KEY ||
      !process.env.TELEGRAM_BOT_TOKEN ||
      !process.env.TELEGRAM_WEBHOOK_SECRET ||
      !process.env.TELEGRAM_BOT_USERNAME
    ) {
      console.error('Missing required contact/Telegram environment variables.');

      return res.status(500).json({
        ok: false,
        error: 'Server configuration error.',
      });
    }

        const turnstileResponse = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!turnstileResponse.ok) {
      throw new Error('Turnstile verification service unavailable');
    }

    const turnstileResult = await turnstileResponse.json();

    if (
      turnstileResult.success !== true ||
      turnstileResult.action !== 'contact_telegram' ||
      (
        process.env.VERCEL_ENV === 'production' &&
        !['obkworks.tr', 'www.obkworks.tr'].includes(
          turnstileResult.hostname
        )
      )
    ) {
      return res.status(403).json({
        ok: false,
        error: 'Security verification failed.',
      });
    }

    const conversationId = crypto.randomUUID();
    const now = new Date().toISOString();

    const conversation = {
      id: conversationId,
      source: 'website',
      name: name.trim().slice(0, 100),
      contact: telegram.trim().slice(0, 100),
      telegramUserId: null,
      status: 'waiting_for_telegram_link',
      createdAt: now,
      updatedAt: now,
      messages: [
        {
          role: 'user',
          text: message.trim().slice(0, 4000),
          createdAt: now,
        },
      ],
    };

    await redis.set(
      `conversation:${conversationId}`,
      JSON.stringify(conversation)
    );

    const linkToken = crypto.randomUUID();

    await redis.set(
      `telegram_link:${linkToken}`,
      conversationId,
      { ex: 60 * 60 }
    );

    const botUsername = process.env.TELEGRAM_BOT_USERNAME;

    const telegramLink =
      `https://t.me/${botUsername}?start=${linkToken}`;

    return res.status(200).json({
      ok: true,
      conversationId,
      telegramLink,
    });
  } catch (error) {
    console.error('Telegram contact endpoint error:', error);

    return res.status(500).json({
      ok: false,
      error: 'Unable to process your message.',
    });
  }
}