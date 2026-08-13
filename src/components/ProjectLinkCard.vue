<template>
  <div
    class="rounded-2xl border border-gray-200/80 bg-white/80 p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900/70 dark:hover:border-blue-500">
    <!-- title -->
    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
      {{ title }}
    </h4>

    <!-- description -->
    <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
      {{ description }}
    </p>

    <!-- linkText -->
    <router-link :to="to"
      class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
      {{ linkText }}
      <svg class="h-4 w-4 transform transition-transform duration-200 rtl:rotate-180" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L20 12l-6.5 7.5M20 12H4" />
      </svg>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  linkText: {
    type: String,
    default: "Open project",
  },
});
</script>
