import { Ratelimit } from '@upstash/ratelimit';
import { redis } from '../_lib/redis.js';

const emailRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '10 m'),
  prefix: 'contact-email',
  analytics: false,
});

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[char];
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({
      ok: false,
      error: 'Method not allowed',
    });
  }

  try {
    
    const ip = req.headers['x-real-ip'] || 'unknown';

    const rateLimit = await emailRateLimit.limit(ip);

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
      email,
      subject,
      message,
      turnstileToken,
    } = req.body || {};

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof subject !== 'string' ||
      typeof message !== 'string' ||
      typeof turnstileToken !== 'string'
    ) {
      return res.status(400).json({
        ok: false,
        error: 'Invalid request',
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    if (
      cleanName.length < 2 ||
      cleanName.length > 100 ||
      !EMAIL_REGEX.test(cleanEmail) ||
      cleanEmail.length > 254 ||
      cleanSubject.length < 1 ||
      cleanSubject.length > 150 ||
      cleanMessage.length < 5 ||
      cleanMessage.length > 5000 ||
      turnstileToken.length > 2048
    ) {
      return res.status(400).json({
        ok: false,
        error: 'Please check the submitted fields',
      });
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!secretKey || !resendApiKey || !contactEmail) {
      console.error('Email API environment variables are missing');

      return res.status(500).json({
        ok: false,
        error: 'Service configuration error',
      });
    }

    // Verify CAPTCHA on the server.
    const captchaResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: secretKey,
          response: turnstileToken,
        }),
        signal: AbortSignal.timeout(10000),
      }
    );

    if (!captchaResponse.ok) {
      throw new Error('Turnstile verification service unavailable');
    }

    const captchaResult = await captchaResponse.json();

    if (
      captchaResult.success !== true ||
      captchaResult.action !== 'contact_email' ||
      (
        process.env.VERCEL_ENV === 'production' &&
        !['obkworks.tr', 'www.obkworks.tr'].includes(
          captchaResult.hostname
        )
      )
    ) {
      return res.status(403).json({
        ok: false,
        error: 'CAPTCHA verification failed',
      });
    }
    
    // Escape user input before placing it in HTML.
    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeMessage = escapeHtml(cleanMessage);

    const emailResponse = await fetch(
      'https://api.resend.com/emails',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'obk Works Contact <onboarding@resend.dev>',
          to: [contactEmail],
          reply_to: cleanEmail,
          subject: cleanSubject,
          text: [
            `Name: ${cleanName}`,
            `Email: ${cleanEmail}`,
            '',
            cleanMessage,
          ].join('\n'),
          html: `
            <h2>New contact form message</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Message:</strong></p>
            <p>${safeMessage.replace(/\n/g, '<br>')}</p>
          `,
        }),
        signal: AbortSignal.timeout(15000),
      }
    );

    if (!emailResponse.ok) {
      const errorDetails = await emailResponse.text();

      console.error(
        'Resend request failed:',
        emailResponse.status,
        errorDetails.slice(0, 500)
      );

      return res.status(502).json({
        ok: false,
        error: 'Email delivery failed',
      });
    }

    return res.status(200).json({
      ok: true,
      message: 'Message accepted',
    });
  } catch (error) {
    console.error('Contact email API failed:', error.message);

    return res.status(500).json({
      ok: false,
      error: 'Unable to process the message',
    });
  }
}