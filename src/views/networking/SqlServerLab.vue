<template>
  
  <!-- Link to return to projects -->
  <div class="mx-auto max-w-5xl px-6 pt-10 sm:px-10 lg:px-16">
      <router-link to="/Projects"
        class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
        <svg class="h-4 w-4 transition-transform ltr:rotate-0 rtl:rotate-180" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>{{ $t("projectsPage.backToProjects") }}</span>
      </router-link>
  </div>

  <div class="mx-auto max-w-6xl px-6 pb-14 sm:px-10 lg:px-12">
    <!-- Main Outer Container Box -->
    <div
      class="mt-6 mx-0 sm:mx-10 lg:mx-20 rounded-2xl border border-gray-200 dark:border-gray-900 bg-white/80 dark:bg-gray-900 p-5 sm:p-8 shadow-lg backdrop-blur">
      <!-- Header / Hero Section -->
      <div>
        <div class="flex flex-wrap items-center gap-3">
          <span
            class="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-950/80 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/20"
          >
            {{ $t("networkingLabs.pages.sqlLab.badge") }}
          </span>
          <span class="text-xs text-gray-500 dark:text-gray-400">
            {{ $t("networkingLabs.pages.sqlLab.meta.estimatedTime") }}
          </span>
        </div>
        <h1
          class="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
        >
          {{ $t("networkingLabs.pages.sqlLab.title") }}
        </h1>
        <p class="mt-3 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {{ $t("networkingLabs.pages.sqlLab.intro") }}
        </p>
      </div>

      <hr class="my-8 border-gray-200 dark:border-gray-700" />

      <!-- 1. Fundamental Concepts & Terminology -->
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {{ $t("networkingLabs.pages.sqlLab.concepts.heading") }}
        </h2>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          {{ $t("networkingLabs.pages.sqlLab.concepts.intro") }}
        </p>

        <!-- Core Acronyms Overview -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- SQL -->
          <div class="rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/40 dark:bg-blue-950/20 p-4">
            <h3 class="text-sm font-bold text-blue-700 dark:text-blue-300 mb-1">
              SQL <span class="text-xs font-normal text-gray-500 dark:text-gray-400">({{ $t("networkingLabs.pages.sqlLab.concepts.acronyms.sql.full") }})</span>
            </h3>
            <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
              {{ $t("networkingLabs.pages.sqlLab.concepts.acronyms.sql.desc") }}
            </p>
          </div>

          <!-- T-SQL -->
          <div class="rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/20 p-4">
            <h3 class="text-sm font-bold text-emerald-700 dark:text-emerald-300 mb-1">
              T-SQL <span class="text-xs font-normal text-gray-500 dark:text-gray-400">({{ $t("networkingLabs.pages.sqlLab.concepts.acronyms.tsql.full") }})</span>
            </h3>
            <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
              {{ $t("networkingLabs.pages.sqlLab.concepts.acronyms.tsql.desc") }}
            </p>
          </div>

          <!-- SSMS -->
          <div class="rounded-xl border border-purple-200 dark:border-purple-900/50 bg-purple-50/40 dark:bg-purple-950/20 p-4">
            <h3 class="text-sm font-bold text-purple-700 dark:text-purple-300 mb-1">
              SSMS <span class="text-xs font-normal text-gray-500 dark:text-gray-400">({{ $t("networkingLabs.pages.sqlLab.concepts.acronyms.ssms.full") }})</span>
            </h3>
            <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
              {{ $t("networkingLabs.pages.sqlLab.concepts.acronyms.ssms.desc") }}
            </p>
          </div>
        </div>

        <!-- Expanded Core Concepts Grid (6 Cards) -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(icon, key) in conceptIcons"
            :key="key"
            class="rounded-2xl border border-gray-200 dark:border-gray-700/80 bg-gradient-to-b from-slate-50 to-white dark:from-gray-800/80 dark:to-gray-900/80 p-5 shadow-sm"
          >
            <div class="flex items-center gap-3 mb-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold"
              >
                {{ icon }}
              </div>
              <h3 class="text-sm font-bold text-gray-900 dark:text-white">
                {{ $t(`networkingLabs.pages.sqlLab.concepts.cards.${key}.title`) }}
              </h3>
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ $t(`networkingLabs.pages.sqlLab.concepts.cards.${key}.desc`) }}
            </p>
          </div>
        </div>
      </section>

      <hr class="my-8 border-gray-200 dark:border-gray-700" />

      <!-- 2. Installation Wizard -->
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {{ $t("networkingLabs.pages.sqlLab.wizard.heading") }}
        </h2>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          {{ $t("networkingLabs.pages.sqlLab.wizard.intro") }}
        </p>

        <!-- Steps List -->
        <div class="space-y-4">
          <div
            v-for="step in 6"
            :key="`sql-install-${step}`"
            class="flex gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/40 p-4"
          >
            <div
              class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xs"
            >
              {{ step }}
            </div>
            <div>
              <h3 class="text-sm font-bold text-gray-900 dark:text-white">
                {{ $t(`networkingLabs.pages.sqlLab.wizard.steps.step${step}.title`) }}
              </h3>
              <p class="mt-1 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t(`networkingLabs.pages.sqlLab.wizard.steps.step${step}.desc`) }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr class="my-8 border-gray-200 dark:border-gray-700" />

      <!-- 3. Practical Database & Table Operations -->
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {{ $t("networkingLabs.pages.sqlLab.practical.heading") }}
        </h2>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          {{ $t("networkingLabs.pages.sqlLab.practical.intro") }}
        </p>

        <div class="space-y-6">
          <!-- SSMS Graphical Method Card -->
          <div
            class="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-6 shadow-sm"
          >
            <h3
              class="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"
            >
              <span>🖱️</span> {{ $t("networkingLabs.pages.sqlLab.practical.ssmsTitle") }}
            </h3>
            <ul
              class="list-disc list-inside space-y-2 text-xs text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              <li v-for="i in 4" :key="`ssms-step-${i}`">
                {{ $t(`networkingLabs.pages.sqlLab.practical.ssmsSteps.step${i}`) }}
              </li>
            </ul>
          </div>

          <!-- T-SQL Code Method Box -->
          <div
            class="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-6 shadow-sm"
          >
            <h3
              class="text-base font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2"
            >
              <span>💻</span> {{ $t("networkingLabs.pages.sqlLab.practical.tsqlTitle") }}
            </h3>
            <p class="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {{ $t("networkingLabs.pages.sqlLab.practical.tsqlDesc") }}
            </p>

            <!-- T-SQL Code Block -->
            <div class="relative group">
              <div
                class="flex flex-wrap items-center justify-between gap-2 bg-gray-800 dark:bg-gray-900 text-gray-300 px-3 sm:px-4 py-2 text-xs rounded-t-xl border-b border-gray-700 font-mono"
              >
                <span class="truncate">T-SQL - Create DB, Tables & CRUD Operations</span>
                <button
                  @click="copyToClipboard(tsqlCrudScript, 'tsqlCrud')"
                  class="flex shrink-0 items-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 px-2.5 py-1 rounded transition-all text-xs"
                >
                  <span
                    v-if="copiedIndex === 'tsqlCrud'"
                    class="text-green-400 font-medium"
                    >{{ $t("articles.Copied") }}! ✓</span
                  >
                  <span v-else>{{ $t("articles.Copied") }}</span>
                </button>
              </div>
              <pre
                class="bg-gray-900 text-emerald-400 p-4 rounded-b-xl overflow-x-auto font-mono text-sm leading-6 border border-t-0 border-gray-800"
                dir="ltr"
              ><code>{{ tsqlCrudScript }}</code></pre>
            </div>
          </div>
        </div>
      </section>

      <hr class="my-8 border-gray-200 dark:border-gray-700" />

      <!-- 4. Backup & Restore Operations -->
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {{ $t("networkingLabs.pages.sqlLab.backup.heading") }}
        </h2>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          {{ $t("networkingLabs.pages.sqlLab.backup.intro") }}
        </p>

        <!-- Graphical Backup & Restore Wizards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Backup GUI Wizard -->
          <div class="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-5 shadow-sm">
            <h3 class="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span>💾</span> {{ $t("networkingLabs.pages.sqlLab.backup.gui.backupTitle") }}
            </h3>
            <ol class="list-decimal list-inside space-y-2 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              <li v-for="i in 5" :key="`backup-step-${i}`">
                {{ $t(`networkingLabs.pages.sqlLab.backup.gui.backupSteps.step${i}`) }}
              </li>
            </ol>
          </div>

          <!-- Restore GUI Wizard -->
          <div class="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-5 shadow-sm">
            <h3 class="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span>🔄</span> {{ $t("networkingLabs.pages.sqlLab.backup.gui.restoreTitle") }}
            </h3>
            <ol class="list-decimal list-inside space-y-2 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              <li v-for="i in 5" :key="`restore-step-${i}`">
                {{ $t(`networkingLabs.pages.sqlLab.backup.gui.restoreSteps.step${i}`) }}
              </li>
            </ol>
          </div>
        </div>

        <!-- Backup T-SQL Code -->
        <div class="relative group">
          <div
            class="flex flex-wrap items-center justify-between gap-2 bg-gray-800 dark:bg-gray-900 text-gray-300 px-3 sm:px-4 py-2 text-xs rounded-t-xl border-b border-gray-700 font-mono"
          >
            <span class="truncate">T-SQL - Full Backup & Restore Scripts</span>
            <button
              @click="copyToClipboard(tsqlBackupScript, 'tsqlBackup')"
              class="flex shrink-0 items-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 px-2.5 py-1 rounded transition-all text-xs"
            >
              <span
                v-if="copiedIndex === 'tsqlBackup'"
                class="text-green-400 font-medium"
                >{{ $t("articles.Copied") }}! ✓</span
              >
              <span v-else>{{ $t("articles.Copied") }}</span>
            </button>
          </div>
          <pre
            class="bg-gray-900 text-emerald-400 p-4 rounded-b-xl overflow-x-auto font-mono text-sm leading-6 border border-t-0 border-gray-800"
            dir="ltr"
          ><code>{{ tsqlBackupScript }}</code></pre>
        </div>
      </section>

      <hr class="my-8 border-gray-200 dark:border-gray-700" />

      <!-- 5. Import & Export Wizard -->
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {{ $t("networkingLabs.pages.sqlLab.importExport.heading") }}
        </h2>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          {{ $t("networkingLabs.pages.sqlLab.importExport.intro") }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Import Wizard -->
          <div
            class="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-5 shadow-sm"
          >
            <h3 class="text-sm font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
              <span>📥</span> {{ $t("networkingLabs.pages.sqlLab.importExport.gui.importTitle") }}
            </h3>
            <ol class="list-decimal list-inside space-y-2 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              <li v-for="i in 5" :key="`import-step-${i}`">
                {{ $t(`networkingLabs.pages.sqlLab.importExport.gui.importSteps.step${i}`) }}
              </li>
            </ol>
          </div>

          <!-- Export Wizard -->
          <div
            class="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-5 shadow-sm"
          >
            <h3 class="text-sm font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
              <span>📤</span> {{ $t("networkingLabs.pages.sqlLab.importExport.gui.exportTitle") }}
            </h3>
            <ol class="list-decimal list-inside space-y-2 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              <li v-for="i in 5" :key="`export-step-${i}`">
                {{ $t(`networkingLabs.pages.sqlLab.importExport.gui.exportSteps.step${i}`) }}
              </li>
            </ol>
          </div>
        </div>
      </section>

      <hr class="my-8 border-gray-200 dark:border-gray-700" />

      <!-- 6. Conclusion -->
      <section class="space-y-4 pb-9">
        <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {{ $t("networkingLabs.pages.sqlLab.conclusion.heading") }}
        </h2>
        <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {{ $t("networkingLabs.pages.sqlLab.conclusion.paragraph1") }}
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "SqlServerLab",
  data() {
    return {
      copiedIndex: null,
      conceptIcons: {
        rdbms: "🗄️",
        auth: "🔑",
        systemDbs: "⚙️",
        dataTypes: "📊",
        constraints: "🛡️",
        indexes: "⚡",
      },
    };
  },
  computed: {
    tsqlCrudScript() {
      return `-- 1. Create Database
CREATE DATABASE CorporateDB;
GO

USE CorporateDB;
GO

-- 2. Create Employees Table
CREATE TABLE Employees (
    EmployeeID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName NVARCHAR(50) NOT NULL,
    LastName NVARCHAR(50) NOT NULL,
    Department NVARCHAR(50),
    Salary DECIMAL(10, 2),
    HireDate DATE DEFAULT GETDATE()
);
GO

-- 3. Insert Data (DML)
INSERT INTO Employees (FirstName, LastName, Department, Salary)
VALUES 
('Ali', 'Rezai', 'IT Infrastructure', 75000.00),
('Sara', 'Ahmadi', 'Human Resources', 62000.00);
GO

-- 4. Query Data
SELECT EmployeeID, FirstName, LastName, Department, Salary 
FROM Employees 
WHERE Department = 'IT Infrastructure';
GO`;
    },
    tsqlBackupScript() {
      return `-- Full Database Backup
BACKUP DATABASE CorporateDB
TO DISK = 'C:\\SQLBackups\\CorporateDB_Full.bak'
WITH FORMAT,
     MEDIANAME = 'SQLServerBackups',
     NAME = 'Full Backup of CorporateDB';
GO

-- Restore Database from Backup
RESTORE DATABASE CorporateDB
FROM DISK = 'C:\\SQLBackups\\CorporateDB_Full.bak'
WITH REPLACE;
GO`;
    },
  },
  methods: {
    copyToClipboard(text, index) {
      navigator.clipboard.writeText(text).then(() => {
        this.copiedIndex = index;
        setTimeout(() => {
          this.copiedIndex = null;
        }, 2000);
      });
    },
  },
};
</script>