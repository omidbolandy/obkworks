<template>
  <!-- Link to return to projects -->
  <router-link
    to="/Projects"
    class="mt-14 mx-2 min-[375px]:mx-3 min-[425px]:mx-4 sm:mx-6 md:mx-10 lg:mx-14 xl:mx-20 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
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

  <!-- Main Container -->
  <div class="rounded-3xl mx-2 mt-1 mb-3 min-[375px]:mx-3 min-[375px]:mt-1.5 min-[375px]:mb-4 min-[425px]:mx-4 min-[425px]:mt-2 min-[425px]:mb-5 sm:mx-6 sm:mt-2 sm:mb-8 md:mx-10 md:mt-2.5 md:mb-10 lg:mx-14 lg:mt-3 lg:mb-11 xl:mx-20 xl:mt-3 xl:mb-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 sm:p-6 md:p-8 dir-auto transition-colors duration-300"> 
    <!-- Header Section -->
    <header class="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-200 dark:border-gray-800 pb-6">
      <div class="min-w-0 w-full md:w-auto">
        <h1 class="text-xs min-[375px]:text-sm min-[425px]:text-lg sm:text-xl md:text-xl lg:text-3xl font-bold text-gray-900 dark:text-white flex items-start sm:items-center gap-2 min-[375px]:gap-3 leading-snug break-words">
          <span class="p-1.5 min-[375px]:p-2 bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-xl text-base min-[375px]:text-xl shrink-0">🛠️</span>
          <span class="break-words">{{ $t('troubleshooting.title') }}</span>
        </h1>
        <p class="text-[10px] min-[375px]:text-xs min-[425px]:text-sm text-gray-500 dark:text-gray-400 mt-1 leading-normal break-words">
          {{ $t('troubleshooting.subtitle') }}
        </p>
      </div>

      <!-- Timer Badge & Reset Button -->
      <div class="flex items-center gap-2 sm:gap-3 shrink-0">
        <div class="px-2.5 sm:px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs sm:text-sm font-mono text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 whitespace-nowrap">
          ⏱ {{ formattedTime }}
        </div>
        <button 
          @click="resetCurrentScenario" 
          class="px-3 sm:px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap">
          🔄 {{ $t('troubleshooting.resetScenario') }}
        </button>
      </div>
    </header>

    <main class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Left Sidebar: Scenario Selector & System Actions -->
      <section class="lg:col-span-4 flex flex-col gap-6">
        <!-- Scenario Selector Card -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-3 min-[375px]:p-4 min-[425px]:p-5 shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <label class="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            {{ $t('troubleshooting.selectScenario') }}
          </label>
          
          <div class="relative">
            <select 
              v-model="activeScenarioId" 
              @change="loadScenario"
              class="w-full min-w-0 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl py-3 ps-4 pe-8 text-xs min-[375px]:text-sm focus:ring-2 focus:ring-blue-500 outline-none font-medium appearance-none cursor-pointer truncate">
              <option v-for="s in scenarios" :key="s.id" :value="s.id" class="truncate">
                {{ $t(s.titleKey) }}
              </option>
            </select>
        
            <!-- Custom Arrow Icon -->
            <div class="pointer-events-none absolute inset-y-0 flex items-center px-2 text-gray-400 ltr:right-0 rtl:left-0">
              <svg class="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
      
          <!-- Active Scenario Info -->
          <div v-if="currentScenario" class="mt-4 p-3 min-[375px]:p-4 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-100 dark:border-blue-900/50 overflow-hidden">
            <h3 class="text-xs min-[375px]:text-sm font-bold text-blue-900 dark:text-blue-300 mb-2 break-words">
              {{ $t(currentScenario.titleKey) }}
            </h3>
            <p class="text-xs text-blue-800/80 dark:text-blue-300/80 mb-3 leading-relaxed break-words">
              {{ $t(currentScenario.descKey) }}
            </p>
            <div class="text-xs font-semibold text-blue-900 dark:text-blue-200">
              📌 {{ $t('troubleshooting.symptoms') }}:
              <span class="font-normal block mt-1 text-gray-600 dark:text-gray-300 break-words">
                {{ $t(currentScenario.symptomsKey) }}
              </span>
            </div>
          </div>
        </div>

        <!-- Quick System Actions Panel -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 class="text-sm font-bold mb-3 flex items-center gap-2">
            <span>⚙️</span> {{ $t('troubleshooting.systemActions') }}
          </h3>
          <div class="grid grid-cols-1 gap-2">
            <button 
              @click="triggerAction('RENEW_DHCP')" 
              class="action-btn">
              🔄 {{ $t('troubleshooting.actions.renewDhcp') }}
            </button>
            <button 
              @click="triggerAction('FLUSH_DNS')" 
              class="action-btn">
              🧹 {{ $t('troubleshooting.actions.flushDns') }}
            </button>
            <button 
              @click="triggerAction('ENABLE_ADAPTER')" 
              class="action-btn">
              🔌 {{ $t('troubleshooting.actions.enableAdapter') }}
            </button>
            <button 
              @click="triggerAction('START_DHCP_SERVICE')" 
              class="action-btn">
              ⚙️ {{ $t('troubleshooting.actions.startDhcpService') }}
            </button>
            <button 
              @click="triggerAction('FIX_GATEWAY')" 
              class="action-btn">
              🌐 {{ $t('troubleshooting.actions.fixGateway') }}
            </button>
          </div>
        </div>

        <!-- Hint Section -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
          <button 
            v-if="!showHint" 
            @click="showHint = true" 
            class="w-full py-2.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-medium rounded-xl text-sm border border-amber-500/20 hover:bg-amber-500/20 transition-colors">
            💡 {{ $t('troubleshooting.getHint') }}
          </button>
          <div v-else class="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-800 dark:text-amber-300">
            <strong>💡 Hint:</strong> {{ $t(currentScenario.solutionHintKey) }}
          </div>
        </div>
      </section>

      <!-- Right Main Content: Terminal & Log -->
      <section class="lg:col-span-8 flex flex-col gap-6">
        <!-- Interactive English CMD Terminal -->
        <div dir="ltr" class="bg-gray-950 text-emerald-400 font-mono rounded-2xl shadow-2xl border border-gray-800 flex flex-col h-[460px] overflow-hidden text-left ring-1 ring-white/5">
          
          <div dir="ltr" class="bg-gray-900 px-4 py-2 flex flex-row items-center justify-between border-b border-gray-800 text-xs text-gray-400 gap-2 min-w-0">
            <div dir="ltr" class="flex flex-row items-center gap-2 min-w-0">
              <span class="w-3 h-3 rounded-full bg-red-500/90 inline-block shrink-0 shadow-sm shadow-red-500/50"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-500/90 inline-block shrink-0 shadow-sm shadow-yellow-500/50"></span>
              <span class="w-3 h-3 rounded-full bg-green-500/90 inline-block shrink-0 shadow-sm shadow-green-500/50"></span>
              <div class="ml-1 flex flex-col min-w-0">
                <span class="font-semibold text-gray-300 tracking-wide text-[11px] sm:text-xs leading-tight">Command Prompt</span>
                <span class="text-gray-500 text-[10px] truncate leading-tight hidden min-[375px]:block">C:\Windows\system32\cmd.exe</span>
              </div>
            </div>
            <span class="font-mono text-gray-500 text-[10px] sm:text-[11px] shrink-0">v10.0.19045</span>
          </div>

          <div dir="ltr" ref="terminalOutput" class="flex-1 p-4 overflow-y-auto text-xs sm:text-sm space-y-1.5 text-left custom-scrollbar bg-gray-950">
            <div dir="ltr" class="text-gray-500 mb-3 text-left leading-relaxed">
              Microsoft Windows [Version 10.0.19045.3803]<br>
              (c) Microsoft Corporation. All rights reserved.<br><br>
              Type <span class="text-amber-400 font-semibold">help</span> for available commands.
            </div>

            <div v-for="(line, idx) in terminalHistory" :key="idx" dir="ltr" class="whitespace-pre-wrap leading-relaxed text-left">
              <span v-if="line.type === 'input'" class="text-gray-200 font-semibold">C:\Users\Admin&gt; {{ line.text }}</span>
              <span v-else-if="line.type === 'error'" class="text-rose-400">{{ line.text }}</span>
              <span v-else class="text-emerald-400/90">{{ line.text }}</span>
            </div>
          </div>

          <div dir="ltr" class="p-2 min-[375px]:p-3 bg-gray-950 border-t border-gray-800">
            <form 
              dir="ltr" 
              @submit.prevent="handleCommandSubmit" 
              style="background-color: rgb(17 24 39);"
              class="border border-gray-700/60 px-2 min-[375px]:px-3 min-[425px]:px-4 py-2 rounded-2xl focus-within:border-emerald-500/80 focus-within:ring-1 focus-within:ring-emerald-500/30 flex flex-row items-center gap-1.5 min-[375px]:gap-2 text-left transition-all duration-200 shadow-inner overflow-hidden">
              <!-- Prompt Path (Shortens on smaller screens) -->
              <div class="flex items-center gap-0.5 min-[375px]:gap-1 shrink-0 font-mono text-[10px] min-[375px]:text-xs sm:text-base font-bold select-none">
                <span class="text-emerald-400 hidden min-[425px]:inline">C:\Users\Admin</span>
                <span class="text-emerald-400 min-[425px]:hidden">C:\&gt;</span>
                <span class="text-gray-300 hidden min-[425px]:inline">&gt;</span>
              </div>

              <input 
                ref="cmdInput"
                dir="ltr"
                v-model="inputCommand" 
                @keydown.enter.prevent="handleCommandSubmit"
                type="text" 
                class="flex-1 min-w-0 !bg-transparent text-emerald-300 placeholder-gray-400/70 focus:outline-none font-mono text-xs sm:text-base caret-emerald-400 text-left tracking-wide py-1 !border-none !shadow-none ring-0 focus:ring-0 truncate"
                placeholder="type 'help', 'ipconfig'..."
                spellcheck="false"
                autocomplete="off"/>

              <button 
                v-if="inputCommand"
                type="button"
                @click="clearInput"
                class="shrink-0 p-1 rounded-full text-rose-500 hover:text-rose-400 hover:bg-rose-500/20 transition-all focus:outline-none cursor-pointer flex items-center justify-center"
                title="Clear input">
                <svg class="w-3.5 h-3.5 min-[375px]:w-4 min-[375px]:h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <button 
                type="submit" 
                class="flex items-center gap-1 text-[10px] min-[375px]:text-xs font-mono text-emerald-400 hover:text-emerald-300 bg-emerald-950 hover:bg-emerald-900 border border-emerald-800/80 rounded-xl px-2 py-1 transition-all select-none cursor-pointer shrink-0">
                <span>↵</span>
                <span class="hidden sm:inline">Enter</span>
              </button>
            </form>
          </div>
        </div>

        <!-- Investigation Log & Solve Trigger -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-3 min-[375px]:p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col gap-3 min-[375px]:gap-4">
          <div class="flex items-center justify-between gap-2">
            <h3 class="text-xs min-[352px]:text-sm font-bold flex items-center gap-1.5 shrink-0">
              <span>📋</span> {{ $t('troubleshooting.investigationLog') }}
            </h3>
            <span class="text-[10px] min-[352px]:text-xs text-gray-400 shrink-0">Total Logs: {{ logs.length }}</span>
          </div>

          <div class="bg-gray-50 dark:bg-gray-900/60 rounded-xl p-2 min-[352px]:p-3 border border-gray-200 dark:border-gray-700/60 h-32 overflow-y-auto text-[10px] min-[352px]:text-xs font-mono space-y-1.5">
            <div v-if="logs.length === 0" class="text-gray-400 italic text-center pt-8">
              {{ $t('troubleshooting.noLogsYet') }}
            </div>
            <div v-for="(log, i) in logs" :key="i" class="flex items-start gap-1.5 min-[352px]:gap-2 text-gray-600 dark:text-gray-300 rtl:flex-row-reverse rtl:text-right">
              <span class="text-gray-400 shrink-0">[{{ log.timestamp }}]</span>
              <span class="font-bold text-blue-600 dark:text-blue-400 shrink-0">{{ log.action }}:</span>
              <span class="break-words">{{ log.details }}</span>
            </div>
          </div>

          <button 
            @click="verifySolution" 
            class="w-full py-2.5 min-[352px]:py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs min-[352px]:text-sm transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
            <span>✅</span> {{ $t('troubleshooting.solveScenario') }}
          </button>
        </div>
      </section>
    </main>

    <!-- Final Resolution Modal -->
    <div v-if="showResultModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-200 dark:border-gray-700 transform transition-all scale-100">
        <div class="text-center mb-6">
          <div class="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl" :class="isSolved ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'">
            {{ isSolved ? '🎉' : '⚠️' }}
          </div>
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            {{ isSolved ? $t('troubleshooting.scenarioSolvedTitle') :$t('troubleshooting.scenarioNotSolvedTitle') }}
          </h2>
        </div>

        <div v-if="isSolved" class="space-y-3 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl text-xs sm:text-sm border border-gray-200 dark:border-gray-700 mb-6">
          <div class="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span class="text-gray-500">{{ $t('troubleshooting.timeSpent') }}:</span>
            <span class="font-mono font-bold">{{ formattedTime }}</span>
          </div>
          <div class="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span class="text-gray-500">{{ $t('troubleshooting.testsExecuted') }}:</span>
            <span class="font-bold">{{ logs.length }}</span>
          </div>
          <div class="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2 items-center">
            <span class="text-gray-500 shrink-0">{{ $t('troubleshooting.actionsTaken') }}:</span>
            <span dir="ltr" class="font-bold text-blue-500 text-left font-mono break-all pl-2">
              {{ engine ? engine.actionsTaken.join(', ') : 'None' }}
            </span>
          </div>
          <div>
            <span class="text-gray-500 block mb-1">{{ $t('troubleshooting.rootCause') }}:</span>
            <span class="font-semibold text-emerald-600 dark:text-emerald-400 leading-relaxed block">
              {{ $t(currentScenario.expectedRootCauseKey) }}
            </span>
          </div>
        </div>

        <p v-else class="text-sm text-gray-500 dark:text-gray-400 text-center mb-6 leading-relaxed">
          {{ $t('troubleshooting.scenarioNotSolvedDesc') }}
        </p>

        <button 
          @click="closeModal" 
          class="w-full py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-xl text-sm transition-colors">
          {{ $t('troubleshooting.close') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { scenarios, simulatorI18nMessages } from '../../data/scenariosData.js';
import { TroubleshootingEngine } from '../../data/troubleshootingEngine.js';

export default {
  name: 'TroubleshootingSimulator',
  data() {
    return {
      scenarios: scenarios,
      activeScenarioId: scenarios[0].id,
      engine: null,
      inputCommand: '',
      terminalHistory: [],
      logs: [],
      showHint: false,
      showResultModal: false,
      isSolved: false,
      timerSeconds: 0,
      timerInterval: null
    };
  },
  computed: {
    currentScenario() {
      return this.scenarios.find((s) => s.id === this.activeScenarioId);
    },
    formattedTime() {
      const mins = Math.floor(this.timerSeconds / 60).toString().padStart(2, '0');
      const secs = (this.timerSeconds % 60).toString().padStart(2, '0');
      return `${mins}:${secs}`;
    }
  },
  created() {
    if (this.$i18n && typeof this.$i18n.mergeLocaleMessage === 'function') {
      this.$i18n.mergeLocaleMessage('fa', simulatorI18nMessages.fa);
      this.$i18n.mergeLocaleMessage('en', simulatorI18nMessages.en);
    }
  },
  mounted() {
    this.loadScenario();
  },
  beforeUnmount() {
    this.stopTimer();
  },
  methods: {
    loadScenario() {
      this.showHint = false;
      this.showResultModal = false;
      this.terminalHistory = [];
      this.inputCommand = '';

      const freshInitialState = JSON.parse(JSON.stringify(this.currentScenario.initialState));
      this.engine = new TroubleshootingEngine(freshInitialState);
      this.logs = this.engine.logs;

      this.terminalHistory.push({
        type: 'output',
        text: `[System] Scenario loaded: ${this.currentScenario.id}`
      });

      this.resetTimer();
    },
    resetCurrentScenario() {
      this.loadScenario();
    },
    startTimer() {
      this.stopTimer();
      this.timerInterval = setInterval(() => {
        this.timerSeconds++;
      }, 1000);
    },
    resetTimer() {
      this.timerSeconds = 0;
      this.startTimer();
    },
    stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    },
    handleCommandSubmit() {
      if (!this.inputCommand.trim()) return;

      const cmd = this.inputCommand.trim();
      this.terminalHistory.push({ type: 'input', text: cmd });

      if (cmd.toLowerCase() === 'cls' || cmd.toLowerCase() === 'clear') {
        this.terminalHistory = [];
      } else {
        const outputLines = this.engine.executeCommand(cmd);
        outputLines.forEach((line) => {
          this.terminalHistory.push({ type: 'output', text: line });
        });
      }

      this.inputCommand = '';
      this.scrollToBottomTerminal();
    },
    clearInput() {
      this.inputCommand = '';
      if (this.$refs.cmdInput) {
        this.$refs.cmdInput.focus();
      }
    },
    triggerAction(actionCode) {
      const outputLines = this.engine.applyAction(actionCode);
      this.terminalHistory.push({ type: 'input', text: `[System Action] ${actionCode}` });
      outputLines.forEach((line) => {
        this.terminalHistory.push({ type: 'output', text: line });
      });
      this.scrollToBottomTerminal();
    },
    verifySolution() {
      this.stopTimer();

      const result = this.engine.checkResolution(this.currentScenario.requiredActions);
      this.isSolved = result.isSolved;
      this.showResultModal = true;
    },
    closeModal() {
      this.showResultModal = false;
      if (!this.isSolved) {
        this.startTimer();
      }
    },
    scrollToBottomTerminal() {
      this.$nextTick(() => {
        const el = this.$refs.terminalOutput;
        if (el) el.scrollTop = el.scrollHeight;
      });
    }
  }
};
</script>

<style scoped>
.action-btn {
  @apply w-full py-2 px-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700/60 dark:hover:bg-gray-700 text-[10px] min-[352px]:text-xs lg:text-[11px] xl:text-xs font-semibold rounded-xl text-left rtl:text-right transition-colors border border-gray-200/60 dark:border-gray-600/40 whitespace-nowrap;
}
</style>