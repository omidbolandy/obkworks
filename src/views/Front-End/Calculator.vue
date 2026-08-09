<template>
    <!-- Link to return to projects -->
    <div class="max-w-md py-2 sm:py-8 mx-6 sm:mx-auto">
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