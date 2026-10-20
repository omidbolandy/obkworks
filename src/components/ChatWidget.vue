<template>
  <div>    
    <!-- Floating Chat Button -->
    <button
      type="button"
      @click="toggleChat"
      :class="[
        'fixed bottom-4 sm:bottom-6 ltr:left-4 rtl:right-4 sm:ltr:left-6 sm:rtl:right-6 z-40 flex items-center justify-center overflow-hidden rounded-full bg-slate-950 shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/30',
        isOpen ? 'h-14 w-14' : 'h-[72px] w-[72px] sm:h-[90px] sm:w-[90px]']"
      :aria-label="isOpen ? closeLabel : openLabel"
      :aria-expanded="isOpen"
      aria-controls="obk-chat-panel">
      <img
        v-if="!isOpen"
        :src="chatbotIcon"
        alt=""
        aria-hidden="true"
        class="h-full w-full rounded-full object-cover"/>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true">
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    </button>


    <!-- Chat Panel -->
    <section
      v-if="isOpen"
      id="obk-chat-panel"
      :dir="isRtl ? 'rtl' : 'ltr'"
      class="fixed bottom-20 sm:bottom-24 ltr:left-4 rtl:right-4 sm:ltr:left-6 sm:rtl:right-6 z-40 flex h-[min(34rem,calc(100vh-7rem))] w-[calc(100vw-2rem)] max-w-sm max-[430px]:max-w-[20rem] max-[430px]:h-[min(29rem,calc(100vh-10rem))] [@media(max-height:650px)]:h-[calc(100dvh-10rem)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/15 dark:border-gray-700 dark:bg-gray-900"
      role="dialog"
      aria-modal="false"
      :aria-label="title">
      <!-- Header -->
      <header
        class="flex shrink-0 items-center gap-3 bg-blue-600 px-4 py-4 text-white">
        <div
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true">
            <path d="M12 3v3m0 12v3M3 12h3m12 0h3" />
            <path
              d="M19 12a7 7 0 0 1-7 7
              7 7 0 0 1-7-7
              7 7 0 0 1 7-7
              7 7 0 0 1 7 7Z"/>
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>

        <div class="min-w-0 flex-1">
          <h2 class="truncate text-base font-bold">
            {{ title }}
          </h2>
          <p class="mt-1 text-xs text-blue-100">
            {{ subtitle }}
          </p>
        </div>

        <button
          type="button"
          @click="closeChat"
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/90 transition hover:bg-white/15 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60"
          :aria-label="closeLabel">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </header>
      <!-- Messages -->
      <div
        ref="messagesContainer"
        class="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4 dark:bg-gray-950"
        aria-live="polite"
        aria-relevant="additions text">
        <!-- Welcome Message -->
        <div
          v-if="messages.length === 0"
          class="flex items-start gap-2">
          <div
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true">
              <path d="M12 8v4m0 4h.01" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <div
            class="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm leading-6 text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-200">
            {{ welcomeMessage }}
          </div>
        </div>
        <!-- Conversation -->
        <div
          v-for="(message, index) in messages"
          :key="message.id || index"
          class="flex items-end gap-2"
          :class="message.role === 'user' ? 'justify-end' : 'justify-start'">
          <div
            v-if="message.role !== 'user'"
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true">
              <path d="M12 3v3m0 12v3M3 12h3m12 0h3" />
              <circle cx="12" cy="12" r="7" />
            </svg>
          </div>
          <div
            class="max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-6"
            :class="
              message.role === 'user'
                ? 'rounded-br-sm bg-blue-600 text-white'
                : 'rounded-bl-sm bg-white text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-200'">
            <template
              v-for="(part, partIndex) in formatMessageParts(message.text)"
              :key="partIndex">
              <a
                v-if="part.type === 'link'"
                :href="part.href"
                target="_blank"
                rel="noopener noreferrer"
                class="break-all text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                {{ part.value }}
              </a>
              <span v-else>{{ part.value }}</span>
            </template>
          </div>
        </div>
        <!-- Loading Indicator -->
        <div
          v-if="isSending"
          class="flex items-end gap-2">
          <div
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true">
              <circle cx="12" cy="12" r="7" />
            </svg>
          </div>
          <div
            class="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-4 shadow-sm dark:bg-gray-800"
            :aria-label="loadingLabel">
            <span class="h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
            <span class="h-2 w-2 animate-pulse rounded-full bg-blue-500 [animation-delay:150ms]"></span>
            <span class="h-2 w-2 animate-pulse rounded-full bg-blue-500 [animation-delay:300ms]"></span>
          </div>
        </div>
        <!-- Error Message -->
        <p
          v-if="errorMessage"
          class="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs leading-5 text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300"
          role="alert">
          {{ errorMessage }}
        </p>
      </div>
      <!-- Composer -->
      <form
        class="shrink-0 border-t border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-900"
        @submit.prevent="sendMessage">
        <div
          class="flex items-end gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-2 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800">
          <textarea
            v-model="draft"
            rows="1"
            maxlength="1500"
            :placeholder="inputPlaceholder"
            :aria-label="inputPlaceholder"
            :disabled="isSending"
            @keydown.enter.exact.prevent="sendMessage"
            class="max-h-28 min-h-10 flex-1 resize-none border-0 bg-transparent px-2 py-2 text-sm leading-5 text-gray-800 outline-none placeholder:text-gray-400 focus:ring-0 disabled:cursor-not-allowed disabled:opacity-60 dark:text-gray-100 dark:placeholder:text-gray-500"
          ></textarea>
          <button
            type="submit"
            :disabled="isSending || !draft.trim()"
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 dark:focus:ring-offset-gray-900"
            :aria-label="sendLabel">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true">
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </div>
        <div class="mt-2 flex items-center justify-between gap-3 px-1">
          <p class="text-[9px] leading-4 text-gray-400 dark:text-gray-500">
            {{ privacyNote }}
          </p>

          <a
            href="/contact"
            class="shrink-0 text-xs font-medium text-blue-600 transition hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300">
            {{ contactLabel }}
          </a>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import chatbotIcon from '../assets/obk-AI-Chatbot-Logo.webp';

const STORAGE_KEY = "obk-chat-history";
const HISTORY_TTL = 24 * 60 * 60 * 1000;
const MAX_STORED_MESSAGES = 100;
const MAX_HISTORY_SENT = 10;

export default {
  name: "ChatWidget",
  data() {
    return {
      chatbotIcon,
      isOpen: false,
      isSending: false,
      draft: "",
      messages: [],
      errorMessage: "",
      lastUserMessageAt: 0,
      expiryTimer: null,
    };
  },

  computed: {
    isRtl() {
      return this.$i18n?.locale === "fa";
    },

    locale() {
      return this.isRtl ? "fa" : "en";
    },

    title() {
      return this.isRtl
        ? "دستیار هوشمند obk Works"
        : "obk Works AI Assistant";
    },

    subtitle() {
      return this.isRtl
        ? "چطور می‌توانم کمکتان کنم؟"
        : "How can I help you today?";
    },

    welcomeMessage() {
      return this.isRtl
        ? "سلام! من دستیار هوشمند obk Works هستم. درباره پروژه‌ها، خدمات یا وب‌سایت سؤال دارید؟"
        : "Hello! I'm the obk Works AI Assistant. Ask me about projects, services, or the website.";
    },

    inputPlaceholder() {
      return this.isRtl
        ? "پیام خود را بنویسید..."
        : "Type your message...";
    },

    sendLabel() {
      return this.isRtl ? "ارسال پیام" : "Send message";
    },

    openLabel() {
      return this.isRtl
        ? "باز کردن گفت‌وگو"
        : "Open chat";
    },

    closeLabel() {
      return this.isRtl
        ? "بستن گفت‌وگو"
        : "Close chat";
    },

    loadingLabel() {
      return this.isRtl
        ? "در حال دریافت پاسخ"
        : "Waiting for a response";
    },

    privacyNote() {
      return this.isRtl
        ? "گفت‌وگو تا ۲۴ ساعت پس از آخرین پیام شما نگه‌داری می‌شود."
        : "Chat history expires 24 hours after your last message.";
    },

    contactLabel() {
      return this.isRtl ? "ارتباط با من" : "Contact me";
    },
  },

  mounted() {
    this.loadHistory();
  },

  beforeUnmount() {
    this.clearExpiryTimer();
  },

  watch: {
    messages: {
      deep: true,
      handler() {
        this.saveHistory();
        this.$nextTick(this.scrollToBottom);
      },
    },
  },

  methods: {
    formatMessageParts(text) {
      const parts = [];
      const linkRegex =
        /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|https?:\/\/[^\s<>"'`]+/gi;
        
      let lastIndex = 0;
      let match;
        
      while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          parts.push({
            type: "text",
            value: text.slice(lastIndex, match.index),
          });
        }
      
        const isMarkdownLink = Boolean(match[1] && match[2]);
        let label = isMarkdownLink ? match[1] : match[0];
        let url = isMarkdownLink ? match[2] : match[0];
      
        if (!isMarkdownLink) {
          while (/[.,!?;:)\]}،؛؟]$/.test(url)) {
            url = url.slice(0, -1);
          }
        }
      
        try {
          const parsedUrl = new URL(url);
        
          if (
            ["http:", "https:"].includes(parsedUrl.protocol) &&
            parsedUrl.hostname
          ) {
            parts.push({
              type: "link",
              value: label,
              href: parsedUrl.href,
            });
          } else {
            parts.push({
              type: "text",
              value: match[0],
            });
          }
        } catch {
          parts.push({
            type: "text",
            value: match[0],
          });
        }
      
        lastIndex = match.index + match[0].length;
      }
    
      if (lastIndex < text.length) {
        parts.push({
          type: "text",
          value: text.slice(lastIndex),
        });
      }
    
      return parts;
    },

    toggleChat() {
      this.checkExpiry();
      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        this.$nextTick(this.scrollToBottom);
      }
    },

    closeChat() {
      this.isOpen = false;
    },

    loadHistory() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);

        if (!stored) return;

        const parsed = JSON.parse(stored);
        const timestamp = Number(parsed.lastUserMessageAt);

        if (
          !Number.isFinite(timestamp) ||
          timestamp <= 0 ||
          Date.now() - timestamp >= HISTORY_TTL ||
          !Array.isArray(parsed.messages)
        ) {
          this.clearHistory();
          return;
        }

        this.messages = parsed.messages
          .filter(
            (message) =>
              message &&
              ["user", "assistant"].includes(message.role) &&
              typeof message.text === "string"
          )
          .slice(-MAX_STORED_MESSAGES);

        this.lastUserMessageAt = timestamp;

        if (this.messages.length > 0) {
          this.scheduleExpiry();
        } else {
          this.clearHistory();
        }
      } catch {
        this.clearHistory();
      }
    },

    saveHistory() {
      if (
        !this.lastUserMessageAt ||
        this.messages.length === 0
      ) {
        return;
      }

      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            messages: this.messages.slice(-MAX_STORED_MESSAGES),
            lastUserMessageAt: this.lastUserMessageAt,
          })
        );
      } catch {
        // Chat remains usable if local storage is unavailable.
      }
    },

    scheduleExpiry() {
      this.clearExpiryTimer();

      const remaining =
        this.lastUserMessageAt + HISTORY_TTL - Date.now();

      if (remaining <= 0) {
        this.clearHistory();
        return;
      }

      this.expiryTimer = setTimeout(() => {
        this.clearHistory();
      }, remaining);
    },

    clearExpiryTimer() {
      if (this.expiryTimer) {
        clearTimeout(this.expiryTimer);
        this.expiryTimer = null;
      }
    },

    clearHistory() {
      this.clearExpiryTimer();

      this.messages = [];
      this.lastUserMessageAt = 0;
      this.errorMessage = "";

      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // Ignore storage access errors.
      }
    },

    checkExpiry() {
      if (
        this.lastUserMessageAt &&
        Date.now() - this.lastUserMessageAt >= HISTORY_TTL
      ) {
        this.clearHistory();
      }
    },

    scrollToBottom() {
      const container = this.$refs.messagesContainer;

      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    },

    async sendMessage() {
      const messageText = this.draft.trim();

      if (!messageText || this.isSending) return;

      this.checkExpiry();

      this.errorMessage = "";
      this.draft = "";
      this.isSending = true;

      const previousHistory = this.messages
        .slice(-MAX_HISTORY_SENT)
        .map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          text: message.text,
        }));

      this.messages.push({
        id: crypto.randomUUID(),
        role: "user",
        text: messageText,
      });

      this.lastUserMessageAt = Date.now();
      this.scheduleExpiry();
      this.saveHistory();

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: messageText,
            history: previousHistory,
            locale: this.locale,
          }),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          const error = new Error(
            typeof data.error === "string"
              ? data.error
              : "Request failed"
          );
        
          error.status = response.status;
          throw error;
        }

        if (typeof data.answer !== "string" || !data.answer.trim()) {
          throw new Error("Empty response");
        }

        this.messages.push({
          id: crypto.randomUUID(),
          role: "assistant",
          text: data.answer.trim(),
        });
      } catch (error) {
      const status = error?.status;
        
      if (status === 429) {
        this.errorMessage = this.isRtl
          ? "تعداد پیام‌های شما بیش از حد مجاز است. لطفاً یک دقیقه صبر کنید و دوباره تلاش کنید."
          : "You've reached the message limit. Please wait a minute and try again.";
      } else if (status === 400) {
        this.errorMessage = this.isRtl
          ? "درخواست معتبر نیست. لطفاً پیام کوتاه‌تری ارسال کنید."
          : "The request is invalid. Please try a shorter message.";
      } else if (
        status === 500 ||
        status === 502 ||
        status === 503 ||
        status === 504
      ) {
        this.errorMessage = this.isRtl
          ? "سرویس هوش مصنوعی موقتاً در دسترس نیست. لطفاً کمی بعد دوباره تلاش کنید."
          : "The AI service is temporarily unavailable. Please try again shortly.";
      } else {
        this.errorMessage = this.isRtl
          ? "ارتباط با سرویس هوش مصنوعی برقرار نشد. اتصال اینترنت را بررسی کنید و دوباره تلاش کنید."
          : "Could not connect to the AI service. Check your connection and try again.";
      }
    } finally {
        this.isSending = false;
        this.$nextTick(this.scrollToBottom);
      }
    },
  },
};
</script>