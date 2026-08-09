<template>
  <div class="container py-8 mx-auto p-6 dark:text-white text-gray-800 mb-12">
    <!-- Link to return to projects -->
    <div class="max-w-3xl mx-auto">
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
    <h1 class="text-4xl font-bold text-center my-12 dark:text-white">
      {{ $t("financialCalculator.title") }}
    </h1>

    <div
      class="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 md:p-10 border border-gray-200 dark:border-gray-800"
    >
      <!-- Deposit section -->
      <div class="text-xl">
        <p
          class="text-gray-600 dark:text-gray-300 mt-1 mb-10"
          :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'"
        >
          <span class="font-bold">{{
            $t("financialCalculator.currencyNoteLabel")
          }}</span>
          {{ $t("financialCalculator.currencyNoteText") }}
        </p>
      </div>
      <div class="mb-8">
        <p class="text-2xl font-semibold dark:text-white">
          {{ $t("financialCalculator.deposit.title") }}
        </p>
        <p class="text-gray-600 dark:text-gray-300 mt-2">
          {{ $t("financialCalculator.deposit.description") }}
        </p>
      </div>

      <div class="space-y-6">
        <label class="block">
          <span class="text-lg font-medium dark:text-white">{{
            $t("financialCalculator.deposit.calcType")
          }}</span>
          <div class="relative mt-3">
            <select
              v-model="depositCalcType"
              class="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 pe-10 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            >
              <option
                v-for="option in depositCalcOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ $t(option.labelKey) }}
              </option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="pointer-events-none absolute end-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </label>

        <label class="block">
          <span class="text-lg font-medium dark:text-white">{{
            $t("financialCalculator.deposit.amountLabel")
          }}</span>
          <input
            type="number"
            :value="depositAmount"
            @input="limitDigits($event, 'depositAmount', 15)"
            :placeholder="$t('financialCalculator.deposit.amountLabel')"
            class="w-full mt-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </label>

        <label class="block">
          <span class="text-lg font-medium dark:text-white">{{
            $t("financialCalculator.deposit.daysLabel")
          }}</span>
          <input
            type="number"
            :value="depositDays"
            @input="limitDigits($event, 'depositDays', 4)"
            :placeholder="$t('financialCalculator.deposit.daysLabel')"
            class="w-full mt-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </label>

        <label v-if="depositCalcType === 'amount'" class="block">
          <span class="text-lg font-medium dark:text-white">{{
            $t("financialCalculator.deposit.rateLabel")
          }}</span>
          <input
            type="number"
            :value="depositRate"
            @input="limitDigits($event, 'depositRate', 3, 100)"
            :placeholder="$t('financialCalculator.deposit.rateLabel')"
            class="w-full mt-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </label>

        <label v-else class="block">
          <span class="text-lg font-medium dark:text-white">{{
            $t("financialCalculator.deposit.knownProfitLabel")
          }}</span>
          <input
            type="number"
            :value="depositKnownProfit"
            @input="limitDigits($event, 'depositKnownProfit', 15)"
            :placeholder="$t('financialCalculator.deposit.knownProfitLabel')"
            class="w-full mt-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </label>

        <div
          class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start mt-6"
        >
          <button
            @click="calculateDeposit"
            class="w-full sm:w-auto sm:min-w-[140px] rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700 transition shrink-0"
          >
            {{ $t("financialCalculator.deposit.convertButton") }}
          </button>

          <button
            @click="resetDeposit"
            type="button"
            class="w-full sm:w-auto sm:min-w-[100px] rounded-xl bg-gray-200 px-6 py-3 text-gray-800 font-semibold shadow hover:bg-gray-300 transition shrink-0 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            {{ $t("financialCalculator.deposit.resetButton") }}
          </button>
        </div>

        <div
          class="bg-gray-100/80 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2"
        >
          <template v-if="depositCalcType === 'amount'">
            <p
              class="text-lg font-semibold text-gray-700 dark:text-gray-200 flex flex-wrap gap-2 items-center justify-start"
            >
              <span
                >{{ $t("financialCalculator.deposit.dailyProfitLabel") }}:</span
              >
              <span
                dir="ltr"
                class="text-xl font-bold text-blue-600 dark:text-blue-400"
              >
                {{ depositDailyProfit ? depositDailyProfit : "---" }}
              </span>
              <span
                v-if="depositDailyProfitWords"
                class="text-sm text-gray-500 dark:text-gray-400 w-full"
              >
                ({{ $t("financialCalculator.wordsLabel") }}:
                {{ depositDailyProfitWords }})
              </span>
            </p>
            <p
              class="text-lg font-semibold text-gray-700 dark:text-gray-200 flex flex-wrap gap-2 items-center justify-start"
            >
              <span
                >{{
                  $t("financialCalculator.deposit.monthlyProfitLabel")
                }}:</span
              >
              <span
                dir="ltr"
                class="text-xl font-bold text-blue-600 dark:text-blue-400"
              >
                {{ depositMonthlyProfit ? depositMonthlyProfit : "---" }}
              </span>
              <span
                v-if="depositMonthlyProfitWords"
                class="text-sm text-gray-500 dark:text-gray-400 w-full"
              >
                ({{ $t("financialCalculator.wordsLabel") }}:
                {{ depositMonthlyProfitWords }})
              </span>
            </p>
            <p
              class="text-lg font-semibold text-gray-700 dark:text-gray-200 flex flex-wrap gap-2 items-center justify-start"
            >
              <span
                >{{ $t("financialCalculator.deposit.totalProfitLabel") }}:</span
              >
              <span
                dir="ltr"
                class="text-xl font-bold text-blue-600 dark:text-blue-400"
              >
                {{ depositTotalProfit ? depositTotalProfit : "---" }}
              </span>
              <span
                v-if="depositTotalProfitWords"
                class="text-sm text-gray-500 dark:text-gray-400 w-full"
              >
                ({{ $t("financialCalculator.wordsLabel") }}:
                {{ depositTotalProfitWords }})
              </span>
            </p>
          </template>
          <template v-else>
            <p
              class="text-lg font-semibold text-gray-700 dark:text-gray-200 flex flex-wrap gap-2 items-center justify-start"
            >
              <span
                >{{ $t("financialCalculator.deposit.rateResultLabel") }}:</span
              >
              <span
                dir="ltr"
                class="text-xl font-bold text-blue-600 dark:text-blue-400"
              >
                {{ depositRateResult ? depositRateResult : "---" }}
              </span>
              <span
                v-if="depositDailyProfitWords"
                class="text-sm text-gray-500 dark:text-gray-400 w-full"
              >
                ({{ $t("financialCalculator.wordsLabel") }}:
                {{ depositDailyProfitWords }})
              </span>
            </p>
          </template>
          <p v-if="depositError" class="text-sm text-red-500">
            {{ depositError }}
          </p>
        </div>
      </div>

      <hr class="my-10 border-gray-200 dark:border-gray-800" />

      <!-- Loan section -->
      <div class="mb-8">
        <p class="text-2xl font-semibold dark:text-white">
          {{ $t("financialCalculator.loan.title") }}
        </p>
        <p class="text-gray-600 dark:text-gray-300 mt-2">
          {{ $t("financialCalculator.loan.description") }}
        </p>
      </div>

      <div class="space-y-6">
        <label class="block">
          <span class="text-lg font-medium dark:text-white">{{
            $t("financialCalculator.loan.calcType")
          }}</span>
          <div class="relative mt-3">
            <select
              v-model="loanCalcType"
              class="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 pe-10 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            >
              <option
                v-for="option in loanCalcOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ $t(option.labelKey) }}
              </option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="pointer-events-none absolute end-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </label>

        <label class="block">
          <span class="text-lg font-medium dark:text-white">{{
            $t("financialCalculator.loan.amountLabel")
          }}</span>
          <input
            type="number"
            :value="loanAmount"
            @input="limitDigits($event, 'loanAmount', 15)"
            :placeholder="$t('financialCalculator.loan.amountLabel')"
            class="w-full mt-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </label>

        <label class="block">
          <span class="text-lg font-medium dark:text-white">{{
            $t("financialCalculator.loan.monthsLabel")
          }}</span>
          <input
            type="number"
            :value="loanMonths"
            @input="limitDigits($event, 'loanMonths', 3)"
            :placeholder="$t('financialCalculator.loan.monthsLabel')"
            class="w-full mt-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </label>

        <label v-if="loanCalcType === 'installment'" class="block">
          <span class="text-lg font-medium dark:text-white">{{
            $t("financialCalculator.loan.rateLabel")
          }}</span>
          <input
            type="number"
            :value="loanRate"
            @input="limitDigits($event, 'loanRate', 3, 100)"
            :placeholder="$t('financialCalculator.loan.rateLabel')"
            class="w-full mt-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </label>

        <label v-else class="block">
          <span class="text-lg font-medium dark:text-white">{{
            $t("financialCalculator.loan.installmentAmountLabel")
          }}</span>
          <input
            type="number"
            :value="loanInstallmentAmount"
            @input="limitDigits($event, 'loanInstallmentAmount', 15)"
            :placeholder="$t('financialCalculator.loan.installmentAmountLabel')"
            class="w-full mt-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </label>

        <div
          class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start mt-6"
        >
          <button
            @click="calculateLoan"
            class="w-full sm:w-auto sm:min-w-[140px] rounded-xl bg-green-600 px-6 py-3 text-white font-semibold shadow hover:bg-green-700 transition shrink-0"
          >
            {{ $t("financialCalculator.loan.convertButton") }}
          </button>

          <button
            @click="resetLoan"
            type="button"
            class="w-full sm:w-auto sm:min-w-[100px] rounded-xl bg-gray-200 px-6 py-3 text-gray-800 font-semibold shadow hover:bg-gray-300 transition shrink-0 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            {{ $t("financialCalculator.loan.resetButton") }}
          </button>
        </div>

        <div
          class="bg-gray-100/80 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2"
        >
          <template v-if="loanCalcType === 'installment'">
            <p
              class="text-lg font-semibold text-gray-700 dark:text-gray-200 flex flex-wrap gap-2 items-center justify-start"
            >
              <span
                >{{
                  $t("financialCalculator.loan.installmentResultLabel")
                }}:</span
              >
              <span
                dir="ltr"
                class="text-xl font-bold text-green-600 dark:text-green-400"
              >
                {{ loanInstallmentResult ? loanInstallmentResult : "---" }}
              </span>
              <span
                v-if="loanInstallmentResultWords"
                class="text-sm text-gray-500 dark:text-gray-400 w-full"
              >
                ({{ $t("financialCalculator.wordsLabel") }}:
                {{ loanInstallmentResultWords }})
              </span>
            </p>
            <p
              class="text-lg font-semibold text-gray-700 dark:text-gray-200 flex flex-wrap gap-2 items-center justify-start"
            >
              <span
                >{{ $t("financialCalculator.loan.totalPaymentLabel") }}:</span
              >
              <span
                dir="ltr"
                class="text-xl font-bold text-green-600 dark:text-green-400"
              >
                {{ loanTotalPayment ? loanTotalPayment : "---" }}
              </span>
              <span
                v-if="loanTotalPaymentWords"
                class="text-sm text-gray-500 dark:text-gray-400 w-full"
              >
                ({{ $t("financialCalculator.wordsLabel") }}:
                {{ loanTotalPaymentWords }})
              </span>
            </p>
            <p
              class="text-lg font-semibold text-gray-700 dark:text-gray-200 flex flex-wrap gap-2 items-center justify-start"
            >
              <span
                >{{ $t("financialCalculator.loan.totalInterestLabel") }}:</span
              >
              <span
                dir="ltr"
                class="text-xl font-bold text-green-600 dark:text-green-400"
              >
                {{ loanTotalInterest ? loanTotalInterest : "---" }}
              </span>
              <span
                v-if="loanTotalInterestWords"
                class="text-sm text-gray-500 dark:text-gray-400 w-full"
              >
                ({{ $t("financialCalculator.wordsLabel") }}:
                {{ loanTotalInterestWords }})
              </span>
            </p>
          </template>
          <template v-else>
            <p
              class="text-lg font-semibold text-gray-700 dark:text-gray-200 flex flex-wrap gap-2 items-center justify-start"
            >
              <span>{{ $t("financialCalculator.loan.rateResultLabel") }}:</span>
              <span
                dir="ltr"
                class="text-xl font-bold text-green-600 dark:text-green-400"
              >
                {{ loanRateResult ? loanRateResult : "---" }}
              </span>
            </p>
          </template>
          <p v-if="loanError" class="text-sm text-red-500">
            {{ loanError }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Financial-Calculator",
  data() {
    return {
      depositCalcType: "amount",
      depositAmount: "",
      depositRate: "",
      depositDays: "",
      depositKnownProfit: "",
      depositDailyProfit: "",
      depositMonthlyProfit: "",
      depositTotalProfit: "",
      depositDailyProfitWords: "",
      depositMonthlyProfitWords: "",
      depositTotalProfitWords: "",
      depositRateResult: "",
      depositError: "",
      depositCalcOptions: [
        {
          value: "amount",
          labelKey: "financialCalculator.deposit.options.amount",
        },
        {
          value: "rate",
          labelKey: "financialCalculator.deposit.options.rate",
        },
      ],

      loanCalcType: "installment",
      loanAmount: "",
      loanRate: "",
      loanMonths: "",
      loanInstallmentAmount: "",
      loanInstallmentResult: "",
      loanTotalPayment: "",
      loanTotalInterest: "",
      loanInstallmentResultWords: "",
      loanTotalPaymentWords: "",
      loanTotalInterestWords: "",
      loanRateResult: "",
      loanError: "",
      loanCalcOptions: [
        {
          value: "installment",
          labelKey: "financialCalculator.loan.options.installment",
        },
        {
          value: "rate",
          labelKey: "financialCalculator.loan.options.rate",
        },
      ],
    };
  },
  methods: {
    limitDigits(event, field, maxDigits, maxValue) {
      let value = event.target.value;
      const isNegative = value.startsWith("-");
      let unsigned = isNegative ? value.slice(1) : value;

      const dotIndex = unsigned.indexOf(".");
      let intPart = dotIndex === -1 ? unsigned : unsigned.slice(0, dotIndex);
      const decPart = dotIndex === -1 ? "" : unsigned.slice(dotIndex);

      if (intPart.length > maxDigits) {
        intPart = intPart.slice(0, maxDigits);
        value = (isNegative ? "-" : "") + intPart + decPart;
      }

      let numericValue = value === "" || value === "-" ? "" : parseFloat(value);

      if (
        maxValue !== undefined &&
        numericValue !== "" &&
        numericValue > maxValue
      ) {
        numericValue = maxValue;
        value = String(maxValue);
      }

      if (event.target.value !== value) {
        event.target.value = value;
      }

      this[field] = numericValue;
    },
    numberToWordsFa(num) {
      num = Math.round(Math.abs(num || 0));
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
        "ده",
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

      const threeDigits = (n) => {
        const parts = [];
        const h = Math.floor(n / 100);
        const r = n % 100;
        if (h > 0) parts.push(hundreds[h]);
        if (r > 0) {
          if (r < 10) parts.push(ones[r]);
          else if (r < 20) parts.push(teens[r - 10]);
          else {
            const t = Math.floor(r / 10);
            const o = r % 10;
            parts.push(o === 0 ? tens[t] : `${tens[t]} و ${ones[o]}`);
          }
        }
        return parts.join(" و ");
      };

      const groups = [];
      let str = String(num);
      while (str.length > 0) {
        groups.unshift(str.slice(-3));
        str = str.slice(0, -3);
      }

      const words = [];
      let scaleIndex = groups.length - 1;
      for (const group of groups) {
        const n = parseInt(group, 10);
        if (n > 0) {
          const scaleWord = scales[scaleIndex] ? ` ${scales[scaleIndex]}` : "";
          words.push(threeDigits(n) + scaleWord);
        }
        scaleIndex--;
      }

      return words.join(" و ");
    },

    calculateDeposit() {
      this.depositError = "";
      this.depositDailyProfit = "";
      this.depositMonthlyProfit = "";
      this.depositTotalProfit = "";
      this.depositRateResult = "";

      const principal = parseFloat(this.depositAmount);
      const days = parseFloat(this.depositDays);

      if (
        Number.isNaN(principal) ||
        Number.isNaN(days) ||
        principal <= 0 ||
        days <= 0
      ) {
        this.depositError = this.$t("financialCalculator.deposit.invalidInput");
        return;
      }

      const currency = this.$t("financialCalculator.currency");

      if (this.depositCalcType === "amount") {
        const rate = parseFloat(this.depositRate);
        if (Number.isNaN(rate) || rate < 0) {
          this.depositError = this.$t(
            "financialCalculator.deposit.invalidInput"
          );
          return;
        }
        const dailyProfit = (principal * rate) / 100 / 365;
        const totalProfit = dailyProfit * days;
        const monthlyProfit = dailyProfit * 30;

        this.depositDailyProfit = `${Math.round(dailyProfit).toLocaleString(
          "en-US"
        )} ${currency}`;
        this.depositMonthlyProfit = `${Math.round(monthlyProfit).toLocaleString(
          "en-US"
        )} ${currency}`;
        this.depositTotalProfit = `${Math.round(totalProfit).toLocaleString(
          "en-US"
        )} ${currency}`;
        this.depositDailyProfitWords = this.numberToWordsFa(dailyProfit);
        this.depositMonthlyProfitWords = this.numberToWordsFa(monthlyProfit);
        this.depositTotalProfitWords = this.numberToWordsFa(totalProfit);
      } else {
        const knownProfit = parseFloat(this.depositKnownProfit);
        if (Number.isNaN(knownProfit) || knownProfit < 0) {
          this.depositError = this.$t(
            "financialCalculator.deposit.invalidInput"
          );
          return;
        }
        const rate = (knownProfit * 365 * 100) / (principal * days);
        this.depositRateResult = `${rate.toFixed(2)} %`;
      }
    },
    resetDeposit() {
      this.depositAmount = "";
      this.depositRate = "";
      this.depositDays = "";
      this.depositKnownProfit = "";
      this.depositDailyProfit = "";
      this.depositMonthlyProfit = "";
      this.depositTotalProfit = "";
      this.depositDailyProfitWords = "";
      this.depositMonthlyProfitWords = "";
      this.depositTotalProfitWords = "";
      this.depositRateResult = "";
      this.depositError = "";
    },

    loanInstallmentForRate(principal, i, n) {
      if (i === 0) return principal / n;
      return (principal * i) / (1 - Math.pow(1 + i, -n));
    },
    calculateLoan() {
      this.loanError = "";
      this.loanInstallmentResult = "";
      this.loanTotalPayment = "";
      this.loanTotalInterest = "";
      this.loanRateResult = "";

      const principal = parseFloat(this.loanAmount);
      const months = parseInt(this.loanMonths, 10);

      if (
        Number.isNaN(principal) ||
        Number.isNaN(months) ||
        principal <= 0 ||
        months <= 0
      ) {
        this.loanError = this.$t("financialCalculator.loan.invalidInput");
        return;
      }

      const currency = this.$t("financialCalculator.currency");

      if (this.loanCalcType === "installment") {
        const annualRate = parseFloat(this.loanRate);
        if (Number.isNaN(annualRate) || annualRate < 0) {
          this.loanError = this.$t("financialCalculator.loan.invalidInput");
          return;
        }
        const monthlyRate = annualRate === 0 ? 0 : annualRate / 100 / 12;
        const installment = this.loanInstallmentForRate(
          principal,
          monthlyRate,
          months
        );
        const totalPayment = installment * months;
        const totalInterest = totalPayment - principal;

        this.loanInstallmentResult = `${Math.round(installment).toLocaleString(
          "en-US"
        )} ${currency}`;
        this.loanTotalPayment = `${Math.round(totalPayment).toLocaleString(
          "en-US"
        )} ${currency}`;
        this.loanTotalInterest = `${Math.round(totalInterest).toLocaleString(
          "en-US"
        )} ${currency}`;
        this.loanInstallmentResultWords = this.numberToWordsFa(installment);
        this.loanTotalPaymentWords = this.numberToWordsFa(totalPayment);
        this.loanTotalInterestWords = this.numberToWordsFa(totalInterest);
      } else {
        const installmentAmount = parseFloat(this.loanInstallmentAmount);
        if (Number.isNaN(installmentAmount) || installmentAmount <= 0) {
          this.loanError = this.$t("financialCalculator.loan.invalidInput");
          return;
        }
        const minInstallment = principal / months;
        if (installmentAmount < minInstallment - 0.1) {
          this.loanError = this.$t("financialCalculator.loan.invalidRateRange");
          return;
        }
        if (Math.abs(installmentAmount - minInstallment) < 0.5) {
          this.loanRateResult = "0.00 %";
          return;
        }
        let lo = 0;
        let hi = 10;
        for (let k = 0; k < 100; k++) {
          const mid = (lo + hi) / 2;
          const value = this.loanInstallmentForRate(principal, mid, months);
          if (value < installmentAmount) {
            lo = mid;
          } else {
            hi = mid;
          }
        }
        const monthlyRate = (lo + hi) / 2;
        const annualRate = monthlyRate * 12 * 100;
        this.loanRateResult = `${annualRate.toFixed(2)} %`;
      }
    },
    resetLoan() {
      this.loanAmount = "";
      this.loanRate = "";
      this.loanMonths = "";
      this.loanInstallmentAmount = "";
      this.loanInstallmentResult = "";
      this.loanTotalPayment = "";
      this.loanTotalInterest = "";
      this.loanInstallmentResultWords = "";
      this.loanTotalPaymentWords = "";
      this.loanTotalInterestWords = "";
      this.loanRateResult = "";
      this.loanError = "";
    },
  },
};
</script>