<template>
  <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
    <!-- Link to return to projects -->
    <router-link
      to="/Projects"
      class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" >
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

    <div
      class="mt-8 rounded-3xl border border-gray-200/70 bg-white/80 p-8 shadow-xl shadow-gray-900/10 dark:border-gray-700 dark:bg-gray-900/70 dark:shadow-black/30">
      <div class="max-w-3xl">
        <h1
          class="mt-1 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.title") }}
        </h1>
        <p class="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          {{
            $t("itInfrastructureTools.pages.cctvStorageCalculator.description")
          }}
        </p>
      </div>

      <!-- Form -->
      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <!-- Cameras count -->
        <div>
          <label
            for="camerasCount"
            class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
            {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.form.camerasCount") }}
          </label>
          <input
            id="camerasCount"
            v-model.number="form.camerasCount"
            type="number"
            min="1"
            max="1000"
            step="1"
            inputmode="numeric"
            class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            @blur="sanitizeField('camerasCount', 1, 1000, defaultForm.camerasCount)"
            @keyup.enter="calculate"/>
        </div>

        <!-- Resolution -->
        <div>
          <label
            for="resolution"
            class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
            {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.form.resolution") }}
          </label>
          <div class="relative">
            <select
              id="resolution"
              v-model="form.resolution"
              class="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 pe-10 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              <option value="r720p">
                {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.options.resolution.r720p") }}
              </option>
              <option value="r1080p">
                {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.options.resolution.r1080p") }}
              </option>
              <option value="r3mp">
                {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.options.resolution.r3mp") }}
              </option>
              <option value="r4mp">
                {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.options.resolution.r4mp") }}
              </option>
              <option value="r5mp">
                {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.options.resolution.r5mp") }}
              </option>
              <option value="r4k">
                {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.options.resolution.r4k") }}
              </option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 flex items-center text-gray-500 ltr:right-3.5 rtl:left-3.5 dark:text-gray-400">
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- FPS -->
        <div>
          <label
            for="fps"
            class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
            {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.form.fps") }}
          </label>
          <input
            id="fps"
            v-model.number="form.fps"
            type="number"
            min="1"
            max="120"
            step="1"
            inputmode="numeric"
            class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            @blur="sanitizeField('fps', 1, 120, defaultForm.fps)"
            @keyup.enter="calculate"/>
        </div>

        <!-- Codec -->
        <div>
        <label
          for="codec"
          class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
          {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.form.codec") }}
        </label>
        <div class="relative">
          <select
            id="codec"
            v-model="form.codec"
            class="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 pe-10 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <option value="h264">
              {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.options.codec.h264") }}
            </option>
            <option value="h265">
              {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.options.codec.h265") }}
            </option>
            <option value="h265plus">
              {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.options.codec.h265plus") }}
            </option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 flex items-center text-gray-500 ltr:right-3.5 rtl:left-3.5 dark:text-gray-400">
            <svg
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

        <!-- Quality -->
        <div>
          <label
            for="quality"
            class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
            {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.form.quality") }}
          </label>
          <div class="relative">
            <select
              id="quality"
              v-model="form.quality"
              class="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 pe-10 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              <option value="low">
                {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.options.quality.low") }}
              </option>
              <option value="medium">
                {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.options.quality.medium") }}
              </option>
              <option value="high">
                {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.options.quality.high") }}
              </option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 flex items-center text-gray-500 ltr:right-3.5 rtl:left-3.5 dark:text-gray-400">
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Record hours per day -->
        <div>
          <label
            for="recordHours"
            class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
            {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.form.recordHours") }}
          </label>
          <input
            id="recordHours"
            v-model.number="form.recordHours"
            type="number"
            min="0"
            max="24"
            step="0.5"
            inputmode="decimal"
            class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            @blur="sanitizeField('recordHours', 0, 24, defaultForm.recordHours)"
            @keyup.enter="calculate"/>
        </div>

        <!-- Retention days -->
        <div>
          <label
            for="retentionDays"
            class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
            {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.form.retentionDays") }}
          </label>
          <input
            id="retentionDays"
            v-model.number="form.retentionDays"
            type="number"
            min="1"
            max="3650"
            step="1"
            inputmode="numeric"
            class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            @blur="sanitizeField('retentionDays', 1, 3650, defaultForm.retentionDays)"
            @keyup.enter="calculate"/>
        </div>

        <!-- Motion detection toggle -->
        <div
          class="flex items-center gap-3 rounded-2xl border border-dashed border-gray-300 p-4 dark:border-gray-700 sm:col-span-2">
          <input
            id="motionDetection"
            v-model="form.motionEnabled"
            type="checkbox"
            class="h-5 w-5 shrink-0 rounded accent-blue-600"/>
          <label
            for="motionDetection"
            class="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.form.motionDetection") }}
          </label>
        </div>
        <!-- Motion percent -->
        <div v-if="form.motionEnabled" class="sm:col-span-2">
          <label
            for="motionPercent"
            class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
            {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.form.motionPercent") }}
            <span class="text-blue-600 dark:text-blue-400">({{ safeMotionPercent }}%)</span>
          </label>
          <input
            id="motionPercent"
            v-model.number="form.motionPercent"
            type="range"
            min="1"
            max="100"
            step="1"
            class="w-full accent-blue-600"/>
        </div>
      </div>

      <!-- Validation hint -->
      <p
        v-if="attemptedCalculate && !isFormValid"
        class="mt-4 text-right text-sm font-medium text-red-600 dark:text-red-400">
        {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.form.validationHint") }}
      </p>

      <!-- Actions -->
      <div class="mt-8 flex justify-end gap-3">
        <button
          type="button"
          @click="resetForm"
          class="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
          {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.form.resetButton") }}
        </button>
        <button
          type="button"
          @click="calculate"
          class="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
          {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.form.calculateButton") }}
        </button>
      </div>

      <!-- Results -->
      <div
        v-if="result"
        class="mt-10 rounded-2xl border border-gray-200 bg-gray-50/70 p-6 dark:border-gray-700 dark:bg-gray-800/60">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.result.dailyTitle") }}
            </p>
            <p class="mt-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              {{ formattedDailyGB }} {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.units.gb") }}
            </p>
          </div>

          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.result.totalTitle") }}
            </p>
            <p class="mt-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              {{ formattedTotalGB }} {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.units.gb") }}
              <span class="text-base font-medium text-gray-500 dark:text-gray-400">
                ({{ formattedTotalTB }} {{ $t("itInfrastructureTools.pages.cctvStorageCalculator.calculator.units.tb") }})
              </span>
            </p>
          </div>
        </div>
        <div
          class="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium text-blue-800 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-200">
          {{ hddSuggestionText }}
        </div>
      </div>

      <!-- Related Article -->
      <div class="mt-6 rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30 p-3 flex items-center justify-between gap-2 min-[425px]:p-4 min-[425px]:gap-4">
        <div>
          <p class="text-[10px] font-semibold text-blue-700 dark:text-blue-300 leading-snug min-[375px]:text-[11px] min-[425px]:text-[13px]">
            {{ $t('itInfrastructureTools.pages.cctvStorageCalculator.relatedArticle.label') }}
          </p>
          <p class="text-[9px] text-blue-600 dark:text-blue-400 mt-0.5 leading-snug min-[375px]:text-[10px] min-[425px]:text-[11px]">
            {{ $t('itInfrastructureTools.pages.cctvStorageCalculator.relatedArticle.description') }}
          </p>
        </div>
        <router-link
          to="/Articles/enterprise-cctv-ip-camera-nvr-dvr-architecture"
          class="shrink-0 inline-flex items-center gap-1 rounded-xl bg-blue-600 hover:bg-blue-700 px-2.5 py-1.5 text-[10px] font-semibold text-white transition-colors min-[375px]:px-3 min-[375px]:py-2 min-[375px]:text-[11px] min-[425px]:gap-2 min-[425px]:px-4 min-[425px]:py-2 min-[425px]:text-sm">
          {{ $t('itInfrastructureTools.pages.cctvStorageCalculator.relatedArticle.button') }}
          <svg class="w-3 h-3 rtl:rotate-180 min-[425px]:w-4 min-[425px]:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CctvStorageCalculator",
  data() {
    const defaultForm = {
      camerasCount: 4,
      resolution: "r1080p",
      fps: 25,
      codec: "h264",
      quality: "medium",
      recordHours: 24,
      retentionDays: 30,
      motionEnabled: false,
      motionPercent: 40,
    };

    return {
      defaultForm,
      form: { ...defaultForm },
      result: null,
      attemptedCalculate: false,
      resolutionBaseKbps: {
        r720p: 2048,
        r1080p: 4096,
        r3mp: 6144,
        r4mp: 8192,
        r5mp: 10240,
        r4k: 16384,
      },
      codecFactor: {
        h264: 1,
        h265: 0.5,
        h265plus: 0.35,
      },
      qualityFactor: {
        low: 0.7,
        medium: 1,
        high: 1.4,
      },
      commonHddSizesTb: [1, 2, 4, 6, 8, 10, 12, 16, 18, 20],
    };
  },
  computed: {
    safeCamerasCount() {
      return this.clamp(this.form.camerasCount, 1, 1000, this.defaultForm.camerasCount);
    },
    safeFps() {
      return this.clamp(this.form.fps, 1, 120, this.defaultForm.fps);
    },
    safeRecordHours() {
      return this.clamp(this.form.recordHours, 0, 24, this.defaultForm.recordHours);
    },
    safeRetentionDays() {
      return this.clamp(this.form.retentionDays, 1, 3650, this.defaultForm.retentionDays);
    },
    safeMotionPercent() {
      return this.clamp(this.form.motionPercent, 1, 100, this.defaultForm.motionPercent);
    },
    safeResolution() {
      return Object.prototype.hasOwnProperty.call(this.resolutionBaseKbps, this.form.resolution)
        ? this.form.resolution
        : "r1080p";
    },
    safeCodec() {
      return Object.prototype.hasOwnProperty.call(this.codecFactor, this.form.codec)
        ? this.form.codec
        : "h264";
    },
    safeQuality() {
      return Object.prototype.hasOwnProperty.call(this.qualityFactor, this.form.quality)
        ? this.form.quality
        : "medium";
    },

    isFormValid() {
      const isFilled = (value) => typeof value === "number" && Number.isFinite(value);
      const requiredFilled =
        isFilled(this.form.camerasCount) &&
        isFilled(this.form.fps) &&
        isFilled(this.form.recordHours) &&
        isFilled(this.form.retentionDays);
      const motionFilled = !this.form.motionEnabled || isFilled(this.form.motionPercent);
      return requiredFilled && motionFilled;
    },

    dailyBitrateKbps() {
      const base = this.resolutionBaseKbps[this.safeResolution];
      const codec = this.codecFactor[this.safeCodec];
      const quality = this.qualityFactor[this.safeQuality];
      const fpsFactor = this.safeFps / 25;
      return base * codec * quality * fpsFactor;
    },
    dailyBytesPerCamera() {
      let bytes = ((this.dailyBitrateKbps * 1000) / 8) * 3600 * this.safeRecordHours;
      if (this.form.motionEnabled) {
        bytes *= this.safeMotionPercent / 100;
      }
      return bytes;
    },
    totalDailyBytes() {
      return this.dailyBytesPerCamera * this.safeCamerasCount;
    },
    dailyGB() {
      return this.totalDailyBytes / 1024 ** 3;
    },
    totalGB() {
      return this.dailyGB * this.safeRetentionDays;
    },
    totalTB() {
      return this.totalGB / 1024;
    },

    hddSuggestion() {
      const recommendedTb = this.totalTB * 1.1;
      const fit = this.commonHddSizesTb.find((size) => size >= recommendedTb);
      if (fit) {
        return { count: 1, size: fit };
      }
      const maxSize = this.commonHddSizesTb[this.commonHddSizesTb.length - 1];
      const count = Math.max(1, Math.ceil(recommendedTb / maxSize));
      return { count, size: maxSize };
    },

    formattedDailyGB() {
      return this.result ? this.formatNumber(this.result.dailyGB) : "";
    },
    formattedTotalGB() {
      return this.result ? this.formatNumber(this.result.totalGB) : "";
    },
    formattedTotalTB() {
      return this.result ? this.formatNumber(this.result.totalTB) : "";
    },
    hddSuggestionText() {
      if (!this.result) return "";
      const { count, size } = this.result.hddSuggestion;
      if (count <= 1) {
        return this.$t(
          "itInfrastructureTools.pages.cctvStorageCalculator.calculator.result.hddSuggestionSingle",
          { size }
        );
      }
      return this.$t(
        "itInfrastructureTools.pages.cctvStorageCalculator.calculator.result.hddSuggestionMulti",
        { count, size }
      );
    },
  },
  methods: {
    clamp(value, min, max, fallback) {
      const n = Number(value);
      if (Number.isNaN(n) || !Number.isFinite(n)) return fallback;
      return Math.min(max, Math.max(min, n));
    },
    sanitizeField(field, min, max, fallback) {
      this.form[field] = this.clamp(this.form[field], min, max, fallback);
    },
    formatNumber(value) {
      const n = Number.isFinite(value) ? value : 0;
      return n.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },
    resetForm() {
      this.form = { ...this.defaultForm };
      this.result = null;
      this.attemptedCalculate = false;
    },
    calculate() {
      this.attemptedCalculate = true;

      if (!this.isFormValid) {
        this.result = null;
        return;
      }

      this.sanitizeField("camerasCount", 1, 300, this.defaultForm.camerasCount);
      this.sanitizeField("fps", 1, 120, this.defaultForm.fps);
      this.sanitizeField("recordHours", 0, 24, this.defaultForm.recordHours);
      this.sanitizeField("retentionDays", 1, 1095, this.defaultForm.retentionDays);
      if (this.form.motionEnabled) {
        this.sanitizeField("motionPercent", 1, 100, this.defaultForm.motionPercent);
      }

      this.result = {
        dailyGB: this.dailyGB,
        totalGB: this.totalGB,
        totalTB: this.totalTB,
        hddSuggestion: { ...this.hddSuggestion },
      };
    },
  },
};
</script>