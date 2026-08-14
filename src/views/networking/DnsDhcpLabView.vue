<template>
  <div class="min-h-screen my-12 mx-auto px-7 sm:px-6 lg:px-16 xl:px-36 max-w-7xl">
      <!-- Link to return to projects -->
      <router-link to="/Projects"
        class="inline-flex items-center pb-6 gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
        <svg class="h-4 w-4 transition-transform ltr:rotate-0 rtl:rotate-180" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>{{ $t("projectsPage.backToProjects") }}</span>
      </router-link>


    <div class="space-y-8 relative rounded-3xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-900 bg-white dark:bg-gray-900 shadow-sm overflow-hidden transition-colors">
      <!-- 1. HEADER SECTION -->
      <header
        class="relative rounded-3xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden transition-colors">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div class="space-y-3 max-w-3xl">
            <div class="flex items-center gap-2">
              <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {{ $t("networkingLabs.pages.dnsDhcpLab.header.badge") }}
              </p>
            </div>

            <h1 class="text-2xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              {{ $t("networkingLabs.pages.dnsDhcpLab.header.title") }}
            </h1>

            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ $t("networkingLabs.pages.dnsDhcpLab.header.description") }}
            </p>
          </div>

          <!-- Quick Stats / Badges -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-col gap-3 shrink-0 dir-ltr text-left">
            <div
              class="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/80 rounded-xl p-3 text-left">
              <span class="block text-xs text-gray-500 dark:text-gray-400">High Availability</span>
              <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400">DHCP Failover 50/50</span>
            </div>
            <div
              class="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/80 rounded-xl p-3 text-left">
              <span class="block text-xs text-gray-500 dark:text-gray-400">DNS Zones</span>
              <span class="text-xs font-bold text-blue-600 dark:text-blue-400">AD-Integrated + Reverse</span>
            </div>
            <div
              class="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/80 rounded-xl p-3 text-left col-span-2 sm:col-span-1">
              <span class="block text-xs text-gray-500 dark:text-gray-400">Scope Subnet</span>
              <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 font-mono">192.168.10.0/24</span>
            </div>
          </div>
        </div>
      </header>

      <!-- 2. ARCHITECTURE & TABLE SECTION -->
      <section
        class="rounded-2xl p-6 border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm space-y-6 transition-colors">
        <div
          class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-4">
          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span class="w-2.5 h-6 bg-blue-600 rounded-full inline-block"></span>
              {{ $t("networkingLabs.pages.dnsDhcpLab.architecture.heading") }}
            </h2>
            <p class="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {{ $t("networkingLabs.pages.dnsDhcpLab.architecture.intro") }}
            </p>
          </div>
        </div>

        <!-- Desktop Table View -->
        <div class="hidden sm:block overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
          <table class="w-full text-sm text-start text-gray-700 dark:text-gray-300">
            <thead
              class="text-xs uppercase bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800">
              <tr>
                <th class="px-4 py-3.5 text-start font-bold">{{
                  $t("networkingLabs.pages.dnsDhcpLab.architecture.headers.hostname") }}</th>
                <th class="px-4 py-3.5 text-start font-bold">{{
                  $t("networkingLabs.pages.dnsDhcpLab.architecture.headers.role") }}</th>
                <th class="px-4 py-3.5 text-start font-bold">{{
                  $t("networkingLabs.pages.dnsDhcpLab.architecture.headers.os") }}</th>
                <th class="px-4 py-3.5 text-start font-bold">{{
                  $t("networkingLabs.pages.dnsDhcpLab.architecture.headers.ip") }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-800 font-sans">
              <tr v-for="(row, idx) in tableData" :key="idx"
                class="hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition-colors">
                <td class="px-4 py-3.5 font-mono font-bold text-blue-600 dark:text-blue-400">
                  <div class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {{ row.hostname }}
                  </div>
                </td>
                <td class="px-4 py-3.5 font-medium">{{ row.role }}</td>
                <td class="px-4 py-3.5 text-xs text-gray-500 dark:text-gray-400 font-mono">{{ row.os }}</td>
                <td class="px-4 py-3.5 font-mono dir-ltr text-start text-xs sm:text-sm">{{ row.ip }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mobile Cards View -->
        <div class="sm:hidden space-y-3">
          <div v-for="(row, idx) in tableData" :key="idx"
            class="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-800/40 p-4 space-y-2 text-xs">
            <div class="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-2">
              <span class="font-semibold text-gray-500 dark:text-gray-400">{{
                $t("networkingLabs.pages.dnsDhcpLab.architecture.headers.hostname") }}</span>
              <span class="font-mono font-bold text-blue-600 dark:text-blue-400">{{ row.hostname }}</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold text-gray-500 dark:text-gray-400">{{
                $t("networkingLabs.pages.dnsDhcpLab.architecture.headers.role") }}</span>
              <span class="text-end text-gray-800 dark:text-gray-200 font-medium">{{ row.role }}</span>
            </div>
            <div class="flex justify-between">
              <span class="font-semibold text-gray-500 dark:text-gray-400">{{
                $t("networkingLabs.pages.dnsDhcpLab.architecture.headers.ip")
              }}</span>
              <span class="font-mono text-end dir-ltr">{{ row.ip }}</span>
            </div>
          </div>
        </div>

        <!-- Architecture Callout Note -->
        <div
          class="rounded-xl border-s-4 border-blue-500 bg-blue-50/60 dark:bg-blue-950/40 p-4 text-xs sm:text-sm leading-relaxed text-blue-900 dark:text-blue-200 flex items-start gap-3">
          <span class="text-base shrink-0">💡</span>
          <div>{{ $t("networkingLabs.pages.dnsDhcpLab.architecture.note") }}</div>
        </div>
      </section>

      <!-- 3. LAB EXECUTION STEPS -->
      <section class="space-y-6 ">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl mt-6 font-black text-gray-900 dark:text-white">
              {{ $t("networkingLabs.pages.dnsDhcpLab.steps.heading") }}
            </h2>
            <p class="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {{ $t("networkingLabs.pages.dnsDhcpLab.steps.intro") }}
            </p>
          </div>

          <!-- View Mode Toggle Buttons -->
          <div class="inline-flex p-1 rounded-xl bg-gray-200/80 dark:bg-gray-800 shrink-0 self-start sm:self-auto">
            <button @click="activeTab = 'all'" :class="[
              'px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200',
              activeTab === 'all'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]">
              {{ $t("networkingLabs.pages.dnsDhcpLab.tabs.all") }}
            </button>
            <button @click="activeTab = 'gui'" :class="[
              'px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200',
              activeTab === 'gui'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]">
              🖥️ {{ $t("networkingLabs.pages.dnsDhcpLab.tabs.gui") }}
            </button>
            <button @click="activeTab = 'ps'" :class="[
              'px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200',
              activeTab === 'ps'
                ? 'bg-white dark:bg-gray-700 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]">
              ⚡ {{ $t("networkingLabs.pages.dnsDhcpLab.tabs.ps") }}
            </button>
          </div>
        </div>

        <div class="space-y-8">
          <!-- Step 1: DHCP Scope -->
          <div
            class="rounded-2xl p-6 border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm space-y-6 transition-colors">
            <div class="border-b border-gray-100 dark:border-gray-800 pb-4 flex items-center justify-between">
              <div>
                <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Step
                  01</span>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mt-0.5">
                  {{ $t("networkingLabs.pages.dnsDhcpLab.steps.dhcpSetup.title") }}
                </h3>
              </div>
              <span
                class="px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">DHCP
                Core</span>
            </div>

            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              {{ $t("networkingLabs.pages.dnsDhcpLab.steps.dhcpSetup.desc") }}
            </p>

            <!-- GUI Steps -->
            <div v-if="activeTab === 'all' || activeTab === 'gui'"
              class="space-y-3 bg-gray-50/50 dark:bg-gray-800/40 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
              <h4
                class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                🖥️ {{ $t("networkingLabs.pages.dnsDhcpLab.steps.dhcpSetup.guiTitle") }}
              </h4>
              <ol
                class="list-decimal list-inside space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed ps-1">
                <li v-for="(step, sIdx) in $tm('networkingLabs.pages.dnsDhcpLab.steps.dhcpSetup.guiSteps')" :key="sIdx">
                  {{ step }}
                </li>
              </ol>
            </div>

            <!-- PowerShell Scripts (4 Blocks) -->
            <div v-if="activeTab === 'all' || activeTab === 'ps'" class="space-y-4">
              <h4
                class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                ⚡ {{ $t("networkingLabs.pages.dnsDhcpLab.steps.dhcpSetup.psTitle") }}
              </h4>
              <div class="space-y-3">
                <code-block v-for="(code, cIdx) in psDhcpScopeScripts" :key="cIdx" :code="code" />
              </div>
            </div>
          </div>

          <!-- Step 2: Reservation & Failover -->
          <div
            class="rounded-2xl p-6 border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm space-y-6 transition-colors">
            <div class="border-b border-gray-100 dark:border-gray-800 pb-4 flex items-center justify-between">
              <div>
                <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Step
                  02</span>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mt-0.5">
                  {{ $t("networkingLabs.pages.dnsDhcpLab.steps.failoverReservation.title") }}
                </h3>
              </div>
              <span
                class="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">HA
                & Reservation</span>
            </div>

            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              {{ $t("networkingLabs.pages.dnsDhcpLab.steps.failoverReservation.desc") }}
            </p>

            <!-- GUI Steps -->
            <div v-if="activeTab === 'all' || activeTab === 'gui'"
              class="space-y-3 bg-gray-50/50 dark:bg-gray-800/40 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
              <h4
                class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                🖥️ {{ $t("networkingLabs.pages.dnsDhcpLab.steps.failoverReservation.guiTitle") }}
              </h4>
              <ol
                class="list-decimal list-inside space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed ps-1">
                <li v-for="(step, sIdx) in $tm('networkingLabs.pages.dnsDhcpLab.steps.failoverReservation.guiSteps')"
                  :key="sIdx">
                  {{ step }}
                </li>
              </ol>
            </div>

            <!-- PowerShell Scripts (2 Blocks) -->
            <div v-if="activeTab === 'all' || activeTab === 'ps'" class="space-y-4">
              <h4
                class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                ⚡ {{ $t("networkingLabs.pages.dnsDhcpLab.steps.failoverReservation.psTitle") }}
              </h4>
              <div class="space-y-3">
                <code-block v-for="(code, cIdx) in psFailoverScripts" :key="cIdx" :code="code" />
              </div>
            </div>
          </div>

          <!-- Step 3: DNS Configuration -->
          <div
            class="rounded-2xl p-6 border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm space-y-6 transition-colors">
            <div class="border-b border-gray-100 dark:border-gray-800 pb-4 flex items-center justify-between">
              <div>
                <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Step
                  03</span>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mt-0.5">
                  {{ $t("networkingLabs.pages.dnsDhcpLab.steps.dnsSetup.title") }}
                </h3>
              </div>
              <span
                class="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">DNS
                & PTR</span>
            </div>

            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              {{ $t("networkingLabs.pages.dnsDhcpLab.steps.dnsSetup.desc") }}
            </p>

            <!-- GUI Steps -->
            <div v-if="activeTab === 'all' || activeTab === 'gui'"
              class="space-y-3 bg-gray-50/50 dark:bg-gray-800/40 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
              <h4
                class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                🖥️ {{ $t("networkingLabs.pages.dnsDhcpLab.steps.dnsSetup.guiTitle") }}
              </h4>
              <ol
                class="list-decimal list-inside space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed ps-1">
                <li v-for="(step, sIdx) in $tm('networkingLabs.pages.dnsDhcpLab.steps.dnsSetup.guiSteps')" :key="sIdx">
                  {{ step }}
                </li>
              </ol>
            </div>

            <!-- PowerShell Scripts (4 Blocks) -->
            <div v-if="activeTab === 'all' || activeTab === 'ps'" class="space-y-4">
              <h4
                class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                ⚡ {{ $t("networkingLabs.pages.dnsDhcpLab.steps.dnsSetup.psTitle") }}
              </h4>
              <div class="space-y-3">
                <code-block v-for="(code, cIdx) in psDnsScripts" :key="cIdx" :code="code" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. CONCLUSION SECTION -->
      <div class="pt-6">
        <section class="rounded-2xl  p-6 border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm space-y-4 transition-colors">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span class="w-2.5 h-6 bg-emerald-500 rounded-full inline-block"></span>
            {{ $t("networkingLabs.pages.dnsDhcpLab.conclusion.heading") }}
          </h2>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ $t("networkingLabs.pages.dnsDhcpLab.conclusion.desc") }}
          </p>
          <ul class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li v-for="(point, pIdx) in $tm('networkingLabs.pages.dnsDhcpLab.conclusion.points')" :key="pIdx"
              class="flex items-start gap-2.5">
              <span class="text-emerald-500 font-bold shrink-0">✓</span>
              <span>{{ point }}</span>
            </li>
          </ul>
        </section>
      </div>

      <!-- GitHub Repository Link -->
      <div class="mt-10 flex justify-center">
        <a href="https://github.com/omidbolandy/dhcp-failover-and-dns-windows-server-lab.git" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-gray-800 hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700">
          <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>{{ $t("networkingLabs.pages.etherchannelLacp.githubLink") }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { h } from 'vue';

export default {
  name: "DnsDhcpLabView",
  components: {
    CodeBlock: {
      name: "CodeBlock",
      props: {
        code: {
          type: String,
          required: true
        }
      },
      data() {
        return {
          copied: false
        };
      },
      methods: {
        copyCode() {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(this.code);
          } else {
            const el = document.createElement('textarea');
            el.value = this.code;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
          }
          this.copied = true;
          setTimeout(() => {
            this.copied = false;
          }, 2000);
        }
      },
      render() {
        const isRtl = this.$i18n ? this.$i18n.locale === 'fa' : true;

        const lines = this.code.split('\n');
        const commentLine = lines[0] || '';
        const commandLines = lines.slice(1).join('\n');

        return h('div', {
          class: `relative group rounded-xl overflow-hidden bg-gray-900 border border-gray-800 shadow-inner ${isRtl ? 'dir-rtl' : 'dir-ltr'}`
        }, [
          h('div', {
            class: `flex items-center justify-between px-4 py-2 bg-gray-800/80 border-b border-gray-700 text-xs font-mono text-gray-300 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`
          }, [
            h('span', { class: 'font-semibold text-gray-400' }, 'PowerShell'),

            h('button', {
              onClick: this.copyCode,
              class: 'inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded-md bg-gray-700 hover:bg-gray-600 text-gray-200 transition-colors border border-gray-600 shrink-0'
            }, [
              h('span', this.copied ? (isRtl ? '✓ کپی شد' : '✓ Copied') : (isRtl ? 'کپی' : 'Copy'))
            ])
          ]),

          h('pre', { class: 'p-4 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed' }, [
            h('div', {
              class: `text-emerald-500 font-semibold mb-2 ${isRtl ? 'dir-rtl text-right' : 'dir-ltr text-left'}`
            }, commentLine),

            h('code', { class: 'block text-emerald-400 dir-ltr text-left' }, commandLines)
          ])
        ]);
      }
    }
  },
  data() {
    return {
      activeTab: "all"
    };
  },
  computed: {
    tableData() {
      return [
        {
          hostname: "DC1-DNS1",
          role: this.$t("networkingLabs.pages.dnsDhcpLab.architecture.rows.dc1.role"),
          os: this.$t("networkingLabs.pages.dnsDhcpLab.architecture.rows.dc1.os"),
          ip: "192.168.10.10 /24"
        },
        {
          hostname: "DHCP1",
          role: this.$t("networkingLabs.pages.dnsDhcpLab.architecture.rows.dhcp1.role"),
          os: this.$t("networkingLabs.pages.dnsDhcpLab.architecture.rows.dhcp1.os"),
          ip: "192.168.10.11 /24"
        },
        {
          hostname: "DHCP2",
          role: this.$t("networkingLabs.pages.dnsDhcpLab.architecture.rows.dhcp2.role"),
          os: this.$t("networkingLabs.pages.dnsDhcpLab.architecture.rows.dhcp2.os"),
          ip: "192.168.10.12 /24"
        },
        {
          hostname: "Printer-HR-01",
          role: this.$t("networkingLabs.pages.dnsDhcpLab.architecture.rows.printer.role"),
          os: this.$t("networkingLabs.pages.dnsDhcpLab.architecture.rows.printer.os"),
          ip: "192.168.10.50 (MAC: 00-11-22-33-44-55)"
        }
      ];
    },

    psDhcpScopeScripts() {
      return [
        `# 1. ${this.$t("networkingLabs.pages.dnsDhcpLab.steps.dhcpSetup.psComments.step1")}\nInstall-WindowsFeature -Name DHCP -IncludeManagementTools`,
        `# 2. ${this.$t("networkingLabs.pages.dnsDhcpLab.steps.dhcpSetup.psComments.step2")}\nAdd-DhcpServerInDC -DnsName "dhcp1.obk.local" -IPAddress 192.168.10.11`,
        `# 3. ${this.$t("networkingLabs.pages.dnsDhcpLab.steps.dhcpSetup.psComments.step3")}\nAdd-DhcpServerv4Scope -Name "LAN_Clients_Scope" \`\n                      -StartRange 192.168.10.100 \`\n                      -EndRange 192.168.10.200 \`\n                      -SubnetMask 255.255.255.0 \`\n                      -State Active`,
        `# 4. ${this.$t("networkingLabs.pages.dnsDhcpLab.steps.dhcpSetup.psComments.step4")}\nSet-DhcpServerv4OptionValue -ScopeId 192.168.10.0 \`\n                            -Router 192.168.10.1 \`\n                            -DnsServer 192.168.10.10 \`\n                            -DnsDomain "obk.local"`
      ];
    },

    psFailoverScripts() {
      return [
        `# 1. ${this.$t("networkingLabs.pages.dnsDhcpLab.steps.failoverReservation.psComments.step1")}\nAdd-DhcpServerv4Reservation -ScopeId 192.168.10.0 \`\n                            -IPAddress 192.168.10.50 \`\n                            -ClientId "00-11-22-33-44-55" \`\n                            -Name "Printer-HR-01" \`\n                            -Description "Reserved IP for HR HP Laserjet"`,
        `# 2. ${this.$t("networkingLabs.pages.dnsDhcpLab.steps.failoverReservation.psComments.step2")}\nAdd-DhcpServerv4Failover -Name "DHCP1-DHCP2-Failover" \`\n                         -ScopeId 192.168.10.0 \`\n                         -PartnerServer "dhcp2.obk.local" \`\n                         -Mode LoadBalance \`\n                         -LoadBalancePercent 50 \`\n                         -SharedSecret "P@ssw0rdFailover2026!"`
      ];
    },

    psDnsScripts() {
      return [
        `# 1. ${this.$t("networkingLabs.pages.dnsDhcpLab.steps.dnsSetup.psComments.step1")}\nAdd-DnsServerPrimaryZone -NetworkId "192.168.10.0/24" -ReplicationScope "Domain"`,
        `# 2. ${this.$t("networkingLabs.pages.dnsDhcpLab.steps.dnsSetup.psComments.step2")}\nAdd-DnsServerResourceRecordA -Name "app-server" \`\n                             -ZoneName "obk.local" \`\n                             -IPv4Address "192.168.10.30" \`\n                             -CreatePtr`,
        `# 3. ${this.$t("networkingLabs.pages.dnsDhcpLab.steps.dnsSetup.psComments.step3")}\nAdd-DnsServerResourceRecordCName -Name "erp" \`\n                                 -HostNameAlias "app-server.obk.local" \`\n                                 -ZoneName "obk.local"`,
        `# 4. ${this.$t("networkingLabs.pages.dnsDhcpLab.steps.dnsSetup.psComments.step4")}\nSet-DnsServerForwarder -IPAddress "1.1.1.1", "8.8.8.8" -PassThru`
      ];
    }
  }
};
</script>