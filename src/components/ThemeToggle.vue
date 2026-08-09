<template>
  <!-- Toggle theme -->
  <div class="flex items-center space-x-3">
    <button
      @click="toggleTheme"
      :aria-pressed="isDark"
      class="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:scale-105 transition"
      title="Toggle theme"
    >
      <span v-if="isDark">🌙</span>
      <span v-else>☀️</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ThemeToggle",
  data() {
    return {
      isDark: false,
    };
  },
  mounted() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") this.setDark(true);
  },
  methods: {
    setDark(val) {
      this.isDark = !!val;
      const el = document.documentElement;
      if (this.isDark) el.classList.add("dark");
      else el.classList.remove("dark");
      localStorage.setItem("theme", this.isDark ? "dark" : "light");
    },
    toggleTheme() {
      this.setDark(!this.isDark);
    },
  },
};
</script>

<style >
</style>
