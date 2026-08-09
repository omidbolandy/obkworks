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
          class="mt-1 text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl"
        >
          {{ $t("itInfrastructureTools.pages.vmResourceAllocator.title") }}
        </h1>
        <p class="mt-4 text-base leading-8 text-gray-600 dark:text-gray-300">
          {{
            $t("itInfrastructureTools.pages.vmResourceAllocator.description")
          }}
        </p>
      </div>

      <!-- Form: Enter key submits, calculation only runs on submit/click -->
      <form @submit.prevent="calculate">
        <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <!-- Host resources -->
          <div class="sm:col-span-2">
            <p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.form.hostSectionLabel") }}
            </p>
          </div>

          <!-- Total CPU Cores -->
          <div>
            <label for="totalCores" class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.form.totalCores") }}
            </label>
            <input
              id="totalCores"
              v-model.number="form.totalCores"
              type="number"
              min="1"
              max="512"
              step="1"
              inputmode="numeric"
              class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              @blur="sanitizeField('totalCores', 1, 512, defaultForm.totalCores)"
            />
          </div>

          <div>
            <label for="totalRamGb" class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.form.totalRamGb") }}
            </label>
            <input
              id="totalRamGb"
              v-model.number="form.totalRamGb"
              type="number"
              min="1"
              max="8192"
              step="1"
              inputmode="numeric"
              class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              @blur="sanitizeField('totalRamGb', 1, 8192, defaultForm.totalRamGb)"
            />
          </div>

          <!-- Total Storage (GB) -->
          <div>
            <label for="totalStorageGb" class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.form.totalStorageGb") }}
            </label>
            <input
              id="totalStorageGb"
              v-model.number="form.totalStorageGb"
              type="number"
              min="1"
              max="200000"
              step="1"
              inputmode="numeric"
              class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              @blur="sanitizeField('totalStorageGb', 1, 200000, defaultForm.totalStorageGb)"
            />
          </div>

          <!-- Hypervisor Reserved (%) -->
          <div>
            <label for="reservedPercent" class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.form.reservedPercent") }}
            </label>
            <input
              id="reservedPercent"
              v-model.number="form.reservedPercent"
              type="number"
              min="0"
              max="50"
              step="1"
              inputmode="numeric"
              class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              @blur="sanitizeField('reservedPercent', 0, 50, defaultForm.reservedPercent)"
            />
          </div>

          <!-- Per-VM requirements -->
          <div class="sm:col-span-2 mt-2">
            <p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.form.vmSectionLabel") }}
            </p>
          </div>

          <!-- vCPUs per VM -->
          <div>
            <label for="vcpuPerVm" class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.form.vcpuPerVm") }}
            </label>
            <input
              id="vcpuPerVm"
              v-model.number="form.vcpuPerVm"
              type="number"
              min="1"
              max="128"
              step="1"
              inputmode="numeric"
              class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              @blur="sanitizeField('vcpuPerVm', 1, 128, defaultForm.vcpuPerVm)"
            />
          </div>

          <!-- RAM per VM (GB) -->
          <div>
            <label for="ramPerVmGb" class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.form.ramPerVmGb") }}
            </label>
            <input
              id="ramPerVmGb"
              v-model.number="form.ramPerVmGb"
              type="number"
              min="0.5"
              max="2048"
              step="0.5"
              inputmode="decimal"
              class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              @blur="sanitizeField('ramPerVmGb', 0.5, 2048, defaultForm.ramPerVmGb)"
            />
          </div>

          <!-- Storage per VM (GB) -->
          <div>
            <label for="storagePerVmGb" class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.form.storagePerVmGb") }}
            </label>
            <input
              id="storagePerVmGb"
              v-model.number="form.storagePerVmGb"
              type="number"
              min="1"
              max="20000"
              step="1"
              inputmode="numeric"
              class="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              @blur="sanitizeField('storagePerVmGb', 1, 20000, defaultForm.storagePerVmGb)"
            />
          </div>

          <!-- CPU Overcommit Ratio -->
          <div>
            <label
              for="cpuOvercommitRatio"
              class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.form.cpuOvercommitRatio") }}
            </label>
            <div class="relative">
              <select
                id="cpuOvercommitRatio"
                v-model="form.cpuOvercommitRatio"
                class="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 pe-10 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              >
                <option value="1">
                  {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.options.cpuOvercommit.r1") }}
                </option>
                <option value="2">
                  {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.options.cpuOvercommit.r2") }}
                </option>
                <option value="3">
                  {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.options.cpuOvercommit.r3") }}
                </option>
                <option value="4">
                  {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.options.cpuOvercommit.r4") }}
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

          <!-- RAM Overcommit Ratio -->
          <div>
            <label
              for="ramOvercommitRatio"
              class="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.form.ramOvercommitRatio") }}
            </label>
            <div class="relative">
              <select
                id="ramOvercommitRatio"
                v-model="form.ramOvercommitRatio"
                class="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 pe-10 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              >
                <option value="1">
                  {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.options.ramOvercommit.r1") }}
                </option>
                <option value="1.25">
                  {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.options.ramOvercommit.r125") }}
                </option>
                <option value="1.5">
                  {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.options.ramOvercommit.r15") }}
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

        <!-- Calculate + Reset buttons -->
        <div class="mt-8 flex flex-wrap justify-end gap-3">
          <button
            type="button"
            @click="resetForm"
            class="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.form.resetButton") }}
          </button>
          <button
            type="submit"
            class="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.form.calculateButton") }}
          </button>
        </div>
      </form>

      <!-- Results -->
      <div
        class="mt-10 rounded-2xl border border-gray-200 bg-gray-50/70 p-6 dark:border-gray-700 dark:bg-gray-800/60"
      >
        <template v-if="hasCalculated && result">
          <div class="flex flex-wrap items-baseline justify-between gap-3">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.result.maxVmsTitle") }}
            </p>
            <p class="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {{ result.maxVms }}
              <span class="text-base font-medium text-gray-500 dark:text-gray-400">
                {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.units.vms") }}
              </span>
            </p>
          </div>

          <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {{ $t(`itInfrastructureTools.pages.vmResourceAllocator.calculator.result.bottleneck.${result.bottleneck}`) }}
          </p>

          <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="rounded-xl bg-white/70 p-4 dark:bg-gray-900/50">
              <p class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.result.cpuUtilization") }}
              </p>
              <p class="mt-1 text-xl font-bold text-gray-900 dark:text-white">{{ result.cpuPercent }}%</p>
              <div class="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div class="h-full rounded-full bg-blue-500" :style="{ width: Math.min(result.cpuPercent, 100) + '%' }"></div>
              </div>
            </div>

            <div class="rounded-xl bg-white/70 p-4 dark:bg-gray-900/50">
              <p class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.result.ramUtilization") }}
              </p>
              <p class="mt-1 text-xl font-bold text-gray-900 dark:text-white">{{ result.ramPercent }}%</p>
              <div class="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div class="h-full rounded-full bg-blue-500" :style="{ width: Math.min(result.ramPercent, 100) + '%' }"></div>
              </div>
            </div>

            <div class="rounded-xl bg-white/70 p-4 dark:bg-gray-900/50">
              <p class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.result.storageUtilization") }}
              </p>
              <p class="mt-1 text-xl font-bold text-gray-900 dark:text-white">{{ result.storagePercent }}%</p>
              <div class="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div class="h-full rounded-full bg-blue-500" :style="{ width: Math.min(result.storagePercent, 100) + '%' }"></div>
              </div>
            </div>
          </div>
        </template>

        <p v-else class="text-sm text-gray-500 dark:text-gray-400">
          {{ $t("itInfrastructureTools.pages.vmResourceAllocator.calculator.result.emptyStateHint") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VmResourceAllocator",
  data() {
    const defaultForm = {
      totalCores: 16,
      totalRamGb: 64,
      totalStorageGb: 500,
      reservedPercent: 10,
      vcpuPerVm: 2,
      ramPerVmGb: 4,
      storagePerVmGb: 40,
      cpuOvercommitRatio: "2",
      ramOvercommitRatio: "1",
    };

    return {
      defaultForm,
      form: { ...defaultForm },
      hasCalculated: false,
      result: null,
    };
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
    resetForm() {
      this.form = { ...this.defaultForm };
      this.hasCalculated = false;
      this.result = null;
    },
    calculate() {
      const totalCores = this.clamp(this.form.totalCores, 1, 512, this.defaultForm.totalCores);
      const totalRamGb = this.clamp(this.form.totalRamGb, 1, 8192, this.defaultForm.totalRamGb);
      const totalStorageGb = this.clamp(this.form.totalStorageGb, 1, 200000, this.defaultForm.totalStorageGb);
      const reservedPercent = this.clamp(this.form.reservedPercent, 0, 50, this.defaultForm.reservedPercent);
      const vcpuPerVm = this.clamp(this.form.vcpuPerVm, 1, 128, this.defaultForm.vcpuPerVm);
      const ramPerVmGb = this.clamp(this.form.ramPerVmGb, 0.5, 2048, this.defaultForm.ramPerVmGb);
      const storagePerVmGb = this.clamp(this.form.storagePerVmGb, 1, 20000, this.defaultForm.storagePerVmGb);

      const allowedCpuRatios = ["1", "2", "3", "4"];
      const cpuRatio = allowedCpuRatios.includes(String(this.form.cpuOvercommitRatio))
        ? Number(this.form.cpuOvercommitRatio)
        : 1;

      const allowedRamRatios = ["1", "1.25", "1.5"];
      const ramRatio = allowedRamRatios.includes(String(this.form.ramOvercommitRatio))
        ? Number(this.form.ramOvercommitRatio)
        : 1;

      const reservedFactor = 1 - reservedPercent / 100;
      const effectiveCores = totalCores * reservedFactor;
      const effectiveRamGb = totalRamGb * reservedFactor;
      const effectiveStorageGb = totalStorageGb * reservedFactor;

      const usableVcpuPool = effectiveCores * cpuRatio;
      const usableRamPool = effectiveRamGb * ramRatio;

      const vmsByCpu = Math.floor(usableVcpuPool / vcpuPerVm);
      const vmsByRam = Math.floor(usableRamPool / ramPerVmGb);
      const vmsByStorage = Math.floor(effectiveStorageGb / storagePerVmGb);

      const maxVms = Math.max(0, Math.min(vmsByCpu, vmsByRam, vmsByStorage));

      let bottleneck = "cpu";
      if (vmsByRam <= vmsByCpu && vmsByRam <= vmsByStorage) bottleneck = "ram";
      if (vmsByStorage <= vmsByCpu && vmsByStorage <= vmsByRam) bottleneck = "storage";

      const cpuPercent = usableVcpuPool > 0 ? ((maxVms * vcpuPerVm) / usableVcpuPool) * 100 : 0;
      const ramPercent = usableRamPool > 0 ? ((maxVms * ramPerVmGb) / usableRamPool) * 100 : 0;
      const storagePercent = effectiveStorageGb > 0 ? ((maxVms * storagePerVmGb) / effectiveStorageGb) * 100 : 0;

      this.result = {
        maxVms,
        bottleneck,
        cpuPercent: Math.round(cpuPercent * 10) / 10,
        ramPercent: Math.round(ramPercent * 10) / 10,
        storagePercent: Math.round(storagePercent * 10) / 10,
      };
      this.hasCalculated = true;
    },
  },
};
</script>