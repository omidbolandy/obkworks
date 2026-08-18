<template>
  <div class="w-full min-h-[70vh] flex items-center justify-center px-3 sm:px-6 py-8 transition-colors duration-300">
    <div class="w-full max-w-[300px] sm:max-w-md p-5 sm:p-8 md:p-10 text-center rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xl dark:shadow-2xl dark:shadow-black/50 transition-colors duration-300">
      <!-- error code -->
      <span dir="ltr" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 mb-4 sm:mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
        {{ $t('notFound.badge') }}
      </span>
      <!-- title -->
      <h1 class="text-[clamp(3.5rem,14vw,7.5rem)] font-black leading-none bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent tracking-tight mb-2 select-none">
        {{ $t('notFound.title') }}
      </h1>
      <!-- subtitle -->
      <h2 class="text-base sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">
        {{ $t('notFound.subtitle') }}
      </h2>
      <!-- description -->
      <p class="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 max-w-[260px] sm:max-w-sm mx-auto">
        {{ $t('notFound.description') }}
      </p>
      <!-- back to home -->
      <router-link
        to="/"
        class="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/35 dark:shadow-blue-900/40">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 rtl:rotate-180 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m12 19-7-7 7-7"/>
          <path d="M19 12H5"/>
        </svg>
        <span>{{ $t('notFound.backHome') }}</span>
      </router-link>
    </div>
  </div>
</template>