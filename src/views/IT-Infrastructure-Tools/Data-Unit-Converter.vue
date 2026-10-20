<template>
  <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
    <!-- Top Bar Box (  Link to return to projects & Copy link & Share Icons)-->
    <div class="flex max-w-6xl mx-auto items-center justify-between rounded-2xl border border-gray-200 bg-white/90 p-3 shadow-md backdrop-blur dark:border-gray-700 dark:bg-gray-900/90 sm:p-4">
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
      class="mt-8 rounded-3xl border border-gray-200/70 bg-white/80 p-8 shadow-xl shadow-gray-900/10 dark:border-gray-700 dark:bg-gray-900/70 dark:shadow-black/30"
    >
      <div class="max-w-3xl">
        <h1
          class="mt-1 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
        >
          {{ $t("itInfrastructureTools.pages.dataUnitConverter.title") }}
        </h1>
        <p class="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          {{ $t("itInfrastructureTools.pages.dataUnitConverter.description") }}
        </p>
      </div>

      <!-- Form -->
      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <!-- Value -->
        <div>
          <label
            for="value"
            class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            {{ $t("itInfrastructureTools.pages.dataUnitConverter.calculator.form.value") }}
          </label>
          <input
            id="value"
            v-model.number="form.value"
            type="number"
            min="0"
            :max="maxValue"
            step="any"
            inputmode="decimal"
            class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            @blur="sanitizeValue"
            @keyup.enter="calculate"
          />
        </div>

        <!-- Base -->
        <div>
          <label
            for="base"
            class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            {{ $t("itInfrastructureTools.pages.dataUnitConverter.calculator.form.base") }}
          </label>
          <div class="relative">
            <select
              id="base"
              v-model="form.base"
              class="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 pe-10 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            >
              <option value="decimal">
                {{ $t("itInfrastructureTools.pages.dataUnitConverter.calculator.options.base.decimal") }}
              </option>
              <option value="binary">
                {{ $t("itInfrastructureTools.pages.dataUnitConverter.calculator.options.base.binary") }}
              </option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 flex items-center text-gray-500 ltr:right-3.5 rtl:left-3.5 dark:text-gray-400"
            >
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- From / Swap / To -->
        <div class="sm:col-span-2">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div class="flex-1">
              <label
                for="fromUnit"
                class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                {{ $t("itInfrastructureTools.pages.dataUnitConverter.calculator.form.fromUnit") }}
              </label>
              <div class="relative">
                <select
                  id="fromUnit"
                  v-model="form.fromUnit"
                  class="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 pe-10 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                >
                  <option v-for="u in unitOrder" :key="`from-${u}`" :value="u">
                    {{ unitLabel(u, form.base) }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 flex items-center text-gray-500 ltr:right-3.5 rtl:left-3.5 dark:text-gray-400"
                >
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="button"
              @click="swapUnits"
              :aria-label="$t('itInfrastructureTools.pages.dataUnitConverter.calculator.form.swapUnitsLabel')"
              class="mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-300 text-gray-500 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </button>

            <div class="flex-1">
              <label
                for="toUnit"
                class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                {{ $t("itInfrastructureTools.pages.dataUnitConverter.calculator.form.toUnit") }}
              </label>
              <div class="relative">
                <select
                  id="toUnit"
                  v-model="form.toUnit"
                  class="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 pe-10 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                >
                  <option v-for="u in unitOrder" :key="`to-${u}`" :value="u">
                    {{ unitLabel(u, form.base) }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 flex items-center text-gray-500 ltr:right-3.5 rtl:left-3.5 dark:text-gray-400"
                >
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Validation hint -->
      <p
        v-if="attemptedCalculate && !isFormValid"
        class="mt-4 text-right text-sm font-medium text-red-600 dark:text-red-400"
      >
        {{ $t("itInfrastructureTools.pages.dataUnitConverter.calculator.form.validationHint") }}
      </p>

      <!-- Actions -->
      <div class="mt-8 flex justify-end gap-3">
        <button
          type="button"
          @click="resetForm"
          class="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          {{ $t("itInfrastructureTools.pages.dataUnitConverter.calculator.form.resetButton") }}
        </button>
        <button
          type="button"
          @click="calculate"
          class="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          {{ $t("itInfrastructureTools.pages.dataUnitConverter.calculator.form.calculateButton") }}
        </button>
      </div>

      <!-- Result -->
      <div
        v-if="result"
        class="mt-10 rounded-2xl border border-gray-200 bg-gray-50/70 p-6 dark:border-gray-700 dark:bg-gray-800/60"
      >
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          {{ $t("itInfrastructureTools.pages.dataUnitConverter.calculator.result.title") }}
        </p>
        <p class="mt-3 break-words text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          {{ formatResult(result.value) }} {{ unitLabel(result.fromUnit, result.base) }}
          <span class="mx-2 text-gray-400 dark:text-gray-500">=</span>
          <span class="text-blue-600 dark:text-blue-400">
            {{ formatResult(result.converted) }} {{ unitLabel(result.toUnit, result.base) }}
          </span>
        </p>

        <div
          class="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium text-blue-800 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-200"
        >
          {{ $t("itInfrastructureTools.pages.dataUnitConverter.calculator.result.disclaimer") }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DataUnitConverter",
  data() {
    const defaultForm = {
      value: 1,
      base: "decimal",
      fromUnit: "gb",
      toUnit: "mb",
    };

    return {
      defaultForm,
      form: { ...defaultForm },
      result: null,
      attemptedCalculate: false,
      maxValue: Number.MAX_SAFE_INTEGER,
      unitOrder: ["bit", "byte", "kb", "mb", "gb", "tb", "pb"],
      byteExponents: { byte: 0, kb: 1, mb: 2, gb: 3, tb: 4, pb: 5 },
      binaryUnitKeyMap: { kb: "kib", mb: "mib", gb: "gib", tb: "tib", pb: "pib" },
      copied: false,
      copyTimeout: null,
    };
  },
  computed: {
    isFormValid() {
      return (
        typeof this.form.value === "number" &&
        Number.isFinite(this.form.value) &&
        this.form.value >= 0
      );
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

    clamp(value, min, max, fallback) {
      const n = Number(value);
      if (Number.isNaN(n) || !Number.isFinite(n)) return fallback;
      return Math.min(max, Math.max(min, n));
    },
    sanitizeValue() {
      this.form.value = this.clamp(this.form.value, 0, this.maxValue, this.defaultForm.value);
    },

    bitsPerUnit(unitKey, base) {
      if (unitKey === "bit") return 1;
      const exp = Object.prototype.hasOwnProperty.call(this.byteExponents, unitKey)
        ? this.byteExponents[unitKey]
        : 0;
      return 8 * Math.pow(base, exp);
    },

    unitLabel(unitKey, baseName) {
      if (unitKey === "bit") {
        return this.$t("itInfrastructureTools.pages.dataUnitConverter.calculator.options.unit.bit");
      }
      if (unitKey === "byte") {
        return this.$t("itInfrastructureTools.pages.dataUnitConverter.calculator.options.unit.byte");
      }
      if (baseName === "binary") {
        const binKey = this.binaryUnitKeyMap[unitKey];
        return this.$t(
          `itInfrastructureTools.pages.dataUnitConverter.calculator.options.unit.binary.${binKey}`
        );
      }
      return this.$t(
        `itInfrastructureTools.pages.dataUnitConverter.calculator.options.unit.decimal.${unitKey}`
      );
    },

    swapUnits() {
      const from = this.form.fromUnit;
      this.form.fromUnit = this.form.toUnit;
      this.form.toUnit = from;
    },

    calculate() {
      this.attemptedCalculate = true;

      if (!this.isFormValid) {
        this.result = null;
        return;
      }
      this.sanitizeValue();
      const base = this.form.base === "binary" ? 1024 : 1000;
      const bitsValue = this.form.value * this.bitsPerUnit(this.form.fromUnit, base);
      const converted = bitsValue / this.bitsPerUnit(this.form.toUnit, base);
      this.result = {
        value: this.form.value,
        fromUnit: this.form.fromUnit,
        toUnit: this.form.toUnit,
        base: this.form.base,
        converted,
      };
    },

    resetForm() {
      this.form = { ...this.defaultForm };
      this.result = null;
      this.attemptedCalculate = false;
    },

    formatResult(value) {
      if (!Number.isFinite(value)) return "0";
      if (value === 0) return "0";
      const digits = Math.abs(value) >= 1 ? 2 : 6;
      return value.toLocaleString("en-US", {
        maximumFractionDigits: digits,
        minimumFractionDigits: 0,
      });
    },
  },
  unmounted() {
    if (this.copyTimeout) clearTimeout(this.copyTimeout);
  },
};
</script>