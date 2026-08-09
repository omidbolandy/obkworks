<template>
    <!-- Link to return to projects -->
    <div class="max-w-3xl pt-8 mx-6 sm:mx-auto">
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

  <div class="container mx-auto p-4 dark:text-white text-gray-800">
    <h1 class="text-4xl font-bold text-center my-12 dark:text-white">
      {{ $t("unitConversion.title") }}
    </h1>

    <div
      class="max-w-3xl mb-10 mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 md:p-10 border border-gray-200 dark:border-gray-800">
      <div class="mb-8">
        <!-- title & description -->
        <p class="text-2xl font-semibold dark:text-white">
          {{ $t("unitConversion.chooseConversion") }}
        </p>
        <p class="text-gray-600 dark:text-gray-300 mt-2">
          {{ $t("unitConversion.description") }}
        </p>
      </div>

      <!-- Conversion of measurement units -->
      <div class="space-y-6">
        <label class="block">
          <span class="text-lg font-medium dark:text-white">{{
            $t("unitConversion.conversionType")
          }}</span>
          <div class="relative mt-3">
            <select v-model="conversionType"
              class="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 pe-10 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              <option v-for="option in conversionOptions" :key="option.value" :value="option.value">
                {{ $t(option.labelKey) }}
              </option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor"
              class="pointer-events-none absolute end-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </label>
        <label class="block">
          <span class="text-lg font-medium dark:text-white">{{
            $t("unitConversion.enterAmount")
          }}</span>
          <input type="number" @input="limitInput" v-model.number="inputValue" @keyup.enter="convert"
            :placeholder="$t('unitConversion.enterAmount')"
            class="w-full mt-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
        </label>
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start mt-6">
          <button @click="convert"
            class="w-full sm:w-auto sm:min-w-[140px] rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700 transition shrink-0">
            {{ $t("unitConversion.convertButton") }}
          </button>

          <button @click="resetConversion" type="button"
            class="w-full sm:w-auto sm:min-w-[100px] rounded-xl bg-gray-200 px-6 py-3 text-gray-800 font-semibold shadow hover:bg-gray-300 transition shrink-0 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
            {{ $t("unitConversion.resetButton") }}
          </button>
          <div
            class="flex-1 bg-gray-100/80 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-200 dark:border-gray-700">
            <p
              class="text-lg font-semibold text-gray-700 dark:text-gray-200 flex flex-wrap gap-2 items-center justify-start">
              <span>{{ $t("unitConversion.resultLabel") }}:</span>

              <span dir="ltr" class="text-xl font-bold text-blue-600 dark:text-blue-400">
                {{ result ? result : "---" }}
              </span>
            </p>
          </div>
        </div>

        <hr class="my-10 border-gray-200 dark:border-gray-800" />

        <!-- Currency Conversion -->
        <div class="mb-6">
          <p class="text-2xl font-semibold dark:text-white">
            {{ $t("unitConversion.currencyTitle") }}
          </p>
          <p class="text-gray-600 dark:text-gray-300 mt-2">
            {{ $t("unitConversion.currencyDescription") }}
          </p>
        </div>
        <div class="space-y-6">
          <label class="block">
            <span class="text-lg font-medium dark:text-white">{{
              $t("unitConversion.currencyType")
            }}</span>
            <div class="relative mt-3">
              <select v-model="currencyType"
                class="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 pe-10 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                <option v-for="option in currencyOptions" :key="option.value" :value="option.value">
                  {{ option.symbol }} {{ $t(option.labelKey) }}
                </option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor"
                class="pointer-events-none absolute end-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </label>
          <label class="block">
            <span class="text-lg font-medium dark:text-white">{{
              $t("unitConversion.currencyAmount")
            }}</span>
            <input type="number" @input="limitCurrencyInput" v-model.number="currencyInput"
              @keyup.enter="convertCurrency" :placeholder="$t('unitConversion.currencyAmount')"
              class="w-full mt-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
          </label>
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start mt-6">
            <button @click="convertCurrency" :disabled="currencyLoading"
              class="w-full sm:w-auto sm:min-w-[140px] rounded-xl bg-green-600 px-6 py-3 text-white font-semibold shadow hover:bg-green-700 transition shrink-0 disabled:opacity-60 disabled:cursor-not-allowed">
              {{
                currencyLoading
                  ? $t("unitConversion.currencyLoading")
                  : $t("unitConversion.currencyConvertButton")
              }}
            </button>
            <button @click="resetCurrencyConversion" type="button"
              class="w-full sm:w-auto sm:min-w-[100px] rounded-xl bg-gray-200 px-6 py-3 text-gray-800 font-semibold shadow hover:bg-gray-300 transition shrink-0 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              {{ $t("unitConversion.resetButton") }}
            </button>
            <div
              class="flex-1 bg-gray-100/80 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-200 dark:border-gray-700">
              <p
                class="text-lg font-semibold text-gray-700 dark:text-gray-200 flex flex-wrap gap-2 items-center justify-start">
                <span>{{ $t("unitConversion.currencyResultLabel") }}:</span>
                <span dir="ltr" class="text-xl font-bold text-green-600 dark:text-green-400">
                  {{ currencyResult ? currencyResult : "---" }}
                </span>
              </p>
            </div>
            <p v-if="currencyFetchError" class="text-sm text-red-500 mt-2">
              {{ currencyFetchError }}
            </p>
          </div>
          <p class="flex flex-wrap items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" class="h-3.5 w-3.5 shrink-0 opacity-70">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <span>{{ $t("unitConversion.currencyAttribution") }}</span>
            <a href="https://www.exchangerate-api.com" target="_blank" rel="noopener noreferrer nofollow" dir="ltr"
              class="font-medium text-gray-500 underline decoration-dotted underline-offset-2 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              Exchange Rate API
            </a>
          </p>
        </div>

        <hr class="my-10 border-gray-200 dark:border-gray-800" />

        <!-- Number & Words Conversion -->
        <div class="mb-6">
          <p class="text-2xl font-semibold dark:text-white">
            {{ $t("unitConversion.wordsTitle") }}
          </p>
          <p class="text-gray-600 dark:text-gray-300 mt-2">
            {{ $t("unitConversion.wordsDescription") }}
          </p>
        </div>
        <div class="space-y-6">
          <label class="block">
            <span class="text-lg font-medium dark:text-white">{{
              $t("unitConversion.wordsTypeLabel")
            }}</span>
            <div class="relative mt-3">
              <select v-model="wordsType" @change="resetWordsConversion"
                class="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 pe-10 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                <option v-for="option in wordsOptions" :key="option.value" :value="option.value">
                  {{ $t(option.labelKey) }}
                </option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor"
                class="pointer-events-none absolute end-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </label>
          <label class="block">
            <span class="text-lg font-medium dark:text-white">{{
              wordsType === "numberToWords"
                ? $t("unitConversion.wordsNumberInput")
                : $t("unitConversion.wordsTextInput")
            }}</span>
            <input v-if="wordsType === 'numberToWords'" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="15"
              @input="limitWordsNumberInput" :value="wordsInput" @keyup.enter="convertWords"
              :placeholder="$t('unitConversion.wordsNumberInput')" :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'"
              class="w-full mt-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
            <input v-else type="text" maxlength="120" @input="limitWordsTextInput" v-model="wordsInput"
              @keyup.enter="convertWords" :placeholder="$t('unitConversion.wordsTextInput')"
              :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'"
              class="w-full mt-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
          </label>
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start mt-6">
            <button @click="convertWords"
              class="w-full sm:w-auto sm:min-w-[140px] rounded-xl bg-purple-600 px-6 py-3 text-white font-semibold shadow hover:bg-purple-700 transition shrink-0">
              {{ $t("unitConversion.convertButton") }}
            </button>
            <button @click="resetWordsConversion" type="button"
              class="w-full sm:w-auto sm:min-w-[100px] rounded-xl bg-gray-200 px-6 py-3 text-gray-800 font-semibold shadow hover:bg-gray-300 transition shrink-0 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              {{ $t("unitConversion.resetButton") }}
            </button>
            <div
              class="flex-1 bg-gray-100/80 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-200 dark:border-gray-700">
              <p
                class="text-lg font-semibold text-gray-700 dark:text-gray-200 flex flex-wrap gap-2 items-center justify-start">
                <span>{{ $t("unitConversion.wordsResultLabel") }}:</span>
                <span :dir="wordsType === 'wordsToNumber'
                  ? 'ltr'
                  : $i18n.locale === 'fa'
                    ? 'rtl'
                    : 'ltr'
                  " class="text-xl font-bold text-purple-600 dark:text-purple-400 break-words">
                  {{ wordsResult ? wordsResult : "---" }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Unit-Conversion",
  data() {
    return {
      conversionType: "meterToFeet",
      inputValue: "",
      result: "",
      rates: null,
      currencyLoading: false,
      currencyFetchError: null,
      conversionOptions: [
        {
          value: "meterToFeet",
          labelKey: "unitConversion.options.meterToFeet",
        },
        {
          value: "feetToMeter",
          labelKey: "unitConversion.options.feetToMeter",
        },
        {
          value: "meterToCentimeter",
          labelKey: "unitConversion.options.meterToCentimeter",
        },
        {
          value: "centimeterToMeter",
          labelKey: "unitConversion.options.centimeterToMeter",
        },
        {
          value: "meterToKilometer",
          labelKey: "unitConversion.options.meterToKilometer",
        },
        {
          value: "kilometerToMeter",
          labelKey: "unitConversion.options.kilometerToMeter",
        },
      ],
      currencyType: "rialToUsd",
      currencyInput: "",
      currencyResult: "",
      currencyOptions: [
        {
          value: "rialToUsd",
          labelKey: "unitConversion.options.rialToUsd",
          symbol: "IRR → USD",
        },
        {
          value: "usdToRial",
          labelKey: "unitConversion.options.usdToRial",
          symbol: "USD → IRR",
        },
        {
          value: "rialToEur",
          labelKey: "unitConversion.options.rialToEur",
          symbol: "IRR → EUR",
        },
        {
          value: "eurToRial",
          labelKey: "unitConversion.options.eurToRial",
          symbol: "EUR → IRR",
        },
        {
          value: "rialToCny",
          labelKey: "unitConversion.options.rialToCny",
          symbol: "IRR → CNY",
        },
        {
          value: "cnyToRial",
          labelKey: "unitConversion.options.cnyToRial",
          symbol: "CNY → IRR",
        },
        {
          value: "usdToEur",
          labelKey: "unitConversion.options.usdToEur",
          symbol: "USD → EUR",
        },
        {
          value: "eurToUsd",
          labelKey: "unitConversion.options.eurToUsd",
          symbol: "EUR → USD",
        },
        {
          value: "usdToCny",
          labelKey: "unitConversion.options.usdToCny",
          symbol: "USD → CNY",
        },
        {
          value: "cnyToUsd",
          labelKey: "unitConversion.options.cnyToUsd",
          symbol: "CNY → USD",
        },
        {
          value: "eurToCny",
          labelKey: "unitConversion.options.eurToCny",
          symbol: "EUR → CNY",
        },
        {
          value: "cnyToEur",
          labelKey: "unitConversion.options.cnyToEur",
          symbol: "CNY → EUR",
        },
      ],
      currencyPairs: {
        rialToUsd: { from: "IRR", to: "USD" },
        usdToRial: { from: "USD", to: "IRR" },
        rialToEur: { from: "IRR", to: "EUR" },
        eurToRial: { from: "EUR", to: "IRR" },
        rialToCny: { from: "IRR", to: "CNY" },
        cnyToRial: { from: "CNY", to: "IRR" },
        usdToEur: { from: "USD", to: "EUR" },
        eurToUsd: { from: "EUR", to: "USD" },
        usdToCny: { from: "USD", to: "CNY" },
        cnyToUsd: { from: "CNY", to: "USD" },
        eurToCny: { from: "EUR", to: "CNY" },
        cnyToEur: { from: "CNY", to: "EUR" },
      },
      wordsType: "numberToWords",
      wordsInput: "",
      wordsResult: "",
      wordsOptions: [
        {
          value: "numberToWords",
          labelKey: "unitConversion.NumberToWordsoptions.numberToWords",
        },
        {
          value: "wordsToNumber",
          labelKey: "unitConversion.NumberToWordsoptions.wordsToNumber",
        },
      ],
    };
  },
  methods: {
    convert() {
      const value = parseFloat(this.inputValue);
      if (Number.isNaN(value)) {
        this.result = this.$t("unitConversion.invalidInput");
        return;
      }

      switch (this.conversionType) {
        case "meterToFeet":
          this.result = `${(value * 3.281).toFixed(4)} ft`;
          break;
        case "feetToMeter":
          this.result = `${(value / 3.281).toFixed(4)} m`;
          break;
        case "meterToCentimeter":
          this.result = `${(value * 100).toFixed(4)} cm`;
          break;
        case "centimeterToMeter":
          this.result = `${(value / 100).toFixed(4)} m`;
          break;
        case "meterToKilometer":
          this.result = `${(value / 1000).toFixed(4)} km`;
          break;
        case "kilometerToMeter":
          this.result = `${(value * 1000).toFixed(4)} m`;
          break;
        default:
          this.result = this.$t("unitConversion.invalidConversion");
      }
    },
    async fetchExchangeRates() {
      if (this.rates) return this.rates;
      const response = await fetch("https://open.er-api.com/v6/latest/USD");
      const data = await response.json();
      if (
        data.result !== "success" ||
        !data.rates ||
        !data.rates.IRR ||
        !data.rates.EUR ||
        !data.rates.CNY
      ) {
        throw new Error("rate-fetch-failed");
      }
      this.rates = {
        USD: 1,
        IRR: data.rates.IRR,
        EUR: data.rates.EUR,
        CNY: data.rates.CNY,
      };
      return this.rates;
    },
    async convertCurrency() {
      const value = parseFloat(this.currencyInput);
      if (Number.isNaN(value)) {
        this.currencyResult = this.$t("unitConversion.invalidCurrencyInput");
        return;
      }
      this.currencyLoading = true;
      this.currencyFetchError = null;
      this.currencyResult = "";
      try {
        const rates = await this.fetchExchangeRates();
        const pair = this.currencyPairs[this.currencyType];
        if (!pair) {
          this.currencyResult = this.$t("unitConversion.invalidConversion");
          return;
        }
        const usdValue = value / rates[pair.from];
        const converted = usdValue * rates[pair.to];
        const decimals = pair.to === "IRR" ? 0 : 3;
        this.currencyResult = `${converted.toFixed(decimals)} ${pair.to}`;
      } catch (e) {
        this.currencyFetchError = this.$t("unitConversion.currencyFetchError");
      } finally {
        this.currencyLoading = false;
      }
    },
    limitInput() {
      if (this.inputValue.toString().length > 7) {
        this.inputValue = Number(this.inputValue.toString().slice(0, 7));
      }
    },
    limitCurrencyInput() {
      if (this.currencyInput.toString().length > 10) {
        this.currencyInput = Number(this.currencyInput.toString().slice(0, 10));
      }
    },
    limitWordsNumberInput(event) {
      let value = event.target.value.replace(/[^0-9]/g, "");
      if (value.length > 15) {
        value = value.slice(0, 15);
      }
      event.target.value = value;
      this.wordsInput = value === "" ? "" : Number(value);
    },
    limitWordsTextInput() {
      let value = this.wordsInput || "";
      value = value.replace(/[^\u0600-\u06FFa-zA-Z\u200C\s]/g, "");
      if (value.length > 120) {
        value = value.slice(0, 120);
      }
      this.wordsInput = value;
    },
    convertWords() {
      if (this.wordsType === "numberToWords") {
        const value = Number(this.wordsInput);
        if (
          this.wordsInput === "" ||
          Number.isNaN(value) ||
          !Number.isInteger(value) ||
          value < 0
        ) {
          this.wordsResult = this.$t("unitConversion.invalidWordsInput");
          return;
        }
        this.wordsResult =
          this.$i18n.locale === "fa"
            ? this.numberToWordsFa(value)
            : this.numberToWordsEn(value);
      } else {
        const text = (this.wordsInput || "").trim();
        if (!text) {
          this.wordsResult = this.$t("unitConversion.invalidWordsInput");
          return;
        }
        try {
          const value =
            this.$i18n.locale === "fa"
              ? this.wordsToNumberFa(text)
              : this.wordsToNumberEn(text);
          this.wordsResult = String(value);
        } catch (e) {
          this.wordsResult = this.$t("unitConversion.invalidWordsInput");
        }
      }
    },
    resetWordsConversion() {
      this.wordsInput = "";
      this.wordsResult = "";
    },
    numberToWordsFa(num) {
      if (num === 0) return "صفر";
      const ones = [
        "",
        "یک",
        "دو",
        "سه",
        "چهار",
        "پنج",
        "شش",
        "هفت",
        "هشت",
        "نه",
      ];
      const teens = [
        "ده",
        "یازده",
        "دوازده",
        "سیزده",
        "چهارده",
        "پانزده",
        "شانزده",
        "هفده",
        "هجده",
        "نوزده",
      ];
      const tens = [
        "",
        "",
        "بیست",
        "سی",
        "چهل",
        "پنجاه",
        "شصت",
        "هفتاد",
        "هشتاد",
        "نود",
      ];
      const hundreds = [
        "",
        "صد",
        "دویست",
        "سیصد",
        "چهارصد",
        "پانصد",
        "ششصد",
        "هفتصد",
        "هشتصد",
        "نهصد",
      ];
      const scales = ["", "هزار", "میلیون", "میلیارد", "تریلیون"];

      const groupToWords = (n) => {
        const parts = [];
        const h = Math.floor(n / 100);
        const rem = n % 100;
        if (h) parts.push(hundreds[h]);
        if (rem >= 10 && rem < 20) {
          parts.push(teens[rem - 10]);
        } else {
          const t = Math.floor(rem / 10);
          const o = rem % 10;
          if (t) parts.push(tens[t]);
          if (o) parts.push(ones[o]);
        }
        return parts.join(" و ");
      };

      const groups = [];
      let n = Math.floor(num);
      while (n > 0) {
        groups.unshift(n % 1000);
        n = Math.floor(n / 1000);
      }

      const words = [];
      const offset = groups.length - 1;
      groups.forEach((g, i) => {
        if (g === 0) return;
        const scaleIndex = offset - i;
        const groupWords = groupToWords(g);
        words.push(
          scaleIndex > 0 ? `${groupWords} ${scales[scaleIndex]}` : groupWords
        );
      });

      return words.join(" و ");
    },
    numberToWordsEn(num) {
      if (num === 0) return "zero";
      const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
      ];
      const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
      ];
      const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
      ];
      const scales = ["", "thousand", "million", "billion", "trillion"];

      const groupToWords = (n) => {
        const parts = [];
        const h = Math.floor(n / 100);
        const rem = n % 100;
        if (h) parts.push(`${ones[h]} hundred`);
        if (rem >= 10 && rem < 20) {
          parts.push(teens[rem - 10]);
        } else {
          const t = Math.floor(rem / 10);
          const o = rem % 10;
          if (t && o) parts.push(`${tens[t]}-${ones[o]}`);
          else if (t) parts.push(tens[t]);
          else if (o) parts.push(ones[o]);
        }
        return parts.join(" ");
      };

      const groups = [];
      let n = Math.floor(num);
      while (n > 0) {
        groups.unshift(n % 1000);
        n = Math.floor(n / 1000);
      }

      const words = [];
      const offset = groups.length - 1;
      groups.forEach((g, i) => {
        if (g === 0) return;
        const scaleIndex = offset - i;
        const groupWords = groupToWords(g);
        words.push(
          scaleIndex > 0 ? `${groupWords} ${scales[scaleIndex]}` : groupWords
        );
      });

      return words.join(" ");
    },
    wordsToNumberFa(text) {
      const wordValues = {
        صفر: 0,
        یک: 1,
        دو: 2,
        سه: 3,
        چهار: 4,
        پنج: 5,
        شش: 6,
        هفت: 7,
        هشت: 8,
        نه: 9,
        ده: 10,
        یازده: 11,
        دوازده: 12,
        سیزده: 13,
        چهارده: 14,
        پانزده: 15,
        شانزده: 16,
        هفده: 17,
        هجده: 18,
        نوزده: 19,
        بیست: 20,
        سی: 30,
        چهل: 40,
        پنجاه: 50,
        شصت: 60,
        هفتاد: 70,
        هشتاد: 80,
        نود: 90,
        صد: 100,
        دویست: 200,
        سیصد: 300,
        چهارصد: 400,
        پانصد: 500,
        ششصد: 600,
        هفتصد: 700,
        هشتصد: 800,
        نهصد: 900,
      };
      const scales = {
        هزار: 1000,
        میلیون: 1000000,
        میلیارد: 1000000000,
        تریلیون: 1000000000000,
      };

      const words = text
        .trim()
        .split(/\s+/)
        .map((w) => w.replace(/[^\u0600-\u06FF]/g, ""))
        .filter((w) => w && w !== "و");

      if (words.length === 0) throw new Error("invalid-word");

      let total = 0;
      let current = 0;
      for (const word of words) {
        if (word in wordValues) {
          current += wordValues[word];
        } else if (word in scales) {
          current = current === 0 ? 1 : current;
          total += current * scales[word];
          current = 0;
        } else {
          throw new Error("invalid-word");
        }
      }
      return total + current;
    },
    wordsToNumberEn(text) {
      const small = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20,
        thirty: 30,
        forty: 40,
        fifty: 50,
        sixty: 60,
        seventy: 70,
        eighty: 80,
        ninety: 90,
      };
      const scales = {
        hundred: 100,
        thousand: 1000,
        million: 1000000,
        billion: 1000000000,
        trillion: 1000000000000,
      };

      const words = text
        .toLowerCase()
        .replace(/-/g, " ")
        .replace(/[^a-z\s]/g, "")
        .split(/\s+/)
        .filter((w) => w && w !== "and");

      if (words.length === 0) throw new Error("invalid-word");

      let total = 0;
      let current = 0;
      for (const word of words) {
        if (word in small) {
          current += small[word];
        } else if (word === "hundred") {
          current = (current || 1) * 100;
        } else if (word in scales) {
          total += (current || 1) * scales[word];
          current = 0;
        } else {
          throw new Error("invalid-word");
        }
      }
      return total + current;
    },
    resetConversion() {
      this.inputValue = "";
      this.result = "";
    },
    resetCurrencyConversion() {
      this.currencyInput = "";
      this.currencyResult = "";
      this.currencyFetchError = null;
    },
  },
};
</script>