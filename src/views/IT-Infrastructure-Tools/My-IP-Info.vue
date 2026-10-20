<template>
  <div :dir="isRTL ? 'rtl' : 'ltr'" class="w-full min-h-[70vh] px-3 sm:px-6 py-8 transition-colors duration-300">
      <div class="w-full max-w-3xl mx-auto">

    <!-- Top Bar Box (  Link to return to projects & Copy link & Share Icons)-->
    <div class="flex max-w-5xl mt-5 mx-auto items-center justify-between rounded-2xl border border-gray-200 bg-white/90 p-3 shadow-md backdrop-blur dark:border-gray-700 dark:bg-gray-900/90 sm:p-4">
      <router-link
        to="/Projects"
        class="group inline-flex items-center gap-2 rounded-xl border border-gray-200/80 dark:border-gray-700/80 bg-gray-50/80 dark:bg-gray-800/80 px-3 py-2 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800/60 transition-all duration-200 shadow-sm hover:shadow cursor-pointer">
        <svg
          class="h-4 w-4 stroke-current transition-transform duration-200 group-hover:-translate-x-1 ltr:rotate-0 rtl:rotate-180 rtl:group-hover:translate-x-1 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span class="truncate">{{ $t("projectsPage.backToProjects") }}</span>
      </router-link>
      <div class="flex items-center gap-1 sm:gap-2 shrink-0">
        <button
          @click="copyLink"
          type="button"
          class="relative inline-flex items-center justify-center p-1.5 max-[425px]:p-1.5 min-[426px]:p-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/80 transition-all cursor-pointer"
          :title="$t('projectsPage.copyLink')">
          <svg class="w-4 h-4 min-[426px]:w-5 min-[426px]:h-5 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          <transition name="fade">
            <span 
              v-if="copied" 
              class="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 text-white text-[10px] px-2 py-1 shadow-lg dark:bg-gray-100 dark:text-gray-900 font-sans z-20">
              {{ $t("projectsPage.copied") }} ✨
            </span>
          </transition>
        </button>
        <button
          @click="shareProject"
          type="button"
          class="inline-flex items-center justify-center p-1.5 max-[425px]:p-1.5 min-[426px]:p-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/80 transition-all cursor-pointer"
          :title="$t('projectsPage.share')">
          <svg class="w-4 h-4 min-[426px]:w-5 min-[426px]:h-5 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </button>
      </div>
    </div>

  <!-- Main Container -->
  <div class="rounded-2xl my-4 p-5 sm:p-8 bg-gray-100 dark:bg-[#111827b3] transition-colors duration-300">

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
        <div class="w-full p-5 sm:p-6 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xl dark:shadow-2xl dark:shadow-black/50 transition-colors duration-300">
          <!-- IPv4 -->
          <div class="mb-4" dir="ltr">
            <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">IPv4</p>
            <div class="flex items-center gap-2">
              <p dir="ltr" class="text-3xl sm:text-4xl font-mono font-black text-blue-600 dark:text-blue-400 tracking-tight">
                {{ ipv4 || $t("itInfrastructureTools.pages.ipLookup.unknown") }}
              </p>
              <button
                v-if="ipv4"
                @click="copyAddress(ipv4, 'v4')"
                class="shrink-0 p-1.5 rounded-lg text-blue-400 hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                :title="$t('itInfrastructureTools.pages.ipLookup.copy')">
                <svg v-if="!copiedV4" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
          </div>

          <hr class="border-gray-200 dark:border-gray-800 mb-4" />

          <!-- IPv6 -->
          <div :dir="ipv6 ? 'ltr' : (isRTL ? 'rtl' : 'ltr')">
            <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">IPv6</p>
            <div class="flex items-start gap-2">
              <p class="text-lg sm:text-xl font-mono font-black text-purple-500 dark:text-purple-400 tracking-tight break-all">
                {{ ipv6 || $t("itInfrastructureTools.pages.ipLookup.notAvailable") }}
              </p>
              <button
                v-if="ipv6"
                @click="copyAddress(ipv6, 'v6')"
                class="shrink-0 mt-0.5 p-1.5 rounded-lg text-purple-400 hover:text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                :title="$t('itInfrastructureTools.pages.ipLookup.copy')">
                <svg v-if="!copiedV6" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Browser & OS -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-5 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xl dark:shadow-2xl dark:shadow-black/50 transition-colors duration-300">
            <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
              {{ $t("itInfrastructureTools.pages.ipLookup.browser") }}
            </p>
            <p class="text-gray-900 dark:text-white font-semibold text-sm flex items-center gap-2">
              <img v-if="clientInfo?.browserIcon" :src="clientInfo.browserIcon" class="w-5 h-5" alt="browser icon" />
              <span v-else>🌐</span>
              {{ clientInfo?.browser }}
            </p>
          </div>
          <div class="p-5 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xl dark:shadow-2xl dark:shadow-black/50 transition-colors duration-300">
            <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
              {{ $t("itInfrastructureTools.pages.ipLookup.os") }}
            </p>
            <p class="text-gray-900 dark:text-white font-semibold text-sm">
              {{ clientInfo?.os }}
            </p>
          </div>
        </div>

        <!-- Info Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="item in infoItems"
            :key="item.key"
            class="p-5 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xl dark:shadow-2xl dark:shadow-black/50 transition-colors duration-300">
            <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
              {{ $t(`itInfrastructureTools.pages.ipLookup.${item.key}`) }}
            </p>
            <p
              :dir="item.ltr ? 'ltr' : undefined"
              :class="item.key === 'isp' 
                 ? 'text-gray-900 dark:text-white font-semibold text-sm break-words' 
                 : 'text-gray-900 dark:text-white font-semibold text-sm truncate'">
            <span v-if="item.key === 'country' && ipData.countryCode" class="inline-block me-1.5 align-middle">
              <img
                :src="`https://cdn.jsdelivr.net/npm/flag-icons@7.2.3/flags/4x3/${ipData.countryCode.toLowerCase()}.svg`"
                :alt="getFlagEmoji(ipData.countryCode)"
                class="inline-block align-middle rounded-sm"
                width="24"
                height="18"
                @error="e => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'inline' }"
              />
              <span class="align-middle text-base leading-none" style="display: none">
                {{ getFlagEmoji(ipData.countryCode) }}
              </span>
            </span>{{ ipData[item.field] || $t("itInfrastructureTools.pages.ipLookup.unknown") }}
            </p>
          </div>
        </div>

        <!-- Coordinates -->
        <div class="p-5 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xl dark:shadow-2xl dark:shadow-black/50 transition-colors duration-300">
          <p class="text-gray-500 dark:text-gray-400 text-xs mb-1">
            {{ $t("itInfrastructureTools.pages.ipLookup.coordinates") }}
          </p>
          <p dir="ltr" class="text-gray-900 dark:text-white font-mono font-semibold text-sm">
            {{ ipData.lat }}, {{ ipData.lng }}
          </p>
        </div>

        <!-- Map -->
        <div class="rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xl dark:shadow-2xl dark:shadow-black/50 transition-colors duration-300">
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
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
            <!-- overlay -->
            <div
              v-if="!ctrlPressed && !isMobile"
              class="absolute inset-0 z-10 flex items-center justify-center bg-black/10 dark:bg-black/30 cursor-pointer"
              @wheel.prevent
              @click="ctrlPressed = true">
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
      
      <hr class="my-6 border-gray-200 dark:border-gray-800" />

      <!-- attribution -->
      <div>
        <p class="flex flex-wrap items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" class="h-3.5 w-3.5 shrink-0 opacity-70">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
          <span>{{ $t("itInfrastructureTools.pages.ipLookup.attribution") }}</span>
          <a href="https://ipinfo.io" target="_blank" rel="noopener noreferrer nofollow"
            class="font-medium underline decoration-dotted underline-offset-2 transition-colors inline-flex items-center gap-1.5"
            :class="isActiveSource('ipinfo')
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'">
            <span dir="ltr" class="font-sans">ipinfo.io</span>
            <span v-if="isActiveSource('ipinfo')" class="text-xs">
              ({{ $t('itInfrastructureTools.pages.ipLookup.active') }})
            </span>
          </a>
          <span>·</span>
          <a href="https://ipwhois.io" target="_blank" rel="noopener noreferrer nofollow"
            class="font-medium underline decoration-dotted underline-offset-2 transition-colors inline-flex items-center gap-1.5"
            :class="isActiveSource('ipwho')
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'">
            <span dir="ltr" class="font-sans">ipwho.is</span>
            <span v-if="isActiveSource('ipwho')" class="text-xs">
              ({{ $t('itInfrastructureTools.pages.ipLookup.active') }})
            </span>
          </a>
          <span>·</span>
          <a href="https://www.ipify.org" target="_blank" rel="noopener noreferrer nofollow"
            class="font-medium underline decoration-dotted underline-offset-2 transition-colors inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            <span dir="ltr" class="font-sans">ipify.org</span>
          </a>
        </p>
      </div>

    </div>
  </div>
</div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
const locale = computed(() => instance?.proxy?.$i18n?.locale ?? 'en')
const isRTL = computed(() => locale.value === 'fa')

import chromeIcon from '@/assets/browsers/chrome.svg'
import firefoxIcon from '@/assets/browsers/firefox.svg'
import edgeIcon from '@/assets/browsers/edge.svg'
import safariIcon from '@/assets/browsers/safari.svg'
import operaIcon from '@/assets/browsers/opera.svg'

const copied = ref(false)
let copyTimeout = null

onUnmounted(() => {
  if (copyTimeout) clearTimeout(copyTimeout)
})

async function copyLink() {
  const url = window.location.href

  if (!navigator.clipboard?.writeText) {
    fallbackCopyText(url)
    return
  }

  try {
    await navigator.clipboard.writeText(url)
    showCopiedToast()
  } catch {
    fallbackCopyText(url)
  }
}

function fallbackCopyText(text) {
  try {
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.opacity = '0'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    const successful = document.execCommand('copy')
    document.body.removeChild(textArea)

    if (successful) showCopiedToast()
  } catch (err) {
    console.error('Fallback copy failed:', err)
  }
}

function showCopiedToast() {
  copied.value = true
  if (copyTimeout) clearTimeout(copyTimeout)

  copyTimeout = setTimeout(() => {
    copied.value = false
  }, 2000)
}

async function shareProject() {
  const currentUrl = window.location.href

  if (!currentUrl.startsWith('http://') && !currentUrl.startsWith('https://')) return

  const shareData = {
    title: document.title || 'Portfolio Tool',
    text: 'مشاهده این ابزار / پروژه در پورتفولیو',
    url: currentUrl,
  }

  if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData)
    } catch (err) {
      if (err.name !== 'AbortError') console.error('Share error:', err)
    }
  } else {
    copyLink()
  }
}

const getFlagEmoji = (code) => {
  if (!code) return ''
  return code.toUpperCase().split('').map(c =>
    String.fromCodePoint(c.charCodeAt(0) + 127397)
  ).join('')
}

const getBrowserInfo = (locale) => {
  const ua = navigator.userAgent
  let browserKey = 'unknown'
  let browserIcon = null

  if (ua.includes('Firefox')) { browserKey = 'Firefox'; browserIcon = firefoxIcon }
  else if (ua.includes('Edg')) { browserKey = 'Edge'; browserIcon = edgeIcon }
  else if (ua.includes('Chrome')) { browserKey = 'Chrome'; browserIcon = chromeIcon }
  else if (ua.includes('Safari')) { browserKey = 'Safari'; browserIcon = safariIcon }
  else if (ua.includes('Opera')) { browserKey = 'Opera'; browserIcon = operaIcon }

  const browserNames = {
    en: { Firefox: 'Firefox', Edge: 'Edge', Chrome: 'Chrome', Safari: 'Safari', Opera: 'Opera', unknown: 'Unknown' },
    fa: { Firefox: 'فایرفاکس', Edge: 'اج', Chrome: 'کروم', Safari: 'سافاری', Opera: 'اپرا', unknown: 'ناشناخته' },
  }

  let osKey = 'Unknown'
  if (ua.includes('Android')) osKey = 'Android'
  else if (ua.includes('iPhone') || ua.includes('iPad')) osKey = 'iOS'
  else if (ua.includes('Windows')) osKey = 'Windows'
  else if (ua.includes('Mac')) osKey = 'macOS'
  else if (ua.includes('Linux')) osKey = 'Linux'

  const osNames = {
    en: { Android: 'Android', iOS: 'iOS', Windows: 'Windows', macOS: 'macOS', Linux: 'Linux', Unknown: 'Unknown' },
    fa: { Android: 'اندروید', iOS: 'iOS', Windows: 'ویندوز', macOS: 'مک‌اواس', Linux: 'لینوکس', Unknown: 'ناشناخته' },
  }

  const lang = locale || 'en'
  const browser = (browserNames[lang] || browserNames.en)[browserKey] || browserKey
  const os = (osNames[lang] || osNames.en)[osKey] || osKey

  return { browser, browserIcon, os }
}

const copiedV4 = ref(false)
const copiedV6 = ref(false)

async function copyAddress(addr, version) {
  try {
    await navigator.clipboard.writeText(addr)
    if (version === 'v4') {
      copiedV4.value = true
      setTimeout(() => (copiedV4.value = false), 2000)
    } else {
      copiedV6.value = true
      setTimeout(() => (copiedV6.value = false), 2000)
    }
  } catch { /* fallback */ }
}

const ipv4 = ref(null)
const ipv6 = ref(null)

async function fetchAddresses() {
  const [v4, v6] = await Promise.allSettled([
    fetch('https://api4.ipify.org?format=json').then(r => r.json()),
    fetch('https://api6.ipify.org?format=json').then(r => r.json()),
  ])
  ipv4.value = v4.status === 'fulfilled' ? (v4.value?.ip ?? null) : null
  ipv6.value = v6.status === 'fulfilled' ? (v6.value?.ip ?? null) : null
}

const clientInfo = ref(null)

const ipData = ref(null)
const loading = ref(true)
const error = ref(false)
const ctrlPressed = ref(false)

const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)

const infoItems = [
  { key: 'city',     field: 'city',     ltr: true },
  { key: 'region',   field: 'region',   ltr: true },
  { key: 'country',  field: 'country',  ltr: false },
  { key: 'isp',      field: 'isp',      ltr: true  },
  { key: 'timezone', field: 'timezone', ltr: true  },
]

function isActiveSource(name) {
  return (ipData.value?.source || '').toLowerCase().includes(name)
}

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
  clientInfo.value = getBrowserInfo(instance?.proxy?.$i18n?.locale ?? 'en')
  fetchIP()
  fetchAddresses()
  
  // Listening for language changes from the navbar
  window.addEventListener('locale-changed', (e) => {
    clientInfo.value = getBrowserInfo(e.detail)
    fetchIP()
  })

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Control') ctrlPressed.value = true
  })
  window.addEventListener('keyup', (e) => {
    if (e.key === 'Control') ctrlPressed.value = false
  })
  let touchCount = 0
  window.addEventListener('touchstart', (e) => {
    touchCount = e.touches.length
    if (touchCount >= 2) ctrlPressed.value = true
  })
  window.addEventListener('touchend', () => {
    touchCount = 0
    ctrlPressed.value = false
  })
})

</script>