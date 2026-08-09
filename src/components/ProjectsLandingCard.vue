<template>
  <div class="flex h-full flex-col rounded-3xl border border-gray-200/70 bg-white/80 p-8 shadow-xl shadow-gray-900/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-900/70 dark:shadow-black/30">

    <!-- icon -->
    <div
      class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
      <slot name="icon" />
    </div>

    <!-- title -->
    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
      {{ title }}
    </h3>

    <!-- description -->
    <p class="mt-3 flex-1 text-base leading-7 text-gray-600 dark:text-gray-300">
      {{ description }}
    </p>

    <!-- buttonText -->
    <router-link
      :to="to"
      class="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
    >
      {{ buttonText }}
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
  buttonText: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>
