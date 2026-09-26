<template>
  <div class="w-full min-h-[70vh] flex flex-col items-center justify-center px-3 sm:px-6 py-8 transition-colors duration-300">
    
    <!-- Link to return to projects -->
    <div class="w-full max-w-5xl mb-4">
      <router-link
        to="/Projects"
        class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
        <svg
          class="h-4 w-4 transition-transform ltr:rotate-0 rtl:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        <span>{{ $t("projectsPage.backToProjects") }}</span>
      </router-link>
    </div>

    <!-- Map Box -->
    <div class="w-full max-w-5xl p-4 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xl dark:shadow-2xl dark:shadow-black/50 transition-colors duration-300">

      <!-- Header (Modern & Sleek) -->
      <div class="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-gray-100 dark:border-gray-800/60">
        <div class="flex items-center gap-3">
          <div class="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                {{ $t('map.title') }}
              </h1>
              <!-- Live Active Badge -->
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/50">
                <span class="relative flex h-1.5 w-1.5">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                {{ activeProvider === 'neshan' ? 'Neshan' : 'MapTiler' }}
              </span>
            </div>
          </div>
        </div>

        <!-- Toggle Switcher Button -->
        <button
          @click="toggleProvider"
          class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800/80 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow active:scale-[0.98]">
          <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <span>{{ activeProvider === 'neshan' ? $t('map.switchToMaptiler') : $t('map.switchToNeshan') }}</span>
        </button>
      </div>

      <!-- Modern Search Bar -->
      <div class="relative mb-5">
        <div class="relative flex items-center">
          <!-- Search Icon -->
          <div class="absolute start-3.5 text-gray-400 dark:text-gray-500 pointer-events-none">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            v-model="searchQuery"
            @input="onSearchInput"
            type="text"
            :placeholder="$t('map.searchPlaceholder')"
            :dir="inputDir"
            class="w-full ps-10 pe-20 py-2.5 rounded-xl text-sm border transition-all duration-200 bg-gray-50/80 dark:bg-gray-800/50 border-gray-200/90 dark:border-gray-700/80 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-800"/>

          <!-- Action Buttons (Clear & Spinner) -->
          <div class="absolute end-3 flex items-center gap-1.5">
            <!-- Clear Search button -->
            <button
              v-if="searchQuery"
              @click="clearSearch"
              class="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-md transition-colors">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Loading Spinner -->
            <span v-if="isSearching" class="flex items-center text-xs text-blue-500 dark:text-blue-400">
              <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
          </div>
        </div>

        <!-- Search Results Dropdown -->
        <ul
          v-if="searchResults.length > 0"
          class="absolute z-50 w-full mt-1.5 rounded-xl border border-gray-200/90 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-2xl overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
          <li
            v-for="(result, index) in searchResults"
            :key="index"
            @click="selectResult(result)"
            class="px-4 py-3 text-sm cursor-pointer hover:bg-blue-50/60 dark:hover:bg-blue-950/40 transition-colors duration-150 flex items-start gap-3">
            <svg class="w-4 h-4 text-blue-500 dark:text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <div class="min-w-0 flex-1">
              <p class="font-medium text-gray-900 dark:text-gray-100 truncate" dir="auto">{{ result.title }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate" dir="auto">{{ result.address }}</p>
            </div>
          </li>
        </ul>

        <p v-if="showNoResults" class="absolute z-50 w-full mt-1.5 px-4 py-3 text-sm text-gray-500 dark:text-gray-400 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl">
          {{ $t('map.noResults') }}
        </p>

        <p v-if="searchError" class="absolute z-50 w-full mt-1.5 px-4 py-3 text-sm text-red-500 dark:text-red-400 rounded-xl border border-red-200 dark:border-red-800 bg-white dark:bg-gray-900 shadow-xl">
          {{ $t('map.errorSearch') }}
        </p>
      </div>

      <!-- map -->
      <div ref="mapContainer" class="w-full h-[480px] sm:h-[560px] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700" />

      <hr class="my-6 border-gray-200 dark:border-gray-800" />

      <!-- attribution -->
      <div>
        <p class="flex flex-wrap items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" class="h-3.5 w-3.5 shrink-0 opacity-70">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <span>{{ $t("map.attribution") }}</span>
          
          <a v-if="activeProvider === 'neshan'"
            href="https://platform.neshan.org" target="_blank" rel="noopener noreferrer nofollow" dir="ltr"
            class="font-medium text-gray-500 underline decoration-dotted underline-offset-2 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
            Neshan Maps Platform
          </a>
          <a v-else
            href="https://www.maptiler.com" target="_blank" rel="noopener noreferrer nofollow" dir="ltr"
            class="font-medium text-gray-500 underline decoration-dotted underline-offset-2 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
            MapTiler
          </a>
        </p>
      </div>
    
    </div>
  </div>
</template>

<script>
import * as maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import neshangl from '@neshan-maps-platform/maplibre-sdk';
import '@neshan-maps-platform/maplibre-sdk/dist/neshan-maplibre-sdk.css';

export default {
  name: 'MapPage',

  data() {
    return {
      map: null,
      marker: null,
      activeProvider: 'maptiler',
      searchQuery: '',
      searchResults: [],
      isSearching: false,
      showNoResults: false,
      searchError: false,
      searchTimeout: null,
    };
  },

  computed: {
    inputDir() {
      const rtlChar = /[\u0590-\u05FF\u0600-\u06FF\u0700-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]/;
      const ltrChar = /[A-Za-z]/;
      for (const ch of this.searchQuery) {
        if (rtlChar.test(ch)) return 'rtl';
        if (ltrChar.test(ch)) return 'ltr';
      }
      return this.$i18n.locale === 'fa' ? 'rtl' : 'ltr';
    },

    isDark() {
      return document.documentElement.classList.contains('dark');
    },

    maptilerStyle() {
      return this.isDark
        ? `https://api.maptiler.com/maps/streets-v2-dark/style.json?key=${import.meta.env.VITE_MAP_API}`
        : `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAP_API}`;
    },

    neshanStyle() {
      return this.isDark
        ? 'https://static.neshan.org/sdk/maplibre/styles/dark.json'
        : 'https://static.neshan.org/sdk/maplibre/styles/light.json';
    },
  },

  async mounted() {
    await this.detectProvider();
    this.initMap();
  },

  beforeUnmount() {
    if (this.map) this.map.remove();
  },

  methods: {
      clearSearch() {
      this.searchQuery = '';
      this.searchResults = [];
      this.showNoResults = false;
      this.searchError = false;
    },
    async detectProvider() {
      try {
        const res = await fetch('/api/geo');
        const data = await res.json();
        this.activeProvider = data.country === 'IR' ? 'neshan' : 'maptiler';
      } catch {
        this.activeProvider = 'maptiler';
      }
    },

    initMap() {
  if (this.activeProvider === 'neshan') {
    this.map = new neshangl.Map({
      container: this.$refs.mapContainer,
      style: this.neshanStyle,
      center: [51.389, 35.6892],
      zoom: 11,
      apiKey: import.meta.env.VITE_MAP_API_A,
    });
    this.map.addControl(new maplibregl.NavigationControl(), 'top-right');
  } else {
    this.map = new maplibregl.Map({
      container: this.$refs.mapContainer,
      style: this.maptilerStyle,
      center: [0, 20],
      zoom: 2,
    });
    this.map.addControl(new maplibregl.NavigationControl(), 'top-right');
  }
},

    toggleProvider() {
      this.activeProvider = this.activeProvider === 'neshan' ? 'maptiler' : 'neshan';
      if (this.map) {
        this.map.remove();
        this.map = null;
      }
      this.$nextTick(() => {
        this.initMap();
      });
    },

    onSearchInput() {
      this.searchResults = [];
      this.showNoResults = false;
      this.searchError = false;
      clearTimeout(this.searchTimeout);
      if (!this.searchQuery.trim()) return;
      this.searchTimeout = setTimeout(() => this.doSearch(), 500);
    },

    async doSearch() {
      this.isSearching = true;
      try {
        const center = this.map?.getCenter();
        const params = new URLSearchParams({ q: this.searchQuery });
        if (center) {
          params.append('lat', center.lat.toFixed(6));
          params.append('lng', center.lng.toFixed(6));
        }
        const res = await fetch(`/api/search?${params}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        this.searchResults = data.results || [];
        this.showNoResults = this.searchResults.length === 0;
      } catch {
        this.searchError = true;
      } finally {
        this.isSearching = false;
      }
    },

    selectResult(result) {
      this.searchQuery = result.title;
      this.searchResults = [];
      this.showNoResults = false;
      if (result.lat && result.lng) {
        this.map.flyTo({ center: [result.lng, result.lat], zoom: 15 });
        if (this.marker) this.marker.remove();
        if (this.activeProvider === 'neshan') {
          this.marker = new neshangl.Marker()
            .setLngLat([result.lng, result.lat])
            .addTo(this.map);
        } else {
          this.marker = new maplibregl.Marker()
            .setLngLat([result.lng, result.lat])
            .addTo(this.map);
        }
      }
    },
  },
};
</script>