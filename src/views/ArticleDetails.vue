<template>
  <div
    class="p-4 m-4 sm:p-6 sm:m-6 md:p-8 md:m-10 rounded-md mt-6 flex justify-center text-gray-900 dark:text-gray-100">
    <div v-if="article" :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'"
      class="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-gray-950/50 p-5 sm:p-8 md:p-12 lg:p-16 max-w-5xl w-full mx-auto border border-transparent dark:border-gray-800 transition-colors duration-300">
      <img :src="article.image" :alt="articleTitle"
        class="w-full max-w-[700px] mx-auto h-auto object-cover rounded-md mb-4 bg-gray-100 dark:bg-gray-800 border border-transparent dark:border-gray-700" />

      <h1
        class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300 break-words">
        {{ articleTitle }}
      </h1>
      
      <div class="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg shadow-inner mb-6 transition-colors duration-300">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          <strong class="text-gray-700 dark:text-gray-300">{{ $t("articles.author") }}:</strong>
          {{ article.author }}
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          <strong class="text-gray-700 dark:text-gray-300">{{ $t("articles.publishedOn") }}:</strong>
          {{ articleDate }}
        </p>
      </div>

      <template v-for="(block, index) in localizedContentBlocks" :key="index">
        <!-- text-->
        <p v-if="block.type === 'text'"
          class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300 whitespace-pre-line">
          {{ block.text }}
        </p>

        <!-- image-->
        <figure v-else-if="block.type === 'image'" class="mb-6">
          <img :src="block.src" :alt="block.alt"
            class="w-full max-w-[600px] mx-auto h-auto object-cover rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm" />
          <figcaption v-if="block.caption" class="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
            {{ block.caption }}
          </figcaption>
        </figure>

        <!-- code -->
        <div v-else-if="block.type === 'code'" class="relative mb-6 group">
          <div
            class="flex flex-wrap items-center justify-between gap-2 bg-gray-800 dark:bg-gray-900 text-gray-300 px-3 sm:px-4 py-2 text-xs rounded-t-xl border-b border-gray-700 font-mono">
            <span class="truncate">{{ block.language || 'Terminal / Code' }}</span>
            <button @click="copyToClipboard(block.code, index)"
              class="flex shrink-0 items-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 px-2.5 py-1 rounded transition-all text-xs">
              <span v-if="copiedIndex === index" class="text-green-400 font-medium">{{ $t("articles.Copied") }}!
                ✓</span>
              <span v-else>{{ $t("articles.Copied") }}</span>
            </button>
          </div>
          <pre
            class="bg-gray-900 text-emerald-400 p-4 rounded-b-xl overflow-x-auto font-mono text-sm leading-6 dir-ltr text-left border border-t-0 border-gray-800"><code>{{ block.code }}</code></pre>
        </div>

        <!-- list -->
        <ul v-else-if="block.type === 'list'"
          class="list-disc list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/50">
          <li v-for="(item, itemIndex) in block.items" :key="itemIndex" class="leading-relaxed">
            {{ item }}
          </li>
        </ul>

        <!-- Table -->
        <div v-else-if="block.type === 'table'" :dir="locale === 'fa' ? 'rtl' : 'ltr'"
          class="overflow-x-auto mb-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <table class="w-full min-w-[480px] text-xs sm:text-sm text-start text-gray-700 dark:text-gray-300">
            <thead
              class="text-xs uppercase bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th v-for="(header, hIndex) in block.headers" :key="hIndex"
                  class="px-3 sm:px-4 py-2.5 sm:py-3 text-start font-semibold whitespace-nowrap">
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
              <tr v-for="(row, rIndex) in block.rows" :key="rIndex"
                class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td v-for="(cell, cIndex) in row" :key="cIndex" class="px-3 sm:px-4 py-2.5 sm:py-3 text-start">
                  {{ cell }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>

      <!-- Button To Return To All Articles -->
      <div>
        <router-link to="/Articles"
          class="group inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-gray-100/80 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-gray-300 hover:bg-gray-200/80 hover:text-gray-900 hover:shadow sm:gap-2.5 sm:px-4 sm:py-2 sm:text-sm dark:border-gray-700/60 dark:bg-gray-800/70 dark:text-gray-200 dark:hover:border-gray-600 dark:hover:bg-gray-800 dark:hover:text-white active:scale-95 touch-manipulation whitespace-nowrap">
          <span
            class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-6 sm:w-6 ltr:group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5 dark:bg-gray-700 dark:text-gray-200">
            <svg class="h-3.5 w-3.5 sm:h-4 sm:w-4 ltr:rotate-0 rtl:rotate-180" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L8.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
                clip-rule="evenodd" />
            </svg>
          </span>
          <span>{{ $t("articles.backToAllArticles") }}</span>
        </router-link>
      </div>
    </div>

    <!-- Button Not Found -->
    <div v-else class="text-center text-red-500 dark:text-red-400 font-semibold">
      <p>{{ $t("articles.notFound") }}</p>
    </div>
  </div>
</template>

<script>
import { articles } from "../data/articlesData";
import { localizeField, formatArticleDate } from "./utils/localization";

export default {
  name: "article-1",
  props: ["id"],
  data() {
    return {
      article: null,
      copiedIndex: null,
    };
  },
  methods: {
    copyToClipboard(text, index) {
      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        this.copiedIndex = index;
        setTimeout(() => {
          this.copiedIndex = null;
        }, 2000);
      }).catch((err) => {
        console.error("خطا در کپی کردن کد:", err);
      });
    },
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    articleTitle() {
      return this.article ? localizeField(this.article.title, this.locale) : "";
    },

    localizedContentBlocks() {
      if (!this.article || !Array.isArray(this.article.content)) return [];
      return this.article.content.map((block) => {
        if (block.type === "image") {
          return {
            type: "image",
            src: block.src,
            alt: localizeField(block.alt, this.locale),
            caption: block.caption ? localizeField(block.caption, this.locale) : "",
          };
        }
        if (block.type === "code") {
          return {
            type: "code",
            code: typeof block.code === "object" ? localizeField(block.code, this.locale) : block.code,
            language: block.language || "Terminal / Code",
          };
        }
        if (block.type === "list") {
          return {
            type: "list",
            items: Array.isArray(block.items)
              ? block.items
              : localizeField(block.items, this.locale) || [],
          };
        }
        if (block.type === "table") {
          return {
            type: "table",
            headers: Array.isArray(block.headers)
              ? block.headers
              : localizeField(block.headers, this.locale) || [],
            rows: Array.isArray(block.rows)
              ? block.rows
              : localizeField(block.rows, this.locale) || [],
          };
        }
        return {
          type: "text",
          text: localizeField({ en: block.en, fa: block.fa }, this.locale),
        };
      });
    },
    articleDate() {
      return this.article ? formatArticleDate(this.article.date, this.locale) : "";
    },
  },
watch: {
    id: {
      immediate: true,
      handler(newId) {
        this.article = articles.find((a) => a.id === parseInt(newId)) || null;
      },
    },
  },
};
</script>