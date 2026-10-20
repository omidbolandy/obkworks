<template>
   <!-- Top Bar Box (  Link to return to projects & Copy link & Share Icons)-->
    <div class="flex max-w-md mt-16 mx-auto items-center justify-between rounded-2xl border border-gray-200 bg-white/90 p-3 shadow-md backdrop-blur dark:border-gray-700 dark:bg-gray-900/90 sm:p-4">
      <router-link
        to="/Projects"
        class="group inline-flex items-center gap-2 rounded-xl border border-gray-200/80 dark:border-gray-700/80 bg-gray-50/80 dark:bg-gray-800/80 px-3 py-2 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800/60 transition-all duration-200 shadow-sm hover:shadow cursor-pointer">
        <svg
          class="h-4 w-4 stroke-current transition-transform duration-200 group-hover:-translate-x-1 ltr:rotate-0 rtl:rotate-180 rtl:group-hover:translate-x-1 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span class="truncate">{{ $t("projectsPage.backToProjects") }}</span>
      </router-link>
      <div class="flex items-center gap-1 sm:gap-2 shrink-0">
        <button
          @click="copyLink"
          type="button"
          class="relative inline-flex items-center justify-center p-1.5 max-[425px]:p-1.5 min-[426px]:p-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/80 transition-all cursor-pointer"
          :title="$t('projectsPage.copyLink')">
          <svg class="w-4 h-4 min-[426px]:w-5 min-[426px]:h-5 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          <transition name="fade">
            <span 
              v-if="copied" 
              class="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 text-white text-[10px] px-2 py-1 shadow-lg dark:bg-gray-100 dark:text-gray-900 font-sans z-20">
              {{ $t("projectsPage.copied") }} ✨
            </span>
          </transition>
        </button>
        <button
          @click="shareProject"
          type="button"
          class="inline-flex items-center justify-center p-1.5 max-[425px]:p-1.5 min-[426px]:p-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/80 transition-all cursor-pointer"
          :title="$t('projectsPage.share')">
          <svg class="w-4 h-4 min-[426px]:w-5 min-[426px]:h-5 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </button>
      </div>
    </div>

  <div :dir="calcDir" class="px-4 py-8 flex flex-col items-center">
    <h1 class="text-3xl font-bold mb-6 dark:text-white">
      {{ $t("Calculator.title") }}
    </h1>

    <div
      class="calculator bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 w-full max-w-md"
    >
      <div
        class="display text-right text-3xl font-mono p-4 rounded-md bg-gray-900 text-white dark:bg-gray-800"
      >
        {{ displayText }}
      </div>

      <!-- Buttons -->
      <div class="grid grid-cols-4 gap-3 mt-4">
        <button class="btn bg-[#a9aaac] dark:bg-gray-700" @click="clear">
          C
        </button>
        <button class="btn bg-[#a9aaac] dark:bg-gray-700" @click="toggleSign">
          +/-
        </button>
        <button class="btn bg-[#a9aaac] dark:bg-gray-700" @click="percent">
          %
        </button>
        <button class="btn operator" @click="setOperator('divide')">÷</button>

        <button class="btn" @click="append('7')">7</button>
        <button class="btn" @click="append('8')">8</button>
        <button class="btn" @click="append('9')">9</button>
        <button class="btn operator" @click="setOperator('multiply')">×</button>

        <button class="btn" @click="append('4')">4</button>
        <button class="btn" @click="append('5')">5</button>
        <button class="btn" @click="append('6')">6</button>
        <button class="btn operator" @click="setOperator('subtract')">−</button>

        <button class="btn" @click="append('1')">1</button>
        <button class="btn" @click="append('2')">2</button>
        <button class="btn" @click="append('3')">3</button>
        <button class="btn operator" @click="setOperator('add')">+</button>

        <button class="btn col-span-2" @click="append('0')">0</button>
        <button class="btn" @click="dot">.</button>
        <button class="btn operator" @click="equal">=</button>

        <button class="btn col-span-2" @click="backspace">⌫</button>
        <button class="btn" @click="sqrt">√</button>
        <button class="btn" @click="pow2">x²</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator-1",
  data() {
    return {
      display: "",
      operator: null,
      previous: null,
      waitingForOperand: false,
      copied: false,
      copyTimeout: null,
    };
  },
  computed: {
    displayText() {
      const op = this.operator;
      if (this.previous && op && this.waitingForOperand) {
        return `${this.previous} ${this.opSymbol(op)}`;
      }
      if (this.previous && op) {
        return `${this.previous} ${this.opSymbol(op)} ${this.display || ""}`;
      }
      return this.display || "0";
    },
    calcDir() {
      try {
        return this.$i18n && String(this.$i18n.locale).startsWith("fa")
          ? "ltr"
          : null;
      } catch (e) {
        return null;
      }
    },
  },
  methods: {
    async copyLink() {
      const url = window.location.href;

      if (!navigator?.clipboard?.writeText) {
        this.fallbackCopyText(url);
        return;
      }

      try {
        await navigator.clipboard.writeText(url);
        this.showCopiedToast();
      } catch (err) {
        this.fallbackCopyText(url);
      }
    },

    fallbackCopyText(text) {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        
        if (successful) {
          this.showCopiedToast();
        }
      } catch (err) {
        console.error("Fallback copy failed:", err);
      }
    },

    showCopiedToast() {
      this.copied = true;
      if (this.copyTimeout) clearTimeout(this.copyTimeout);
      
      this.copyTimeout = setTimeout(() => {
        this.copied = false;
      }, 2000);
    },

    async shareProject() {
      const currentUrl = window.location.href;

      if (!currentUrl.startsWith("http://") && !currentUrl.startsWith("https://")) {
        return;
      }

      const shareData = {
        title: document.title || "Portfolio Tool",
        text: "مشاهده این ابزار / پروژه در پورتفولیو",
        url: currentUrl,
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error("Share error:", err);
          }
        }
      } else {
        this.copyLink();
      }
    },

    clear() {
      this.display = "";
      this.operator = null;
      this.previous = null;
      this.waitingForOperand = false;
    },
    backspace() {
      if (this.display.length > 0) this.display = this.display.slice(0, -1);
    },
    append(num) {
      if (this.waitingForOperand) {
        this.display = "";
        this.waitingForOperand = false;
      }
      if (num === "0" && this.display === "0") return;
      this.display = this.display === "0" ? String(num) : this.display + num;
    },
    dot() {
      if (!this.display.includes(".")) {
        if (this.display === "") this.display = "0.";
        else this.display += ".";
      }
    },
    toggleSign() {
      if (!this.display) return;
      if (this.display.startsWith("-")) this.display = this.display.slice(1);
      else this.display = "-" + this.display;
    },
    percent() {
      const v = parseFloat(this.display);
      if (!isNaN(v)) this.display = String(v / 100);
    },
    sqrt() {
      const v = parseFloat(this.display);
      if (!isNaN(v)) this.display = String(Math.sqrt(v));
    },
    pow2() {
      const v = parseFloat(this.display);
      if (!isNaN(v)) this.display = String(v * v);
    },
    setOperator(op) {
      if (this.operator && !this.waitingForOperand) {
        this.equal();
      }
      this.previous = this.display || "0";
      this.operator = op;
      this.waitingForOperand = true;
    },
    equal() {
      const a = parseFloat(this.previous);
      const b = parseFloat(this.display || this.previous);
      if (isNaN(a) || isNaN(b) || !this.operator) return;

      let res = 0;
      switch (this.operator) {
        case "add":
          res = a + b;
          break;
        case "subtract":
          res = a - b;
          break;
        case "multiply":
          res = a * b;
          break;
        case "divide":
          res = b === 0 ? "Error" : a / b;
          break;
      }
      this.display = String(Number.isFinite(res) ? res : res);
      this.operator = null;
      this.previous = null;
      this.waitingForOperand = false;
    },
    opSymbol(op) {
      switch (op) {
        case "add":
          return "+";
        case "subtract":
          return "−";
        case "multiply":
          return "×";
        case "divide":
          return "÷";
        default:
          return op;
      }
    },
  },
  unmounted() {
    if (this.copyTimeout) clearTimeout(this.copyTimeout);
  },
};
</script>

<style>
.display {
  min-height: 72px;
}
.btn {
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  background-color: #c9cacc;
}
.operator {
  background-color: #f97316;
  color: white;
}
.btn:active {
  transform: scale(0.99);
}
.dark .btn {
  background-color: #374151;
}
.dark .operator {
  background-color: #fb923c;
}
</style>