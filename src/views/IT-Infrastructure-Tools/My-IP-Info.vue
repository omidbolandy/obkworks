<template>
  <div class="w-full min-h-[70vh] px-3 sm:px-6 py-8 transition-colors duration-300 bg-white dark:bg-gray-900/70">
    <div class="w-full max-w-3xl mx-auto">

      <!-- Back to Projects -->
      <div class="mb-6">
        <router-link
          to="/Projects"
          class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
          <svg
            class="h-4 w-4 transition-transform ltr:rotate-0 rtl:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          <span>{{ $t("projectsPage.backToProjects") }}</span>
        </router-link>
      </div>

  <!-- Main Container -->
  <div class="rounded-2xl my-4 p-5 sm:p-8 bg-white dark:bg-[#111827b3] transition-colors duration-300">

      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-2">
          {{ $t("itInfrastructureTools.pages.ipLookup.title") }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          {{ $t("itInfrastructureTools.pages.ipLookup.subtitle") }}
        </p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center py-20">
        <div class="inline-block w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          {{ $t("itInfrastructureTools.pages.ipLookup.loading") }}
        </p>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="text-center py-20">
        <p class="text-red-500 dark:text-red-400 mb-4 text-sm">
          {{ $t("itInfrastructureTools.pages.ipLookup.error") }}
        </p>
        <button
          @click="fetchIP"
          class="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-md shadow-blue-500/20">
          {{ $t("itInfrastructureTools.pages.ipLookup.retry") }}
        </button>
      </div>

      <!-- Data -->
      <div v-else-if="ipData" class="space-y-4">

        <!-- IP Card -->
        <div class="w-full p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xl dark:shadow-2xl dark:shadow-black/50 transition-colors duration-300">
          <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
            {{ $t("itInfrastructureTools.pages.ipLookup.ip") }}
          </p>
          <p dir="ltr" class="text-3xl sm:text-4xl font-mono font-black bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent tracking-tight">
            {{ ipData.ip }}
          </p>
        </div>

        <!-- Info Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="item in infoItems"
            :key="item.key"
            class="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xl dark:shadow-2xl dark:shadow-black/50 transition-colors duration-300">
            <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
              {{ $t(`itInfrastructureTools.pages.ipLookup.${item.key}`) }}
            </p>
            <p
              :dir="item.ltr ? 'ltr' : 'auto'"
              class="text-gray-900 dark:text-white font-semibold text-sm truncate">
              {{ ipData[item.field] || $t("itInfrastructureTools.pages.ipLookup.unknown") }}
            </p>
          </div>
        </div>

        <!-- Coordinates -->
        <div class="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xl dark:shadow-2xl dark:shadow-black/50 transition-colors duration-300">
          <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
            {{ $t("itInfrastructureTools.pages.ipLookup.coordinates") }}
          </p>
          <p dir="ltr" class="text-gray-900 dark:text-white font-mono font-semibold text-sm">
            {{ ipData.lat }}, {{ ipData.lng }}
          </p>
        </div>

        <!-- Map -->
        <div class="rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xl dark:shadow-2xl dark:shadow-black/50 transition-colors duration-300">
          <p class="text-gray-500 dark:text-gray-400 text-xs px-5 pt-4 pb-3">
            {{ $t("itInfrastructureTools.pages.ipLookup.location") }}
          </p>
          <div class="relative">
            <iframe
              v-if="mapUrl"
              :src="mapUrl"
              width="100%"
              height="300"
              class="border-0 block"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <!-- overlay -->
            <div
              v-if="!ctrlPressed"
              class="absolute inset-0 z-10 flex items-center justify-center bg-black/10 dark:bg-black/30 cursor-default"
              @wheel.prevent>
              <span class="px-3 py-1.5 rounded-lg bg-black/50 text-white text-xs select-none">
                {{ $t("itInfrastructureTools.pages.ipLookup.mapScroll") }}
              </span>
            </div>
          </div>
        </div>

        <!-- Data Source -->
        <p class="text-center text-gray-400 dark:text-gray-600 text-xs pb-2">
          {{ $t("itInfrastructureTools.pages.ipLookup.dataSource") }}: {{ ipData.source }}
        </p>

      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, computed, onMounted, getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
const locale = computed(() => instance?.proxy?.$i18n?.locale || 'en')

const ipData = ref(null)
const loading = ref(true)
const error = ref(false)
const ctrlPressed = ref(false)

const infoItems = [
  { key: 'city',     field: 'city',     ltr: false },
  { key: 'region',   field: 'region',   ltr: false },
  { key: 'country',  field: 'country',  ltr: false },
  { key: 'isp',      field: 'isp',      ltr: true  },
  { key: 'timezone', field: 'timezone', ltr: true  },
]

const mapUrl = computed(() => {
  if (!ipData.value?.lat || !ipData.value?.lng) return null
  const { lat, lng } = ipData.value
  return `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.1},${lat - 0.1},${lng + 0.1},${lat + 0.1}&layer=mapnik&marker=${lat},${lng}`
})

async function fetchIP() {
  loading.value = true
  error.value = false
  try {
    const res = await fetch(`/api/ip?lang=${locale.value}`)
    if (!res.ok) throw new Error()
    const data = await res.json()
    if (!data.ip) throw new Error()
    ipData.value = data
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchIP()
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Control') ctrlPressed.value = true
  })
  window.addEventListener('keyup', (e) => {
    if (e.key === 'Control') ctrlPressed.value = false
  })
})
</script>