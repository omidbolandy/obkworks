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
          {{ $t("networkingLabs.pages.adGpoLab.badge") }}
        </p>

        <h1 class="text-3xl font-bold">
          {{ $t("networkingLabs.pages.adGpoLab.title") }}
        </h1>

        <div class="mt-3">
          <span
            class="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 px-3 py-1 text-xs font-semibold">
            {{ $t("networkingLabs.pages.adGpoLab.meta.estimatedTime") }}
          </span>
        </div>

        <p class="mt-6 text-lg text-gray-700 dark:text-gray-300">
          {{ $t("networkingLabs.pages.adGpoLab.intro") }}
        </p>

        <hr class="my-8 border-gray-200 dark:border-gray-700" />

        <!-- 1. Scenario Architecture & Infrastructure -->
        <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {{ $t("networkingLabs.pages.adGpoLab.architecture.heading") }}
        </h2>
        <p class="mt-2 text-gray-700 dark:text-gray-300">
          {{ $t("networkingLabs.pages.adGpoLab.architecture.intro") }}
        </p>

        <div :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'">
          <!-- Table view (tablet and up) -->
          <div class="hidden sm:block overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mt-4">
            <table class="w-full text-sm text-start text-gray-700 dark:text-gray-300">
              <thead
                class="text-xs uppercase bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th class="px-4 py-3 text-start font-semibold whitespace-nowrap">{{
                    $t("networkingLabs.pages.adGpoLab.architecture.headers.hostname") }}</th>
                  <th class="px-4 py-3 text-start font-semibold whitespace-nowrap">{{
                    $t("networkingLabs.pages.adGpoLab.architecture.headers.role") }}</th>
                  <th class="px-4 py-3 text-start font-semibold whitespace-nowrap">{{
                    $t("networkingLabs.pages.adGpoLab.architecture.headers.os") }}</th>
                  <th class="px-4 py-3 text-start font-semibold whitespace-nowrap">{{
                    $t("networkingLabs.pages.adGpoLab.architecture.headers.ip") }}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
                <tr v-for="(row, rIndex) in nodeRows" :key="rIndex"
                  class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td class="px-4 py-3 text-start font-mono font-bold whitespace-nowrap">{{ row.hostname }}</td>
                  <td class="px-4 py-3 text-start whitespace-nowrap">{{ row.role }}</td>
                  <td class="px-4 py-3 text-start whitespace-nowrap">{{ row.os }}</td>
                  <td class="px-4 py-3 text-start font-mono whitespace-nowrap">{{ row.ip }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Stacked card view (mobile only) -->
          <div class="sm:hidden space-y-3 mt-4">
            <div v-for="(row, rIndex) in nodeRows" :key="rIndex"
              class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800 px-3">
              <div class="flex items-start justify-between gap-3 py-2.5 text-sm">
                <span class="shrink-0 font-semibold text-gray-500 dark:text-gray-400">{{
                  $t("networkingLabs.pages.adGpoLab.architecture.headers.hostname") }}</span>
                <span class="text-end font-mono font-bold text-gray-700 dark:text-gray-300">{{ row.hostname }}</span>
              </div>
              <div class="flex items-start justify-between gap-3 py-2.5 text-sm">
                <span class="shrink-0 font-semibold text-gray-500 dark:text-gray-400">{{
                  $t("networkingLabs.pages.adGpoLab.architecture.headers.role") }}</span>
                <span class="text-end text-gray-700 dark:text-gray-300">{{ row.role }}</span>
              </div>
              <div class="flex items-start justify-between gap-3 py-2.5 text-sm">
                <span class="shrink-0 font-semibold text-gray-500 dark:text-gray-400">{{
                  $t("networkingLabs.pages.adGpoLab.architecture.headers.os") }}</span>
                <span class="text-end text-gray-700 dark:text-gray-300">{{ row.os }}</span>
              </div>
              <div class="flex items-start justify-between gap-3 py-2.5 text-sm">
                <span class="shrink-0 font-semibold text-gray-500 dark:text-gray-400">{{
                  $t("networkingLabs.pages.adGpoLab.architecture.headers.ip") }}</span>
                <span class="text-end font-mono text-gray-700 dark:text-gray-300">{{ row.ip }}</span>
              </div>
            </div>
          </div>
        </div>

        <hr class="my-8 border-gray-200 dark:border-gray-700" />

        <!-- 2. Wizard Installation Steps -->
        <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {{ $t("networkingLabs.pages.adGpoLab.wizard.heading") }}
        </h2>
        <p class="mt-2 text-gray-700 dark:text-gray-300">
          {{ $t("networkingLabs.pages.adGpoLab.wizard.intro") }}
        </p>

        <!-- Phase 1: Add Roles and Features -->
        <div class="mt-6 space-y-3">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">
            {{ $t("networkingLabs.pages.adGpoLab.wizard.phase1Title") }}
          </h3>
          <ol class="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li v-for="step in 8" :key="`p1-${step}`">
              {{ $t(`networkingLabs.pages.adGpoLab.wizard.phase1Steps.step${step}`) }}
            </li>
          </ol>
        </div>

        <!-- Phase 2: Domain Controller Promotion -->
        <div class="mt-6 space-y-3">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">
            {{ $t("networkingLabs.pages.adGpoLab.wizard.phase2Title") }}
          </h3>
          <ol class="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li v-for="step in 7" :key="`p2-${step}`">
              {{ $t(`networkingLabs.pages.adGpoLab.wizard.phase2Steps.step${step}`) }}
            </li>
          </ol>
        </div>

        <hr class="my-8 border-gray-200 dark:border-gray-700" />

        <!-- 3. Directory Structure (OUs, Groups, Users) -->
        <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {{ $t("networkingLabs.pages.adGpoLab.ouStructure.heading") }}
        </h2>
        <p class="mt-2 text-gray-700 dark:text-gray-300">
          {{ $t("networkingLabs.pages.adGpoLab.ouStructure.intro") }}
        </p>
        <!-- ASCII Tree -->
        <div class="my-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-900 p-4 text-emerald-400 font-mono text-xs sm:text-sm overflow-x-auto" dir="ltr">
          <pre><code>obk.local/
└── OBK_HQ/
    ├── Departments/
    │   ├── IT/           (User: user.it | Group: GG_IT_Dept)
    │   ├── HR/           (User: user.hr | Group: GG_HR_Dept)
    │   └── Finance/      (User: user.fin | Group: GG_Fin_Dept)
    ├── Groups/           (Security & Distribution Groups)
    └── Workstations/     (Joined Domain Computers: Client-01, Client-02)</code></pre>
        </div>
        <!-- Breakout PowerShell Scripts into 3 Smaller Sections -->
        <div class="mt-6 space-y-6">
          <!-- Step 3.1: Create OUs -->
          <div>
            <h3 class="text-base font-bold text-gray-900 dark:text-white mb-2">
              {{ $t("networkingLabs.pages.adGpoLab.labels.step1OuTitle") }}
            </h3>
            <div class="relative group">
              <div
                class="flex flex-wrap items-center justify-between gap-2 bg-gray-800 dark:bg-gray-900 text-gray-300 px-3 sm:px-4 py-2 text-xs rounded-t-xl border-b border-gray-700 font-mono">
                <span class="truncate">{{ $t("networkingLabs.pages.adGpoLab.labels.psOuScript") }}</span>
                <button @click="copyToClipboard(psOuScript, 'psOu')"
                  class="flex shrink-0 items-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 px-2.5 py-1 rounded transition-all text-xs">
                  <span v-if="copiedIndex === 'psOu'" class="text-green-400 font-medium">{{ $t("articles.Copied") }}! ✓</span>
                  <span v-else>{{ $t("articles.Copied") }}</span>
                </button>
              </div>
              <pre
                class="bg-gray-900 text-emerald-400 p-4 rounded-b-xl overflow-x-auto font-mono text-sm leading-6 border border-t-0 border-gray-800"
                dir="ltr"><code>{{ psOuScript }}</code></pre>
            </div>
          </div>

          <!-- Step 3.2: Create Groups -->
          <div>
            <h3 class="text-base font-bold text-gray-900 dark:text-white mb-2">
              {{ $t("networkingLabs.pages.adGpoLab.labels.step2GroupTitle") }}
            </h3>
            <div class="relative group">
              <div
                class="flex flex-wrap items-center justify-between gap-2 bg-gray-800 dark:bg-gray-900 text-gray-300 px-3 sm:px-4 py-2 text-xs rounded-t-xl border-b border-gray-700 font-mono">
                <span class="truncate">{{ $t("networkingLabs.pages.adGpoLab.labels.psGroupScript") }}</span>
                <button @click="copyToClipboard(psGroupScript, 'psGroup')"
                  class="flex shrink-0 items-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 px-2.5 py-1 rounded transition-all text-xs">
                  <span v-if="copiedIndex === 'psGroup'" class="text-green-400 font-medium">{{ $t("articles.Copied") }}! ✓</span>
                  <span v-else>{{ $t("articles.Copied") }}</span>
                </button>
              </div>
              <pre
                class="bg-gray-900 text-emerald-400 p-4 rounded-b-xl overflow-x-auto font-mono text-sm leading-6 border border-t-0 border-gray-800"
                dir="ltr"><code>{{ psGroupScript }}</code></pre>
            </div>
          </div>

          <!-- Step 3.3: Create Users -->
          <div>
            <h3 class="text-base font-bold text-gray-900 dark:text-white mb-2">
              {{ $t("networkingLabs.pages.adGpoLab.labels.step3UserTitle") }}
            </h3>
            <div class="relative group">
              <div
                class="flex flex-wrap items-center justify-between gap-2 bg-gray-800 dark:bg-gray-900 text-gray-300 px-3 sm:px-4 py-2 text-xs rounded-t-xl border-b border-gray-700 font-mono">
                <span class="truncate">{{ $t("networkingLabs.pages.adGpoLab.labels.psUserScript") }}</span>
                <button @click="copyToClipboard(psUserScript, 'psUser')"
                  class="flex shrink-0 items-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 px-2.5 py-1 rounded transition-all text-xs">
                  <span v-if="copiedIndex === 'psUser'" class="text-green-400 font-medium">{{ $t("articles.Copied") }}! ✓</span>
                  <span v-else>{{ $t("articles.Copied") }}</span>
                </button>
              </div>
              <pre
                class="bg-gray-900 text-emerald-400 p-4 rounded-b-xl overflow-x-auto font-mono text-sm leading-6 border border-t-0 border-gray-800"
                dir="ltr"><code>{{ psUserScript }}</code></pre>
            </div>
          </div>
        </div>

        <hr class="my-8 border-gray-200 dark:border-gray-700" />

        <!-- 4. Group Policy Objects (GPOs) Configuration -->
        <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {{ $t("networkingLabs.pages.adGpoLab.gpo.heading") }}
        </h2>
        <p class="mt-2 text-gray-700 dark:text-gray-300">
          {{ $t("networkingLabs.pages.adGpoLab.gpo.intro") }}
        </p>
        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div v-for="key in gpoKeys" :key="key"
            class="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-4">
            <h3 class="text-sm font-bold text-blue-600 dark:text-blue-400">
              {{ $t(`networkingLabs.pages.adGpoLab.gpo.items.${key}.title`) }}
            </h3>
            <p class="mt-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
              {{ $t("networkingLabs.pages.adGpoLab.gpo.targetLabel") }}: {{ $t(`networkingLabs.pages.adGpoLab.gpo.items.${key}.target`) }}
            </p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {{ $t(`networkingLabs.pages.adGpoLab.gpo.items.${key}.desc`) }}
            </p>
          </div>
        </div>

        <hr class="my-8 border-gray-200 dark:border-gray-700" />

        <!-- 4.5 File Server, FSRM & NTFS Permissions Wizard -->
        <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {{ $t("networkingLabs.pages.adGpoLab.fsrmWizard.heading") }}
        </h2>

        <p class="mt-2 text-gray-700 dark:text-gray-300">
          {{ $t("networkingLabs.pages.adGpoLab.fsrmWizard.intro") }}
        </p>

        <!-- Phase 1: Install FSRM Role -->
        <div class="mt-6 space-y-3">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-bold">1</span>
            {{ $t("networkingLabs.pages.adGpoLab.fsrmWizard.phase1Title") }}
          </h3>
          <ol class="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li v-for="step in 5" :key="`fsrm-p1-${step}`">
              {{ $t(`networkingLabs.pages.adGpoLab.fsrmWizard.phase1Steps.step${step}`) }}
            </li>
          </ol>
        </div>

        <!-- Phase 2: Folder Sharing & NTFS Permissions -->
        <div class="mt-6 space-y-3">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-bold">2</span>
            {{ $t("networkingLabs.pages.adGpoLab.fsrmWizard.phase2Title") }}
          </h3>
          <ol class="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li v-for="step in 5" :key="`fsrm-p2-${step}`">
              {{ $t(`networkingLabs.pages.adGpoLab.fsrmWizard.phase2Steps.step${step}`) }}
            </li>
          </ol>
        </div>

        <!-- Phase 3: FSRM Quota & Screen Management -->
        <div class="mt-6 space-y-3">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-bold">3</span>
            {{ $t("networkingLabs.pages.adGpoLab.fsrmWizard.phase3Title") }}
          </h3>
          <ol class="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li v-for="step in 5" :key="`fsrm-p3-${step}`">
              {{ $t(`networkingLabs.pages.adGpoLab.fsrmWizard.phase3Steps.step${step}`) }}
            </li>
          </ol>
        </div>

        <!-- Automation Script (PowerShell Alternative) -->
        <div class="mt-6">
          <h3 class="text-base font-bold text-gray-900 dark:text-white mb-2">
            {{ $t("networkingLabs.pages.adGpoLab.labels.psFsrmScript") }}
          </h3>
          <div class="relative group">
            <div
              class="flex flex-wrap items-center justify-between gap-2 bg-gray-800 dark:bg-gray-900 text-gray-300 px-3 sm:px-4 py-2 text-xs rounded-t-xl border-b border-gray-700 font-mono">
              <span class="truncate">PowerShell - FSRM & Share Configuration</span>
              <button @click="copyToClipboard(psFsrmScript, 'psFsrm')"
                class="flex shrink-0 items-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 px-2.5 py-1 rounded transition-all text-xs">
                <span v-if="copiedIndex === 'psFsrm'" class="text-green-400 font-medium">{{ $t("articles.Copied") }}! ✓</span>
                <span v-else>{{ $t("articles.Copied") }}</span>
              </button>
            </div>
            <pre
              class="bg-gray-900 text-emerald-400 p-4 rounded-b-xl overflow-x-auto font-mono text-sm leading-6 border border-t-0 border-gray-800"
              dir="ltr"><code>{{ psFsrmScript }}</code></pre>
          </div>
        </div>

        <hr class="my-8 border-gray-200 dark:border-gray-700" />

        <!-- 5. Verification & Testing -->
        <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {{ $t("networkingLabs.pages.adGpoLab.verification.heading") }}
        </h2>
        <p class="mt-2 text-gray-700 dark:text-gray-300">
          {{ $t("networkingLabs.pages.adGpoLab.verification.intro") }}
        </p>
        <ul class="list-disc list-inside space-y-2 mt-3 text-sm text-gray-700 dark:text-gray-300">
          <li>{{ $t("networkingLabs.pages.adGpoLab.verification.step1") }}</li>
          <li>{{ $t("networkingLabs.pages.adGpoLab.verification.step2") }}</li>
          <li>{{ $t("networkingLabs.pages.adGpoLab.verification.step3") }}</li>
        </ul>

        <!-- Verification Commands -->
        <div class="relative mt-4 mb-6 group">
          <div
            class="flex flex-wrap items-center justify-between gap-2 bg-gray-800 dark:bg-gray-900 text-gray-300 px-3 sm:px-4 py-2 text-xs rounded-t-xl border-b border-gray-700 font-mono">
            <span class="truncate">{{ $t("networkingLabs.pages.adGpoLab.labels.cmdTerminal") }}</span>
            <button @click="copyToClipboard(verifyCommands, 'verify')"
              class="flex shrink-0 items-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 px-2.5 py-1 rounded transition-all text-xs">
              <span v-if="copiedIndex === 'verify'" class="text-green-400 font-medium">{{ $t("articles.Copied") }}! ✓</span>
              <span v-else>{{ $t("articles.Copied") }}</span>
            </button>
          </div>
          <pre
            class="bg-gray-900 text-emerald-400 p-4 rounded-b-xl overflow-x-auto font-mono text-sm leading-6 border border-t-0 border-gray-800"
            dir="ltr"><code>{{ verifyCommands }}</code></pre>
        </div>

        <hr class="my-8 border-gray-200 dark:border-gray-700" />

        <!-- 6. Conclusion -->
        <div>
          <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {{ $t("networkingLabs.pages.adGpoLab.conclusion.heading") }}
          </h2>
          <p class="mt-2 text-gray-700 dark:text-gray-300">
            {{ $t("networkingLabs.pages.adGpoLab.conclusion.paragraph1") }}
          </p>
          <p class="mt-2 mb-8 text-gray-700 dark:text-gray-300">
            {{ $t("networkingLabs.pages.adGpoLab.conclusion.paragraph2") }}
          </p>
        </div>

        <hr class="my-8 border-gray-200 dark:border-gray-700" />

        <!-- GitHub Repository Link -->
        <div class="mt-6 flex justify-center">
          <a href="https://github.com/omidbolandy/active-directory-gpo-fsrm-lab.git" target="_blank" rel="noopener noreferrer"
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
  </div>
</template>

<script>
export default {
  name: "ActiveDirectoryGpoLab",
  data() {
    return {
      copiedIndex: null,
      gpoKeys: ["passwordPolicy", "hardeningPolicy", "desktopPolicy", "localAdminPolicy"],
      nodeRows: [
        { hostname: "DC1", role: "Primary Domain Controller / DNS", os: "Windows Server 2022", ip: "192.168.10.10" },
        { hostname: "Client-01", role: "Domain Member Workstation", os: "Windows 10 Pro", ip: "192.168.10.20" },
        { hostname: "Client-02", role: "Domain Member Workstation", os: "Windows 10 Pro", ip: "192.168.10.21" },
      ],
      verifyCommands: `:: Force Group Policy update immediately
gpupdate /force

:: Display applied GPOs for the logged-in user and computer
gpresult /r

:: Generate a detailed HTML report of applied policy settings
gpresult /h C:\\GPO_Report.html`,
    };
  },
  computed: {
    // 3.1 Create OUs
    psOuScript() {
      return `# Create Main Organizational Unit
New-ADOrganizationalUnit -Name "OBK_HQ" -Path "DC=obk,DC=local"

# Create Sub-OUs
New-ADOrganizationalUnit -Name "Departments" -Path "OU=OBK_HQ,DC=obk,DC=local"
New-ADOrganizationalUnit -Name "Groups" -Path "OU=OBK_HQ,DC=obk,DC=local"
New-ADOrganizationalUnit -Name "Workstations" -Path "OU=OBK_HQ,DC=obk,DC=local"

# Departmental OUs
New-ADOrganizationalUnit -Name "IT" -Path "OU=Departments,OU=OBK_HQ,DC=obk,DC=local"
New-ADOrganizationalUnit -Name "HR" -Path "OU=Departments,OU=OBK_HQ,DC=obk,DC=local"
New-ADOrganizationalUnit -Name "Finance" -Path "OU=Departments,OU=OBK_HQ,DC=obk,DC=local"`;
    },
    // 3.2 Create Security Groups (AGDLP Standard)
    psGroupScript() {
      return `# Create Global Security Groups (AGDLP Standard)
New-ADGroup -Name "GG_IT_Dept" -GroupScope Global -GroupCategory Security -Path "OU=Groups,OU=OBK_HQ,DC=obk,DC=local"
New-ADGroup -Name "GG_HR_Dept" -GroupScope Global -GroupCategory Security -Path "OU=Groups,OU=OBK_HQ,DC=obk,DC=local"
New-ADGroup -Name "GG_Fin_Dept" -GroupScope Global -GroupCategory Security -Path "OU=Groups,OU=OBK_HQ,DC=obk,DC=local"`;
    },
    // 3.3 Create Users and Assign to Groups
    psUserScript() {
      return `# Create IT User & Add to IT Group
New-ADUser -Name "user.it" -SamAccountName "user.it" -UserPrincipalName "user.it@obk.local" -Path "OU=IT,OU=Departments,OU=OBK_HQ,DC=obk,DC=local" -AccountPassword(ConvertTo-SecureString "P@ssw0rd123!" -AsPlainText -Force) -Enabled $true
Add-ADGroupMember -Identity "GG_IT_Dept" -Members "user.it"

# Create HR User & Add to HR Group
New-ADUser -Name "user.hr" -SamAccountName "user.hr" -UserPrincipalName "user.hr@obk.local" -Path "OU=HR,OU=Departments,OU=OBK_HQ,DC=obk,DC=local" -AccountPassword(ConvertTo-SecureString "P@ssw0rd123!" -AsPlainText -Force) -Enabled $true
Add-ADGroupMember -Identity "GG_HR_Dept" -Members "user.hr"`;
    },
// 3.4 FSRM & NTFS Configuration Script
    psFsrmScript() {
      return `# Install FSRM Role
Install-WindowsFeature -Name FS-Resource-Manager -IncludeManagementTools

# Create Shared Directory
New-Item -Path "C:\\Shares\\HR_Data" -ItemType Directory
New-SmbShare -Name "HR_Share" -Path "C:\\Shares\\HR_Data" -FullAccess "obk\\Domain Admins" -ChangeAccess "obk\\GG_HR_Dept"

# Set Explicit NTFS Permissions
$Acl = Get-Acl "C:\\Shares\\HR_Data"
$Ar = New-Object System.Security.AccessControl.FileSystemAccessRule("obk\\GG_HR_Dept", "Modify", "ContainerInherit,ObjectInherit", "None", "Allow")
$Acl.SetAccessRule($Ar)
Set-Acl "C:\\Shares\\HR_Data" $Acl

# Create FSRM Hard Quota (2 GB Limit)
New-FsrmQuota -Path "C:\\Shares\\HR_Data" -Description "Limit HR Share size to 2GB" -Size 2GB -SoftLimit:$false`;
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