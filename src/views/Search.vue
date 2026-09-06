<template>
  <main class="mx-auto max-w-7xl px-4 py-8 pb-16 sm:px-6 lg:px-8" :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'">
    <header class="mx-auto mb-8 max-w-3xl text-center">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
        {{ $t('search.title') }}
      </h1>
      <form @submit.prevent="submitSearch" role="search" class="relative mt-6">
        <label for="search-page-input" class="sr-only">{{ $t('search.inputLabel') }}</label>
        <input
          id="search-page-input"
          v-model="queryInput"
          type="search"
          maxlength="120"
          :placeholder="$t('nav.searchPlaceholder')"
          class="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 sm:text-base"/>
      </form>
    </header>

    <p v-if="!query" class="rounded-xl border border-dashed border-gray-300 px-4 py-10 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
      {{ $t('search.noQuery') }}
    </p>

    <template v-else-if="searchResults.articles.length || searchResults.projects.length">
      <section v-if="searchResults.projects.length" aria-labelledby="search-projects-heading" class="mb-10">
        <h2 id="search-projects-heading" class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          {{ $t('search.projects') }}
          <span class="text-base font-normal text-gray-500 dark:text-gray-400">({{ searchResults.projects.length }})</span>
        </h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <router-link v-for="result in searchResults.projects" :key="`project-${result.id}`" :to="result.path" class="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
            <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">{{ result.title }}</h3>
            <p class="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-300">{{ result.description }}</p>
            <span class="mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400">{{ $t('search.openResult') }}</span>
          </router-link>
        </div>
      </section>

      <section
        v-if="searchResults.articles.length"
        aria-labelledby="search-articles-heading"
        :class="searchResults.projects.length ? 'mt-14 border-t border-gray-400 pt-8 dark:border-gray-500' : ''">
        <h2 id="search-articles-heading" class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          {{ $t('search.articles') }}
          <span class="text-base font-normal text-gray-500 dark:text-gray-400">({{ searchResults.articles.length }})</span>
        </h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <router-link v-for="result in searchResults.articles" :key="`article-${result.id}`" :to="result.path" class="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
            <img :src="result.image" :alt="result.title" class="mb-4 aspect-video w-full rounded-lg object-cover" loading="lazy" />
            <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">{{ result.title }}</h3>
            <p class="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-300">{{ result.description }}</p>
            <span class="mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400">{{ $t('articles.readMore') }}</span>
          </router-link>
        </div>
      </section>
    </template>

    <p v-else class="rounded-xl border border-dashed border-gray-300 px-4 py-10 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
      {{ $t('search.noResults') }}
    </p>
  </main>
</template>

<script>
import { searchContent } from '../utils/search';

export default {
  name: 'Search',
  data() {
    return {
      queryInput: this.$route.query.q || '',
    };
  },
  computed: {
    query() {
      return String(this.$route.query.q || '').trim();
    },
    searchResults() {
      return searchContent(this.query, this.$i18n.locale, this.$t.bind(this));
    },
  },
  watch: {
    '$route.query.q'(value) {
      this.queryInput = value || '';
    },
  },
  methods: {
    submitSearch() {
      const query = this.queryInput.trim();
      this.$router.push({ path: '/search', query: query ? { q: query } : {} });
    },
  },
};
</script>
