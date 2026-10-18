
<template>
  <main
    class="px-4 py-12 sm:px-6 sm:py-16"
    :dir="isRtl ? 'rtl' : 'ltr'"
  >
    <section class="mx-auto max-w-5xl">
      <!-- Main container -->
      <div
        class="mt-6 rounded-2xl border border-gray-200 dark:border-gray-900 bg-white/80 dark:bg-gray-900 p-5 shadow-lg backdrop-blur sm:p-8 lg:p-10"
      >
        <!-- Page heading -->
        <header class="mb-10 text-center">
          <h1
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            {{ $t("contact.title") }}
          </h1>

          <p
            class="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base"
          >
            {{ $t("contact.description") }}
          </p>
        </header>

        <!-- Two separate forms -->
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <!-- Email form -->
          <section
            class="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-6"
          >
            <div class="mb-6 flex items-center gap-3">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <div>
                <h2
                  class="text-xl font-semibold text-gray-900 dark:text-white"
                >
                  {{ $t("contact.email.title") }}
                </h2>

                <p
                  class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400"
                >
                  {{ $t("contact.email.description") }}
                </p>
              </div>
            </div>

            <form
              class="space-y-5"
              novalidate
              @submit.prevent="handleEmailSubmit"
            >
              <!-- Name -->
              <div>
                <label
                  for="email-name"
                  class="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  {{ $t("contact.fields.name") }}
                  <span class="text-red-500">*</span>
                </label>

                <input
                  id="email-name"
                  v-model.trim="emailForm.name"
                  type="text"
                  maxlength="100"
                  autocomplete="name"
                  required
                  :placeholder="$t('contact.placeholders.name')"
                  class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <!-- Email -->
              <div>
                <label
                  for="email-address"
                  class="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  {{ $t("contact.fields.email") }}
                  <span class="text-red-500">*</span>
                </label>

                <input
                  id="email-address"
                  v-model.trim="emailForm.email"
                  type="email"
                  maxlength="254"
                  autocomplete="email"
                  required
                  :placeholder="$t('contact.placeholders.email')"
                  class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <!-- Subject -->
              <div>
                <label
                  for="email-subject"
                  class="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  {{ $t("contact.fields.subject") }}
                  <span class="text-red-500">*</span>
                </label>

                <input
                  id="email-subject"
                  v-model.trim="emailForm.subject"
                  type="text"
                  maxlength="150"
                  required
                  :placeholder="$t('contact.placeholders.subject')"
                  class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <!-- Message -->
              <div>
                <label
                  for="email-message"
                  class="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  {{ $t("contact.fields.message") }}
                  <span class="text-red-500">*</span>
                </label>

                <textarea
                  id="email-message"
                  v-model.trim="emailForm.message"
                  rows="5"
                  maxlength="5000"
                  required
                  :placeholder="$t('contact.placeholders.message')"
                  class="w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                ></textarea>

                <p
                  class="mt-1 text-xs text-gray-500 dark:text-gray-400"
                  :class="isRtl ? 'text-left' : 'text-right'"
                >
                  {{ emailForm.message.length }}/5000
                </p>
              </div>

              <!-- Email status -->
              <p
                v-if="emailStatus.message"
                role="status"
                aria-live="polite"
                class="rounded-lg px-4 py-3 text-sm leading-6"
                :class="
                  emailStatus.type === 'error'
                    ? 'bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300'
                    : 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300'
                "
              >
                {{ $t(emailStatus.message) }}
              </p>

              <div
                v-if="showEmailTurnstile"
                ref="emailTurnstileContainer"
                class="mt-4"
              ></div>

              <button
                type="submit"
                :disabled="emailStatus.loading"
                class="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus:ring-offset-gray-950"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  class="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M22 2 15 22l-4-9-9-4Z"
                    stroke-linejoin="round"
                  />
                  <path d="M22 2 11 13" />
                </svg>

                {{
                  emailStatus.loading
                    ? $t("contact.buttons.sending")
                    : $t("contact.email.button")
                }}
              </button>
            </form>
          </section>

          <!-- Telegram form -->
          <section
            class="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-6"
          >
            <div class="mb-6 flex items-center gap-3">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    d="m22 2-7 20-4-9-9-4Z"
                    stroke-linejoin="round"
                  />
                  <path d="M22 2 11 13" />
                </svg>
              </div>

              <div>
                <h2
                  class="text-xl font-semibold text-gray-900 dark:text-white"
                >
                  {{ $t("contact.telegram.title") }}
                </h2>

                <p
                  class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400"
                >
                  {{ $t("contact.telegram.description") }}
                </p>
              </div>
            </div>

            <form
              class="space-y-5"
              novalidate
              @submit.prevent="handleTelegramSubmit"
            >
              <!-- Name -->
              <div>
                <label
                  for="telegram-name"
                  class="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  {{ $t("contact.fields.name") }}
                  <span class="text-red-500">*</span>
                </label>

                <input
                  id="telegram-name"
                  v-model.trim="telegramForm.name"
                  type="text"
                  maxlength="100"
                  autocomplete="name"
                  required
                  :placeholder="$t('contact.placeholders.name')"
                  class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <!-- Telegram username -->
              <div>
                <label
                  for="telegram-username"
                  class="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  {{ $t("contact.fields.telegram") }}
                  <span class="text-xs font-normal text-gray-500 dark:text-gray-400">
                    ({{ $t("contact.optional") }})
                  </span>
                </label>

                <input
                  id="telegram-username"
                  v-model.trim="telegramForm.telegram"
                  type="text"
                  maxlength="33"
                  autocomplete="off"
                  :placeholder="$t('contact.placeholders.telegram')"
                  class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />

                <p
                  class="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400"
                >
                  {{ $t("contact.telegram.usernameHint") }}
                </p>
              </div>

              <!-- Message -->
              <div>
                <label
                  for="telegram-message"
                  class="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  {{ $t("contact.fields.message") }}
                  <span class="text-red-500">*</span>
                </label>

                <textarea
                  id="telegram-message"
                  v-model.trim="telegramForm.message"
                  rows="7"
                  maxlength="5000"
                  required
                  :placeholder="$t('contact.placeholders.message')"
                  class="w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                ></textarea>

                <p
                  class="mt-1 text-xs text-gray-500 dark:text-gray-400"
                  :class="isRtl ? 'text-left' : 'text-right'"
                >
                  {{ telegramForm.message.length }}/5000
                </p>
              </div>

              <!-- Telegram status -->
              <p
                v-if="telegramStatus.message"
                role="status"
                aria-live="polite"
                class="rounded-lg px-4 py-3 text-sm leading-6"
                :class="
                  telegramStatus.type === 'error'
                    ? 'bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300'
                    : 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300'
                "
              >
                {{ $t(telegramStatus.message) }}
              </p>

              <div
                v-if="telegramLink"
                class="rounded-lg border border-sky-200 bg-sky-50 p-4 dark:border-sky-900 dark:bg-sky-950/30"
              >
                <a
                  :href="telegramLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 font-semibold text-sky-700 underline underline-offset-4 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200"
                >
                  {{ $t("contact.telegram.openBot") }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    class="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>

              <div
                v-if="showTelegramTurnstile"
                ref="telegramTurnstileContainer"
                class="mt-4"
              ></div>

              <button
                type="submit"
                :disabled="telegramStatus.loading"
                class="flex w-full items-center justify-center gap-2 rounded-lg bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus:ring-offset-gray-950"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  class="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="m22 2-7 20-4-9-9-4Z"
                    stroke-linejoin="round"
                  />
                  <path d="M22 2 11 13" />
                </svg>

                {{
                  telegramStatus.loading
                    ? $t("contact.buttons.sending")
                    : $t("contact.telegram.button")
                }}
              </button>
            </form>
          </section>
        </div>
        </div>

      <!-- Social and alternative contact links -->
      <section
        class="mt-8 rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-lg backdrop-blur dark:border-gray-800 dark:bg-gray-900 sm:p-8"
        aria-labelledby="contact-links-title">
        <header class="mb-6 text-center">
          <h2
            id="contact-links-title"
            class="text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
            {{ $t("contact.links.title") }}
          </h2>
          <p
            class="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
            {{ $t("contact.links.description") }}
          </p>
        </header>
      
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <!-- GitHub -->
          <a
            href="https://github.com/omidbolandy"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="$t('contact.links.github')"
            class="group flex min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-gray-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
            <span
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-800 transition group-hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:group-hover:bg-gray-700"
              aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-16">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.31-3.76-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 2.06 3.72 1.56.1-.72.39-1.22.7-1.5-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.22-5.08 5.49.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/>
              </svg>
            </span>
            <span class="min-w-0 flex-1">
              <span class="block font-semibold text-gray-900 dark:text-white">
                GitHub
              </span>
              <span class="mt-1 block truncate text-xs text-gray-500 dark:text-gray-400">
                {{ $t("contact.links.githubDescription") }}
              </span>
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              class="h-4 w-4 shrink-0 text-gray-400 transition group-hover:text-blue-600 dark:group-hover:text-blue-400"
              aria-hidden="true">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/omid-bolandy"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="$t('contact.links.linkedin')"
            class="group flex min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-blue-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-blue-900">
            <span
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-300 dark:bg-blue-950 dark:text-blue-300 dark:group-hover:bg-blue-900"
              aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                <path
                  d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.96V9.19h2.97v9.56ZM6.45 7.88a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.3 10.87h-2.96v-4.65c0-1.11-.02-2.53-1.54-2.53-1.55 0-1.79 1.2-1.79 2.45v4.73H9.5V9.19h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.57 1.97 3.57 4.53v5.27Z"/>
              </svg>
            </span>
            <span class="min-w-0 flex-1">
              <span class="block font-semibold text-gray-900 dark:text-white">
                LinkedIn
              </span>
              <span class="mt-1 block truncate text-xs text-gray-500 dark:text-gray-400">
                {{ $t("contact.links.linkedinDescription") }}
              </span>
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              class="h-4 w-4 shrink-0 text-gray-400 transition group-hover:text-blue-600 dark:group-hover:text-blue-400"
              aria-hidden="true">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        
          <!-- Telegram -->
          <a
            href="https://t.me/obkWorksBot"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="$t('contact.links.telegram')"
            class="group flex min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-sky-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-sky-900">
            <span
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-300 dark:bg-sky-950 dark:text-sky-300 dark:group-hover:bg-sky-900"
              aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                <path
                  d="M21.8 3.2 18.6 20c-.24 1.18-.88 1.47-1.78.92l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.98.48l.35-5.01 9.12-8.24c.4-.35-.09-.55-.62-.2L6.12 13.75 1.28 12.24c-1.05-.33-1.07-1.05.22-1.55L20.43 3.3c.87-.32 1.63.21 1.37 1.9Z"/>
              </svg>
            </span>
            <span class="min-w-0 flex-1">
              <span class="block font-semibold text-gray-900 dark:text-white">
                Telegram
              </span>
              <span class="mt-1 block truncate text-xs text-gray-500 dark:text-gray-400">
                {{ $t("contact.links.telegramDescription") }}
              </span>
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              class="h-4 w-4 shrink-0 text-gray-400 transition group-hover:text-sky-600 dark:group-hover:text-sky-400"
              aria-hidden="true">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        
          <!-- Email with Copy Action -->
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=omidbolandy@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="omidbolandy@gmail.com"
            class="group flex min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-emerald-900 cursor-pointer relative">
            <span
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:group-hover:bg-emerald-900"
              aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                class="h-6 w-6">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
          
            <span class="min-w-0 flex-1">
              <span class="block font-semibold text-gray-900 dark:text-white">
                Email
              </span>
              <span class="mt-1 block truncate text-xs text-gray-500 dark:text-gray-400">
                {{ $t("contact.links.emailDescription") }}
              </span>
            </span>
          
            <button
              type="button"
              @click.stop.prevent="copyEmail('omidbolandy@gmail.com')"
              class="p-1 rounded-md text-gray-400 transition hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50"
              title="Copy Email">
              <svg
                v-if="copied"
                class="w-4 h-4 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <svg
                v-else
                class="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          
            <span
              v-if="copied"
              class="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 dark:bg-white px-2 py-1 text-[10px] font-semibold text-white dark:text-gray-900 shadow-lg z-10">
              {{ $t("home.contact.copied") || "Copied!" }}
            </span>
          </a>
        </div>
      </section>
    </section>

  </main>
</template>

<script>
const TELEGRAM_USERNAME_REGEX = /^@?[a-zA-Z0-9_]{5,32}$/;

export default {
  name: "Contact",

  data() {
    return {
      emailForm: { name: "", email: "", subject: "", message: "" },
      telegramForm: { name: "", telegram: "", message: "" },
      emailStatus: { loading: false, type: "", message: "" },
      telegramStatus: { loading: false, type: "", message: "" },
      telegramLink: "",
      showEmailTurnstile: false,
      emailTurnstileToken: "",
      emailTurnstileWidgetId: null,
      emailTurnstileError: false,

      showTelegramTurnstile: false,
      telegramTurnstileToken: "",
      telegramTurnstileWidgetId: null,
      telegramTurnstileError: false,

      copied: false,
    };
  },

  mounted() {
    // Turnstile widgets are created only when a form is submitted.
  },

  beforeUnmount() {
    if (!window.turnstile) return;

    if (this.emailTurnstileWidgetId !== null) {
      window.turnstile.remove(this.emailTurnstileWidgetId);
    }

    if (this.telegramTurnstileWidgetId !== null) {
      window.turnstile.remove(this.telegramTurnstileWidgetId);
    }
  },

  computed: { 
    isRtl() {
      return ["fa", "fa-IR", "ar", "ar-SA"].includes(
        this.$i18n.locale
      );
    },
  },

  methods: {
    async copyEmail(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 1800);
    } catch (err) {
      console.error(err);
    }
  },

    validateName(name) {
      return name.length >= 2 && name.length <= 100;
    },

    validateMessage(message) {
      return message.length >= 5 && message.length <= 5000;
    },

    loadTurnstile(formType) {
      const isEmail = formType === "email";
    
      const container = isEmail
        ? this.$refs.emailTurnstileContainer
        : this.$refs.telegramTurnstileContainer;
    
      const tokenKey = isEmail
        ? "emailTurnstileToken"
        : "telegramTurnstileToken";
    
      const widgetKey = isEmail
        ? "emailTurnstileWidgetId"
        : "telegramTurnstileWidgetId";
    
      const errorKey = isEmail
        ? "emailTurnstileError"
        : "telegramTurnstileError";
    
      const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    
      if (!siteKey || !container) {
        this[errorKey] = true;
        return;
      }
    
      // Prevent rendering the same widget more than once.
      if (this[widgetKey] !== null) {
        return;
      }
    
      const renderWidget = () => {
        if (!window.turnstile || !container.isConnected) {
          this[errorKey] = true;
          return;
        }
      
        if (this[widgetKey] !== null) {
          return;
        }
      
        try {
          this[errorKey] = false;
        
          this[widgetKey] = window.turnstile.render(container, {
            sitekey: siteKey,
            action: isEmail ? "contact_email" : "contact_telegram",
            size: window.matchMedia("(max-width: 424px)").matches
              ? "compact"
              : "normal",
          
            callback: (token) => {
              this[tokenKey] = token;
              this[errorKey] = false;

              if (isEmail) {
                this.handleEmailSubmit();
              } else {
                this.handleTelegramSubmit();
              }
            },
         
            "error-callback": () => {
              this[tokenKey] = "";
              this[errorKey] = true;
            },
          
            "expired-callback": () => {
              this[tokenKey] = "";
            },
          });
        } catch (error) {
          console.error("Turnstile render error:", error);
          this[errorKey] = true;
        }
      };
    
      if (window.turnstile) {
        renderWidget();
        return;
      }
    
      const scriptUrl =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    
      let script = document.querySelector(
        'script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
      );
    
      if (script) {
        if (script.dataset.turnstileLoaded === "true") {
          renderWidget();
        } else {
          script.addEventListener("load", renderWidget, { once: true });
          script.addEventListener(
            "error",
            () => {
              this[errorKey] = true;
            },
            { once: true }
          );
        }
      
        return;
      }
    
      script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.defer = true;
    
      script.onload = () => {
        script.dataset.turnstileLoaded = "true";
        renderWidget();
      };
    
      script.onerror = () => {
        this[errorKey] = true;

        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    
      document.head.appendChild(script);
    },

    
    async handleEmailSubmit() {
      if (this.emailStatus.loading) return;
    
      if (
        this.emailStatus.type === "success" &&
        !this.emailForm.name.trim() &&
        !this.emailForm.email.trim() &&
        !this.emailForm.subject.trim() &&
        !this.emailForm.message.trim()
      ) {
        return;
      }
    
      this.setStatus(this.emailStatus, "", "");

      const name = this.emailForm.name.trim();
      const email = this.emailForm.email.trim();
      const subject = this.emailForm.subject.trim();
      const message = this.emailForm.message.trim();
    
      if (!this.validateName(name)) {
        this.setStatus(
          this.emailStatus,
          "error",
          "contact.validation.name"
        );
        return;
      }
    
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
        this.setStatus(
          this.emailStatus,
          "error",
          "contact.validation.email"
        );
        return;
      }
    
      if (!subject || subject.length > 150) {
        this.setStatus(
          this.emailStatus,
          "error",
          "contact.validation.subject"
        );
        return;
      }
    
      if (!this.validateMessage(message)) {
        this.setStatus(
          this.emailStatus,
          "error",
          "contact.validation.message"
        );
        return;
      }
    
      // Show Turnstile only after the form fields are valid.
      if (!this.emailTurnstileToken) {
        if (
          this.emailTurnstileError &&
          this.emailTurnstileWidgetId !== null &&
          window.turnstile
        ) {
          window.turnstile.reset(this.emailTurnstileWidgetId);
          this.emailTurnstileError = false;
          return;
        }
      
        if (!this.showEmailTurnstile) {
          this.showEmailTurnstile = true;
          await this.$nextTick();
        }
      
        if (this.emailTurnstileWidgetId === null) {
          this.emailTurnstileError = false;
          this.loadTurnstile("email");
        }
      
        return;
      }
  
      this.emailStatus.loading = true;
    
      try {
        const response = await fetch("/api/contact/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            turnstileToken: this.emailTurnstileToken,
          }),
        });
      
        const result = await response.json().catch(() => ({}));
      
        if (!response.ok || result.ok !== true) {
          throw new Error("EMAIL_SEND_FAILED");
        }
      
        this.setStatus(
          this.emailStatus,
          "success",
          "contact.status.emailSuccess"
        );
      
        this.emailForm = {
          name: "",
          email: "",
          subject: "",
          message: "",
        };
      } catch (error) {
        console.error("Email submission error:", error);
      
        this.setStatus(
          this.emailStatus,
          "error",
          "contact.status.emailError"
        );
      } finally {
        this.emailStatus.loading = false;
        this.emailTurnstileToken = "";

        if (this.emailStatus.type === "success") {
          if (
            this.emailTurnstileWidgetId !== null &&
            window.turnstile
          ) {
            window.turnstile.remove(this.emailTurnstileWidgetId);
          }
        
          this.emailTurnstileWidgetId = null;
          this.showEmailTurnstile = false;
        } else if (
          this.emailTurnstileWidgetId !== null &&
          window.turnstile
        ) {
          window.turnstile.reset(this.emailTurnstileWidgetId);
        }
      }
    },
    
    async handleTelegramSubmit() {
      if (this.telegramStatus.loading) return;
    
      if (
        this.telegramStatus.type === "success" &&
        !this.telegramForm.name.trim() &&
        !this.telegramForm.telegram.trim() &&
        !this.telegramForm.message.trim()
      ) {
        return;
      }
    
      this.setStatus(this.telegramStatus, "", "");
      this.telegramLink = "";

      const name = this.telegramForm.name.trim();
      const telegram = this.telegramForm.telegram.trim();
      const message = this.telegramForm.message.trim();
    
      if (!this.validateName(name)) {
        this.setStatus(
          this.telegramStatus,
          "error",
          "contact.validation.name"
        );
        return;
      }
    
      if (
        telegram &&
        !TELEGRAM_USERNAME_REGEX.test(telegram)
      ) {
        this.setStatus(
          this.telegramStatus,
          "error",
          "contact.validation.telegram"
        );
        return;
      }
    
      if (!this.validateMessage(message)) {
        this.setStatus(
          this.telegramStatus,
          "error",
          "contact.validation.message"
        );
        return;
      }
    
      // Show Turnstile only after the form fields are valid.
      if (!this.telegramTurnstileToken) {
        if (
          this.telegramTurnstileError &&
          this.telegramTurnstileWidgetId !== null &&
          window.turnstile
        ) {
          window.turnstile.reset(this.telegramTurnstileWidgetId);
          this.telegramTurnstileError = false;
          return;
        }
      
        if (!this.showTelegramTurnstile) {
          this.showTelegramTurnstile = true;
          await this.$nextTick();
        }
      
        if (this.telegramTurnstileWidgetId === null) {
          this.telegramTurnstileError = false;
          this.loadTurnstile("telegram");
        }
      
        return;
      }
    
      this.telegramStatus.loading = true;
    
      try {
        const response = await fetch("/api/contact/telegram", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            telegram,
            message,
            turnstileToken: this.telegramTurnstileToken,
          }),
        });
      
        const data = await response.json().catch(() => ({}));
      
        if (!response.ok || !data.ok || !data.telegramLink) {
          throw new Error("Telegram contact request failed");
        }
      
        this.telegramLink = data.telegramLink;
      
        this.setStatus(
          this.telegramStatus,
          "success",
          "contact.status.telegramSuccess"
        );
      
        this.telegramForm = {
          name: "",
          telegram: "",
          message: "",
        };
      } catch (error) {
        console.error("Telegram contact error:", error);
      
        this.setStatus(
          this.telegramStatus,
          "error",
          "contact.status.telegramError"
        );
      } finally {
        this.telegramStatus.loading = false;
        this.telegramTurnstileToken = "";
            
        if (this.telegramStatus.type === "success") {
          if (
            this.telegramTurnstileWidgetId !== null &&
            window.turnstile
          ) {
            window.turnstile.remove(this.telegramTurnstileWidgetId);
          }
        
          this.telegramTurnstileWidgetId = null;
          this.showTelegramTurnstile = false;
        } else if (
          this.telegramTurnstileWidgetId !== null &&
          window.turnstile
        ) {
          window.turnstile.reset(this.telegramTurnstileWidgetId);
        }
      }
    },


    setStatus(target, type, message) {
      target.type = type;
      target.message = message;
    },
  },
};
</script>