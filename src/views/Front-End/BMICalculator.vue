<template>
  <div class="px-4 pt-8 pb-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl space-y-4">
      
      <!-- Top Bar Box (  Link to return to projects & Copy link & Share Icons)-->
      <div class="flex items-center justify-between rounded-2xl border border-gray-200 bg-white/90 p-3 shadow-md backdrop-blur dark:border-gray-700 dark:bg-gray-900/90 sm:p-4">
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

      <!-- Main Calculator Card -->
      <div class="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-xl backdrop-blur dark:border-gray-700 dark:bg-gray-900/90">
        <div class="mb-6">
          <h1 class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
            {{ $t("bmiCalculator.title") }}
          </h1>
          <p class="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
            {{ $t("bmiCalculator.description") }}
          </p>
        </div>

        <form class="space-y-4" @submit.prevent="calculateBMI">
          <div class="grid gap-4 md:grid-cols-2">
            <label
              class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
              <span
                class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
                {{ $t("bmiCalculator.height") }}
              </span>
              <input
                class="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none ring-0 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                v-model="heightCm"
                type="number"
                @input="limitNumber('heightCm', 220, 3)"/>
            </label>

            <label
              class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
              <span
                class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
                {{ $t("bmiCalculator.weight") }}
              </span>
              <input
                class="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none ring-0 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                v-model="weightKg"
                type="number"
                @input="limitNumber('weightKg', 150, 3)"/>
            </label>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              class="w-full rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 sm:flex-1">
              {{ $t("bmiCalculator.calculate") }}
            </button>
            <button
              type="button"
              @click="resetBMI"
              class="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 sm:w-auto">
              {{ $t("bmiCalculator.reset") }}
            </button>
          </div>
        </form>

        <div
          v-if="hasResult"
          class="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-gray-800 dark:border-blue-900 dark:bg-blue-950/40 dark:text-gray-100">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p class="text-sm font-medium text-blue-700 dark:text-blue-300">
                {{ $t("bmiCalculator.result") }}
              </p>
              <p class="text-4xl font-bold">{{ bmiValue.toFixed(1) }}</p>
            </div>
            <div
              class="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-200">
              {{ categoryLabel }}
            </div>
          </div>
          <p class="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
            {{ $t("bmiCalculator.note") }}
          </p>

          <div
            class="mt-6 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <div class="mb-4 flex items-center justify-between">
              <p class="text-sm font-medium text-gray-700 dark:text-gray-200">
                {{ $t("bmiCalculator.chartTitle") }}
              </p>
              <span
                class="text-sm font-semibold text-blue-700 dark:text-blue-200">
                {{ bmiValue.toFixed(1) }}
              </span>
            </div>
            <div
              class="overflow-hidden rounded-3xl bg-slate-50 py-4 dark:bg-slate-950">
              <svg
                class="w-full h-28 max-[425px]:h-24 max-[375px]:h-20 overflow-visible"
                viewBox="0 0 320 100"
                preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient
                    id="bmiZoneGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0">
                    <stop offset="0%" stop-color="#60a5fa" />
                    <stop
                      :offset="`${underweightEndPercent}%`"
                      stop-color="#60a5fa"/>
                    <stop
                      :offset="`${underweightEndPercent}%`"
                      stop-color="#34d399"/>
                    <stop :offset="`${normalEndPercent}%`" stop-color="#34d399" />
                    <stop :offset="`${normalEndPercent}%`" stop-color="#fbbf24" />
                    <stop
                      :offset="`${overweightEndPercent}%`"
                      stop-color="#fbbf24"/>
                    <stop
                      :offset="`${overweightEndPercent}%`"
                      stop-color="#f87171"/>
                    <stop offset="100%" stop-color="#f87171" />
                  </linearGradient>
                </defs>

                <!-- Colored BMI zone bar -->
                <rect
                  x="20"
                  y="56"
                  width="280"
                  height="16"
                  rx="8"
                  fill="url(#bmiZoneGradient)"/>

                <!-- Dividers between zones -->
                <line
                  v-for="tick in zoneTicks"
                  :key="tick.value"
                  :x1="tick.x"
                  :x2="tick.x"
                  y1="54"
                  y2="72"
                  class="stroke-white/80 dark:stroke-slate-950/60"
                  stroke-width="1.5"/>

                <!-- Numeric label at each zone boundary -->
                <text
                  v-for="tick in zoneTicks"
                  :key="`label-${tick.value}`"
                  :x="tick.x"
                  y="94"
                  text-anchor="middle"
                  class="fill-slate-500 dark:fill-slate-400"
                  font-size="10">
                  {{ tick.value }}
                </text>

                <!-- Range labels -->
                <text
                  x="25"
                  y="94"
                  class="fill-slate-500 dark:fill-slate-400"
                  font-size="11">
                  {{ chartMinLabel }}
                </text>
                <text
                  x="292"
                  y="94"
                  text-anchor="end"
                  class="fill-slate-500 dark:fill-slate-400"
                  font-size="11">
                  {{ chartMaxLabel }}
                </text>

                <!-- Animated pointer showing the current BMI -->
                <g
                  :style="{
                    transform: `translateX(${bmiPointX}px)`,
                    transition: 'transform 0.4s ease',
                  }">
                  <line
                    x1="0"
                    y1="22"
                    x2="0"
                    y2="56"
                    class="stroke-slate-800 dark:stroke-white"
                    stroke-width="2"/>
                  <circle
                    cx="0"
                    cy="64"
                    r="8"
                    class="fill-slate-800 dark:fill-white"
                    stroke="#fff"
                    stroke-width="2"/>
                  <rect
                    x="-22"
                    y="0"
                    width="44"
                    height="20"
                    rx="6"
                    class="fill-slate-800 dark:fill-white"/>
                  <text
                    x="0"
                    y="14"
                    text-anchor="middle"
                    font-size="11"
                    font-weight="600"
                    class="fill-white dark:fill-slate-900">
                    {{ bmiValue.toFixed(1) }}
                  </text>
                </g>
              </svg>

              <!-- Legend matching the zone colors -->
              <div
                class="mt-3 px-2 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                <span class="flex items-center gap-1.5">
                  <span class="h-2.5 w-2.5 rounded-full bg-[#60a5fa]"></span>
                  {{ $t("bmiCalculator.categories.underweight") }}
                </span>
                <span class="flex items-center gap-1.5">
                  <span class="h-2.5 w-2.5 rounded-full bg-[#34d399]"></span>
                  {{ $t("bmiCalculator.categories.normal") }}
                </span>
                <span class="flex items-center gap-1.5">
                  <span class="h-2.5 w-2.5 rounded-full bg-[#fbbf24]"></span>
                  {{ $t("bmiCalculator.categories.overweight") }}
                </span>
                <span class="flex items-center gap-1.5">
                  <span class="h-2.5 w-2.5 rounded-full bg-[#f87171]"></span>
                  {{ $t("bmiCalculator.categories.obese") }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <p v-else class="mt-6 text-sm text-gray-500 dark:text-gray-400">
          {{ $t("bmiCalculator.invalid") }}
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "BMICalculator",
  data() {
    return {
      heightCm: "",
      weightKg: "",
      bmiValue: null,
      categoryLabel: "",
      hasResult: false,
      copied: false,
      copyTimeout: null,
    };
  },
  computed: {
    bmiChartMin() {
      return 5;
    },
    bmiChartMax() {
      return 45;
    },
    bmiPointX() {
      const min = this.bmiChartMin;
      const max = this.bmiChartMax;
      const clampedValue = Math.min(Math.max(this.bmiValue, min), max);
      const range = max - min;
      const normalized = (clampedValue - min) / range;
      return 20 + normalized * 280;
    },

    zoneBoundaries() {
      return [18.5, 25, 30];
    },
    zoneTicks() {
      const min = this.bmiChartMin;
      const max = this.bmiChartMax;
      const range = max - min;
      return this.zoneBoundaries.map((value) => ({
        value,
        x: 20 + ((value - min) / range) * 280,
      }));
    },
    underweightEndPercent() {
      return this.percentForValue(18.5);
    },
    normalEndPercent() {
      return this.percentForValue(25);
    },
    overweightEndPercent() {
      return this.percentForValue(30);
    },
    chartMinLabel() {
      return this.$t("bmiCalculator.chartRangeMin", {
        value: this.bmiChartMin,
      });
    },
    chartMaxLabel() {
      return this.$t("bmiCalculator.chartRangeMax", {
        value: this.bmiChartMax,
      });
    },
  },
  methods: {
    percentForValue(value) {
      const min = this.bmiChartMin;
      const max = this.bmiChartMax;
      return ((value - min) / (max - min)) * 100;
    },
    limitNumber(field, max, maxDigits) {
      let value = String(this[field]);

      value = value.replace(/\D/g, "");

      if (value.length > maxDigits) {
        value = value.slice(0, maxDigits);
      }

      if (value !== "") {
        let num = Number(value);
        if (num > max) num = max;
        this[field] = num;
      } else {
        this[field] = "";
      }
    },
    resetBMI() {
      this.heightCm = "";
      this.weightKg = "";
      this.bmiValue = null;
      this.categoryLabel = "";
      this.hasResult = false;
    },
    calculateBMI() {
      const height = Number(this.heightCm);
      const weight = Number(this.weightKg);

      if (height < 50 || height > 250 || weight < 1 || weight > 300) {
        this.hasResult = false;
        return;
      }

      const bmi = weight / (height / 100) ** 2;
      this.bmiValue = bmi;
      this.hasResult = true;

      if (bmi < 18.5) {
        this.categoryLabel = this.$t("bmiCalculator.categories.underweight");
      } else if (bmi < 25) {
        this.categoryLabel = this.$t("bmiCalculator.categories.normal");
      } else if (bmi < 30) {
        this.categoryLabel = this.$t("bmiCalculator.categories.overweight");
      } else {
        this.categoryLabel = this.$t("bmiCalculator.categories.obese");
      }
    },

    // ۱. کپی لینک با رعایت تمام استانداردهای امنیتی و پشتیبانی مرورگرها
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

    // متد پشتیبان برای مرورگرهای قدیمی یا محیط‌های غیر HTTPS
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

    // مدیریت انیمیشن Toast بدون تداخل (Race Condition)
    showCopiedToast() {
      this.copied = true;
      if (this.copyTimeout) clearTimeout(this.copyTimeout);
      
      this.copyTimeout = setTimeout(() => {
        this.copied = false;
      }, 2000);
    },

    // ۲. اشتراک‌گذاری امن با اعتبارسنجی ورودی و مدیریت استثنا
    async shareProject() {
      const currentUrl = window.location.href;

      if (!currentUrl.startsWith("http://") && !currentUrl.startsWith("https://")) {
        return;
      }

      const shareData = {
        title: document.title || "Portofolio Tool",
        text: "محاسبه‌گر شاخص توده بدنی (BMI)",
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
  },
  unmounted() {
    if (this.copyTimeout) clearTimeout(this.copyTimeout);
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>