<template>
    <!-- Link to return to projects -->
    <div class="max-w-2xl py-2 sm:py-8 mx-6 sm:mx-auto">
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

  <section
    class="mx-auto max-w-2xl px-4 py-10 sm:pb-10"
    :dir="isRtl ? 'rtl' : 'ltr'">
    <h1
      class="mt-6 text-center text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
      {{ $t("weather.title") }}
    </h1>

    <div
      class="mt-8 rounded-3xl border border-gray-200/70 bg-white/80 p-6 shadow-xl shadow-gray-900/10 dark:border-gray-700 dark:bg-gray-900/70 dark:shadow-black/30 sm:p-8">
      <!-- Search bar -->
      <div class="flex gap-2">
        <div class="relative flex-1">
          <svg
            class="pointer-events-none absolute top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 ltr:left-3 rtl:right-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            :placeholder="$t('weather.searchPlaceholder')"
            v-model="query"
            @keydown="onKeydown"
            maxlength="80"
            class="w-full rounded-xl border border-gray-200 bg-gray-50/70 py-2.5 text-sm font-medium text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800/60 dark:text-white ltr:pl-9 ltr:pr-3 rtl:pr-9 rtl:pl-3"
          />
        </div>
        <button
          type="button"
          @click="fetchWeather"
          :disabled="loading || !query.trim()"
          class="shrink-0 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          {{ $t("weather.searchButton") }}
        </button>
        <button
          type="button"
          @click="resetSearch"
          class="shrink-0 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
          {{ $t("weather.resetButton") }}
        </button>
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
        class="mt-8 flex flex-col items-center gap-2 py-10 text-center"
      >
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
            class="mt-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium capitalize text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
          >
            {{ weather.weather[0].description }}
          </span>
        </div>

        <!-- Temperature + unit toggle -->
        <div class="mt-6 flex flex-col items-center gap-3">
          <span class="text-5xl font-extrabold text-gray-900 dark:text-white">
            {{ formatNumber(displayedTemp) }}°{{ tempUnit }}
          </span>
          <div
            class="inline-flex overflow-hidden rounded-full border border-gray-200 dark:border-gray-700"
          >
            <button
              v-for="unit in ['C', 'K', 'F']"
              :key="unit"
              type="button"
              :aria-pressed="tempUnit === unit"
              @click="tempUnit = unit"
              class="px-3 py-1 text-xs font-semibold transition"
              :class="tempUnit === unit
                ? 'bg-blue-600 text-white'
                : 'bg-gray-50/70 text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800'"
            >
              °{{ unit }}
            </button>
          </div>
          <p class="text-xs text-gray-400 dark:text-gray-500">
            {{ $t("weather.feelsLike") }}: {{ formatNumber(feelsLikeInSelectedUnit) }}°{{ tempUnit }}
          </p>
        </div>

        <!-- Stat tiles -->
        <div class="mt-8 grid grid-cols-2 gap-3 text-start">
          <div
            class="rounded-xl border border-gray-200/70 bg-gray-50/70 p-3 dark:border-gray-700 dark:bg-gray-800/60"
          >
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
            class="rounded-xl border border-gray-200/70 bg-gray-50/70 p-3 dark:border-gray-700 dark:bg-gray-800/60"
          >
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
            class="col-span-2 rounded-xl border border-gray-200/70 bg-gray-50/70 p-3 dark:border-gray-700 dark:bg-gray-800/60"
          >
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
      weather: null,
      loading: false,
      errorMessage: "",
      tempUnit: "C",
      resetSearch() {
      this.query = "";
      this.weather = null;
      this.errorMessage = "";
    },
    };
  
  },
  computed: {
    isRtl() {
      return this.$i18n.locale === "fa";
    },
    tempKelvin() {
      return this.weather?.main?.temp ?? 0;
    },
    tempCelsius() {
      return this.tempKelvin - 273.15;
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
      const feelsKelvin = this.weather?.main?.feels_like ?? 0;
      if (this.tempUnit === "K") return feelsKelvin;
      const feelsCelsius = feelsKelvin - 273.15;
      if (this.tempUnit === "F") return feelsCelsius * 9 / 5 + 32;
      return feelsCelsius;
    },
    weatherEmoji() {
      const condition = this.weather?.weather?.[0]?.main ?? "";
      const map = {
        Clear: "☀️",
        Clouds: "☁️",
        Rain: "🌧️",
        Drizzle: "🌦️",
        Thunderstorm: "⛈️",
        Snow: "❄️",
        Mist: "🌫️",
        Fog: "🌫️",
        Haze: "🌫️",
        Smoke: "🌫️",
        Dust: "🌪️",
        Sand: "🌪️",
        Ash: "🌋",
        Squall: "💨",
        Tornado: "🌪️",
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
  methods: {
    onKeydown(e) {
      if (e.key === "Enter") this.fetchWeather();
    },
    async fetchWeather() {
      const city = this.query.trim();
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
          this.errorMessage =
            String(data.cod) === "404"
              ? this.$t("weather.notFound")
              : this.$t("weather.searchError");
          return;
        }

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
};
</script>