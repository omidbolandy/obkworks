<template>
  <main
    class="container mx-auto space-y-10 pb-12 sm:my-12 md:my-16 lg:my-5 px-4 sm:px-6 lg:px-8 max-w-14xl">
    
    <!-- Hero Section -->
    <section
      class="flex flex-col-reverse md:flex-row items-center justify-between gap-8 pt-4 md:pt-10">
      <div class="flex-1 space-y-4 text-center md:text-left rtl:md:text-right">
        <div class="flex flex-wrap items-baseline gap-x-3 justify-center md:justify-start">
          <p class="text-3xl font-extrabold tracking-tight sm:text-5xl">
            {{ $t("home.hero.hi") }}
          </p>
          <h1 class="text-3xl font-extrabold tracking-tight sm:text-5xl">
            <span class="text-blue-600 dark:text-blue-400">{{ $t("home.hero.name") }} </span>
          </h1>
          <p class="text-3xl font-extrabold tracking-tight sm:text-5xl w-full text-center md:w-auto md:text-left rtl:md:text-right" v-if="$i18n.locale === 'fa'">
            {{ $t("home.hero.name1") }}
          </p>
        </div>
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
          <router-link
            to="/wordpress"
            class="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-gray-200/80 bg-white/60 px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50 hover:bg-blue-50/50 hover:text-blue-600 hover:shadow-md active:scale-[0.98] dark:border-gray-700/80 dark:bg-gray-800/60 dark:text-gray-200 dark:hover:border-blue-400/50 dark:hover:bg-blue-950/20 dark:hover:text-blue-400">
            <span>{{ $t("nav.wordpress") }}</span>
            <svg
              class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 ltr:rotate-180 rtl:rotate-0"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
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
        <span class="font-semibold text-[#8b5cf6]">{{ $t("aboutWebsite.cloudflare") }}</span>
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
      
      <!-- Timeline Container -->
      <div class="mt-6 border-s-2 border-blue-500/30 ps-3 dark:border-blue-400/30 sm:ps-6 [@media(max-width:320px)]:ps-2.5 space-y-8">
        <!-- Master's Degree -->
        <div class="relative">
          <div class="absolute top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-600 ltr:-left-[18px] rtl:-right-[18px] sm:h-3.5 sm:w-3.5 ltr:sm:-left-[32px] rtl:sm:-right-[32px] dark:border-gray-900 dark:bg-blue-400 [@media(max-width:320px)]:h-2 [@media(max-width:320px)]:w-2 ltr:[@media(max-width:320px)]:-left-[15px] rtl:[@media(max-width:320px)]:-right-[15px]">
          </div>
          <h3 class="text-base font-semibold text-gray-900 dark:text-white sm:text-lg">
            {{ $t("home.education.masterDegree") }}
          </h3>
          <div class="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-blue-600 dark:text-blue-400">
            <span>{{ $t("home.education.university") }}</span>
            <span class="text-gray-400 dark:text-gray-600">•</span>
            <span class="text-gray-500 dark:text-gray-400">{{ $t("home.education.location") }}</span>
          </div>
          <p class="mt-1 font-mono text-xs text-gray-600 dark:text-gray-300">
            {{ $t("home.education.masterDuration") }}
          </p>
        </div>

        <!-- Bachelor's Degree -->
        <div class="relative">
          <div class="absolute top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-600 ltr:-left-[18px] rtl:-right-[18px] sm:h-3.5 sm:w-3.5 ltr:sm:-left-[32px] rtl:sm:-right-[32px] dark:border-gray-900 dark:bg-blue-400 [@media(max-width:320px)]:h-2 [@media(max-width:320px)]:w-2 ltr:[@media(max-width:320px)]:-left-[15px] rtl:[@media(max-width:320px)]:-right-[15px]">
          </div>
          <h3 class="text-base font-semibold text-gray-900 dark:text-white sm:text-lg">
            {{ $t("home.education.degree") }}
          </h3>
          <div class="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-blue-600 dark:text-blue-400">
            <span>{{ $t("home.education.university") }}</span>
            <span class="text-gray-400 dark:text-gray-600">•</span>
            <span class="text-gray-500 dark:text-gray-400">{{ $t("home.education.location") }}</span>
          </div>
          <p class="mt-1 font-mono text-xs text-gray-600 dark:text-gray-300">
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

      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 mx-3">
          <!-- GitHub -->
          <a
            href="https://github.com/omidbolandy"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="$t('contact.links.github')"
            class="group flex min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-gray-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-800 dark:bg-gray-800 dark:hover:border-gray-700">
            <span
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-800 transition group-hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:group-hover:bg-gray-700"
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
            class="group flex min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-blue-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-800 dark:bg-gray-800 dark:hover:border-blue-900">
            <span
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-300 dark:bg-blue-800 dark:text-blue-300 dark:group-hover:bg-blue-900"
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
            class="group flex min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-sky-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-gray-800 dark:bg-gray-800 dark:hover:border-sky-900">
            <span
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-300 dark:group-hover:bg-sky-900"
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
            class="group flex min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-gray-800 dark:bg-gray-800 dark:hover:border-emerald-900 cursor-pointer relative">
            <span
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-300 dark:bg-emerald-800 dark:text-emerald-300 dark:group-hover:bg-emerald-900"
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
    </footer>
  </main>
</template>

<script>
import logoImg from "@/assets/obk-Logo-2.webp";

export default {
  name: "HomeView",
  mounted() {
    const existing = document.querySelector('script[data-json-ld="person"], script[data-seo-schema="person"]');
    if (existing) existing.remove();
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Omid Bolandy Natag",
      alternateName: ["امید بلندی نتاج", "obkworks"],
      image: `https://www.obkworks.tr${logoImg}`,
      url: "https://www.obkworks.tr",
      email: "omidbolandy@gmail.com",
      sameAs: [
        "https://github.com/omidbolandy",
        "https://www.linkedin.com/in/omid-bolandy"
      ],
      jobTitle: "Network Specialist & Frontend Developer",
      knowsAbout: [
        "Cisco Networking",
        "Windows Server",
        "Vue.js",
        "Tailwind CSS",
        "IT Infrastructure"
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-schema', 'person');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  },
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
