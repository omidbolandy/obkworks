<template>
  <div class="min-h-screen px-4 py-10 bg-gradient-to-br text-gray-900 dark:text-white">
    <div class="mx-auto max-w-3xl">
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
        class="mt-6 rounded-2xl border border-gray-200 dark:border-gray-900 bg-white/80 dark:bg-gray-900 p-8 shadow-lg backdrop-blur">
        <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          {{ $t("networkingLabs.pages.vlanRouterOnAStick.badge") }}
        </p>

        <h1 class="text-3xl font-bold">
          {{ $t("networkingLabs.pages.vlanRouterOnAStick.title") }}
        </h1>

        <div class="mt-3">
          <span
            class="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 px-3 py-1 text-xs font-semibold">
            {{ $t("networkingLabs.pages.vlanRouterOnAStick.meta.estimatedTime") }}
          </span>
        </div>

        <!-- Top Image Representation -->
        <div class="my-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
          <img src="/src/views/networking/assets/vlan.png" :alt="$t('networkingLabs.pages.vlanRouterOnAStick.imageAlt')"
            class="w-full h-auto object-cover" />
        </div>

        <p class="mt-4 text-lg text-gray-700 dark:text-gray-300">
          {{ $t("networkingLabs.pages.vlanRouterOnAStick.intro") }}
        </p>

        <hr class="my-8 border-gray-200 dark:border-gray-700" />

        <!-- 0. VLAN core concepts -->
        <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {{ $t("networkingLabs.pages.vlanRouterOnAStick.concepts.heading") }}
        </h2>

        <p class="mt-2 text-gray-700 dark:text-gray-300">
          {{ $t("networkingLabs.pages.vlanRouterOnAStick.concepts.intro") }}
        </p>

        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div v-for="key in conceptKeys" :key="key"
            class="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-4">
            <h3 class="text-sm font-bold text-blue-600 dark:text-blue-400">
              {{ $t(`networkingLabs.pages.vlanRouterOnAStick.concepts.items.${key}.title`) }}
            </h3>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {{ $t(`networkingLabs.pages.vlanRouterOnAStick.concepts.items.${key}.desc`) }}
            </p>
          </div>
        </div>

        <hr class="my-8 border-gray-200 dark:border-gray-700" />

        <div class="mt-8 space-y-6 text-gray-800 dark:text-gray-200">
          <!-- 1. Addressing -->
          <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {{ $t("networkingLabs.pages.vlanRouterOnAStick.sections.addressing.heading") }}
          </h2>

          <p>
            {{ $t("networkingLabs.pages.vlanRouterOnAStick.sections.addressing.intro") }}
          </p>

          <ul class="list-disc list-inside space-y-2">
            <li>
              <strong>{{ $t("networkingLabs.pages.vlanRouterOnAStick.sections.addressing.salesLabel") }}</strong>
              {{
                $t("networkingLabs.pages.vlanRouterOnAStick.sections.addressing.salesDesc", {
                  network: "192.168.10.0/24",
                  gateway: "192.168.10.1",
                  pc1: "192.168.10.10",
                  pc2: "192.168.10.20",
                })
              }}
            </li>
            <li>
              <strong>{{ $t("networkingLabs.pages.vlanRouterOnAStick.sections.addressing.marketingLabel") }}</strong>
              {{
                $t("networkingLabs.pages.vlanRouterOnAStick.sections.addressing.marketingDesc", {
                  network: "192.168.20.0/24",
                  gateway: "192.168.20.1",
                  pc3: "192.168.20.10",
                  pc4: "192.168.20.20",
                })
              }}
            </li>
          </ul>

          <hr class="my-8 border-gray-200 dark:border-gray-700" />

          <!-- 3. Physical connections -->
          <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {{ $t("networkingLabs.pages.vlanRouterOnAStick.connections.heading") }}
          </h2>

          <p>
            {{ $t("networkingLabs.pages.vlanRouterOnAStick.connections.intro") }}
          </p>

          <div :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'">
            <!-- Table view (tablet and up) -->
            <div class="hidden sm:block overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table class="w-full text-sm text-start text-gray-700 dark:text-gray-300">
                <thead
                  class="text-xs uppercase bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                  <tr>
                    <th class="px-4 py-3 text-start font-semibold whitespace-nowrap">{{
                      $t("networkingLabs.pages.vlanRouterOnAStick.connections.headers.sourceDevice") }}</th>
                    <th class="px-4 py-3 text-start font-semibold whitespace-nowrap">{{
                      $t("networkingLabs.pages.vlanRouterOnAStick.connections.headers.sourcePort") }}</th>
                    <th class="px-4 py-3 text-start font-semibold whitespace-nowrap">{{
                      $t("networkingLabs.pages.vlanRouterOnAStick.connections.headers.destDevice") }}</th>
                    <th class="px-4 py-3 text-start font-semibold whitespace-nowrap">{{
                      $t("networkingLabs.pages.vlanRouterOnAStick.connections.headers.destPort") }}</th>
                    <th class="px-4 py-3 text-start font-semibold whitespace-nowrap">{{
                      $t("networkingLabs.pages.vlanRouterOnAStick.connections.headers.linkType") }}</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
                  <tr v-for="(row, rIndex) in connectionRows" :key="rIndex"
                    class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td class="px-4 py-3 text-start whitespace-nowrap">{{ row.source }}</td>
                    <td class="px-4 py-3 text-start whitespace-nowrap">{{ row.sourcePort }}</td>
                    <td class="px-4 py-3 text-start whitespace-nowrap">{{ row.dest }}</td>
                    <td class="px-4 py-3 text-start whitespace-nowrap">{{ row.destPort }}</td>
                    <td class="px-4 py-3 text-start">{{
                      $t(`networkingLabs.pages.vlanRouterOnAStick.connections.linkTypes.${row.linkTypeKey}`) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Stacked card view (mobile only) -->
            <div class="sm:hidden space-y-3">
              <div v-for="(row, rIndex) in connectionRows" :key="rIndex"
                class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800 px-3">
                <div class="flex items-start justify-between gap-3 py-2.5 text-sm">
                  <span class="shrink-0 font-semibold text-gray-500 dark:text-gray-400">{{
                    $t("networkingLabs.pages.vlanRouterOnAStick.connections.headers.sourceDevice") }}</span>
                  <span class="text-end text-gray-700 dark:text-gray-300">{{ row.source }}</span>
                </div>
                <div class="flex items-start justify-between gap-3 py-2.5 text-sm">
                  <span class="shrink-0 font-semibold text-gray-500 dark:text-gray-400">{{
                    $t("networkingLabs.pages.vlanRouterOnAStick.connections.headers.sourcePort") }}</span>
                  <span class="text-end text-gray-700 dark:text-gray-300">{{ row.sourcePort }}</span>
                </div>
                <div class="flex items-start justify-between gap-3 py-2.5 text-sm">
                  <span class="shrink-0 font-semibold text-gray-500 dark:text-gray-400">{{
                    $t("networkingLabs.pages.vlanRouterOnAStick.connections.headers.destDevice") }}</span>
                  <span class="text-end text-gray-700 dark:text-gray-300">{{ row.dest }}</span>
                </div>
                <div class="flex items-start justify-between gap-3 py-2.5 text-sm">
                  <span class="shrink-0 font-semibold text-gray-500 dark:text-gray-400">{{
                    $t("networkingLabs.pages.vlanRouterOnAStick.connections.headers.destPort") }}</span>
                  <span class="text-end text-gray-700 dark:text-gray-300">{{ row.destPort }}</span>
                </div>
                <div class="flex items-start justify-between gap-3 py-2.5 text-sm">
                  <span class="shrink-0 font-semibold text-gray-500 dark:text-gray-400">{{
                    $t("networkingLabs.pages.vlanRouterOnAStick.connections.headers.linkType") }}</span>
                  <span class="text-end text-gray-700 dark:text-gray-300">{{
                    $t(`networkingLabs.pages.vlanRouterOnAStick.connections.linkTypes.${row.linkTypeKey}`) }}</span>
                </div>
              </div>
            </div>
          </div>

          <hr class="my-8 border-gray-200 dark:border-gray-700" />

          <!-- 4. Switch configuration -->
          <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {{ $t("networkingLabs.pages.vlanRouterOnAStick.sections.switchConfig.heading") }}
          </h2>

          <p>
            {{ $t("networkingLabs.pages.vlanRouterOnAStick.sections.switchConfig.intro") }}
          </p>

          <div class="relative mb-6 group">
            <div
              class="flex flex-wrap items-center justify-between gap-2 bg-gray-800 dark:bg-gray-900 text-gray-300 px-3 sm:px-4 py-2 text-xs rounded-t-xl border-b border-gray-700 font-mono">
              <span class="truncate">{{ $t("networkingLabs.pages.vlanRouterOnAStick.labels.switchTerminal") }}</span>
              <button @click="copyToClipboard(switchConfigCode, 'switch')"
                class="flex shrink-0 items-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 px-2.5 py-1 rounded transition-all text-xs">
                <span v-if="copiedIndex === 'switch'" class="text-green-400 font-medium">{{ $t("articles.Copied") }}!
                  ✓</span>
                <span v-else>{{ $t("articles.Copied") }}</span>
              </button>
            </div>
            <pre
              class="bg-gray-900 text-emerald-400 p-4 rounded-b-xl overflow-x-auto font-mono text-sm leading-6 border border-t-0 border-gray-800"
              dir="ltr"><code>{{ switchConfigCode }}</code></pre>
          </div>

          <hr class="my-8 border-gray-200 dark:border-gray-700" />

          <!-- 5. Router configuration -->
          <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {{ $t("networkingLabs.pages.vlanRouterOnAStick.sections.routerConfig.heading") }}
          </h2>

          <p>
            {{ $t("networkingLabs.pages.vlanRouterOnAStick.sections.routerConfig.intro") }}
          </p>

          <div class="relative mb-6 group">
            <div
              class="flex flex-wrap items-center justify-between gap-2 bg-gray-800 dark:bg-gray-900 text-gray-300 px-3 sm:px-4 py-2 text-xs rounded-t-xl border-b border-gray-700 font-mono">
              <span class="truncate">{{ $t("networkingLabs.pages.vlanRouterOnAStick.labels.routerTerminal") }}</span>
              <button @click="copyToClipboard(routerConfigCode, 'router')"
                class="flex shrink-0 items-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 px-2.5 py-1 rounded transition-all text-xs">
                <span v-if="copiedIndex === 'router'" class="text-green-400 font-medium">{{ $t("articles.Copied") }}!
                  ✓</span>
                <span v-else>{{ $t("articles.Copied") }}</span>
              </button>
            </div>
            <pre
              class="bg-gray-900 text-emerald-400 p-4 rounded-b-xl overflow-x-auto font-mono text-sm leading-6 border border-t-0 border-gray-800"
              dir="ltr"><code>{{ routerConfigCode }}</code></pre>
          </div>

          <hr class="my-8 border-gray-200 dark:border-gray-700" />

          <!-- 6. Verification -->
          <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {{ $t("networkingLabs.pages.vlanRouterOnAStick.sections.verification.heading") }}
          </h2>

          <p>
            {{ $t("networkingLabs.pages.vlanRouterOnAStick.sections.verification.intro") }}
          </p>

          <ul class="list-disc list-inside space-y-2">
            <li>{{ $t("networkingLabs.pages.vlanRouterOnAStick.sections.verification.item1") }}</li>
            <li>{{ $t("networkingLabs.pages.vlanRouterOnAStick.sections.verification.item2") }}</li>
            <li>
              {{
                $t("networkingLabs.pages.vlanRouterOnAStick.sections.verification.item3", {
                  net1: "192.168.10.0/24",
                  net2: "192.168.20.0/24",
                })
              }}
            </li>
            <li>
              {{
                $t("networkingLabs.pages.vlanRouterOnAStick.sections.verification.item4", {
                  pc1: "192.168.10.10",
                  pc3: "192.168.20.10",
                })
              }}
            </li>
          </ul>

          <hr class="my-8 border-gray-200 dark:border-gray-700" />

          <!-- 7. Common pitfalls -->
          <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {{ $t("networkingLabs.pages.vlanRouterOnAStick.pitfalls.heading") }}
          </h2>

          <p>
            {{ $t("networkingLabs.pages.vlanRouterOnAStick.pitfalls.intro") }}
          </p>

          <ul class="list-disc list-inside space-y-2">
            <li>{{ $t("networkingLabs.pages.vlanRouterOnAStick.pitfalls.item1") }}</li>
            <li>{{ $t("networkingLabs.pages.vlanRouterOnAStick.pitfalls.item2") }}</li>
            <li>{{ $t("networkingLabs.pages.vlanRouterOnAStick.pitfalls.item3") }}</li>
            <li>{{ $t("networkingLabs.pages.vlanRouterOnAStick.pitfalls.item4") }}</li>
            <li>{{ $t("networkingLabs.pages.vlanRouterOnAStick.pitfalls.item5") }}</li>
          </ul>

          <hr class="my-8 border-gray-200 dark:border-gray-700" />

          <!-- 8. Conclusion -->
          <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {{ $t("networkingLabs.pages.vlanRouterOnAStick.conclusion.heading") }}
          </h2>
          <p>
            {{ $t("networkingLabs.pages.vlanRouterOnAStick.conclusion.paragraph1") }}
          </p>
          <p>
            {{ $t("networkingLabs.pages.vlanRouterOnAStick.conclusion.paragraph2") }}
          </p>
          <hr class="my-8 border-gray-200 dark:border-gray-700" />

          <!-- GitHub Repository Link -->
          <div class="mt-10 flex justify-center">
            <a
              href="https://github.com/omidbolandy/vlan-router-on-a-stick-lab.git"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-gray-800 hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700">
              <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>{{ $t("networkingLabs.pages.ospfSingleArea.githubLink") }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VLANLab",
  data() {
    return {
      copiedIndex: null,
      conceptKeys: ["broadcastDomain", "segmentation", "portModes", "tagging", "interVlanRouting"],
      connectionRows: [
        { source: "PC-1", sourcePort: "NIC", dest: "Switch", destPort: "Fa0/1", linkTypeKey: "accessVlan10" },
        { source: "PC-2", sourcePort: "NIC", dest: "Switch", destPort: "Fa0/2", linkTypeKey: "accessVlan10" },
        { source: "PC-3", sourcePort: "NIC", dest: "Switch", destPort: "Fa0/3", linkTypeKey: "accessVlan20" },
        { source: "PC-4", sourcePort: "NIC", dest: "Switch", destPort: "Fa0/4", linkTypeKey: "accessVlan20" },
        { source: "Switch", sourcePort: "Gi0/1", dest: "Router", destPort: "Gi0/0", linkTypeKey: "trunk8021q" },
      ],
    };
  },
  computed: {
    switchConfigCode() {
      const t = (key) => this.$t(`networkingLabs.pages.vlanRouterOnAStick.codeComments.switch.${key}`);
      return `Switch# configure terminal

! ${t("createVlans")}
Switch(config)# vlan 10
Switch(config-vlan)# name Sales
Switch(config-vlan)# exit

Switch(config)# vlan 20
Switch(config-vlan)# name Marketing
Switch(config-vlan)# exit

! ${t("assignVlan10Ports")}
Switch(config)# interface range fastEthernet 0/1 - 2
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 10
Switch(config-if-range)# exit

! ${t("assignVlan20Ports")}
Switch(config)# interface range fastEthernet 0/3 - 4
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 20
Switch(config-if-range)# exit

! ${t("setTrunk")}
Switch(config)# interface gigabitEthernet 0/1
Switch(config-if)# switchport mode trunk
Switch(config-if)# exit

! ${t("saveConfig")}
Switch# write memory`;
    },
    routerConfigCode() {
      const t = (key) => this.$t(`networkingLabs.pages.vlanRouterOnAStick.codeComments.router.${key}`);
      return `Router# configure terminal

! ${t("enablePhysical")}
Router(config)# interface gigabitEthernet 0/0
Router(config-if)# no shutdown
Router(config-if)# exit

! ${t("createSubVlan10")}
Router(config)# interface gigabitEthernet 0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0
Router(config-subif)# exit

! ${t("createSubVlan20")}
Router(config)# interface gigabitEthernet 0/0.20
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0
Router(config-subif)# exit

! ${t("saveConfig")}
Router# write memory`;
    },
  },
  methods: {
    async copyToClipboard(code, index) {
      try {
        await navigator.clipboard.writeText(code);
        this.copiedIndex = index;
        setTimeout(() => {
          if (this.copiedIndex === index) this.copiedIndex = null;
        }, 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    },
  },
};
</script>