<template>
  <section
    class="mx-auto max-w-3xl px-4 py-10 sm:pb-10"
    :dir="isRtl ? 'rtl' : 'ltr'">
    <!-- Top Bar Box (  Link to return to projects & Copy link & Share Icons)-->
      <div class="flex items-center  justify-between rounded-2xl border border-gray-200 bg-white/90 p-3 shadow-md backdrop-blur dark:border-gray-700 dark:bg-gray-900/90 sm:p-4">
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

    <div
      class="mt-8 rounded-3xl border border-gray-200/70 bg-white/80 p-6 shadow-xl shadow-gray-900/10 dark:border-gray-700 dark:bg-gray-900/70 dark:shadow-black/30 sm:p-8">
      <h1
      class="mb-12 text-center text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
      {{ $t("weather.title") }}
    </h1>
      <!-- Search bar -->
      <div class="flex gap-2 [@media(max-width:425px)]:flex-col">
        <div class="relative flex-1">
          <svg
            class="pointer-events-none absolute top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 ltr:left-3 rtl:right-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input
            type="text"
            :placeholder="$t('weather.searchPlaceholder')"
            v-model="query"
            @keydown="onKeydown"
            maxlength="80"
            class="w-full rounded-xl border border-gray-200 bg-gray-50/70 py-2.5 text-sm font-medium text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800/60 dark:text-white ltr:pl-9 ltr:pr-3 rtl:pr-9 rtl:pl-3"/>
        </div>
        <div class="flex gap-2 [@media(max-width:425px)]:w-full">
          <button
            type="button"
            @click="fetchWeather"
            :disabled="loading || !query.trim()"
            class="shrink-0 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700 [@media(max-width:425px)]:flex-1">
            {{ $t("weather.searchButton") }}
          </button>
          <button
            type="button"
            @click="resetSearch"
            class="shrink-0 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-gray-100 dark:border-gray-700 dark:text-red-500 dark:hover:bg-gray-800 [@media(max-width:425px)]:flex-1">
            {{ $t("weather.resetButton") }}
          </button>
        </div>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="flex flex-col items-center gap-3 py-14">
        <div
          class="h-9 w-9 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600 dark:border-gray-700 dark:border-t-blue-500"
        />
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ $t("weather.loading") }}
        </p>
      </div>

      <!-- Error state -->
      <div
        v-else-if="errorMessage"
        class="mt-8 flex flex-col items-center gap-2 py-10 text-center">
        <span class="text-4xl">⚠️</span>
        <p class="font-semibold text-gray-800 dark:text-gray-100">
          {{ errorMessage }}
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ $t("weather.tryAgainHint") }}
        </p>
      </div>

      <!-- Empty state (before first search) -->
      <div
        v-else-if="!weather"
        class="mt-8 flex flex-col items-center gap-2 py-10 text-center">
        <span class="text-5xl">🌦️</span>
        <p class="font-semibold text-gray-800 dark:text-gray-100">
          {{ $t("weather.emptyTitle") }}
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ $t("weather.emptyHint") }}
        </p>
      </div>

      <!-- Result -->
      <div v-else class="mt-8 text-center">
        <p class="text-2xl font-bold text-gray-900 dark:text-white">
          {{ weather.name }}, {{ weather.sys.country }}
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ formattedDate }}
        </p>

        <div class="mt-6 flex flex-col items-center">
          <span class="text-6xl leading-none">{{ weatherEmoji }}</span>
          <span
            class="mt-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium capitalize text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            {{ weather.weather[0].description }}
          </span>
        </div>

        <!-- Temperature + unit toggle -->
        <div class="mt-6 flex flex-col items-center gap-3">
          <span dir="ltr" class="text-5xl font-extrabold text-gray-900 dark:text-white">
            {{ formatNumber(displayedTemp) }}°{{ tempUnit }}
          </span>
          <div
            class="inline-flex overflow-hidden rounded-full border border-gray-200 dark:border-gray-700">
            <button
              v-for="unit in ['C', 'K', 'F']"
              :key="unit"
              type="button"
              :aria-pressed="tempUnit === unit"
              @click="tempUnit = unit"
              class="px-3 py-1 text-xs font-semibold transition"
              :class="tempUnit === unit
                ? 'bg-blue-600 text-white'
                : 'bg-gray-50/70 text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800'">
              °{{ unit }}
            </button>
          </div>
          <p class="text-xs text-gray-400 dark:text-gray-500">
            {{ $t("weather.feelsLike") }}: <span dir="ltr">{{ formatNumber(feelsLikeInSelectedUnit) }}°{{ tempUnit }}</span>
          </p>
        </div>

        <!-- Stat tiles -->
        <div class="mt-8 grid grid-cols-2 gap-3 text-start">
          <div
            class="rounded-xl border border-gray-200/70 bg-gray-50/70 p-3 dark:border-gray-700 dark:bg-gray-800/60">
            <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 16V4a2 2 0 10-4 0v12a4 4 0 104 0z" />
              </svg>
              {{ $t("weather.humidity") }}
            </div>
            <p class="mt-1 text-lg font-bold text-gray-900 dark:text-white">
              {{ formatNumber(weather.main.humidity, 0) }}%
            </p>
          </div>

          <div
            class="rounded-xl border border-gray-200/70 bg-gray-50/70 p-3 dark:border-gray-700 dark:bg-gray-800/60">
            <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8h9a3 3 0 10-3-3M3 16h13a3 3 0 11-3 3" />
              </svg>
              {{ $t("weather.windSpeed") }}
            </div>
            <p class="mt-1 text-lg font-bold text-gray-900 dark:text-white">
              {{ formatNumber(weather.wind.speed) }} m/s
            </p>
          </div>

          <div
            class="col-span-2 rounded-xl border border-gray-200/70 bg-gray-50/70 p-3 dark:border-gray-700 dark:bg-gray-800/60">
            <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 15a4 4 0 004 4h9a4 4 0 000-8 5 5 0 00-9.6-1.5A4 4 0 003 15z" />
              </svg>
              {{ $t("weather.clouds") }}
            </div>
            <p class="mt-1 text-lg font-bold text-gray-900 dark:text-white">
              {{ formatNumber(weather.clouds.all, 0) }}%
            </p>
          </div>
        </div>
      </div>
                      
      <hr class="my-6 border-gray-200 dark:border-gray-800" />

      <!-- attribution -->
      <div>
        <p class="flex flex-wrap items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" class="h-3.5 w-3.5 shrink-0 opacity-70">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
          </svg>
          <span>{{ $t("weather.attribution") }}</span>
          <a href="https://openweathermap.org" target="_blank" rel="noopener noreferrer nofollow" dir="ltr"
            class="font-medium text-gray-500 underline decoration-dotted underline-offset-2 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
            OpenWeatherMap
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Weather-1",
  data() {
    return {
      query: "",
      lastCity: "",
      weather: null,
      loading: false,
      errorMessage: "",
      tempUnit: "C",
      copied: false,
      copyTimeout: null,
    };
  },
  computed: {
    isRtl() {
      return this.$i18n.locale === "fa";
    },
    tempCelsius() {
      return this.weather?.main?.temp ?? 0;
    },
    tempKelvin() {
      return this.tempCelsius + 273.15;
    },
    tempFahrenheit() {
      return this.tempCelsius * 9 / 5 + 32;
    },
    displayedTemp() {
      if (this.tempUnit === "K") return this.tempKelvin;
      if (this.tempUnit === "F") return this.tempFahrenheit;
      return this.tempCelsius;
    },
    feelsLikeInSelectedUnit() {
      const feelsCelsius = this.weather?.main?.feels_like ?? 0;
      if (this.tempUnit === "K") return feelsCelsius + 273.15;
      if (this.tempUnit === "F") return feelsCelsius * 9 / 5 + 32;
      return feelsCelsius;
    },
    weatherEmoji() {
      const condition = this.weather?.weather?.[0]?.main ?? "";
      const map = {
        Clear: "☀️", Clouds: "☁️", Rain: "🌧️", Drizzle: "🌦️",
        Thunderstorm: "⛈️", Snow: "❄️", Mist: "🌫️", Fog: "🌫️",
        Haze: "🌫️", Smoke: "🌫️", Dust: "🌪️", Sand: "🌪️", Ash: "🌋",
        Squall: "💨", Tornado: "🌪️",
      };
      return map[condition] || "🌡️";
    },
formattedDate() {
  const localeTag = this.isRtl ? "fa-IR-u-ca-persian" : "en-US";

  if (!this.isRtl) {
    return new Intl.DateTimeFormat(localeTag, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date());
  }

  const parts = new Intl.DateTimeFormat(localeTag, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).formatToParts(new Date());

  const get = (type) => parts.find((p) => p.type === type)?.value || "";

  return `${get("weekday")} ${get("day")} ${get("month")} ${get("year")}`;
}
  },
  watch: {
    "$i18n.locale"() {
      if (this.weather && this.lastCity) {
        this.fetchWeatherForCity(this.lastCity);
      }
    },
  },
  methods: {
    async copyLink() {
      const url = window.location.href;

      if (!navigator?.clipboard?.writeText) {
        this.fallbackCopyText(url);
        return;
      }

      try {
        await navigator.clipboard.writeText(url);
        this.showCopiedToast();
      } catch (err) {
        this.fallbackCopyText(url);
      }
    },

    fallbackCopyText(text) {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        
        if (successful) {
          this.showCopiedToast();
        }
      } catch (err) {
        console.error("Fallback copy failed:", err);
      }
    },

    showCopiedToast() {
      this.copied = true;
      if (this.copyTimeout) clearTimeout(this.copyTimeout);
      
      this.copyTimeout = setTimeout(() => {
        this.copied = false;
      }, 2000);
    },

    async shareProject() {
      const currentUrl = window.location.href;

      if (!currentUrl.startsWith("http://") && !currentUrl.startsWith("https://")) {
        return;
      }

      const shareData = {
        title: document.title || "Portfolio Tool",
        text: "مشاهده این ابزار / پروژه در پورتفولیو",
        url: currentUrl,
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error("Share error:", err);
          }
        }
      } else {
        this.copyLink();
      }
    },

    resetSearch() {
      this.query = "";
      this.lastCity = "";
      this.weather = null;
      this.errorMessage = "";
    },
    onKeydown(e) {
      if (e.key === "Enter") this.fetchWeather();
    },
    async fetchWeather() {
      const city = this.query.trim();
      if (!city || this.loading) return;
      await this.fetchWeatherForCity(city);
    },
    async fetchWeatherForCity(city) {
      if (!city || this.loading) return;

      this.loading = true;
      this.errorMessage = "";

      try {
        const res = await fetch(
          `/api/weather?city=${encodeURIComponent(city)}&lang=${this.$i18n.locale}`
        );
        const data = await res.json();

        if (String(data.cod) !== "200") {
          this.weather = null;
          this.lastCity = "";
          this.errorMessage =
            String(data.cod) === "404"
              ? this.$t("weather.notFound")
              : this.$t("weather.searchError");
          return;
        }

        this.lastCity = city;
        this.weather = data;
      } catch {
        this.weather = null;
        this.errorMessage = this.$t("weather.searchError");
      } finally {
        this.loading = false;
      }
    },
    formatNumber(num, digits = 1) {
      if (!Number.isFinite(num)) return "-";
      return new Intl.NumberFormat(this.isRtl ? "fa-IR" : "en-US", {
        maximumFractionDigits: digits,
      }).format(Math.round(num * 10) / 10);
    },
  },
  unmounted() {
    if (this.copyTimeout) clearTimeout(this.copyTimeout);
  }
};
</script>