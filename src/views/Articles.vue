<template>
  <div class="p-4 m-2 mb-12 mt-2 sm:p-6 sm:m-4 md:px-8 md:mx-10 rounded-md text-gray-900 dark:text-gray-100">
    <!-- Article title -->
    <h1
      class="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-5 sm:mb-6 md:mb-8">
      {{ $t("articles.title") }}
    </h1>

    <!-- Sentinel used to detect when the sticky filter bar reaches the top -->
    <div ref="stickySentinel" class="h-px"></div>

    <!-- Tag filter -->
    <div ref="filterBar" :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'" :class="[
      'sticky top-0 z-20 max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm px-3 py-3 sm:px-4 sm:py-4',
      isStuck ? 'rounded-b-xl' : 'rounded-xl',
    ]">
      <p class="text-base sm:text-lg font-medium mb-2 sm:mb-3">
        {{ $t("articles.filterByTags") }}
      </p>
      <div class="flex flex-wrap gap-1.5 sm:gap-2 justify-start items-center">
        <button v-for="tag in allTags" :key="tag" type="button" @click="toggleTag(tag)" :class="[
          'px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-colors',
          selectedTags.includes(tag)
            ? 'bg-blue-500 dark:bg-blue-600 text-white border-blue-500 dark:border-blue-600'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700',
        ]">
          {{ tagLabel(tag) }}
        </button>

        <button type="button" :disabled="!selectedTags.length" @click="selectedTags = []"
          class="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-colors text-red-500 dark:text-red-400 border-red-300 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/40 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent">
          {{ $t("articles.clearFilters") }}
        </button>
      </div>
    </div>

    <!-- Articles  -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      <div v-for="article in filteredArticles" :key="article.id"
        class="flex h-full flex-col rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg dark:border dark:border-gray-800 dark:border-transparent dark:bg-gray-900 dark:shadow-gray-950/50 sm:p-6">
        <img :src="article.image" :alt="articleTitle(article)"
          class="mb-2 h-auto w-auto rounded-md object-cover sm:mb-3 sm:h-40 md:h-auto" />

        <h2 class="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100 sm:text-xl">
          {{ articleTitle(article) }}
        </h2>

        <div v-if="article.tags && article.tags.length" class="mb-3 flex flex-wrap gap-1.5 sm:mb-4">
          <span v-for="tag in article.tags" :key="tag"
            class="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-600 dark:bg-blue-950/40 dark:text-blue-300">
            {{ tagLabel(tag) }}
          </span>
        </div>

        <!-- Summary of article content (Added flex-1 / grow) -->
        <p class="mb-4 flex-1 text-xs text-gray-600 line-clamp-3 dark:text-gray-300 sm:text-sm">
          {{ articleExcerpt(article) }}
        </p>

        <!-- The link of each article (Fixed mt-auto) -->
        <router-link :to="'/Articles/' + article.id"
          class="mt-auto inline-block w-full rounded bg-blue-500 px-4 py-2 text-center text-sm text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 sm:w-auto sm:text-base">
          {{ $t("articles.readMore") }}
        </router-link>
      </div>

      <p v-if="filteredArticles.length === 0" class="col-span-full text-center text-gray-500 dark:text-gray-400">
        {{ $t("articles.noResults") }}
      </p>
    </div>
  </div>
</template>

<script>
import { articles } from "../data/articlesData";
import { localizeField } from "./utils/localization";

export default {
  name: "articles-1",
  data() {
    return {
      articles,
      selectedTags: [],
      isStuck: false,
    };
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    allTags() {
      const tagSet = new Set();
      this.articles.forEach((article) => {
        (article.tags || []).forEach((tag) => tagSet.add(tag));
      });
      return Array.from(tagSet);
    },
    filteredArticles() {
      const sortedArticles = [...this.articles].sort((a, b) => b.id - a.id);
      if (this.selectedTags.length === 0) return sortedArticles;
      return sortedArticles.filter((article) =>
        this.selectedTags.some((tag) => (article.tags || []).includes(tag))
      );
    },
  },
  mounted() {
    this.stickyObserver = new IntersectionObserver(
      ([entry]) => {
        this.isStuck = !entry.isIntersecting;
      },
      { threshold: 0 }
    );
    if (this.$refs.stickySentinel) {
      this.stickyObserver.observe(this.$refs.stickySentinel);
    }
  },
  beforeUnmount() {
    if (this.stickyObserver) this.stickyObserver.disconnect();
  },
  methods: {
    toggleTag(tag) {
      const index = this.selectedTags.indexOf(tag);
      if (index === -1) {
        this.selectedTags.push(tag);
      } else {
        this.selectedTags.splice(index, 1);
      }
    },
    articleTitle(article) {
      return localizeField(article.title, this.locale);
    },
    articleExcerpt(article) {
      return localizeField(article.excerpt, this.locale);
    },
    tagLabel(tagKey) {
      const path = `articles.tags.${tagKey}`;
      if (this.$te(path)) {
        return this.$t(path);
      }
      return tagKey;
    },
  },
};
</script>