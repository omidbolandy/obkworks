<template>
  <div
    class="container mx-auto space-y-10 pb-12 sm:my-12 md:my-16 lg:my-5 px-4 sm:px-6 lg:px-8 max-w-14xl">
    
    <!-- Hero Section -->
    <section
      class="flex flex-col-reverse md:flex-row items-center justify-between gap-8 pt-4 md:pt-10">
      <div class="flex-1 space-y-4 text-center md:text-left rtl:md:text-right">
        <h1 class="text-3xl font-extrabold tracking-tight sm:text-5xl">
          {{ $t("home.hero.hi") }}
          <span class="text-blue-600 dark:text-blue-400">{{ $t("home.hero.name") }} </span>
          <span v-if="$i18n.locale === 'fa'">{{ $t("home.hero.name1") }} </span>
        </h1>
        <h2
          class="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300">
          {{ $t("home.hero.title") }}
        </h2>
        <p
          class="text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0">
          {{ $t("home.hero.description") }}
        </p>
        <div
          class="flex flex-wrap items-center justify-center gap-4 pt-2 md:justify-start">
          <router-link
            to="/Projects"
            class="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] hover:from-blue-500 hover:to-indigo-500 hover:shadow-xl hover:shadow-blue-500/40 active:scale-[0.98] dark:shadow-blue-900/40 dark:hover:shadow-blue-500/30">
            <span
              class="absolute inset-0 bg-white/20 opacity-0 transition-opacity hover:opacity-100"></span>
            <span class="relative z-10">
              {{ $t("home.hero.projectsButton") }}
            </span>
            <svg
              class="relative z-10 h-4 w-4 transition-transform ltr:rotate-180 rtl:rotate-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
          </router-link>
        </div>
      </div>

      <!-- Hero Logo/Image -->
      <div
        class="w-40 h-40 sm:w-56 sm:h-56 rounded-full flex items-center justify-center shadow-lg text-white text-5xl sm:text-7xl animate-pulse [animation-duration:4s]">
        <img src="/src/assets/obk-Logo-2.webp" alt="obkworks - Personal Web Portfolio and Network Infrastructure Labs Logo" class="rounded-full" />
      </div>
    </section>

    <!-- About This Website -->
    <section
      class="p-6 rounded-xl bg-white/40 dark:bg-gray-800/40 border border-gray-200/40 dark:border-gray-700/20 backdrop-blur-sm shadow-sm hover:border-blue-500/30 transition-colors">
      <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
        <svg
          class="w-5 h-5 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        {{ $t("aboutWebsite.title") }}
      </h2>
      <p class="leading-relaxed text-gray-700 dark:text-gray-300">
          {{ $t("aboutWebsite.part1") }}
        <span class="font-semibold text-green-500">{{ $t("aboutWebsite.vue") }}</span>
          {{ $t("aboutWebsite.part2") }}
        <span class="font-semibold text-sky-500">{{ $t("aboutWebsite.tailwind") }}</span>
          {{ $t("aboutWebsite.part3") }}
        <span class="font-semibold text-[#F38020]">{{ $t("aboutWebsite.cloudflare") }}</span>
          {{ $t("aboutWebsite.part4") }}
      </p>
    </section>

    <!-- About Me -->
    <section
      class="p-6 rounded-xl bg-white/40 dark:bg-gray-800/40 border border-gray-200/40 dark:border-gray-700/20 backdrop-blur-sm shadow-sm hover:border-blue-500/30 transition-colors">
      <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
        <svg
          class="w-6 h-6 text-gray-850 dark:text-gray-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
        <span>{{ $t("home.about.title") }}</span>
      </h2>
      <p class="text-base leading-relaxed text-gray-600 dark:text-gray-300">
        {{ $t("home.about.textPart1") }}
        <span class="text-blue-500 font-semibold">Cisco</span>
        {{ $t("home.about.textPart2") }}
        <span class="text-green-500 font-semibold">Vue.js</span>
        {{ $t("home.about.textPart3") }}
        <span class="text-sky-500 font-semibold">Tailwind CSS</span>
        {{ $t("home.about.textPart4") }}
      </p>
    </section>

    <!-- Academic Education Section -->
    <section class="p-6 rounded-xl bg-white/40 dark:bg-gray-800/40 border border-gray-200/40 dark:border-gray-700/20 backdrop-blur-sm shadow-sm hover:border-blue-500/30 transition-colors">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        </div>
        <h2 class="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
          {{ $t("home.education.sectionTitle") }}
        </h2>
      </div>
      <div class="mt-6 border-s-2 border-blue-500/30 ps-3 dark:border-blue-400/30 sm:ps-6 [@media(max-width:320px)]:ps-2.5">
        <div class="relative">
          <div class="absolute top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-600 ltr:-left-[18px] rtl:-right-[18px] sm:h-3.5 sm:w-3.5 ltr:sm:-left-[32px] rtl:sm:-right-[32px] dark:border-gray-900 dark:bg-blue-400 [@media(max-width:320px)]:h-2 [@media(max-width:320px)]:w-2 ltr:[@media(max-width:320px)]:-left-[15px] rtl:[@media(max-width:320px)]:-right-[15px]">
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ $t("home.education.degree") }}
          </h3>
          <div class="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-blue-600 dark:text-blue-400">
            <span>{{ $t("home.education.university") }}</span>
            <span class="text-gray-400 dark:text-gray-600">•</span>
            <span class="text-gray-500 dark:text-gray-400">{{ $t("home.education.location") }}</span>
          </div>
          <p class="mt-1 font-mono text-xs text-gray-400 dark:text-gray-500">
            {{ $t("home.education.duration") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Specialized Toolkit -->
    <section class="space-y-6">
      <div class="text-center md:text-left rtl:md:text-right">
        <h2 class="text-2xl font-bold">{{ $t("home.skills.title") }}</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ $t("home.skills.subtitle") }}
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          class="p-5 rounded-xl bg-white/40 dark:bg-gray-800/40 border border-gray-200/40 dark:border-gray-700/20">
          <h3 class="font-bold text-blue-600 dark:text-blue-400 mb-3">
            🌐 {{ $t("home.skills.categories.network.title") }}
          </h3>
          <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400 ltr text-left">
            {{ $t("home.skills.categories.network.text") }}
          </p>
        </div>
        <div
          class="p-5 rounded-xl bg-white/40 dark:bg-gray-800/40 border border-gray-200/40 dark:border-gray-700/20">
          <h3 class="font-bold text-purple-600 dark:text-purple-400 mb-3">
            🖥️ {{ $t("home.skills.categories.virtualization.title") }}
          </h3>
          <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400 ltr text-left">
             {{ $t("home.skills.categories.virtualization.text") }}
          </p>
        </div>
        <div
          class="p-5 rounded-xl bg-white/40 dark:bg-gray-800/40 border border-gray-200/40 dark:border-gray-700/20">
          <h3 class="font-bold text-green-600 dark:text-green-400 mb-3">
            ⚡ {{ $t("home.skills.categories.web.title") }}
          </h3>
          <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400 ltr text-left">
            {{ $t("home.skills.categories.web.text") }}
          </p>
        </div>
        <div
          class="p-5 rounded-xl bg-white/40 dark:bg-gray-800/40 border border-gray-200/40 dark:border-gray-700/20">
          <h3 class="font-bold text-amber-600 dark:text-amber-400 mb-3">
            🛠️ {{ $t("home.skills.categories.tools.title") }}
          </h3>
          <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400 ltr text-left">
            {{ $t("home.skills.categories.tools.text") }}
          </p>
        </div>
        <div
          class="p-5 rounded-xl bg-white/40 dark:bg-gray-800/40 border border-gray-200/40 dark:border-gray-700/20">
          <h3
            class="font-bold text-rose-600 dark:text-rose-400 mb-3 flex items-center gap-1.5">
            <svg
              class="w-5 h-5 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" fill="none" />
              <path d="M8 21h8" />
              <path d="M12 17v4" />
              <path d="M17 8l-3 3 3 3" />
              <path d="M14 11h6" />
            </svg>
            <span>{{ $t("home.skills.categories.remoteManagement.title") }}</span>
          </h3>
          <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400 ltr text-left">
            {{ $t("home.skills.categories.remoteManagement.text") }}
          </p>
        </div>

        <!-- Office Automation Systems Card -->
        <div
          class="p-5 rounded-xl bg-white/40 dark:bg-gray-800/40 border border-gray-200/40 dark:border-gray-700/20">
          <h3 class="font-bold text-teal-600 dark:text-teal-400 mb-3">
            📑 {{ $t("home.skills.categories.officeAutomation.title") }}
          </h3>
          <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400 ltr text-left">
            {{ $t("home.skills.categories.officeAutomation.text") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Work Experience / Internship Section-->
    <section class="space-y-6">
      <div class="text-center md:text-left rtl:md:text-right">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">
          {{ $t("experience.title") }}
        </h2>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ $t("experience.subtitle") }}
        </p>
      </div>
      <div
        class="relative border-l-2 border-gray-200 dark:border-gray-600 ml-4 md:ml-6 rtl:border-l-0 rtl:border-r-2 rtl:mr-4 rtl:md:mr-6 rtl:ml-0 pl-6 rtl:pl-0 rtl:pr-6 space-y-8">
        <div class="relative">
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full -left-[37px] rtl:-right-[37px] rtl:left-auto top-1.5 ring-4 ring-white dark:ring-gray-900">
            <svg
              class="w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </span>
          <div
            class="p-6 rounded-xl bg-white/40 dark:bg-gray-800/40 border border-gray-200/40 dark:border-gray-700/20 backdrop-blur-sm shadow-sm hover:border-blue-500/30 transition-colors">
            <div
              class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                  {{ $t("experience.role") }}
                </h3>
                <p class="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  🏢 {{ $t("experience.company") }}
                </p>
              </div>
              <span
                class="inline-flex items-center self-start sm:self-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50">
                📅 {{ $t("experience.date") }}
              </span>
            </div>
            <div class="space-y-3">
              <h4
                class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {{ $t("experience.tasksTitle") }}
              </h4>
              <ul class="space-y-2.5">
                <li
                  v-for="(task, index) in $tm('experience.tasks')"
                  :key="index"
                  class="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                  <span class="text-blue-500 mt-0.5 select-none">•</span>
                  <span class="flex-1">{{ task }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Path of Personal Development and Purpose -->
    <section
      class="p-6 rounded-xl bg-white/40 dark:bg-gray-800/40 border border-gray-200/40 dark:border-gray-700/20 backdrop-blur-sm shadow-sm hover:border-blue-500/30 transition-colors">
      <h2 class="text-xl font-bold mb-2">🚀 {{ $t("home.roadmap.title") }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">
        {{ $t("home.roadmap.description") }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div
          v-for="(step, index) in $tm('home.roadmap.steps')"
          :key="index"
          class="relative p-4 rounded-lg bg-white/80 dark:bg-gray-800/60 shadow-sm border-l-4 border-blue-500 rtl:border-l-0 rtl:border-r-4">
          <span
            class="absolute top-2 right-3 rtl:left-3 rtl:right-auto text-xs font-bold text-blue-500/30"
            >#{{ index + 1 }}</span>
          <p
            class="text-sm font-semibold text-gray-700 dark:text-gray-200 pr-6 rtl:pl-6 rtl:pr-0 pt-1">
            {{ step }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Me -->
    <footer
      class="text-center space-y-4 py-6 border-t p-6 rounded-xl bg-white/40 dark:bg-gray-800/40 border border-gray-200/40 dark:border-gray-700/20 backdrop-blur-sm shadow-sm hover:border-blue-500/30 transition-colors">
      <h2 class="text-xl font-bold text-gray-800 dark:text-white">
        {{ $t("home.contact.title") }}
      </h2>
      <p class="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
        {{ $t("home.contact.subtitle") }}
      </p>
      <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
        <div class="inline-flex items-center rounded-lg border border-gray-200 dark:border-gray-700/60 bg-gray-50/50 dark:bg-gray-800/50 p-1">
          <a
            href="mailto:omidbolandy@gmail.com"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1.5 px-2.5 py-1 transition-colors">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.4l-8 6-8-6V6h16Zm-16 12V8.9l7.4 5.55a1 1 0 0 0 1.2 0L20 8.9V18H4Z"/>
            </svg>
            <span>{{ $t("home.contact.gmail") }}</span>
          </a>
          <button
            @click="copyEmail('omidbolandy@gmail.com')"
            type="button"
            class="relative p-2 rounded-md border border-transparent transition-all duration-200 cursor-pointer"
            :class="
              copied
                ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-700'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600'"
            :title="$t('home.contact.copyEmail') || 'Copy Email'">
            <svg
              v-if="copied"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"/>
            </svg>
            <svg
              v-else
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span
              v-if="copied"
              class="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 dark:bg-white px-2 py-1 text-[10px] font-semibold text-white dark:text-gray-900 shadow-lg">
              {{ $t("home.contact.copied") || "Copied!" }}
            </span>
          </button>
        </div>
        <a
          href="https://github.com/omidbolandy"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700/60 bg-gray-50/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all">
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clip-rule="evenodd"/>
          </svg>
          {{ $t("home.contact.github") }}
        </a>
        <a
          href="https://www.linkedin.com/in/omid-bolandy"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700/60 bg-gray-50/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all">
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
              d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.95v5.67H9.31V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"/>
          </svg>
          {{ $t("home.contact.linkedin") }}
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      copied: false,
    };
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
  },
};
</script>
