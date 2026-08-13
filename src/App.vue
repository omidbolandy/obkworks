<template class="transition-colors duration-300">
  <div
    id="app"
    :dir="isRtl ? 'rtl' : 'ltr'"
    class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-400 dark:from-gray-600 dark:to-gray-950 text-gray-800 dark:text-white transition-colors duration-300 ease-in-out px-2">
    <br />
    <!-- Navbar -->
    <AppNavbar />

    <!-- The-Code-Below-Is-For-The-Rest-Of-The-Pages -->
    <router-view />

    <!-- Footer -->
    <AppFooter />
    <br /><br />

    <!-- Scroll-To-Top -->
    <div>
      <button
        @click="scrollToTop"
        :class="[
          scrollPosition >= 300
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none']"
        class="fixed bottom-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-700 hover:scale-110 active:scale-95 ltr:right-6 rtl:left-6"
        aria-label="Scroll to top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="h-6 w-6">
          <path  stroke-linecap="round"  stroke-linejoin="round"  d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
        </svg>
      </button>
    </div>
    
    <!-- Scroll Progress Bar -->
    <div
      class="fixed top-0 start-0 h-1 bg-blue-500"
      :style="{ width: scrollPercentage + '%' }"
    ></div>
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
import { applyDirection } from "./i18n";

export default {
  components: { AppNavbar, AppFooter },
  data() {
    return {
      showMenu: false,
      scrollPosition: 0,
      scrollPercentage: 0,
      projectsMenuTimer: null,
      categoryMenuTimer: null,
    };
  },
  computed: {
    isRtl() {
      return this.$i18n && this.$i18n.locale === "fa";
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    switchLocale(locale) {
      this.$i18n.locale = locale;
      try {
        localStorage.setItem("locale", locale);
      } catch (e) {
      }
      applyDirection(locale);
    },
    isLocale(locale) {
      return this.$i18n.locale === locale;
    },
    handleResize() {
      if (window.innerWidth >= 768) {
        this.showMenu = false;
      }
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      this.scrollPercentage = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    if (this.projectsMenuTimer) {
      clearTimeout(this.projectsMenuTimer);
    }
    if (this.categoryMenuTimer) {
      clearTimeout(this.categoryMenuTimer);
    }
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style>
.mobile-menu.hidden {
  display: none;
}

.hidden {
  display: none;
}
</style>
