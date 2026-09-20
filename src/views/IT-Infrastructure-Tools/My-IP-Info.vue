<template>
  <div class="min-h-screen bg-gray-950 text-white px-4 py-12">
    <!-- Header -->
    <div class="max-w-3xl mx-auto text-center mb-10">
      <h1 class="text-3xl font-bold text-white mb-2">
        {{ $t("ipLookup.title") }}
      </h1>
      <p class="text-gray-400">{{ $t("ipLookup.subtitle") }}</p>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="max-w-3xl mx-auto text-center py-20">
      <div class="inline-block w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p class="text-gray-400">{{ $t("ipLookup.loading") }}</p>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="max-w-3xl mx-auto text-center py-20">
      <p class="text-red-400 mb-4">{{ $t("ipLookup.error") }}</p>
      <button
        @click="fetchIP"
        class="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
      >
        {{ $t("ipLookup.retry") }}
      </button>
    </div>

    <!-- Data -->
    <div v-else-if="ipData" class="max-w-3xl mx-auto space-y-4">

      <!-- IP Card -->
      <div class="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <p class="text-gray-400 text-sm mb-1">{{ $t("ipLookup.ip") }}</p>
        <p class="text-3xl font-mono font-bold text-blue-400">{{ ipData.ip }}</p>
      </div>

      <!-- Info Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="item in infoItems"
          :key="item.key"
          class="bg-gray-900 rounded-2xl p-5 border border-gray-800"
        >
          <p class="text-gray-400 text-sm mb-1">{{ $t(`ipLookup.${item.key}`) }}</p>
          <p class="text-white font-medium truncate">
            {{ ipData[item.field] || $t("ipLookup.unknown") }}
          </p>
        </div>
      </div>

      <!-- Coordinates -->
      <div class="bg-gray-900 rounded-2xl p-5 border border-gray-800">
        <p class="text-gray-400 text-sm mb-1">{{ $t("ipLookup.coordinates") }}</p>
        <p class="text-white font-mono">
          {{ ipData.lat }}, {{ ipData.lng }}
        </p>
      </div>

      <!-- Map -->
      <div class="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
        <p class="text-gray-400 text-sm px-5 pt-4 mb-3">{{ $t("ipLookup.location") }}</p>
        <iframe
          v-if="mapUrl"
          :src="mapUrl"
          width="100%"
          height="300"
          class="border-0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <!-- Data Source -->
      <div class="text-center text-gray-600 text-xs pb-4">
        {{ $t("ipLookup.dataSource") }}: {{ ipData.source }}
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const ipData = ref(null)
const loading = ref(true)
const error = ref(false)

const infoItems = [
  { key: 'city',     field: 'city'     },
  { key: 'region',   field: 'region'   },
  { key: 'country',  field: 'country'  },
  { key: 'isp',      field: 'isp'      },
  { key: 'timezone', field: 'timezone' },
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
    const res = await fetch('/api/ip')
    if (!res.ok) throw new Error()
    ipData.value = await res.json()
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchIP()
})
</script>