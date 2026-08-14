<template>
  <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <!-- Link to return to projects -->
    <router-link to="/Projects"
      class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
      <svg class="h-4 w-4 transition-transform ltr:rotate-0 rtl:rotate-180" fill="none" stroke="currentColor"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span>{{ $t("projectsPage.backToProjects") }}</span>
    </router-link>

    <div
      class="mt-8 rounded-3xl border border-gray-200/70 bg-white/80 p-8 shadow-xl shadow-gray-900/10 dark:border-gray-700 dark:bg-gray-900/70 dark:shadow-black/30 ">
      <!-- title-description -->
      <div class="max-w-3xl">
        <h1 class="mt-1 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          {{ $t("itInfrastructureTools.pages.ipSubnetCalculator.title") }}
        </h1>
        <p class="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          {{ $t("itInfrastructureTools.pages.ipSubnetCalculator.description") }}
        </p>
      </div>

      <!-- Calculator card -->
      <div
        class="mt-10 rounded-2xl border border-gray-200 bg-gray-50/70 p-6 dark:border-gray-700 dark:bg-gray-800/60 sm:p-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <!-- Input panel -->
          <div class="lg:col-span-2">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ $t("itInfrastructureTools.pages.ipSubnetCalculator.calc.inputTitle") }}
            </h2>

            <!-- IP Address -->
            <div class="mt-5">
              <label for="ip-address" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ $t("itInfrastructureTools.pages.ipSubnetCalculator.calc.ipLabel") }}
              </label>
              <input id="ip-address" :value="ipAddress" @input="onIpInput" @keyup.enter="calculate" type="text"
                inputmode="decimal" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                maxlength="15" placeholder="192.168.1.10"
                class="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-start font-mono text-sm tracking-wide text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                :aria-invalid="Boolean(ipTouched && !isValidIp)" aria-describedby="ip-error" />
              <p v-if="ipTouched && ipAddress && !isValidIp" id="ip-error" role="alert"
                class="mt-2 text-sm text-red-600 dark:text-red-400">
                {{
                  $t(
                    "itInfrastructureTools.pages.ipSubnetCalculator.calc.invalidIp"
                  )
                }}
              </p>
            </div>

            <!-- Prefix length -->
            <div class="mt-5">
              <label for="prefix-length" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {{
                  $t(
                    "itInfrastructureTools.pages.ipSubnetCalculator.calc.prefixLabel"
                  )
                }}
              </label>
              <div class="relative mt-2 w-full">
                <select id="prefix-length" v-model.number="prefixLength" @keyup.enter="calculate"
                  class="w-full appearance-none rounded-xl border border-gray-300 bg-white py-2.5 text-start font-mono text-sm text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 ltr:pl-4 ltr:pr-10 rtl:pr-4 rtl:pl-10 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
                  <option v-for="p in 33" :key="p - 1" :value="p - 1">
                    /{{ p - 1 }} — {{ prefixToMaskString(p - 1) }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 flex items-center text-gray-500 ltr:right-3.5 rtl:left-3.5 dark:text-gray-400">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Quick presets -->
            <div class="mt-6">
              <p class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {{
                  $t(
                    "itInfrastructureTools.pages.ipSubnetCalculator.calc.presets"
                  )
                }}
              </p>
              <div class="mt-2 flex flex-wrap gap-2">
                <button v-for="preset in presets" :key="preset.label" type="button" @click="applyPreset(preset)"
                  class="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400">
                  {{ preset.label }}
                </button>
              </div>
            </div>
          </div>

          <!-- Results panel -->
          <div class="flex flex-col lg:col-span-3">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{
                $t(
                  "itInfrastructureTools.pages.ipSubnetCalculator.calc.resultsTitle"
                )
              }}
            </h2>

            <!-- Buttons Group (Calculate & Reset) -->
            <div class="mt-4 flex items-center gap-2">
              <button type="button" @click="calculate" :disabled="!isValidIp"
                class="flex-1 rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:py-2.5 sm:text-sm dark:bg-blue-500 dark:hover:bg-blue-400">
                {{
                  $t(
                    "itInfrastructureTools.pages.ipSubnetCalculator.calc.calculateButton"
                  )
                }}
              </button>
              <button type="button" @click="resetForm"
                class="rounded-xl border border-gray-300 bg-white px-3 py-2 text-xs font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100 hover:text-red-600 sm:px-3.5 sm:py-2.5 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-red-400"
                title="Reset Form">
                {{
                  $t(
                    "itInfrastructureTools.pages.ipSubnetCalculator.calc.resetButton"
                  )
                }}
              </button>
            </div>

            <!-- Results Grid -->
            <div v-if="results && hasCalculated" class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ResultField v-for="field in resultFields" :key="field.key" :label="$t(field.labelKey)"
                :value="field.value" :copied="copiedField === field.key" @copy="copyValue(field.key, field.value)" />
            </div>
            <div v-else
              class="mt-5 flex min-h-[160px] w-full items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white/60 p-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900/40 dark:text-gray-400">
            </div>

            <!-- Binary view -->
            <div v-if="results && hasCalculated" class="mt-5">
              <button type="button" @click="showBinary = !showBinary"
                class="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                {{
                  showBinary
                    ? $t(
                      "itInfrastructureTools.pages.ipSubnetCalculator.calc.hideBinary"
                    )
                    : $t(
                      "itInfrastructureTools.pages.ipSubnetCalculator.calc.showBinary"
                    )
                }}
              </button>
              <div v-if="showBinary"
                class="mt-3 space-y-3 rounded-xl border border-gray-200 bg-white/70 p-4 dark:border-gray-700 dark:bg-gray-900/50">
                <div>
                  <span class="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">
                    {{ $t("itInfrastructureTools.pages.ipSubnetCalculator.calc.ipLabel") }}:
                  </span>
                  <span class="font-mono text-xs text-gray-700 dark:text-gray-300 break-all leading-relaxed">
                    {{ results.ipBinary }}
                  </span>
                </div>
                <div>
                  <span class="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">
                    {{ $t("itInfrastructureTools.pages.ipSubnetCalculator.calc.subnetMask") }}:
                  </span>
                  <span class="font-mono text-xs text-gray-700 dark:text-gray-300 break-all leading-relaxed">
                    {{ results.maskBinary }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="my-14 border-gray-200 dark:border-gray-200" />

        <!-- IPv4 Classes -->
        <div
          class="mt-14 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            {{ $t("subnetCalculator.ipv4Classes.title") }}
          </h2>
          <div class="overflow-x-auto -mx-2 sm:mx-0">
            <table class="min-w-full border-collapse text-start text-sm">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="px-3 py-2.5 text-start text-xs font-semibold text-gray-700 dark:text-gray-300">
                    {{ $t("subnetCalculator.ipv4Classes.class") }}
                  </th>
                  <th class="px-3 py-2.5 text-start text-xs font-semibold text-gray-700 dark:text-gray-300">
                    {{ $t("subnetCalculator.ipv4Classes.firstOctet") }}
                  </th>
                  <th class="px-3 py-2.5 text-start text-xs font-semibold text-gray-700 dark:text-gray-300">
                    {{ $t("subnetCalculator.ipv4Classes.defaultMask") }}
                  </th>
                  <th class="px-3 py-2.5 text-start text-xs font-semibold text-gray-700 dark:text-gray-300">
                    {{ $t("subnetCalculator.ipv4Classes.cidr") }}
                  </th>
                  <th class="px-3 py-2.5 text-start text-xs font-semibold text-gray-700 dark:text-gray-300">
                    {{ $t("subnetCalculator.ipv4Classes.usableHosts") }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-100 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/40">
                  <td class="px-3 py-2.5 text-start font-semibold text-gray-900 dark:text-white">A</td>
                  <td class="px-3 py-2.5 text-start text-gray-600 dark:text-gray-300 font-mono text-xs">1 – 126</td>
                  <td class="px-3 py-2.5 text-start text-gray-600 dark:text-gray-300 font-mono text-xs">255.0.0.0</td>
                  <td class="px-3 py-2.5 text-start text-gray-600 dark:text-gray-300 font-mono text-xs">/8</td>
                  <td class="px-3 py-2.5 text-start text-gray-600 dark:text-gray-300 font-mono text-xs">16,777,214</td>
                </tr>
                <tr class="border-b border-gray-100 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/40">
                  <td class="px-3 py-2.5 text-start font-semibold text-gray-900 dark:text-white">B</td>
                  <td class="px-3 py-2.5 text-start text-gray-600 dark:text-gray-300 font-mono text-xs">128 – 191</td>
                  <td class="px-3 py-2.5 text-start text-gray-600 dark:text-gray-300 font-mono text-xs">255.255.0.0</td>
                  <td class="px-3 py-2.5 text-start text-gray-600 dark:text-gray-300 font-mono text-xs">/16</td>
                  <td class="px-3 py-2.5 text-start text-gray-600 dark:text-gray-300 font-mono text-xs">65,534</td>
                </tr>
                <tr class="transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/40">
                  <td class="px-3 py-2.5 text-start font-semibold text-gray-900 dark:text-white">C</td>
                  <td class="px-3 py-2.5 text-start text-gray-600 dark:text-gray-300 font-mono text-xs">192 – 223</td>
                  <td class="px-3 py-2.5 text-start text-gray-600 dark:text-gray-300 font-mono text-xs">255.255.255.0</td>
                  <td class="px-3 py-2.5 text-start text-gray-600 dark:text-gray-300 font-mono text-xs">/24</td>
                  <td class="px-3 py-2.5 text-start text-gray-600 dark:text-gray-300 font-mono text-xs">254</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="mt-6 rounded-xl border border-blue-200 bg-blue-50/70 p-4 dark:border-blue-900/60 dark:bg-blue-950/30">
          <h3 class="mb-1 text-sm font-bold text-blue-800 dark:text-blue-300">
            {{ $t("subnetCalculator.ipv4Classes.classDETitle") }}
          </h3>

          <p class="text-sm leading-7 text-gray-700 dark:text-gray-300">
            {{ $t("subnetCalculator.ipv4Classes.classDEInfo") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, h } from "vue";
import i18n from "../../i18n";

const ResultField = {
  props: {
    label: { type: String, required: true },
    value: { type: String, required: true },
    copied: { type: Boolean, default: false },
  },
  emits: ["copy"],
  setup(props, { emit }) {
    return () =>
      h(
        "div",
        {
          class:
            "rounded-xl border border-gray-200 bg-white/70 p-2.5 dark:border-gray-700 dark:bg-gray-900/50",
        },
        [
          h(
            "p",
            {
              class:
                "text-[10px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400",
            },
            props.label
          ),
          h("div", { class: "mt-1 flex items-center justify-between gap-2" }, [
            h(
              "p",
              {
                class:
                  "truncate font-mono text-xs text-gray-900 dark:text-white",
                title: props.value,
              },
              props.value
            ),
            h(
              "button",
              {
                type: "button",
                onClick: () => emit("copy"),
                class:
                  "shrink-0 rounded-md p-1 text-gray-400 transition hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-400",
                "aria-label": props.label,
              },
              props.copied
                ? h(
                  "span",
                  { class: "text-xs text-green-600 dark:text-green-400" },
                  "✓"
                )
                : h("span", { "aria-hidden": "true" }, "⧉")
            ),
          ]),
        ]
      );
  },
};

const t = i18n.global.t;

const ipAddress = ref("");
const ipTouched = ref(false);
const prefixLength = ref(24);
const showBinary = ref(false);
const copiedField = ref("");
let copyResetTimer = null;

function onIpInput(event) {
  ipTouched.value = true;
  hasCalculated.value = false;
  const sanitized = event.target.value.replace(/[^0-9.]/g, "").slice(0, 15);
  ipAddress.value = sanitized;
  event.target.value = sanitized;
}

const isValidIp = computed(() => {
  const parts = ipAddress.value.split(".");
  if (parts.length !== 4) return false;
  return parts.every((part) => {
    if (!/^\d{1,3}$/.test(part)) return false;
    const n = Number(part);
    if (String(n) !== part) return false;
    return n >= 0 && n <= 255;
  });
});

function ipToInt(ip) {
  return (
    ip.split(".").reduce((acc, octet) => (acc << 8) + Number(octet), 0) >>> 0
  );
}

function intToIp(int) {
  return [24, 16, 8, 0].map((shift) => (int >>> shift) & 255).join(".");
}

function intToBinary(int) {
  const bin = (int >>> 0).toString(2).padStart(32, "0");
  return [
    bin.slice(0, 8),
    bin.slice(8, 16),
    bin.slice(16, 24),
    bin.slice(24, 32),
  ].join(".");
}

function prefixToMaskInt(prefix) {
  if (prefix === 0) return 0;
  return (0xffffffff << (32 - prefix)) >>> 0;
}

function prefixToMaskString(prefix) {
  return intToIp(prefixToMaskInt(prefix));
}

function classify(firstOctet) {
  if (firstOctet < 128) return "A";
  if (firstOctet < 192) return "B";
  if (firstOctet < 224) return "C";
  if (firstOctet < 240) return "D";
  return "E";
}

function addressType(ip) {
  const [a, b] = ip.split(".").map(Number);
  if (a === 10) return "private";
  if (a === 172 && b >= 16 && b <= 31) return "private";
  if (a === 192 && b === 168) return "private";
  if (a === 127) return "loopback";
  if (a === 169 && b === 254) return "linkLocal";
  if (a >= 224 && a <= 239) return "multicast";
  if (a >= 240) return "reserved";
  return "public";
}

const results = computed(() => {
  if (!isValidIp.value) return null;

  const ipInt = ipToInt(ipAddress.value);
  const prefix = prefixLength.value;
  const maskInt = prefixToMaskInt(prefix);
  const wildcardInt = ~maskInt >>> 0;
  const networkInt = (ipInt & maskInt) >>> 0;
  const broadcastInt = (networkInt | wildcardInt) >>> 0;

  const totalAddresses = 2 ** (32 - prefix);
  let usableHosts;
  let firstHost;
  let lastHost;

  if (prefix >= 31) {
    usableHosts = prefix === 31 ? 2 : 1;
    firstHost = intToIp(networkInt);
    lastHost = intToIp(broadcastInt);
  } else {
    usableHosts = Math.max(totalAddresses - 2, 0);
    firstHost = intToIp(networkInt + 1);
    lastHost = intToIp(broadcastInt - 1);
  }

  return {
    network: intToIp(networkInt),
    broadcast: intToIp(broadcastInt),
    subnetMask: intToIp(maskInt),
    wildcardMask: intToIp(wildcardInt),
    firstHost,
    lastHost,
    totalAddresses: totalAddresses.toLocaleString("en-US"),
    usableHosts: usableHosts.toLocaleString("en-US"),
    ipClass: classify(Number(ipAddress.value.split(".")[0])),
    addressType: addressType(ipAddress.value),
    ipBinary: intToBinary(ipInt),
    maskBinary: intToBinary(maskInt),
  };
});

const resultFields = computed(() => {
  if (!results.value) return [];
  const r = results.value;
  const base = "itInfrastructureTools.pages.ipSubnetCalculator.calc";
  return [
    { key: "network", labelKey: `${base}.network`, value: r.network },
    { key: "broadcast", labelKey: `${base}.broadcast`, value: r.broadcast },
    { key: "subnetMask", labelKey: `${base}.subnetMask`, value: r.subnetMask },
    {
      key: "wildcardMask",
      labelKey: `${base}.wildcardMask`,
      value: r.wildcardMask,
    },
    {
      key: "hostRange",
      labelKey: `${base}.hostRange`,
      value: `${r.firstHost} - ${r.lastHost}`,
    },
    {
      key: "totalAddresses",
      labelKey: `${base}.totalAddresses`,
      value: r.totalAddresses,
    },
    {
      key: "usableHosts",
      labelKey: `${base}.usableHosts`,
      value: r.usableHosts,
    },
    { key: "ipClass", labelKey: `${base}.ipClass`, value: r.ipClass },
    {
      key: "addressType",
      labelKey: `${base}.addressType`,
      value: t(`${base}.types.${r.addressType}`),
    },
  ];
});

const presets = [
  { label: "10.0.0.0/8", ip: "10.0.0.0", prefix: 8 },
  { label: "172.16.0.0/12", ip: "172.16.0.0", prefix: 12 },
  { label: "192.168.0.0/16", ip: "192.168.0.0", prefix: 16 },
  { label: "192.168.1.0/24", ip: "192.168.1.0", prefix: 24 },
];

function applyPreset(preset) {
  ipTouched.value = true;
  ipAddress.value = preset.ip;
  prefixLength.value = preset.prefix;
}

async function copyValue(key, value) {
  try {
    await navigator.clipboard.writeText(value);
  } catch (err) {
    return;
  }
  copiedField.value = key;
  clearTimeout(copyResetTimer);
  copyResetTimer = setTimeout(() => {
    copiedField.value = "";
  }, 1500);
}

const hasCalculated = ref(false);

watch(prefixLength, () => {
  hasCalculated.value = false;
});

function calculate() {
  if (isValidIp.value) {
    hasCalculated.value = true;
  }
}

function resetForm() {
  ipAddress.value = "";
  prefixLength.value = 24;
  ipTouched.value = false;
  hasCalculated.value = false;
  showBinary.value = false;
}
</script>