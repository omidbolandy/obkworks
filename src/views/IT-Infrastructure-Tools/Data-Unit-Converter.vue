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
};
</script>