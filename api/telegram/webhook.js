
import { redis } from '../_lib/redis.js';

const TELEGRAM_API = 'https://api.telegram.org';

async function telegramRequest(botToken, method, payload) {
  const response = await fetch(
    `${TELEGRAM_API}/bot${botToken}/${method}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000),
    }
  );

  const result = await response.json();

  if (!response.ok || !result.ok) {
    throw new Error(`Telegram API ${method} failed`);
  }

  return result;
}

async function getConversation(conversationId) {
  const stored = await redis.get(`conversation:${conversationId}`);

  if (!stored) return null;

  return typeof stored === 'string'
    ? JSON.parse(stored)
    : stored;
}

async function saveConversation(conversation) {
  conversation.updatedAt = new Date().toISOString();

  let retentionSeconds = 60 * 60 * 24 * 90;

  if (conversation.status === 'archived') {
    if (!conversation.archivedAt) {
      conversation.archivedAt = conversation.updatedAt;
    }

    const archiveExpiry =
      new Date(conversation.archivedAt).getTime() +
      60 * 60 * 24 * 60 * 1000;

    retentionSeconds = Math.ceil(
      (archiveExpiry - Date.now()) / 1000
    );

    if (retentionSeconds <= 0) {
      await redis.del(`conversation:${conversation.id}`);
      return;
    }
  }

  await redis.set(
    `conversation:${conversation.id}`,
    JSON.stringify(conversation),
    { ex: retentionSeconds }
  );
}

async function sendText(botToken, chatId, text, extra = {}) {
  return telegramRequest(botToken, 'sendMessage', {
    chat_id: chatId,
    text,
    ...extra,
  });
}

async function getUserLanguage(telegramUserId) {
  const language = await redis.get(
    `telegram_language:${telegramUserId}`
  );

  return language === 'en' || language === 'fa'
    ? language
    : null;
}

async function showLanguageSelection(botToken, chatId, language = null) {
  const isEnglish = language === 'en';

  await sendText(
    botToken,
    chatId,
    isEnglish
      ? 'Please choose your language:'
      : 'لطفاً زبان خود را انتخاب کنید:',
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: '🇮🇷 فارسی', callback_data: 'lang:fa' },
            { text: '🇬🇧 English', callback_data: 'lang:en' },
          ],
        ],
      },
    }
  );
}

function getUserText(language, key) {
  const messages = {
    fa: {
      welcome:
        'سلام! به پشتیبانی obk Works خوش آمدید. زبان شما فارسی است. پیام خود را ارسال کنید تا ثبت شود.',
      received:
        'پیام شما ثبت شد. از طریق همین ربات می‌توانید ادامه دهید.',
      languageSaved:
        'زبان شما با موفقیت به فارسی تغییر کرد.',
      chooseLanguage:
        'برای ادامه، ابتدا زبان خود را انتخاب کنید.',
    },
    en: {
      welcome:
        'Hello! Welcome to obk Works Support. Your language is English. Send your message and it will be recorded.',
      received:
        'Your message has been received. You can continue the conversation through this bot.',
      languageSaved:
        'Your language has been changed to English.',
      chooseLanguage:
        'Please choose your language before continuing.',
    },
  };

  return messages[language]?.[key] || messages.fa[key];
}

async function showHelp(botToken, chatId) {
  await sendText(
    botToken,
    chatId,
    [
  'پنل مدیریت پشتیبانی obk Works',
  '',
  '/list — نمایش گفتگوهای فعال',
  '/close — بستن گفتگوی انتخاب‌شده',
  '/open — بازکردن گفتگوی انتخاب‌شده',
  '/archive — بایگانی گفتگوی انتخاب‌شده',
  '/archived — نمایش گفتگوهای بایگانی‌شده',
  '/help — راهنما',
  '',
  'گفتگوهای بایگانی‌شده تا ۶۰ روز پس از بایگانی نگهداری می‌شوند.',
  'اگر کاربر در این مدت پیام جدیدی بفرستد، گفتگوی قبلی دوباره فعال می‌شود.',
  '',
  'برای پاسخ‌دادن، ابتدا از /list یک گفتگو را انتخاب کن.',
  'سپس پیام معمولی خودت را ارسال کن تا از طریق ربات به همان کاربر برسد.',
].join('\n')
  );
}

async function listConversations(botToken, adminId, page = 0) {
  const pageSize = 10;
  const keys = await redis.keys('conversation:*');
  const conversations = [];

  for (const key of keys) {
    const stored = await redis.get(key);
    if (!stored) continue;

    const conversation =
      typeof stored === 'string' ? JSON.parse(stored) : stored;

    // Only show active, non-archived conversations.
    if (
      !conversation.telegramChatId ||
      conversation.status === 'archived'
    ) {
      continue;
    }

    conversations.push(conversation);
  }

  conversations.sort(
    (a, b) =>
      new Date(b.updatedAt || b.createdAt).getTime() -
      new Date(a.updatedAt || a.createdAt).getTime()
  );

  if (!conversations.length) {
    await sendText(
      botToken,
      adminId,
      'فعلاً گفتگوی متصل‌شده‌ای برای نمایش وجود ندارد.'
    );
    return;
  }

  const totalPages = Math.ceil(conversations.length / pageSize);
  const currentPage = Math.max(
    0,
    Math.min(Number(page) || 0, totalPages - 1)
  );

  const startIndex = currentPage * pageSize;
  const pageConversations = conversations.slice(
    startIndex,
    startIndex + pageSize
  );

  const selectedId = await redis.get(
    `telegram_admin_selected:${adminId}`
  );

  const keyboard = pageConversations.map((conversation) => {
    const isSelected = conversation.id === selectedId;
    const status =
      conversation.status === 'closed' ? 'بسته' : 'باز';
    const name = String(conversation.name || 'بدون نام').slice(0, 22);
    const shortId = String(conversation.id).slice(0, 8);

    return [{
      text: `${isSelected ? '✓ ' : ''}${status} · ${name} · ${shortId}`,
      callback_data: `conv:${conversation.id}`,
    }];
  });

  const navigationRow = [];

  if (currentPage > 0) {
    navigationRow.push({
      text: '⬅️ صفحهٔ قبل',
      callback_data: `list:${currentPage - 1}`,
    });
  }

  if (currentPage < totalPages - 1) {
    navigationRow.push({
      text: 'صفحهٔ بعد ➡️',
      callback_data: `list:${currentPage + 1}`,
    });
  }

  if (navigationRow.length) {
    keyboard.push(navigationRow);
  }

  await sendText(
    botToken,
    adminId,
    [
      `گفتگوهای متصل: ${conversations.length}`,
      `صفحهٔ ${currentPage + 1} از ${totalPages}`,
      'برای انتخاب گفتگو روی دکمهٔ آن بزن.',
    ].join('\n'),
    { reply_markup: { inline_keyboard: keyboard } }
  );
}

async function listArchivedConversations(botToken, adminId) {
  const keys = await redis.keys('conversation:*');
  const conversations = [];

  for (const key of keys) {
    const stored = await redis.get(key);
    if (!stored) continue;

    const conversation =
      typeof stored === 'string' ? JSON.parse(stored) : stored;

    if (
      conversation.status !== 'archived' ||
      !conversation.telegramChatId
    ) {
      continue;
    }

    conversations.push(conversation);
  }

  conversations.sort(
    (a, b) =>
      new Date(b.archivedAt || b.updatedAt || b.createdAt).getTime() -
      new Date(a.archivedAt || a.updatedAt || a.createdAt).getTime()
  );

  if (!conversations.length) {
    await sendText(
      botToken,
      adminId,
      'گفتگوی بایگانی‌شده‌ای برای نمایش وجود ندارد.'
    );
    return;
  }

  const lines = conversations.slice(0, 10).map((conversation, index) => {
    const name = String(conversation.name || 'بدون نام').slice(0, 50);
    const shortId = String(conversation.id).slice(0, 8);
    const archivedAt = conversation.archivedAt
      ? new Date(conversation.archivedAt).toLocaleDateString('fa-IR')
      : 'نامشخص';

    return `${index + 1}. ${name} · ${shortId}\n   تاریخ بایگانی: ${archivedAt}`;
  });

  await sendText(
    botToken,
    adminId,
    [
      `گفتگوهای بایگانی‌شده: ${conversations.length}`,
      '',
      ...lines,
      conversations.length > 10
        ? ''
        : '',
      ...(conversations.length > 10
        ? ['برای مشاهدهٔ همه، بعداً صفحه‌بندی بایگانی را اضافه می‌کنیم.']
        : []),
    ].filter(Boolean).join('\n')
  );
}

async function handleAdminMessage(
  botToken,
  adminId,
  text
) {
  const command = text.split(/\s+/)[0].split('@')[0].toLowerCase();

  if (command === '/start' || command === '/help') {
    await showHelp(botToken, adminId);
    return;
  }

  if (command === '/list') {
    await listConversations(botToken, adminId);
    return;
  }

  if (command === '/archived') {
    await listArchivedConversations(botToken, adminId);
    return;
  }

  if (
    command === '/close' ||
    command === '/open' ||
    command === '/archive'
  ) {    const selectedId = await redis.get(
      `telegram_admin_selected:${adminId}`
    );

    if (!selectedId) {
      await sendText(
        botToken,
        adminId,
        'ابتدا با /list یک گفتگو را انتخاب کن.'
      );
      return;
    }

    const conversation = await getConversation(selectedId);

if (!conversation) {
  await redis.del(`telegram_admin_selected:${adminId}`);
  await sendText(
    botToken,
    adminId,
    'گفتگو پیدا نشد. دوباره /list را اجرا کن.'
  );
  return;
}

if (command === '/archive') {
  conversation.status = 'archived';
  conversation.archivedAt = new Date().toISOString();

  await saveConversation(conversation);

  // Keep the user mapping only for the 60-day archive period.
  if (conversation.telegramUserId) {
    await redis.set(
      `telegram_user:${conversation.telegramUserId}`,
      conversation.id,
      { ex: 60 * 60 * 24 * 60 }
    );
  }

  await redis.del(
    `telegram_admin_selected:${adminId}`,
    `telegram:notification_pending:${conversation.id}`
  );

  await sendText(
    botToken,
    adminId,
    'گفتگوی انتخاب‌شده بایگانی شد. پیام‌ها تا ۶۰ روز پس از بایگانی نگهداری می‌شوند.'
  );

  return;
}
    
conversation.status = command === '/close' ? 'closed' : 'open';
await saveConversation(conversation);


if (command === '/close') {
  if (conversation.telegramChatId && conversation.telegramUserId) {
    try {
      const language = await getUserLanguage(
        String(conversation.telegramUserId)
      );

      const notification =
        language === 'en'
          ? 'Your support conversation has been closed. You can still send a new message through this bot.'
          : 'گفتگوی پشتیبانی شما بسته شد. بااین‌حال، همچنان می‌توانید از همین ربات پیام جدید بفرستید.';

      await sendText(
        botToken,
        conversation.telegramChatId,
        notification
      );
    } catch (error) {
      console.error(
        'Conversation close notification failed:',
        error.message
      );

      try {
        await sendText(
          botToken,
          adminId,
          'گفتگو بسته شد، اما ارسال اعلان به کاربر ناموفق بود.'
        );
      } catch (adminError) {
        console.error(
          'Close notification error alert failed:',
          adminError.message
        );
      }
    }
  }

  try {
    await sendText(
      botToken,
      adminId,
      'گفتگوی انتخاب‌شده بسته شد.'
    );
  } catch (error) {
    console.error(
      'Admin close confirmation failed:',
      error.message
    );
  }
} else {
  await sendText(
    botToken,
    adminId,
    'گفتگوی انتخاب‌شده باز شد.'
  );
}


return;

  }

  if (command.startsWith('/')) {
      await sendText(
      botToken,
      adminId,
      'فرمان ناشناخته است. برای راهنما /help را بفرست.'
    );
    return;
  }

  const selectedId = await redis.get(
    `telegram_admin_selected:${adminId}`
  );

  if (!selectedId) {
    await sendText(
      botToken,
      adminId,
      'برای پاسخ‌دادن ابتدا /list را بفرست و یک گفتگو را انتخاب کن.'
    );
    return;
  }

  const conversation = await getConversation(selectedId);

  if (!conversation || !conversation.telegramChatId) {
    await sendText(
      botToken,
      adminId,
      'گفتگو یا مقصد تلگرام آن پیدا نشد. دوباره /list را اجرا کن.'
    );
    return;
  }

  if (conversation.status === 'closed') {
    await sendText(
      botToken,
      adminId,
      'این گفتگو بسته است. ابتدا /open را بفرست.'
    );
    return;
  }

  const now = new Date().toISOString();

  // Record the admin reply in the same Redis conversation.
  conversation.messages = Array.isArray(conversation.messages)
    ? conversation.messages
    : [];

  conversation.messages.push({
    role: 'admin',
    text: text.slice(0, 4000),
    createdAt: now,
    source: 'telegram',
  });

  conversation.messages = conversation.messages.slice(-100);

  // Save before sending so the reply is recorded.
  await saveConversation(conversation);

  try {
    const userLanguage = await getUserLanguage(
      String(conversation.telegramUserId || '')
    );

    const replyPrefix =
      userLanguage === 'en'
        ? 'obk Works Support Reply:'
        : 'پاسخ پشتیبانی obk Works:';

    await sendText(
      botToken,
      conversation.telegramChatId,
      `${replyPrefix}\n\n${text.slice(0, 3500)}`
    );

    await sendText(botToken, adminId, 'پاسخ ارسال شد.');
  } catch (error) {
    console.error('Admin reply delivery failed:', error.message);

    await sendText(
      botToken,
      adminId,
      'ارسال پاسخ ناموفق بود. پیام در تاریخچهٔ گفتگو ثبت شده است؛ وضعیت تحویل را بررسی کن.'
    );
  }
}

async function handleLanguageCallback(botToken, callbackQuery) {
  const callbackId = callbackQuery.id;
  const telegramUserId = String(callbackQuery.from?.id || '');
  const chat = callbackQuery.message?.chat;
  const language = (callbackQuery.data || '').slice(5);

  if (
    !telegramUserId ||
    chat?.type !== 'private' ||
    String(chat.id) !== telegramUserId ||
    !['fa', 'en'].includes(language)
  ) {
    await telegramRequest(botToken, 'answerCallbackQuery', {
      callback_query_id: callbackId,
      text: 'Invalid language selection.',
      show_alert: true,
    });
    return;
  }

  await redis.set(
    `telegram_language:${telegramUserId}`,
    language,
    { ex: 60 * 60 * 24 * 365 }
  );

  await telegramRequest(botToken, 'answerCallbackQuery', {
    callback_query_id: callbackId,
    text: language === 'en' ? 'Language saved.' : 'زبان ذخیره شد.',
  });

  await sendText(
    botToken,
    chat.id,
    getUserText(language, 'welcome')
  );
}

async function handleAdminCallback(
  botToken,
  callbackQuery
) {
  const callbackId = callbackQuery.id;
  const adminId = String(callbackQuery.from.id);
  const data = callbackQuery.data || '';

  if (data.startsWith('list:')) {
    const pageValue = data.slice(5);

    if (!/^\d+$/.test(pageValue)) {
      await telegramRequest(botToken, 'answerCallbackQuery', {
        callback_query_id: callbackId,
        text: 'شمارهٔ صفحه نامعتبر است.',
        show_alert: true,
      });
      return;
    }

    await telegramRequest(botToken, 'answerCallbackQuery', {
      callback_query_id: callbackId,
    });

    await listConversations(botToken, adminId, Number(pageValue));
    return;
  }

  if (!data.startsWith('conv:')) {
    await telegramRequest(botToken, 'answerCallbackQuery', {
      callback_query_id: callbackId,
      text: 'عملیات ناشناخته است.',
    });
    return;
  }

  const conversationId = data.slice(5);

  if (
    !/^[0-9a-f-]{36}$/i.test(conversationId)
  ) {
    await telegramRequest(botToken, 'answerCallbackQuery', {
      callback_query_id: callbackId,
      text: 'شناسهٔ گفتگو نامعتبر است.',
      show_alert: true,
    });
    return;
  }

  const conversation = await getConversation(conversationId);

  if (
    !conversation ||
    conversation.id !== conversationId ||
    !conversation.telegramChatId ||
    !conversation.telegramUserId ||
    String(conversation.telegramChatId) !==
      String(conversation.telegramUserId)
  ) {
    await telegramRequest(botToken, 'answerCallbackQuery', {
      callback_query_id: callbackId,
      text: 'گفتگو پیدا نشد یا معتبر نیست.',
      show_alert: true,
    });
    return;
  }

  await redis.set(
    `telegram_admin_selected:${adminId}`,
    conversationId,
    { ex: 60 * 60 * 24 * 90 }
  );

  await redis.del(
    `telegram:notification_pending:${conversationId}`
  );

  await telegramRequest(botToken, 'answerCallbackQuery', {
    callback_query_id: callbackId,
    text: 'گفتگو انتخاب شد.',
  });

  const recentMessages = (conversation.messages || [])
    .slice(-5)
    .map((message) => {
      const role = message.role === 'admin'
        ? 'مدیر'
        : message.role === 'user'
          ? 'کاربر'
          : 'سیستم';

      return `${role}: ${String(message.text || '').slice(0, 500)}`;
    });

  await sendText(
    botToken,
    adminId,
    [
      `گفتگو: ${conversation.id}`,
      `نام: ${conversation.name || 'ثبت نشده'}`,
      `راه ارتباطی: ${conversation.contact || 'ثبت نشده'}`,
      `وضعیت: ${conversation.status || 'نامشخص'}`,
      '',
      'آخرین پیام‌ها:',
      ...(recentMessages.length ? recentMessages : ['پیامی ثبت نشده است.']),
      '',
      conversation.status === 'closed'
        ? 'برای پاسخ‌دادن ابتدا /open را بفرست.'
        : 'پیام بعدی تو به همین کاربر ارسال می‌شود.',
    ].join('\n').slice(0, 3900)
  );
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false });
  }

  const webhookSecret = process.env.TELEGRAM_WEBHOOK_SECRET;
  const providedSecret = req.headers['x-telegram-bot-api-secret-token'];

  if (!webhookSecret || providedSecret !== webhookSecret) {
    return res.status(401).json({ ok: false });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const adminId = process.env.TELEGRAM_ADMIN_ID;

  
  if (!botToken || !adminId) {
    console.error(
      !botToken
        ? 'Missing TELEGRAM_BOT_TOKEN'
        : 'Missing TELEGRAM_ADMIN_ID'
    );
    return res.status(500).json({ ok: false });
  }

    let updateLockKey = null;
    let updateLockToken = null;
    let updateLockAcquired = false;
    let updateDoneKey = null;
    let userLockKey = null;
    let userLockToken = null;
    let userLockAcquired = false;

  try {

    const update = req.body;

    if (
      !update ||
      typeof update !== 'object' ||
      Array.isArray(update)
    ) {
      return res.status(400).json({ ok: false });
    }

    
    if (
      !Number.isSafeInteger(update.update_id) ||
      update.update_id < 0
    ) {
      return res.status(400).json({ ok: false });
    }

    updateLockKey = `telegram:update:lock:${update.update_id}`;
    updateDoneKey = `telegram:update:done:${update.update_id}`;
    updateLockToken = crypto.randomUUID();

    const updateAlreadyDone = await redis.get(updateDoneKey);

    if (updateAlreadyDone) {
      return res.status(200).json({ ok: true });
    }

    const lockResult = await redis.set(
      updateLockKey,
      updateLockToken,
      { nx: true, ex: 120 }
    );

    if (lockResult !== 'OK') {
      return res.status(503).json({ ok: false });
    }

    updateLockAcquired = true;


    // Handle inline-button clicks.
    if (update.callback_query) {
        const callback = update.callback_query;
        
      if ((callback.data || '').startsWith('lang:')) {
      const languageChat = callback.message?.chat;
      const languageUserId = String(callback.from?.id || '');

      if (
        languageChat?.type !== 'private' ||
        String(languageChat.id) !== languageUserId
      ) {
        await telegramRequest(botToken, 'answerCallbackQuery', {
          callback_query_id: callback.id,
          text: 'Please choose your language in a private chat.',
          show_alert: true,
        }).catch(() => {});
      
        return res.status(200).json({ ok: true });
      }
    
      await handleLanguageCallback(botToken, callback);
      return res.status(200).json({ ok: true });
    }
    
      const callbackUserId = String(callback.from?.id || '');
      const callbackChat = callback.message?.chat;

      if (
        !adminId ||
        callbackUserId !== adminId ||
        callbackChat?.type !== 'private' ||
        String(callbackChat?.id) !== adminId
      ) {
        await telegramRequest(botToken, 'answerCallbackQuery', {
          callback_query_id: callback.id,
          text: 'اجازهٔ دسترسی ندارید.',
          show_alert: true,
        }).catch(() => {});
        return res.status(200).json({ ok: true });
      }

      await handleAdminCallback(botToken, callback);
      return res.status(200).json({ ok: true });
    }

    const message = update.message;

    if (
      typeof message?.text !== 'string' ||
      !message.text.trim() ||
      !message.chat?.id ||
      !message.from?.id
    ) {
      return res.status(200).json({ ok: true });
    }

    if (message.chat.type !== 'private') {
      return res.status(200).json({ ok: true });
    }

    const telegramUserId = String(message.from.id);
    const chatId = String(message.chat.id);
    const text = message.text.trim();
    const command = text.split(/\s+/)[0].split('@')[0].toLowerCase();
    const now = new Date().toISOString();

    const isAdmin =
      Boolean(adminId) &&
      telegramUserId === adminId &&
      chatId === adminId;

    // Admin commands and replies are handled separately.
    if (isAdmin) {
      await handleAdminMessage(botToken, telegramUserId, text);
      return res.status(200).json({ ok: true });
    }

        userLockKey = `telegram:user:lock:${telegramUserId}`;
    userLockToken = crypto.randomUUID();

    const userLockResult = await redis.set(
      userLockKey,
      userLockToken,
      { nx: true, ex: 30 }
    );

    if (userLockResult !== 'OK') {
      return res.status(503).json({ ok: false });
    }

    userLockAcquired = true;

    const userConversationKey = `telegram_user:${telegramUserId}`;
    let conversationId = await redis.get(userConversationKey);
    let conversation = null;
    let linkedWebsiteConversation = false;

    // /start may contain a one-time website conversation link token.
    if (command === '/start') {
      const parts = text.split(/\s+/);
      const linkToken = parts[1];

      if (linkToken) {
        const linkKey = `telegram_link:${linkToken}`;

        // Atomically read and delete the one-time link token.
        const linkedConversationId = await redis.getdel(linkKey);

        if (linkedConversationId) {
          const linkedConversation = await getConversation(
            linkedConversationId
          );
        
          if (
            linkedConversation &&
            linkedConversation.status === 'waiting_for_telegram_link' &&
            !linkedConversation.telegramUserId &&
            !linkedConversation.telegramChatId
          ) {
            conversationId = linkedConversationId;
            linkedWebsiteConversation = true;
          }
        }
      }
    }

    if (conversationId) {
      conversation = await getConversation(conversationId);
    }

    // A direct /start or message without a valid conversation
    // creates a new conversation.
    if (!conversation) {
      conversationId = crypto.randomUUID();

      conversation = {
        id: conversationId,
        source: 'telegram',
        name: [
          message.from.first_name,
          message.from.last_name,
        ].filter(Boolean).join(' ').slice(0, 100),
        contact: message.from.username
          ? `@${message.from.username}`
          : '',
        telegramUserId,
        telegramChatId: chatId,
        status: 'open',
        createdAt: now,
        updatedAt: now,
        messages: [],
      };
    }

    conversation.telegramUserId = telegramUserId;
    conversation.telegramChatId = chatId;
    conversation.updatedAt = now;

    if (message.from.username) {
      conversation.contact = `@${message.from.username}`;
    }

    if (conversation.status === 'waiting_for_telegram_link') {
      conversation.status = 'open';
    }

    const language = await getUserLanguage(telegramUserId);

    // Reactivate an archived conversation when the user sends a new message.
    if (
      conversation.status === 'archived' &&
      language &&
      command !== '/start' &&
      command !== '/language' &&
      !command.startsWith('/')
    ) {
      conversation.status = 'open';
      delete conversation.archivedAt;
    }

    // Do not store /start as a user message.
    if (
  language &&
  command !== '/start' &&
  command !== '/language' &&
  !command.startsWith('/')
) {
      conversation.messages = Array.isArray(conversation.messages)
        ? conversation.messages
        : [];

      conversation.messages.push({
        role: 'user',
        text: text.slice(0, 4000),
        createdAt: now,
        source: 'telegram',
      });
    }

    conversation.messages = Array.isArray(conversation.messages)
    ? conversation.messages.slice(-100)
    : [];

    await saveConversation(conversation);


await redis.set(
  userConversationKey,
  conversationId,
  {
    ex:
      conversation.status === 'archived'
        ? 60 * 60 * 24 * 60
        : 60 * 60 * 24 * 90,
  }
);

const notificationKey =
  `telegram:notification_pending:${conversationId}`;

let notificationClaim = null;

if (
  linkedWebsiteConversation ||
  (
    language &&
    command !== '/start' &&
    command !== '/language' &&
    !command.startsWith('/')
  )
) {
  notificationClaim = await redis.set(
    notificationKey,
    'pending',
    { nx: true, ex: 60 * 60 * 24 * 90 }
  );
}

if (notificationClaim === 'OK') {
  try {
    await sendText(
      botToken,
      adminId,
      [
        '🔔 پیام جدید پشتیبانی',
        `👤 کاربر: ${conversation.name || 'ثبت نشده'}`,
        `🗂 گفتگو: ${conversation.id}`,
        '',
        '💬 پیام:',
        (
        linkedWebsiteConversation
            ? conversation.messages?.find(
                (item) => item.role === 'user'
              )?.text || 'پیام اولیهٔ سایت پیدا نشد.'
            : text
        ).slice(0, 2500),
      ].join('\n'),
      {
        reply_markup: {
          inline_keyboard: [[
            {
              text: '📩 مشاهدهٔ گفتگو',
              callback_data: `conv:${conversation.id}`,
            },
          ]],
        },
      }
    );
  } catch (error) {
    console.error(
      'Admin notification failed:',
      error.message
    );

    
try {
  await redis.del(notificationKey);
} catch (cleanupError) {
  console.error(
    'Notification cleanup failed:',
    cleanupError.message
  );
}

  }
}

    if (!language) {
      await showLanguageSelection(botToken, chatId);
      return res.status(200).json({ ok: true });
    }

    if (command === '/language') {
      await showLanguageSelection(botToken, chatId, language);
      return res.status(200).json({ ok: true });
    }

    if (command === '/start') {
      await sendText(
        botToken,
        chatId,
        getUserText(language, 'welcome')
      );

      if (linkedWebsiteConversation) {
        const initialWebsiteMessage = conversation.messages?.find(
          (item) => item.role === 'user'
        )?.text;
      
        if (initialWebsiteMessage) {
          await sendText(
            botToken,
            chatId,
            language === 'en'
              ? `Your message from the website:\n\n${initialWebsiteMessage}`
              : `پیام شما که از طریق سایت ارسال کردید:\n\n${initialWebsiteMessage}`
          );
        }
      }
      return res.status(200).json({ ok: true });
    }

    if (command.startsWith('/')) {
        await sendText(
        botToken,
        chatId,
        language === 'en'
          ? 'Unknown command. Send /language to change your language.'
          : 'فرمان ناشناخته است. برای تغییر زبان /language را ارسال کنید.'
      );
      return res.status(200).json({ ok: true });
    }

    await sendText(
      botToken,
      chatId,
      getUserText(language, 'received')
    );

    return res.status(200).json({ ok: true });

  } catch (error) {
    console.error('Telegram webhook error:', error.message);
    return res.status(500).json({ ok: false });
  }
  
  finally {
    if (userLockAcquired) {
      try {
        await redis.eval(
          "if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end",
          [userLockKey],
          [userLockToken]
        );
      } catch (cleanupError) {
        console.error(
          'Telegram user lock cleanup error:',
          cleanupError.message
        );
      }
    }
    if (updateLockAcquired) {
      try {
        if (res.statusCode === 200) {
          await redis.set(
            updateDoneKey,
            '1',
            { ex: 60 * 60 * 24 }
          );
        }

        await redis.eval(
          "if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end",
          [updateLockKey],
          [updateLockToken]
        );
      } catch (cleanupError) {
        console.error(
          'Telegram update cleanup error:',
          cleanupError.message
        );
      }
    }
  }

}
