<template>
  <!-- Link to return to projects -->
  <div class="max-w-2xl pt-8 mx-6 sm:mx-auto">
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

  <div class="px-4 pt-8 pb-16 sm:px-6 lg:px-8">
    <div
      class="mx-auto max-w-2xl rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-xl backdrop-blur dark:border-gray-700 dark:bg-gray-900/90">
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
  },
};
</script>
