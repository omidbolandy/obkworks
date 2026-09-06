<template>
  <nav
    class="bg-gray-100 border-gray-200 py-2.5 dark:bg-[#1a2030] rounded-2xl mx-1 mb-1 isolate sticky top-1 sm:mx-2 sm:mb-2 sm:top-2 md:mx-4 md:mb-4 md:top-4 z-50">
    <div
      class="flex flex-wrap items-center justify-between max-w-screen-xl px-1.5 sm:px-3 md:px-4 mx-auto">

      <!-- Logo -->
      <router-link to="/" :class="['flex items-center shrink-0 min-w-0 transition-all duration-200', searchExpanded ? 'max-[639px]:hidden' : '']">        <img
          src="/src/assets/obk-Logo-2.webp"
          class="w-7 h-7 mx-1 sm:w-9 sm:h-9 sm:mx-1.5 md:w-10 md:h-10 md:mx-2 lg:w-14 lg:h-14 rounded-full shrink-0"
          alt="obkProject Logo"/>
        <span
          class="self-center whitespace-nowrap font-semibold hidden min-[280px]:inline text-xs sm:text-sm md:text-base lg:text-xl dark:text-white">
          {{ $t("appName") }}
        </span>
      </router-link>

      <!-- Search, language, and theme controls -->
      <div :class="['order-2 flex items-center gap-0.5 sm:gap-1.5 md:gap-2 lg:order-2 transition-all duration-200', searchExpanded ? 'max-[639px]:flex-1' : '']">

        <!-- Search -->
        <div
          ref="searchContainer"
          :class="['relative transition-all duration-200', searchExpanded ? 'flex-1 min-w-0' : 'w-0 overflow-hidden sm:w-32 md:w-40 lg:w-56']">
          <form @submit.prevent="submitSearch" role="search" :class="{ 'max-[639px]:hidden': !searchExpanded }" class="relative">
            <label for="navbar-search" class="sr-only">{{ $t("search.inputLabel") }}</label>
            <input
              id="navbar-search"
              ref="navbarSearch"
              v-model="searchQuery"
              type="text"
              autocomplete="off"
              maxlength="120"
              :placeholder="$t('nav.searchCompactPlaceholder')"
              @focus="searchOpen = true"
              @keydown.esc="closeSearch"
              class="w-full rounded-xl border border-gray-300 bg-white py-1.5 ps-2.5 pe-16 sm:py-2 sm:ps-3 sm:pe-20 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"/>
            <button
              v-if="searchQuery"
              type="button"
              :aria-label="$t('nav.clearSearch')"
              @click="clearSearch"
              class="absolute end-8 sm:end-10 top-1/2 -translate-y-1/2 rounded-lg p-0.5 sm:p-1 text-blue-500 transition hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-blue-300 dark:hover:bg-blue-950/40 dark:hover:text-blue-200">
              <svg class="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <button
              type="submit"
              :aria-label="$t('nav.search')"
              class="absolute end-1 sm:end-2 top-1/2 -translate-y-1/2 rounded-lg p-0.5 sm:p-1 text-gray-400 transition hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-400">
              <svg class="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />
              </svg>
            </button>
          </form>

          <div v-if="searchOpen && searchQuery.trim()" class="absolute inset-x-0 top-full z-30 mt-2 max-h-[min(70vh,28rem)] overflow-y-auto rounded-xl border border-gray-200 bg-white p-2 shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <template v-if="previewArticles.length || previewProjects.length">
              <section v-if="previewProjects.length">
                <h2 class="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{{ $t('search.projects') }}</h2>
                <router-link v-for="result in previewProjects" :key="`project-${result.id}`" :to="result.path" @click="closeSearch" class="block rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span class="block truncate text-sm font-semibold text-gray-900 dark:text-white">{{ result.title }}</span>
                  <span class="mt-1 block line-clamp-1 text-xs text-gray-500 dark:text-gray-400">{{ result.description }}</span>
                </router-link>
              </section>

              <section v-if="previewArticles.length" class="mt-4 border-t border-gray-200 pt-3 dark:border-gray-700">
                <h2 class="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{{ $t('search.articles') }}</h2>
                <router-link v-for="result in previewArticles" :key="`article-${result.id}`" :to="result.path" @click="closeSearch" class="block rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span class="block truncate text-sm font-semibold text-gray-900 dark:text-white">{{ result.title }}</span>
                  <span class="mt-1 block line-clamp-1 text-xs text-gray-500 dark:text-gray-400">{{ result.description }}</span>
                </router-link>
              </section>

              <button type="button" @click="submitSearch" class="mt-2 w-full rounded-lg border-t border-gray-200 px-3 py-3 text-start text-sm font-semibold text-blue-600 hover:bg-blue-50 dark:border-gray-700 dark:text-blue-400 dark:hover:bg-blue-950/30">
                {{ $t('search.viewAll', { query: searchQuery }) }}
              </button>
            </template>
            <p v-else class="px-3 py-4 text-center text-sm text-gray-500 dark:text-gray-400">{{ $t('search.noResults') }}</p>
          </div>
        </div>

        <!-- Language switch, theme toggle, and mobile hamburger button -->
        <div class="relative flex items-center gap-0.5 sm:gap-1.5 md:gap-2">
          <button
            v-if="!searchExpanded"
            type="button"
            :aria-label="$t('nav.search')"
            @click.stop="expandSearch"
            class="hidden max-[639px]:inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white p-1.5 max-[340px]:p-1 sm:p-2 text-blue-500 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-blue-300 dark:hover:bg-gray-700">
            <svg class="h-4 w-4 max-[340px]:h-3.5 max-[340px]:w-3.5 sm:h-5 sm:w-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />
            </svg>
          </button>
          <div class="relative" ref="localeDropdown">
            <button
              type="button"
              @click="toggleLocaleDropdown"
              :aria-expanded="localeDropdownOpen"
              class="inline-flex items-center justify-between w-full px-1.5 py-1.5 max-[340px]:px-1 max-[340px]:py-1 sm:px-2.5 sm:py-2 rounded-xl border text-xs sm:text-sm font-semibold transition bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">              <span class="sm:hidden">{{ currentLocaleShort }}</span>
              <span class="hidden sm:inline">{{ currentLocaleLabel }}</span>
              <svg
                class="w-3.5 h-3.5 sm:w-4 sm:h-4 ms-0.5 sm:ms-1 md:ms-2"
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

          <div class="me-0.5 max-[340px]:scale-75 sm:me-2 md:me-3 scale-90 sm:scale-100 origin-center">
            <ThemeToggle />
          </div>

          <button
            type="button"
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center p-1 max-[340px]:p-0.5 sm:p-1.5 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"            aria-controls="mobile-menu"
            :aria-expanded="mobileMenuOpen">
            <span class="sr-only">{{
              mobileMenuOpen ? $t("nav.closeMenu") : $t("nav.openMenu")
            }}</span>
            <svg
              v-if="!mobileMenuOpen"
              class="w-6 h-6 max-[340px]:w-5 max-[340px]:h-5"
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
              class="w-6 h-6 max-[340px]:w-5 max-[340px]:h-5"
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
import { searchContent } from "../utils/search";

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
      searchOpen: false,
      searchQuery: "",
        searchExpanded: false,
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
    searchResults() {
      return searchContent(this.searchQuery, this.$i18n.locale, this.$t.bind(this));
    },
    previewArticles() {
      return this.searchResults.articles.slice(0, 3);
    },
    previewProjects() {
      return this.searchResults.projects.slice(0, 3);
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
      const searchContainer = this.$refs.searchContainer;
      if (dropdown && !dropdown.contains(event.target)) {
        this.closeLocaleDropdown();
      }
      if (searchContainer && !searchContainer.contains(event.target)) {
        this.closeSearch();
      }
    },
    closeSearch() {
      this.searchOpen = false;
      this.searchExpanded = false;
    },
    expandSearch() {
      this.searchExpanded = true;
      this.searchOpen = true;
      this.$nextTick(() => this.$refs.navbarSearch?.focus());
    },
    clearSearch() {
      this.searchQuery = "";
      this.searchOpen = false;
    },
    submitSearch() {
      const query = this.searchQuery.trim();
      if (!query) return;
      this.searchOpen = false;
      this.searchExpanded = false;
      this.mobileMenuOpen = false;
      this.$router.push({ path: "/search", query: { q: query } });
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