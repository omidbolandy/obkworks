<template>
  <!-- Link to return to projects -->
  <div class="max-w-3xl py-2 sm:pt-8 mx-6 sm:mx-auto">
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

  <div class="container mb-10 mx-auto p-4 dark:text-white text-gray-800">
    <!-- Title -->
    <h1 class="text-4xl font-bold text-center my-8 dark:text-white">
      {{ $t("timeDate.pageTitle") }}
    </h1>
    <!-- Digital + Analog Clocks (signature elements, side by side) -->
    <div
      class="mx-auto mb-10 flex max-w-3xl flex-col items-stretch gap-6 sm:flex-row">
      <!-- Digital Clock -->
      <div
        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900 md:p-10">
        <p
          class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
          {{ $t("timeDate.digitalClock") }}
        </p>
        <div
          class="relative rounded-2xl border border-blue-900/40 bg-[#0a0e1a] px-6 py-5 shadow-[inset_0_2px_14px_rgba(0,0,0,0.65)] sm:px-8 sm:py-7">
          <div
            class="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-blue-500/10 blur-2xl"
          ></div>
          <div dir="ltr" class="flex items-baseline gap-1 font-mono">
            <span
              class="text-4xl font-bold text-blue-400 [text-shadow:0_0_12px_rgba(59,130,246,0.8)] sm:text-5xl"
              >{{ digitalHours }}</span>
            <span
              class="clock-colon text-4xl font-bold text-blue-400 sm:text-5xl"
              >:</span>
            <span
              class="text-4xl font-bold text-blue-400 [text-shadow:0_0_12px_rgba(59,130,246,0.8)] sm:text-5xl"
              >{{ digitalMinutes }}</span>
            <span
              class="clock-colon text-4xl font-bold text-blue-400 sm:text-5xl">:</span>
            <span
              class="mb-1 self-end text-2xl font-bold text-blue-300/70 [text-shadow:0_0_8px_rgba(59,130,246,0.6)] sm:text-3xl"
              >{{ digitalSeconds }}</span>
            <span
              class="ms-2 mt-1 self-start text-xs font-semibold tracking-wide text-blue-300/60"
              >{{ digitalAmPm }}</span>
          </div>
        </div>
      </div>

      <!-- Analog Clock -->
      <div
        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900 md:p-10">
        <p
          class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
          {{ $t("timeDate.analogClock") }}
        </p>
        <svg viewBox="0 0 200 200" class="h-40 w-40 sm:h-48 sm:w-48">
          <!-- Face -->
          <circle
            cx="100"
            cy="100"
            r="92"
            stroke-width="4"
            class="fill-white stroke-blue-600 dark:fill-gray-900 dark:stroke-blue-400"/>
          <!-- Tick marks -->
          <g
            v-for="i in 12"
            :key="i"
            :style="{ transform: `rotate(${i * 30}deg)` }"
            style="transform-origin: 100px 100px">
            <line
              x1="100"
              :y1="i % 3 === 0 ? 14 : 18"
              x2="100"
              y2="24"
              :stroke-width="i % 3 === 0 ? 3 : 1.5"
              stroke-linecap="round"
              class="stroke-gray-400 dark:stroke-gray-500"/>
          </g>
          <!-- Hour hand -->
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="55"
            stroke-width="6"
            stroke-linecap="round"
            class="stroke-blue-600 dark:stroke-blue-400"
            :style="{ transform: `rotate(${hourHandAngle}deg)` }"
            style="transform-origin: 100px 100px"/>
          <!-- Minute hand -->
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="30"
            stroke-width="4"
            stroke-linecap="round"
            class="stroke-blue-600 dark:stroke-blue-400"
            :style="{ transform: `rotate(${minuteHandAngle}deg)` }"
            style="transform-origin: 100px 100px"/>
          <!-- Second hand (accent) -->
          <line
            x1="100"
            y1="118"
            x2="100"
            y2="20"
            stroke-width="2"
            stroke-linecap="round"
            class="clock-second-hand stroke-amber-500 dark:stroke-amber-400"
            :style="{ transform: `rotate(${secondHandRotation}deg)` }"
            style="transform-origin: 100px 100px"/>
          <!-- Center pin -->
          <circle
            cx="100"
            cy="100"
            r="6"
            class="fill-blue-600 dark:fill-blue-400"/>
          <circle
            cx="100"
            cy="100"
            r="2.5"
            class="fill-amber-500 dark:fill-amber-400"/>
        </svg>
      </div>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto items-start">
      <!-- Date & Time (two formats, one card, divided) -->
      <div
        class="sm:col-span-2 flex flex-col items-center gap-6 bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 md:p-10 border border-gray-200 dark:border-gray-800">
        <div class="flex flex-col items-center gap-4">
          <p class="text-xl font-semibold text-center">
            {{ $t("timeDate.currentDate") }}
            <span
              dir="ltr"
              class="font-bold text-blue-600 dark:text-blue-400"
              >{{ formattedDate }}</span>
          </p>
          <p class="text-xl font-semibold text-center">
            {{ $t("timeDate.currentTime") }}
            <span
              dir="ltr"
              class="font-bold text-blue-600 dark:text-blue-400"
              >{{ formattedTime }}</span>
          </p>
        </div>

        <hr class="w-full max-w-xs border-gray-200 dark:border-gray-800" />

        <div class="flex flex-col items-center gap-4">
          <p class="text-xl font-semibold text-center">
            {{ $t("timeDate.fullDate") }}
            <span
              :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'"
              class="font-bold text-blue-600 dark:text-blue-400"
              >{{ fullDateDisplay }}</span>
          </p>
        </div>
      </div>

      <!-- TimeCounter -->
      <div
        class="flex flex-col items-center gap-4 bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 md:p-10 border border-gray-200 dark:border-gray-800">
        <p class="text-xl font-semibold">
          {{ $t("timeDate.timeCounter.title") }}
        </p>
        <div
          dir="ltr"
          class="text-3xl font-bold text-blue-600 dark:text-blue-400">
          {{ timeCounter }}
        </div>
        <div class="flex flex-wrap gap-3 justify-center">
          <button
            @click="startTimer"
            class="rounded-xl bg-green-600 px-5 py-2 text-white font-semibold shadow hover:bg-green-700 transition">
            {{ $t("timeDate.timeCounter.start") }}
          </button>
          <button
            @click="stopTimer"
            class="rounded-xl bg-red-600 px-5 py-2 text-white font-semibold shadow hover:bg-red-700 transition">
            {{ $t("timeDate.timeCounter.stop") }}
          </button>
          <button
            @click="resetTimer"
            class="rounded-xl bg-gray-200 px-5 py-2 text-gray-800 font-semibold shadow hover:bg-gray-300 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
            {{ $t("timeDate.timeCounter.reset") }}
          </button>
        </div>
      </div>

      <!-- CountdownTimer -->
      <div
        class="flex flex-col items-center gap-4 bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 md:p-10 border border-gray-200 dark:border-gray-800">
        <p class="text-xl font-semibold text-center">
          {{ $t("timeDate.countdown.title") }}
        </p>
        <div class="flex justify-center gap-3">
          <label class="flex flex-col items-center gap-1">
            <span class="text-xs font-medium text-gray-500 dark:text-gray-400">
              {{ $t('timeDate.countdown.hoursLabel') }}
            </span>
            <input
              type="number"
              v-model="inputHours"
              :placeholder="$t('timeDate.countdown.hoursPlaceholder')"
              min="0"
              max="99"
              class="w-20 rounded-xl border border-gray-300 bg-white px-3 py-2 text-center text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"/>
          </label>
          <label class="flex flex-col items-center gap-1">
            <span class="text-xs font-medium text-gray-500 dark:text-gray-400">
              {{ $t('timeDate.countdown.minutesLabel') }}
            </span>
            <input
              type="number"
              v-model="inputMinutes"
              :placeholder="$t('timeDate.countdown.minutesPlaceholder')"
              min="0"
              max="59"
              class="w-20 rounded-xl border border-gray-300 bg-white px-3 py-2 text-center text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"/>
          </label>
          <label class="flex flex-col items-center gap-1">
            <span class="text-xs font-medium text-gray-500 dark:text-gray-400">
              {{ $t('timeDate.countdown.secondsLabel') }}
            </span>
            <input
              type="number"
              v-model="inputSeconds"
              :placeholder="$t('timeDate.countdown.secondsPlaceholder')"
              min="0"
              max="59"
              class="w-20 rounded-xl border border-gray-300 bg-white px-3 py-2 text-center text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"/>
          </label>
        </div>
        <div class="flex flex-wrap gap-3 justify-center">
          <button
            @click="startCountdownTimer"
            class="rounded-xl bg-blue-600 px-5 py-2 text-white font-semibold shadow hover:bg-blue-700 transition">
            {{ $t("timeDate.countdown.start") }}
          </button>
          <button
            @click="stopCountdownTimer"
            class="rounded-xl bg-red-600 px-5 py-2 text-white font-semibold shadow hover:bg-red-700 transition">
            {{ $t("timeDate.countdown.stop") }}
          </button>
          <button
            @click="resetCountdownTimer"
            class="rounded-xl bg-gray-200 px-5 py-2 text-gray-800 font-semibold shadow hover:bg-gray-300 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
            {{ $t("timeDate.countdown.reset") }}
          </button>
        </div>
        <p
          dir="ltr"
          class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {{ countdownDisplay }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "TimeDate-1",
  data() {
    return {
      currentTime: new Date(),
      formattedDate: "",
      formattedTime: "",
      startTime: null,
      intervalId: null,
      elapsedTime: 0,
      timeCounter: "00:00:00",
      inputHours: 0,
      inputMinutes: 0,
      inputSeconds: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: null,
      secondHandRotation: 0,
      inputsDirty: false,
    };
  },
  watch: {
    inputHours() {
      this.inputsDirty = true;
    },
    inputMinutes() {
      this.inputsDirty = true;
    },
    inputSeconds() {
      this.inputsDirty = true;
    },
  },
  methods: {
    toLocaleDigits(str) {
      if (this.$i18n.locale !== "fa") return str;
      const fa = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return str.replace(/\d/g, (d) => fa[d]);
    },
    startTimer() {
      if (!this.intervalId) {
        this.startTime = new Date();
        this.intervalId = setInterval(() => {
          this.elapsedTime = new Date() - this.startTime;
          this.updateFormattedTime();
        }, 1000);
      }
    },
    stopTimer() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
    resetTimer() {
      this.stopTimer();
      this.elapsedTime = 0;
      this.timeCounter = "00:00:00";
    },
    updateFormattedTime() {
      const hours = Math.floor(this.elapsedTime / 3600000);
      const minutes = Math.floor((this.elapsedTime % 3600000) / 60000);
      const seconds = Math.floor((this.elapsedTime % 60000) / 1000);
      this.timeCounter = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    },
    startCountdownTimer() {
      this.stopCountdownTimer();
    
      const h = Math.max(0, Math.min(99, parseInt(this.inputHours) || 0));
      const m = Math.max(0, Math.min(59, parseInt(this.inputMinutes) || 0));
      const s = Math.max(0, Math.min(59, parseInt(this.inputSeconds) || 0));
      this.inputHours = h;
      this.inputMinutes = m;
      this.inputSeconds = s;
    
      if (
        this.inputsDirty ||
        (this.hours === 0 && this.minutes === 0 && this.seconds === 0)
      ) {
        this.hours = h;
        this.minutes = m;
        this.seconds = s;
        this.inputsDirty = false;
        if (this.hours === 0 && this.minutes === 0 && this.seconds === 0) {
          alert(this.$t("timeDate.countdown.setTimeAlert"));
          return;
        }
      }
      this.timer = setInterval(() => {
        if (this.seconds === 0) {
          if (this.minutes === 0) {
            if (this.hours === 0) {
              this.stopCountdownTimer();
              alert(this.$t("timeDate.countdown.timeUpAlert"));
            } else {
              this.hours--;
              this.minutes = 59;
              this.seconds = 59;
            }
          } else {
            this.minutes--;
            this.seconds = 59;
          }
        } else {
          this.seconds--;
        }
      }, 1000);
    },
    stopCountdownTimer() {
      clearInterval(this.timer);
    },
    resetCountdownTimer() {
      this.stopCountdownTimer();
      this.inputHours = 0;
      this.inputMinutes = 0;
      this.inputSeconds = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    },
  },
  computed: {
    countdownDisplay() {
      const h = String(this.hours).padStart(2, "0");
      const m = String(this.minutes).padStart(2, "0");
      const s = String(this.seconds).padStart(2, "0");
      return `${h}:${m}:${s}`;
    },
    digitalHours() {
      let h = this.currentTime.getHours() % 12;
      if (h === 0) h = 12;
      return String(h).padStart(2, "0");
    },
    digitalMinutes() { return String(this.currentTime.getMinutes()).padStart(2, "0"); },
    digitalSeconds() { return String(this.currentTime.getSeconds()).padStart(2, "0"); },
    digitalAmPm() {
      return this.currentTime.getHours() >= 12
        ? this.$t("timeDate.pm")
        : this.$t("timeDate.am");
    },
    hourHandAngle() {
      const h = this.currentTime.getHours() % 12;
      const m = this.currentTime.getMinutes();
      return h * 30 + m * 0.5;
    },
    minuteHandAngle() {
      const m = this.currentTime.getMinutes();
      const s = this.currentTime.getSeconds();
      return m * 6 + s * 0.1;
    },
    fullDateDisplay() {
      if (this.$i18n.locale === "fa") {
        const loc = "fa-IR-u-ca-persian-nu-arabext";
        const weekday = new Intl.DateTimeFormat(loc, {
          weekday: "long",
        }).format(this.currentTime);
        const day = new Intl.DateTimeFormat(loc, { day: "numeric" }).format(
          this.currentTime
        );
        const month = new Intl.DateTimeFormat(loc, { month: "long" }).format( this.currentTime );
        const year = new Intl.DateTimeFormat(loc, { year: "numeric" }).format( this.currentTime );
        return `${weekday} ${day} ${month} ${year}`;
      }
      const weekday = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
      }).format(this.currentTime);
      const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
        this.currentTime
      );
      const day = new Intl.DateTimeFormat("en-US", { day: "numeric" }).format( this.currentTime );
      const year = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format( this.currentTime );
      return `${weekday}, ${month} ${day}, ${year}`;
    },
  },
  mounted() {
    this.secondHandRotation = this.currentTime.getSeconds() * 6;
    setInterval(() => {
      this.currentTime = new Date();
      this.secondHandRotation += 6;
      if (this.$i18n.locale === "fa") {
        const loc = "fa-IR-u-ca-persian-nu-arabext";
        const y = new Intl.DateTimeFormat(loc, { year: "numeric" }).format(
          this.currentTime
        );
        const m = new Intl.DateTimeFormat(loc, { month: "2-digit" }).format( this.currentTime );
        const d = new Intl.DateTimeFormat(loc, { day: "2-digit" }).format( this.currentTime );
        this.formattedDate = `${y}/${m}/${d}`;
      } else {
        this.formattedDate = dayjs().format("YYYY/MM/DD");
      }
      this.formattedTime = this.toLocaleDigits(dayjs().format("HH:mm:ss"));
    }, 1000);
  },
};
</script>

<style scoped>
.clock-colon {
  animation: clock-blink 1s steps(1) infinite;
}
@keyframes clock-blink {
  50% {
    opacity: 0.15;
  }
}
.clock-second-hand {
  transition: transform 0.25s cubic-bezier(0.4, 2.2, 0.6, 1);
}
</style>