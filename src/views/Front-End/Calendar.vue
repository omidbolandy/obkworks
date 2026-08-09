<template>
    <!-- Link to return to projects -->
    <div class="max-w-4xl pt-8 mx-6 sm:mx-auto">
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

  <!-- Calendar_Project -->
  <div
    id="calendar"
    class="w-[92%] max-w-4xl mt-8 mb-11 sm:mt-16 pb-10 sm:pb-[3.75rem] p-4 sm:p-6 bg-white rounded-2xl shadow-xl flex flex-col items-center mx-auto dark:bg-gray-600 dark:text-white text-gray-800"
  >
    <!-- Title -->
    <h1
      class="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mt-4 dark:text-white"
    >
      {{ $t("calendar.title") }}
    </h1>

    <!-- Calendar -->
    <div
      class="w-[100%] max-w-lg bg-white rounded-2xl shadow-xl mt-6 p-4 sm:p-6 dark:bg-gray-800 dark:text-white text-gray-800"
    >
      <!-- Calendar-Navbar-Buttons -->
      <div
        :dir="calcDir"
        class="flex items-center bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-t-2xl gap-2 dark:bg-gray-700 dark:text-white"
      >
        <button
          @click="previousMonth"
          class="p-1 rounded-full hover:bg-blue-700 transition dark:hover:bg-gray-600"
          :title="$t('calendar.previousMonth')"
        >
          <img
            src="../../assets/Icons/chevron_left.png"
            :alt="$t('calendar.previousMonth')"
            class="w-9 h-9"
            :class="{ 'scale-x-[-1]': isPersianLocale }"
          />
        </button>
        <h2
          dir="ltr"
          class="text-lg font-semibold flex-1 text-center min-w-[160px] text-white dark:text-white"
        >
          {{ currentMonthLabel }}
        </h2>
        <button
          @click="nextMonth"
          class="p-1 rounded-full hover:bg-blue-700 transition dark:hover:bg-gray-600"
          :title="$t('calendar.nextMonth')"
        >
          <img
            src="../../assets/Icons/chevron_right.png"
            :alt="$t('calendar.nextMonth')"
            class="w-9 h-9"
            :class="{ 'scale-x-[-1]': isPersianLocale }"
          />
          
        </button>

        <button
          @click="goToCurrentMonth"
          class="h-12 w-12 p-2 ms-8 rounded-full hover:bg-blue-700 transition dark:hover:bg-gray-600"
          :title="$t('calendar.currentMonth')"
        >
          <img
            src="../../assets/Icons/history.svg"
            :alt="$t('calendar.currentMonth')"
          />
        </button>
      </div>

      <table
        class="w-full text-center border-collapse table-fixed dark:text-white text-gray-800"
      >
        <thead
          class="bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
        >
          <tr>
            <th
              v-for="day in weekDays"
              :key="day"
              class="py-2 font-medium dark:text-white text-gray-800"
            >
              {{ day }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(week, index) in weeks" :key="index">
            <td
              v-for="day in week"
              :key="`${day.year}-${day.month}-${day.date}`"
              class="p-[2px] sm:p-1 dark:text-white text-gray-800"
            >
              <div
                class="w-full aspect-square flex items-center justify-center text-sm sm:text-base font-semibold rounded-md transition dark:text-white text-gray-800"
                :class="[
                  dayStateClass(day),
                  { 'hover:bg-gray-300 hover:text-black cursor-pointer': isCurrentMonth(day) },
                ]"
                @click="toggleSelect(day)"
              >
                {{ isCurrentMonth(day) ? formatDisplayNumber(day.date) : "" }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- A three-panel display showing the Solar Hijri, Gregorian, and Lunar Hijri dates. -->
      <div
        class="mt-6 grid grid-cols-3 divide-x rtl:divide-x-reverse divide-gray-300 dark:divide-gray-600 bg-gray-100 rounded-lg w-full dark:bg-gray-700 dark:text-white text-gray-800 overflow-hidden"
      >
        <div
          class="flex flex-col items-center justify-center py-3 px-2"
          dir="ltr"
        >
          <span class="text-xs text-gray-500 dark:text-gray-300">{{
            dateBoxLabels.gregorian
          }}</span>
          <span class="text-sm font-bold mt-1">{{ gregorianDisplay }}</span>
        </div>
        <div
          class="flex flex-col items-center justify-center py-3 px-2"
          dir="rtl"
        >
          <span class="text-xs text-gray-500 dark:text-gray-300">{{
            dateBoxLabels.jalali
          }}</span>
          <span class="text-sm font-bold mt-1">{{ jalaliDisplay }}</span>
        </div>
        <div class="flex flex-col items-center justify-center py-3 px-2">
          <span class="text-xs text-gray-500 dark:text-gray-300">{{
            dateBoxLabels.hijri
          }}</span>
          <span class="text-sm font-bold mt-1">{{ hijriDisplay }}</span>
        </div>
      </div>

      <!-- The moment of the turn of the year -->
      <div
        class="mt-6 p-4 bg-gray-100 rounded-lg w-full dark:bg-gray-700 dark:text-white text-gray-800"
      >
        <h3 class="text-lg font-bold text-gray-800 dark:text-white">
          {{ $t("calendar.nowruz.title") }}
        </h3>
        <div
          class="mt-2 grid grid-cols-2 divide-x rtl:divide-x-reverse divide-gray-300 dark:divide-gray-600 bg-white rounded-lg dark:bg-gray-800 overflow-hidden"
        >
          <div
            dir="rtl"
            class="flex flex-col items-center justify-center py-3 px-2"
          >
            <span class="text-xs text-gray-500 dark:text-gray-300">{{
              $t("calendar.nowruz.jalali")
            }}</span>
            <span class="text-sm font-bold mt-1">{{
              nowruzPersianDisplay
            }}</span>
          </div>
          <div
            class="flex flex-col items-center justify-center py-3 px-2"
            dir="ltr"
          >
            <span class="text-xs text-gray-500 dark:text-gray-300">{{
              $t("calendar.nowruz.gregorian")
            }}</span>
            <span class="text-sm font-bold mt-1">{{
              nowruzGregorianDisplay
            }}</span>
          </div>
        </div>
      </div>

      <!-- Holiday Box -->
      <div
        class="mt-6 p-4 bg-gray-100 rounded-lg w-full dark:bg-gray-700 dark:text-white text-gray-800"
      >
        <h3 class="text-lg font-bold text-gray-800 dark:text-white">
          {{ $t("calendar.holidays") }}
        </h3>
        <ul
          v-if="holidaysList.length > 0"
          class="mt-2 space-y-2 dark:text-white text-gray-800"
        >
          <li
            v-for="holiday in holidaysList"
            :key="holiday.name"
            class="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all dark:bg-gray-800 dark:text-white text-gray-800"
          >
            <div
              class="flex items-center space-x-2 dark:text-white text-gray-800"
            >
              <span class="font-bold text-blue-600 dark:text-blue-400">{{
                holiday.name
              }}</span>
            </div>
            <div class="mt-1 text-sm text-gray-700 dark:text-gray-300">
              <span class="font-semibold dark:text-gray-300">{{
                holiday.displayDate
              }}</span>
              -
              {{ holiday.reason }}
            </div>
          </li>
        </ul>
        <p v-else class="text-sm text-gray-500 mt-2 dark:text-gray-300">
          {{ $t("calendar.noHolidays") }}
        </p>
      </div>
    </div>

    <!-- Date Converter -->
    <div
      :dir="calcDir"
      class="mt-6 p-4 bg-gray-100 rounded-lg w-full max-w-2xl dark:bg-gray-700 dark:text-white text-gray-800"
    >
      <h3 class="text-lg font-bold text-gray-800 dark:text-white">
        {{ converterTitle }}
      </h3>

      <div class="mt-3 inline-flex p-1 rounded-xl bg-gray-200/80 dark:bg-gray-800">
        <button
          @click="setConverterMode('toGregorian')"
          :class="[
            'px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200',
            converterMode === 'toGregorian'
              ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
          ]"
        >
          {{ $t("converterLabels.titleToGregorian") }}
        </button>
        <button
          @click="setConverterMode('toJalali')"
          :class="[
            'px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200',
            converterMode === 'toJalali'
              ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
          ]"
        >
          {{ $t("converterLabels.titleToJalali") }}
        </button>
      </div>

      <div class="mt-3 grid grid-cols-3 gap-2">
        <input
          v-model="converterYear"
          type="number"
          min="1"
          :max="converterMaxYear"
          @input="clampConverterYear"
          :placeholder="converterLabels.year"
          class="w-full p-2 rounded-md border border-gray-300 text-center dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
        <select
          v-model="converterMonth"
          class="w-full p-2 rounded-md border border-gray-300 text-center dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        >
          <option
            v-for="(name, index) in converterMonthNames"
            :key="index"
            :value="index + 1"
          >
            {{ name }}
          </option>
        </select>
        <input
          v-model="converterDay"
          type="number"
          min="1"
          max="31"
          @input="clampConverterDay"
          :placeholder="converterLabels.day"
          class="w-full p-2 rounded-md border border-gray-300 text-center dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div class="mt-3 flex gap-2">
        <button
          @click="convertDate"
          class="flex-1 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition dark:bg-gray-600 dark:hover:bg-gray-500"
        >
          {{ converterLabels.button }}
        </button>
        <button
          @click="resetConverter"
          class="flex-1 py-2 rounded-md bg-gray-300 text-gray-800 font-semibold hover:bg-gray-400 transition dark:bg-gray-800 dark:text-white dark:hover:bg-gray-900"
        >
          {{ converterLabels.reset }}
        </button>
      </div>
      <p
        v-if="converterResult"
        :dir="converterResultDir"
        class="mt-3 text-center font-bold bg-white p-3 rounded-lg shadow dark:bg-gray-800 dark:text-white"
      >
        {{ converterResult }}
      </p>
      <p v-if="converterError" class="mt-3 text-center text-red-500 text-sm">
        {{ converterError }}
      </p>
    </div>
  </div>
</template>

<script>
import holidays from "@/assets/holidays.json";
import dayjs from "dayjs";

export default {
  name: "Calendar-1",
  data() {
    return {
      currentDate: new Date(),
      selectedDate: null,
      selectedDay: null,
      holidays,
      converterYear: "",
      converterMonth: 1,
      converterDay: "",
      converterResult: null,
      converterError: null,
      converterMode:
        this.$i18n && this.$i18n.locale === "fa" ? "toGregorian" : "toJalali",
    };
  },
  computed: {
    weeks() {
      return this.isPersianLocale
        ? this.calculatePersianWeeks(this.currentDate)
        : this.calculateGregorianWeeks(this.currentDate);
    },
    holidaysList() {
      return this.holidays
        .map((holiday) => this.normalizeHoliday(holiday))
        .filter((holiday) => holiday.displayMonth === this.displayMonthValue)
        .filter((holiday) => holiday.displayYear === this.displayYearValue);
    },
    calcDir() {
      try {
        return this.$i18n && String(this.$i18n.locale).startsWith("fa")
          ? "rtl"
          : null;
      } catch (e) {
        return null;
      }
    },
    isPersianLocale() {
      return this.$i18n && String(this.$i18n.locale).startsWith("fa");
    },
    weekDays() {
      return this.isPersianLocale
        ? ["ش", "ی", "د", "س", "چ", "پ", "ج"]
        : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    },
    currentMonthLabel() {
      if (this.isPersianLocale) {
        const parts = this.getPersianParts(this.currentDate);
        return `${this.formatDisplayNumber(parts.year)} ${
          this.persianMonthNames[parts.month - 1]
        }`;
      }
      return `${
        this.englishMonthNames[this.currentDate.getMonth()]
      } ${this.currentDate.getFullYear()}`;
    },
    displayMonthValue() {
      return this.isPersianLocale
        ? this.getPersianParts(this.currentDate).month
        : this.currentDate.getMonth() + 1;
    },
    displayYearValue() {
      return this.isPersianLocale
        ? this.getPersianParts(this.currentDate).year
        : this.currentDate.getFullYear();
    },
    englishMonthNames() {
      return [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    },
    persianMonthNames() {
      return [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند",
      ];
    },
    activeDate() {
      if (!this.selectedDay) return new Date();
      if (this.selectedDay.gregorianDate) {
        return new Date(this.selectedDay.gregorianDate);
      }
      return new Date(
        this.selectedDay.year,
        this.selectedDay.month,
        this.selectedDay.date
      );
    },
    gregorianDisplay() {
      return dayjs(this.activeDate).format("DD MMMM YYYY");
    },
    jalaliDisplay() {
      const parts = this.getPersianParts(this.activeDate);
      return `${this.formatDisplayNumber(parts.day)} ${
        this.persianMonthNames[parts.month - 1]
      } ${this.formatDisplayNumber(parts.year)}`;
    },
    hijriDisplay() {
      const formatter = new Intl.DateTimeFormat("fa-IR-u-ca-islamic-umalqura", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const parts = formatter.formatToParts(this.activeDate);
      const values = Object.fromEntries(
        parts.map(({ type, value }) => [type, value])
      );
      return `${values.day} ${values.month} ${values.year}`;
    },
    dateBoxLabels() {
      return this.isPersianLocale
        ? { gregorian: "میلادی", jalali: "شمسی", hijri: "قمری" }
        : { gregorian: "Gregorian", jalali: "Jalali", hijri: "Hijri" };
    },
    converterTitle() {
      return this.converterMode === "toGregorian"
        ? this.$t("converterLabels.titleToGregorian")
        : this.$t("converterLabels.titleToJalali");
    },
    converterLabels() {
      return {
        year: this.$t("converterLabels.year"),
        day: this.$t("converterLabels.day"),
        button: this.$t("converterLabels.convert"),
        reset: this.$t("converterLabels.reset"),
      };
    },
    converterMonthNames() {
      return this.converterMode === "toGregorian"
        ? this.persianMonthNames
        : this.englishMonthNames;
    },
    converterResultDir() {
      return this.converterMode === "toGregorian" ? "ltr" : "rtl";
    },
    converterMaxYear() {
      return this.converterMode === "toGregorian" ? 1429 : 2050;
    },
    currentPersianYear() {
      return this.getPersianParts(this.currentDate).year;
    },
    nowruzGregorianDate() {
      return this.findGregorianDateForPersian(this.currentPersianYear, 1, 1);
    },
    nowruzMomentTime() {
      const year = this.nowruzGregorianDate.getFullYear();
      const jdeTT = this.meeusMarchEquinoxJDE(year);
      const deltaT = this.approxDeltaTSeconds(year);
      const jdUT = jdeTT - deltaT / 86400;
      const utcDate = this.julianDayToUtcDate(jdUT);
      const tehranMs = utcDate.getTime() + 3.5 * 60 * 60 * 1000;
      const tehran = new Date(tehranMs);
      return {
        hour: tehran.getUTCHours(),
        minute: tehran.getUTCMinutes(),
        second: tehran.getUTCSeconds(),
      };
    },
    nowruzTimeDisplay() {
      const { hour, minute, second } = this.nowruzMomentTime;
      const pad = (n) => String(n).padStart(2, "0");
      const raw = `${pad(hour)}:${pad(minute)}:${pad(second)}`;
      return this.isPersianLocale ? this.formatDisplayNumber(raw) : raw;
    },
    nowruzTimeDisplayEn() {
      const { hour, minute, second } = this.nowruzMomentTime;
      const pad = (n) => String(n).padStart(2, "0");
      return `${pad(hour)}:${pad(minute)}:${pad(second)}`;
    },
    nowruzPersianDisplay() {
      return `${this.formatDisplayNumber(1)} ${
        this.persianMonthNames[0]
      } ${this.formatDisplayNumber(this.currentPersianYear)} - ${
        this.nowruzTimeDisplay
      }`;
    },
    nowruzGregorianDisplay() {
      const d = this.nowruzGregorianDate;
      return `${d.getDate()} ${
        this.englishMonthNames[d.getMonth()]
      } ${d.getFullYear()} - ${this.nowruzTimeDisplayEn}`;
    },
  },
  methods: {
    calculateGregorianWeeks(currentDate) {
      const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      const lastDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      );
      const weeks = [];
      let currentDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1 - firstDayOfMonth.getDay()
      );

      while (currentDay <= lastDayOfMonth) {
        const week = [];
        for (let i = 0; i < 7; i++) {
          const dayObject = {
            date: currentDay.getDate(),
            day: currentDay.getDay(),
            month: currentDay.getMonth(),
            year: currentDay.getFullYear(),
            isCurrentMonth:
              currentDay.getMonth() === currentDate.getMonth() &&
              currentDay.getFullYear() === currentDate.getFullYear(),
          };
          week.push(dayObject);
          currentDay.setDate(currentDay.getDate() + 1);
        }
        weeks.push(week);
      }
      return weeks;
    },
    calculatePersianWeeks(currentDate) {
      const startPersian = this.getPersianParts(currentDate);
      const firstDay = this.findGregorianDateForPersian(
        startPersian.year,
        startPersian.month,
        1
      );
      const weeks = [];
      const firstWeekOffset = (firstDay.getDay() + 1) % 7;
      let currentDay = new Date(firstDay);
      currentDay.setDate(firstDay.getDate() - firstWeekOffset);

      for (let i = 0; i < 42; i += 7) {
        const week = [];
        for (let j = 0; j < 7; j++) {
          const persian = this.getPersianParts(currentDay);
          week.push({
            date: persian.day,
            day: currentDay.getDay(),
            month: persian.month,
            year: persian.year,
            isCurrentMonth:
              persian.month === startPersian.month &&
              persian.year === startPersian.year,
            gregorianDate: new Date(currentDay),
          });
          currentDay.setDate(currentDay.getDate() + 1);
        }
        weeks.push(week);
      }
      while (
        weeks.length &&
        weeks[weeks.length - 1].every((d) => !d.isCurrentMonth)
      ) {
        weeks.pop();
      }
      return weeks;
    },
    isToday(day) {
      const today = new Date();
      if (this.isPersianLocale) {
        const persianToday = this.getPersianParts(today);
        return (
          day.year === persianToday.year &&
          day.month === persianToday.month &&
          day.date === persianToday.day
        );
      }
      return (
        day.date === today.getDate() &&
        day.month === today.getMonth() &&
        day.year === today.getFullYear()
      );
    },
    isCurrentMonth(day) {
      return day.isCurrentMonth;
    },
    cosDeg(deg) {
      return Math.cos((deg * Math.PI) / 180);
    },
    meeusMarchEquinoxJDE(year) {

      const Y = (year - 2000) / 1000;
      const JDE0 =
        2451623.80984 +
        365242.37404 * Y +
        0.05169 * Y * Y -
        0.00411 * Y * Y * Y -
        0.00057 * Y * Y * Y * Y;

      const T = (JDE0 - 2451545.0) / 36525;
      const W = 35999.373 * T - 2.47;
      const deltaLambda = 1 + 0.0334 * this.cosDeg(W) + 0.0007 * this.cosDeg(2 * W);

      const terms = [
        [485, 324.96, 1934.136],
        [203, 337.23, 32964.467],
        [199, 342.08, 20.186],
        [182, 27.85, 445267.112],
        [156, 73.14, 45036.884],
        [136, 171.52, 22518.443],
        [77, 222.54, 65928.934],
        [74, 296.72, 3034.906],
        [70, 243.58, 9037.513],
        [58, 119.81, 33718.147],
        [52, 297.17, 150.678],
        [50, 21.02, 2281.226],
        [45, 247.54, 29929.562],
        [44, 325.15, 31555.956],
        [29, 60.93, 4443.417],
        [18, 155.12, 67555.328],
        [17, 288.79, 4562.452],
        [16, 198.04, 62894.029],
        [14, 199.76, 31436.921],
        [12, 95.39, 14577.848],
        [12, 287.11, 31931.756],
        [12, 320.81, 34777.259],
        [9, 227.73, 1222.114],
        [8, 15.45, 16859.074],
      ];

      let S = 0;
      for (const [A, B, C] of terms) {
        S += A * this.cosDeg(B + C * T);
      }

      return JDE0 + (0.00001 * S) / deltaLambda;
    },
    approxDeltaTSeconds(year) {
      if (year >= 2005 && year <= 2050) {
        const t = year - 2000;
        return 62.92 + 0.32217 * t + 0.005589 * t * t;
      }
      if (year >= 1986 && year < 2005) {
        const t = year - 2000;
        return (
          63.86 +
          0.3345 * t -
          0.060374 * t * t +
          0.0017275 * t * t * t +
          0.000651814 * t * t * t * t +
          0.00002373599 * t * t * t * t * t
        );
      }
      if (year >= 1961 && year < 1986) {
        const t = year - 1975;
        return 45.45 + 1.067 * t - (t * t) / 260 - (t * t * t) / 718;
      }
      if (year >= 1941 && year < 1961) {
        const t = year - 1950;
        return 29.07 + 0.407 * t - (t * t) / 233 + (t * t * t) / 2547;
      }
      if (year >= 1920 && year < 1941) {
        const t = year - 1920;
        return 21.2 + 0.84493 * t - 0.0761 * t * t + 0.0020936 * t * t * t;
      }
      if (year >= 1900 && year < 1920) {
        const t = year - 1900;
        return (
          -2.79 +
          1.494119 * t -
          0.0598939 * t * t +
          0.0061966 * t * t * t -
          0.000197 * t * t * t * t
        );
      }
      return 70;
    },
    julianDayToUtcDate(jd) {
      const shiftedJd = jd + 0.5;
      const Z = Math.floor(shiftedJd);
      const F = shiftedJd - Z;
      let A = Z;
      if (Z >= 2299161) {
        const alpha = Math.floor((Z - 1867216.25) / 36524.25);
        A = Z + 1 + alpha - Math.floor(alpha / 4);
      }
      const B = A + 1524;
      const C = Math.floor((B - 122.1) / 365.25);
      const D = Math.floor(365.25 * C);
      const E = Math.floor((B - D) / 30.6001);

      const dayFrac = B - D - Math.floor(30.6001 * E) + F;
      const day = Math.floor(dayFrac);
      const hoursFrac = (dayFrac - day) * 24;
      const month = E < 14 ? E - 1 : E - 13;
      const year = month > 2 ? C - 4716 : C - 4715;

      const hours = Math.floor(hoursFrac);
      const minutesFrac = (hoursFrac - hours) * 60;
      const minutes = Math.floor(minutesFrac);
      const seconds = Math.round((minutesFrac - minutes) * 60);

      return new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));
    },
    dayStateClass(day) {
      if (this.isSelected(day)) return "bg-blue-500 text-white";
      if (this.isToday(day)) return "bg-black text-white";
      if (this.isHoliday(day) && this.isCurrentMonth(day)) return "bg-red-500 text-white";
      return "";
    },
    previousMonth() {
      if (this.isPersianLocale) {
        const parts = this.getPersianParts(this.currentDate);
        let month = parts.month - 1;
        let year = parts.year;
        if (month < 1) {
          month = 12;
          year -= 1;
        }
        this.currentDate = this.findGregorianDateForPersian(year, month, 1);
        return;
      }
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() - 1,
        1
      );
    },
    nextMonth() {
      if (this.isPersianLocale) {
        const parts = this.getPersianParts(this.currentDate);
        let month = parts.month + 1;
        let year = parts.year;
        if (month > 12) {
          month = 1;
          year += 1;
        }
        this.currentDate = this.findGregorianDateForPersian(year, month, 1);
        return;
      }
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        1
      );
    },
    goToCurrentMonth() {
      this.currentDate = new Date();
    },
    isHoliday(day) {
      if (this.isPersianLocale) {
        if (day.day === 5) return true;
        return this.holidays.some((holiday) => {
          const gregorianDate = new Date(
            this.currentDate.getFullYear(),
            Number(holiday.date.split("-")[0]) - 1,
            Number(holiday.date.split("-")[1])
          );
          const persianHoliday = this.getPersianParts(gregorianDate);
          return (
            persianHoliday.year === day.year &&
            persianHoliday.month === day.month &&
            persianHoliday.day === day.date
          );
        });
      }
      const dateString = `${String(day.month + 1).padStart(2, "0")}-${String(
        day.date
      ).padStart(2, "0")}`;
      return (
        this.holidays.some((holiday) => holiday.date === dateString) ||
        day.day === 0
      );
    },
    toggleSelect(day) {
      if (!this.isCurrentMonth(day)) return;
      const selectedStr = `${day.year}-${day.month}-${day.date}`;
      if (this.selectedDate === selectedStr) {
        this.selectedDate = null;
        this.selectedDay = null;
      } else {
        this.selectedDate = selectedStr;
        this.selectedDay = day;
      }
    },
    isSelected(day) {
      return `${day.year}-${day.month}-${day.date}` === this.selectedDate;
    },
    normalizeHoliday(holiday) {
      const [month, day] = holiday.date.split("-").map(Number);
      const gregorianDate = new Date(
        this.currentDate.getFullYear(),
        month - 1,
        day
      );
      if (this.isPersianLocale) {
        const persian = this.getPersianParts(gregorianDate);
        return {
          ...holiday,
          name: this.getHolidayName(holiday),
          reason: this.getHolidayReason(holiday),
          displayDate: `${this.formatDisplayNumber(persian.day)} ${
            this.persianMonthNames[persian.month - 1]
          }`,
          displayMonth: persian.month,
          displayYear: persian.year,
        };
      }
      return {
        ...holiday,
        name: holiday.name,
        reason: holiday.reason,
        displayDate: `${String(month).padStart(2, "0")}-${String(day).padStart(
          2,
          "0"
        )}`,
        displayMonth: month,
        displayYear: this.currentDate.getFullYear(),
      };
    },
    getHolidayName(holiday) {
      const aliases = {
        "New Year's Day": "calendar.holidayNames.newYear",
        "Christmas Day": "calendar.holidayNames.christmas",
        "Thanksgiving Day": "calendar.holidayNames.thanksgiving",
        Halloween: "calendar.holidayNames.halloween",
        "Independence Day": "calendar.holidayNames.independence",
        "Labor Day": "calendar.holidayNames.laborDay",
        "Memorial Day": "calendar.holidayNames.memorial",
        "Veterans Day": "calendar.holidayNames.veterans",
        Juneteenth: "calendar.holidayNames.juneteenth",
        "Good Friday": "calendar.holidayNames.goodFriday",
        "Easter Monday": "calendar.holidayNames.easterMonday",
        "Black Friday": "calendar.holidayNames.blackFriday",
        "New Year's Eve": "calendar.holidayNames.newYearEve",
        "Columbus Day": "calendar.holidayNames.columbus",
        "Patriots' Day": "calendar.holidayNames.patriotsDay",
        "Martin Luther King Jr. Day": "calendar.holidayNames.martinLutherKing",
        "Presidents' Day": "calendar.holidayNames.presidentsDay",
      };
      const translationKey = aliases[holiday.name];
      if (!translationKey) return holiday.name;
      return this.isPersianLocale ? this.$t(translationKey) : holiday.name;
    },
    getHolidayReason(holiday) {
      const aliases = {
        "New Year's Day": "calendar.holidayReasons.newYear",
        "Christmas Day": "calendar.holidayReasons.christmas",
        "Thanksgiving Day": "calendar.holidayReasons.thanksgiving",
        Halloween: "calendar.holidayReasons.halloween",
        "Independence Day": "calendar.holidayReasons.independence",
        "Labor Day": "calendar.holidayReasons.laborDay",
        "Memorial Day": "calendar.holidayReasons.memorial",
        "Veterans Day": "calendar.holidayReasons.veterans",
        Juneteenth: "calendar.holidayReasons.juneteenth",
        "Good Friday": "calendar.holidayReasons.goodFriday",
        "Easter Monday": "calendar.holidayReasons.easterMonday",
        "Black Friday": "calendar.holidayReasons.blackFriday",
        "New Year's Eve": "calendar.holidayReasons.newYearEve",
        "Columbus Day": "calendar.holidayReasons.columbus",
        "Patriots' Day": "calendar.holidayReasons.patriotsDay",
        "Martin Luther King Jr. Day":
          "calendar.holidayReasons.martinLutherKing",
        "Presidents' Day": "calendar.holidayReasons.presidentsDay",
      };
      const translationKey = aliases[holiday.name];
      if (!translationKey) {
        return this.isPersianLocale
          ? this.$t("calendar.holidayReasons.default")
          : holiday.reason || this.$t("calendar.holidayReasons.default");
      }
      return this.isPersianLocale ? this.$t(translationKey) : holiday.reason;
    },
    formatDisplayNumber(value) {
      if (!this.isPersianLocale) return value;
      return String(value).replace(/\d/g, (digit) =>
        String.fromCharCode(1776 + Number(digit))
      );
    },
    getPersianParts(date) {
      const formatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
      const parts = formatter.formatToParts(date);
      const values = Object.fromEntries(
        parts.map(({ type, value }) => [type, value])
      );
      return {
        year: this.parsePersianNumber(values.year),
        month: this.parsePersianNumber(values.month),
        day: this.parsePersianNumber(values.day),
      };
    },
    parsePersianNumber(value) {
      if (value == null || value === "") return NaN;
      const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      const latinDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const normalized = String(value)
        .split("")
        .map((char) => {
          const index = persianDigits.indexOf(char);
          return index >= 0 ? latinDigits[index] : char;
        })
        .join("");
      return Number(normalized);
    },
    findGregorianDateForPersian(year, month, day) {
      const estimatedYear = year + 621;
      const estimate = new Date(estimatedYear, month - 1, day);
      const maxOffsetDays = 400;

      for (let offset = 0; offset <= maxOffsetDays; offset += 1) {
        const signs = offset === 0 ? [1] : [1, -1];
        for (const sign of signs) {
          const candidate = new Date(estimate);
          candidate.setDate(candidate.getDate() + sign * offset);
          const parts = this.getPersianParts(candidate);
          if (
            parts.year === year &&
            parts.month === month &&
            parts.day === day
          ) {
            return candidate;
          }
        }
      }
      return new Date();
    },
    convertDate() {
      this.converterError = null;
      this.converterResult = null;

      const year = Number(this.converterYear);
      const month = Number(this.converterMonth);
      const day = Number(this.converterDay);

      if (
        !year ||
        !month ||
        !day ||
        day < 1 ||
        day > 31 ||
        year < 1 ||
        year > this.converterMaxYear
      ) {
        this.converterError = this.$t("calendar.converter.invalid");
        return;
      }

      if (this.converterMode === "toGregorian") {
        const gregorianDate = this.findGregorianDateForPersian(
          year,
          month,
          day
        );
        const check = this.getPersianParts(gregorianDate);
        if (check.year !== year || check.month !== month || check.day !== day) {
          this.converterError = this.$t("calendar.converter.invalid");
          return;
        }
        this.converterResult = `${gregorianDate.getDate()} ${
          this.englishMonthNames[gregorianDate.getMonth()]
        } ${gregorianDate.getFullYear()}`;
      } else {
        const gregorianDate = new Date(year, month - 1, day);
        if (gregorianDate.getMonth() !== month - 1) {
          this.converterError = this.$t("calendar.converter.invalid");
          return;
        }
        const persian = this.getPersianParts(gregorianDate);
        this.converterResult = `${this.formatDisplayNumber(persian.day)} ${
          this.persianMonthNames[persian.month - 1]
        } ${this.formatDisplayNumber(persian.year)}`;
      }
    },
    setConverterMode(mode) {
      if (this.converterMode === mode) return;
      this.converterMode = mode;
      this.resetConverter();
    },
    resetConverter() {
      this.converterYear = "";
      this.converterMonth = 1;
      this.converterDay = "";
      this.converterResult = null;
      this.converterError = null;
    },
    clampConverterDay() {
      if (this.converterDay === "" || this.converterDay === null) return;
      let day = Number(this.converterDay);
      if (day > 31) day = 31;
      if (day < 1) day = 1;
      this.converterDay = day;
    },
    clampConverterYear() {
      if (this.converterYear === "" || this.converterYear === null) return;
      let year = Number(this.converterYear);
      if (year < 1) year = 1;
      if (year > this.converterMaxYear) year = this.converterMaxYear;
      this.converterYear = year;
    },
  },
};
</script>