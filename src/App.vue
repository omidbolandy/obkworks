<template class="transition-colors duration-300">
  <div
    id="app"
    :dir="isRtl ? 'rtl' : 'ltr'"
    class="px-3 pt-4 pb-6 min-h-screen bg-gradient-to-br bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300 ease-in-out">
    <!-- Navbar -->
    <AppNavbar />

    <!-- The-Code-Below-Is-For-The-Rest-Of-The-Pages -->
    <router-view />

    <!-- Footer -->
    <AppFooter />

    <!-- AI Chat Widget -->
    <ChatWidget />

    <!-- Scroll-To-Top -->
    <div
      :class="[
        isRtl ? 'left-[20px]' : 'right-[20px]',
        scrollPosition >= 300 && !isModalOpen
          ? 'visible opacity-100 pointer-events-auto'
          : 'invisible opacity-0 pointer-events-none'
      ]"
      class="fixed bottom-[15px] z-[999] flex h-[65px] w-[65px] items-center justify-center transition-all duration-300">
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        class="absolute inset-0 h-full w-full -rotate-90">
        <circle
          cx="32"
          cy="32"
          r="29"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          class="text-slate-400/50"
        />
        <circle
          cx="32"
          cy="32"
          r="29"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="182.21"
          :stroke-dashoffset="182.21 * (1 - scrollPercentage / 100)"
          class="text-blue-700 transition-[stroke-dashoffset] duration-150"
        />
      </svg>
      <button
        @click="scrollToTop"
        class="relative flex h-[55px] w-[55px] cursor-pointer items-center justify-center rounded-full border border-sky-800 bg-slate-900 text-sky-400 shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-all duration-300 active:scale-95"
        aria-label="برو به بالای صفحه">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-7 w-7 transition-transform duration-200">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
import ChatWidget from "./components/ChatWidget.vue";
import { applyDirection } from "./i18n";
import { updateSeo } from "./utils/seo";

export default {
  components: { AppNavbar, AppFooter, ChatWidget },
  data() {
    return {
      showMenu: false,
      scrollPosition: 0,
      scrollPercentage: 0,
      isModalOpen: false,
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
    handleModalToggle(event) {
      this.isModalOpen = event.detail;
    }
  },
  mounted() {
    this.handleResize();
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("modal-toggle", this.handleModalToggle);
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
    window.removeEventListener("modal-toggle", this.handleModalToggle);
  },
  watch: {
    "$i18n.locale"(locale) {
      updateSeo(this.$route, locale);
    },
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

/* scrollbar */
::-webkit-scrollbar {
  width: 14px;
  height: 14px;
}
::-webkit-scrollbar-track {
  background: #f1f5f9;
}
::-webkit-scrollbar-thumb {
  background: #3b82f6 !important;
  border-radius: 6px; 
}
::-webkit-scrollbar-thumb:hover {
  background: #2563eb !important;
}
* {
  scrollbar-width: auto;
  scrollbar-color: #115dd7 #aeadad;
}

</style>