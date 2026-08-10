<template>
  <nav
    class="bg-white border-gray-200 py-2.5 dark:bg-gray-900 rounded-2xl mx-2 mb-2 min-[375px]:mx-3 min-[375px]:mb-3 min-[450px]:mx-4 min-[450px]:mb-4">
    <div
      class="flex flex-wrap items-center justify-between max-w-screen-xl px-2 min-[375px]:px-3 min-[450px]:px-4 mx-auto">

      <!-- Logo -->
      <a href="/" class="flex items-center shrink-0 min-w-0">
        <img
          src="/src/assets/obk-Logo-2.webp"
          class="w-8 h-8 mx-1 min-[375px]:w-9 min-[375px]:h-9 min-[375px]:mx-1.5 min-[450px]:w-10 min-[450px]:h-10 min-[450px]:mx-2 sm:h-16 sm:w-16 rounded-full shrink-0"
          alt="obkProject Logo"/>
        <span
          class="self-center whitespace-nowrap font-semibold text-[10px] min-[375px]:text-xs min-[450px]:text-base md:text-lg lg:text-xl dark:text-white">
          {{ $t("appName") }}
        </span>
      </a>

      <!-- Language switch, theme toggle, and mobile hamburger button -->
      <div class="relative flex items-center gap-1 min-[375px]:gap-1.5 min-[450px]:gap-2 order-2 lg:order-2">
        <div class="relative" ref="localeDropdown">
          <button
            type="button"
            @click="toggleLocaleDropdown"
            :aria-expanded="localeDropdownOpen"
            class="inline-flex items-center justify-between w-full px-2 py-1 min-[375px]:px-2.5 min-[450px]:px-3 rounded-lg border text-xs min-[450px]:text-sm font-semibold transition bg-white text-gray-900 border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600">
            <span class="min-[450px]:hidden">{{ currentLocaleShort }}</span>
            <span class="hidden min-[450px]:inline">{{ currentLocaleLabel }}</span>
            <svg
              class="w-4 h-4 ms-1 min-[450px]:ms-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clip-rule="evenodd"/>
            </svg>
          </button>
          <div
            v-if="localeDropdownOpen"
            class="absolute right-0 z-20 mt-2 w-15 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <button
              type="button"
              @click="selectLocale('en')"
              :class="[
                'w-full text-center px-3 py-2 text-sm font-medium transition',
                isLocale('en')
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700',]">
              {{ $t("commonlanguage.en") }}
            </button>
            <button
              type="button"
              @click="selectLocale('fa')"
              :class="[
                'w-full text-center px-3 py-2 text-sm font-medium transition',
                isLocale('fa')
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700',]">
              {{ $t("commonlanguage.fa") }}
            </button>
          </div>
        </div>
        <div class="me-1 min-[375px]:me-2 min-[450px]:me-3 scale-90 min-[375px]:scale-100 origin-center">
          <ThemeToggle />
        </div>
        <button
          type="button"
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="inline-flex items-center p-1 min-[375px]:p-1.5 min-[450px]:p-2 ms-0.5 min-[450px]:ms-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          :aria-expanded="mobileMenuOpen">
          <span class="sr-only">{{
            mobileMenuOpen ? $t("nav.closeMenu") : $t("nav.openMenu")
          }}</span>
          <svg
            v-if="!mobileMenuOpen"
            class="w-5 h-5 min-[450px]:w-6 min-[450px]:h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            v-else
            class="w-5 h-5 min-[450px]:w-6 min-[450px]:h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Nav links: collapses on mobile, inline on lg+ -->
      <div
        id="mobile-menu"
        :class="[
          'order-3 w-full lg:order-1 lg:w-auto lg:overflow-visible lg:max-h-none overflow-hidden transition-[max-height] duration-300 ease-in-out',
          mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0',]">
        <ul
          class="flex flex-col gap-1 pb-3 lg:flex-row lg:items-center lg:gap-6 lg:pb-0">
          <li
            class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 lg:px-0 lg:py-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent">
            <router-link to="/" @click="mobileMenuOpen = false">{{
              $t("nav.home")
            }}</router-link>
          </li>
          <li
            class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 lg:px-0 lg:py-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent">
            <router-link to="/Projects" @click="mobileMenuOpen = false">{{
              $t("nav.projects")
            }}</router-link>
          </li>
          <li
            class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 lg:px-0 lg:py-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent">
            <router-link to="/Articles" @click="mobileMenuOpen = false">{{
              $t("nav.articles")
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ThemeToggle from "./ThemeToggle.vue";
import { applyDirection } from "../i18n";

export default {
  components: { ThemeToggle },
  props: {
    modelValue: {
      type: String,
      default: "en",
    },
  },
  emits: ["locale-changed"],
  data() {
    return {
      mobileMenuOpen: false,
      localeDropdownOpen: false,
    };
  },
  computed: {
    currentLocaleLabel() {
      return this.$i18n.locale === "fa"
        ? this.$t("commonlanguage.fa")
        : this.$t("commonlanguage.en");
    },
    currentLocaleShort() {
      return this.$i18n.locale.toUpperCase();
    },
  },
  methods: {
    toggleLocaleDropdown() {
      this.localeDropdownOpen = !this.localeDropdownOpen;
    },
    closeLocaleDropdown() {
      this.localeDropdownOpen = false;
    },
    handleDocumentClick(event) {
      const dropdown = this.$refs.localeDropdown;
      if (!dropdown) return;
      if (!dropdown.contains(event.target)) {
        this.closeLocaleDropdown();
      }
    },
    selectLocale(locale) {
      this.localeDropdownOpen = false;
      this.switchLocale(locale);
    },
    switchLocale(locale) {
      this.$i18n.locale = locale;
      try {
        localStorage.setItem("locale", locale);
      } catch (e) {
      }
      applyDirection(locale);
      this.$emit("locale-changed", locale);
    },
    isLocale(locale) {
      return this.$i18n.locale === locale;
    },
  },
  mounted() {
    document.addEventListener("click", this.handleDocumentClick);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleDocumentClick);
  },
};
</script>

<style scoped>
nav a.router-link-exact-active {
  color: #3b82f6;
}
</style>
