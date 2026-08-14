<template>
  <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
    <!-- Link to return to projects -->
    <router-link
      to="/Projects"
      class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
    >
      <svg
        class="h-4 w-4 transition-transform ltr:rotate-0 rtl:rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      <span>{{ $t("projectsPage.backToProjects") }}</span>
    </router-link>

    <div
      class="mt-8 rounded-3xl border border-gray-200/70 bg-white/80 p-6 shadow-xl shadow-gray-900/10 dark:border-gray-700 dark:bg-gray-900/70 dark:shadow-black/30 sm:p-8"
    >
      <div class="max-w-3xl">
        <h1 class="mt-1 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          {{ $t("itInfrastructureTools.pages.raidCalculator.title") }}
        </h1>
        <p class="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          {{ $t("itInfrastructureTools.pages.raidCalculator.description") }}
        </p>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:items-start">
        <!--  Configuration  -->
        <form class="space-y-6 lg:col-span-3" @submit.prevent="calculate" @keydown.enter="calculate">          <!-- RAID level selector -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 dark:text-white">
              {{ $t("itInfrastructureTools.pages.raidCalculator.form.raidLevelLabel") }}
            </label>
            <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              <button
                v-for="level in raidLevels"
                :key="level.id"
                type="button"
                :aria-pressed="selectedRaidId === level.id"
                @click="selectedRaidId = level.id"
                class="rounded-xl border p-3 text-start transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                :class="selectedRaidId === level.id
                  ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-500/10'
                  : 'border-gray-200 bg-gray-50/70 hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800/60 dark:hover:border-gray-600'"
              >
                <span
                  class="block text-sm font-bold"
                  :class="selectedRaidId === level.id ? 'text-blue-700 dark:text-blue-300' : 'text-gray-900 dark:text-white'"
                >
                  {{ $t(`itInfrastructureTools.pages.raidCalculator.levels.${level.id}.label`) }}
                </span>
                <span class="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                  {{ $t("itInfrastructureTools.pages.raidCalculator.form.minDisksBadge", { min: level.minDisks }) }}
                </span>
              </button>
            </div>
            <p class="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
              {{ $t(`itInfrastructureTools.pages.raidCalculator.levels.${selectedRaidMeta.id}.description`) }}
            </p>
          </div>

          <!-- Disk count -->
          <div>
            <label for="raid-disk-count" class="block text-sm font-semibold text-gray-900 dark:text-white">
              {{ $t("itInfrastructureTools.pages.raidCalculator.form.diskCountLabel") }}
            </label>
            <div class="mt-2 flex items-stretch gap-2">
              <button
                type="button"
                
                class="w-11 shrink-0 rounded-xl border border-gray-200 bg-gray-50/70 text-lg font-bold text-gray-700 transition hover:border-gray-300 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-200 dark:hover:border-gray-600"
                :disabled="diskCount <= MIN_DISKS"
                @click="diskCount = clampInt(diskCount - 1, MIN_DISKS, MAX_DISKS)"
                :aria-label="$t('itInfrastructureTools.pages.raidCalculator.form.decrease')"
              >
                −
              </button>
              <input
                id="raid-disk-count"
                type="number"
                inputmode="numeric"
                :min="MIN_DISKS"
                :max="MAX_DISKS"
                step="1"
                :value="diskCount"
                @input="onDiskCountInput"
                @blur="onDiskCountInput"
                @keyup.enter="calculate"
                class="w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-2 text-center text-sm font-semibold text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800/60 dark:text-white"
              />
              <button
                type="button"
                class="w-11 shrink-0 rounded-xl border border-gray-200 bg-gray-50/70 text-lg font-bold text-gray-700 transition hover:border-gray-300 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-200 dark:hover:border-gray-600"
                :disabled="diskCount >= MAX_DISKS"
                @click="diskCount = clampInt(diskCount + 1, MIN_DISKS, MAX_DISKS)"
                :aria-label="$t('itInfrastructureTools.pages.raidCalculator.form.increase')"
              >
                +
              </button>
            </div>
          </div>

          <!-- Disk capacity -->
          <div>
            <label for="raid-disk-capacity" class="block text-sm font-semibold text-gray-900 dark:text-white">
              {{ $t("itInfrastructureTools.pages.raidCalculator.form.diskCapacityLabel") }}
            </label>
            <div class="mt-2 flex gap-2">
              <input
                id="raid-disk-capacity"
                type="number"
                inputmode="decimal"
                :min="MIN_CAPACITY"
                :max="MAX_CAPACITY"
                step="0.1"
                :value="diskCapacity"
                @input="onCapacityInput"
                @blur="onCapacityInput"
                @keyup.enter="calculate"
                class="w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-2 text-sm font-semibold text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800/60 dark:text-white"
              />
              <div class="flex shrink-0 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                <button
                  v-for="unit in ['GB', 'TB']"
                  :key="unit"
                  type="button"
                  :aria-pressed="capacityUnit === unit"
                  @click="capacityUnit = unit"
                  class="px-4 text-sm font-semibold transition"
                  :class="capacityUnit === unit
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-50/70 text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800'"
                >
                  {{ unit }}
                </button>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-4 pt-1">
            <button
              type="submit"
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
            >
              {{ $t("itInfrastructureTools.pages.raidCalculator.form.calculate") }}
            </button>
            <button
              type="button"
              @click="resetForm"
              class="text-sm font-semibold text-gray-500 underline-offset-4 transition hover:text-gray-700 hover:underline dark:text-gray-400 dark:hover:text-gray-200"
            >
              {{ $t("itInfrastructureTools.pages.raidCalculator.form.reset") }}
            </button>
          </div>
        </form>

        <!--  Results  -->
        <div class="lg:top-6 lg:col-span-2">
          <div class="rounded-2xl border border-gray-200/70 bg-gray-50/70 p-6 dark:border-gray-700 dark:bg-gray-800/60">
            <!-- Invalid configuration warning -->
            <div
              v-if="!isValidConfig"
              class="mb-5 flex items-start gap-2 rounded-xl border border-amber-300/70 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300"
              role="alert"
            >
              <svg class="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-8.25 3.75h.008v.008h-.008v-.008z" />
              </svg>
              <span>{{ validationMessage }}</span>
            </div>

            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {{ $t("itInfrastructureTools.pages.raidCalculator.results.usableCapacity") }}
            </p>
            <p class="mt-1 text-3xl font-extrabold text-gray-900 dark:text-white">
              {{ formatNumber(usableCapacity) }} <span class="text-lg font-semibold text-gray-500 dark:text-gray-400">{{ calcCapacityUnit }}</span>
            </p>

            <!-- capacity bar -->
            <div class="mt-4 h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                class="h-full rounded-full bg-blue-600 transition-all dark:bg-blue-500"
                :style="{ width: efficiency + '%' }"
              />
            </div>
            <div class="mt-1.5 flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>{{ $t("itInfrastructureTools.pages.raidCalculator.results.efficiency") }}: {{ formatNumber(efficiency, 0) }}%</span>
              <span>{{ $t("itInfrastructureTools.pages.raidCalculator.results.totalRaw") }}: {{ formatNumber(totalRawCapacity) }} {{ calcCapacityUnit }}</span>
            </div>

            <dl class="mt-5 space-y-3 border-t border-gray-200 pt-4 text-sm dark:border-gray-700">
              <div class="flex items-center justify-between">
                <dt class="text-gray-500 dark:text-gray-400">
                  {{ $t("itInfrastructureTools.pages.raidCalculator.results.faultTolerance") }}
                </dt>
                <dd class="font-semibold text-gray-900 dark:text-white">
                  {{ formatNumber(faultTolerance, 0) }}
                  {{ $t("itInfrastructureTools.pages.raidCalculator.results.disksUnit") }}
                </dd>
              </div>
            </dl>

            <p v-if="currentRaid.id === 'raid10'" class="mt-4 text-xs leading-5 text-gray-500 dark:text-gray-400">
              {{ $t("itInfrastructureTools.pages.raidCalculator.results.raid10Note") }}
            </p>
            <p v-else-if="currentRaid.id === 'raid1' && calcDiskCount > 2" class="mt-4 text-xs leading-5 text-gray-500 dark:text-gray-400">
              {{ $t("itInfrastructureTools.pages.raidCalculator.results.raid1Note") }}
            </p>

            <button
              type="button"
              @click="copySummary"
              class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-gray-300 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-200 dark:hover:border-gray-600"
            >
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {{ copied
                ? $t("itInfrastructureTools.pages.raidCalculator.results.copied")
                : $t("itInfrastructureTools.pages.raidCalculator.results.copySummary") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();
const t = (key, params) => proxy.$t(key, params);
const locale = computed(() => proxy.$i18n.locale);

const MIN_DISKS = 1;
const MAX_DISKS = 64;
const MIN_CAPACITY = 0.1;
const MAX_CAPACITY = 10000;

const raidLevels = [
  { id: "raid0", minDisks: 2, evenOnly: false },
  { id: "raid1", minDisks: 2, evenOnly: false },
  { id: "raid5", minDisks: 3, evenOnly: false },
  { id: "raid6", minDisks: 4, evenOnly: false },
  { id: "raid10", minDisks: 4, evenOnly: true },
];

const selectedRaidId = ref("raid0");
const diskCount = ref(4);
const diskCapacity = ref(2);
const capacityUnit = ref("TB");
const copied = ref(false);

const calcRaidId = ref(selectedRaidId.value);
const calcDiskCount = ref(diskCount.value);
const calcDiskCapacity = ref(diskCapacity.value);
const calcCapacityUnit = ref(capacityUnit.value);

function calculate() {
  calcRaidId.value = selectedRaidId.value;
  calcDiskCount.value = diskCount.value;
  calcDiskCapacity.value = diskCapacity.value;
  calcCapacityUnit.value = capacityUnit.value;
}

const currentRaid = computed(
  () => raidLevels.find((r) => r.id === calcRaidId.value) ?? raidLevels[0]
);

const selectedRaidMeta = computed(
  () => raidLevels.find((r) => r.id === selectedRaidId.value) ?? raidLevels[0]
);

function clampInt(value, min, max) {
  const n = Math.round(Number(value));
  if (!Number.isFinite(n)) return min;
  return Math.min(Math.max(n, min), max);
}

function clampFloat(value, min, max) {
  const n = Number(value);
  if (!Number.isFinite(n)) return min;
  return Math.min(Math.max(n, min), max);
}

function onDiskCountInput(e) {
  diskCount.value = clampInt(e.target.value, MIN_DISKS, MAX_DISKS);
  e.target.value = diskCount.value;
}

function onCapacityInput(e) {
  diskCapacity.value = clampFloat(e.target.value, MIN_CAPACITY, MAX_CAPACITY);
  e.target.value = diskCapacity.value;
}

const isValidConfig = computed(() => {
  const r = currentRaid.value;
  if (calcDiskCount.value < r.minDisks) return false;
  if (r.evenOnly && calcDiskCount.value % 2 !== 0) return false;
  return true;
});

const validationMessage = computed(() => {
  const r = currentRaid.value;
  if (calcDiskCount.value < r.minDisks) {
    return t("itInfrastructureTools.pages.raidCalculator.validation.minDisksError", {
      min: r.minDisks,
      level: t(`itInfrastructureTools.pages.raidCalculator.levels.${r.id}.label`),
    });
  }
  if (r.evenOnly && calcDiskCount.value % 2 !== 0) {
    return t("itInfrastructureTools.pages.raidCalculator.validation.evenDisksError", {
      level: t(`itInfrastructureTools.pages.raidCalculator.levels.${r.id}.label`),
    });
  }
  return "";
});

const totalRawCapacity = computed(() => calcDiskCount.value * calcDiskCapacity.value);

const usableCapacity = computed(() => {
  if (!isValidConfig.value) return 0;
  const n = calcDiskCount.value;
  const cap = calcDiskCapacity.value;
  switch (currentRaid.value.id) {
    case "raid0":
      return n * cap;
    case "raid1":
      return cap;
    case "raid5":
      return (n - 1) * cap;
    case "raid6":
      return (n - 2) * cap;
    case "raid10":
      return (n / 2) * cap;
    default:
      return 0;
  }
});

const efficiency = computed(() =>
  totalRawCapacity.value > 0 ? (usableCapacity.value / totalRawCapacity.value) * 100 : 0
);

const faultTolerance = computed(() => {
  if (!isValidConfig.value) return 0;
  switch (currentRaid.value.id) {
    case "raid0":
      return 0;
    case "raid1":
      return calcDiskCount.value - 1;
    case "raid5":
      return 1;
    case "raid6":
      return 2;
    case "raid10":
      return Math.floor(calcDiskCount.value / 2); // best case: one per mirrored pair
    default:
      return 0;
  }
});

function formatNumber(num, digits = 2) {
  if (!Number.isFinite(num)) return "-";
  return new Intl.NumberFormat(locale.value === "fa" ? "fa-IR" : "en-US", {
    maximumFractionDigits: digits,
  }).format(num);
}

function resetForm() {
  selectedRaidId.value = "raid0";
  diskCount.value = 4;
  diskCapacity.value = 2;
  capacityUnit.value = "TB";
  calculate();
}

async function copySummary() {
  const summary = [
    t(`itInfrastructureTools.pages.raidCalculator.levels.${currentRaid.value.id}.label`),
    `${calcDiskCount.value}x ${formatNumber(calcDiskCapacity.value)} ${calcCapacityUnit.value}`,
    `${t("itInfrastructureTools.pages.raidCalculator.results.usableCapacity")}: ${formatNumber(usableCapacity.value)} ${calcCapacityUnit.value}`,
    `${t("itInfrastructureTools.pages.raidCalculator.results.efficiency")}: ${formatNumber(efficiency.value, 0)}%`,
    `${t("itInfrastructureTools.pages.raidCalculator.results.faultTolerance")}: ${formatNumber(faultTolerance.value, 0)}`,
  ].join(" | ");

  try {
    await navigator.clipboard.writeText(summary);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch {
  }
}
</script>