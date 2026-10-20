<template>
  <div class="p-4 m-4 sm:p-6 sm:m-6 md:p-8 md:m-10 rounded-md mt-6 flex justify-center text-gray-900 dark:text-gray-100">
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
          class=" text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300 whitespace-pre-line">
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
            class="bg-gray-900 text-emerald-400 p-4 rounded-b-xl overflow-x-auto font-mono text-sm leading-6 text-left border border-t-0 border-gray-800" dir="ltr" style="direction:ltr;unicode-bidi:isolate"><code>{{ block.code }}</code></pre>        </div>

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

      <!-- Related Project -->
      <div v-if="article.relatedProject" class="mt-8 mb-6 p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30">
        <p class="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">
          {{ $t('articles.relatedProject') }}
        </p>
        <router-link :to="article.relatedProject.path"
          class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
          {{ locale === 'fa' ? article.relatedProject.label.fa : article.relatedProject.label.en }}
          <svg class="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </router-link>
      </div>

      <!-- Related Tool -->
      <div v-if="article.relatedTool" class="mt-4 mb-6 p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30">
        <p class="text-[10px] xs:text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">
          {{ $t('articles.relatedTool') }}
        </p>
        <router-link :to="article.relatedTool.path"
          class="inline-flex items-center gap-2 text-[11px] xs:text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
          {{ locale === 'fa' ? article.relatedTool.label.fa : article.relatedTool.label.en }}
          <svg class="w-3 h-3 sm:w-4 sm:h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </router-link>
      </div>

      <!-- References -->
      <div v-if="article.references && article.references.length" class="mt-4 mb-6">
        <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
          {{ $t('articles.references') }}
        </p>
        <div class="flex flex-wrap gap-2">
          <a v-for="(ref, i) in article.references" :key="i"
            :href="ref.url" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {{ locale === 'fa' ? ref.label.fa : ref.label.en }}
            <svg class="w-3.5 h-3.5 shrink-0 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Button To Return To All Articles -->
      <!-- Top Bar Box (  Link to return to projects & Copy link & Share Icons)-->
      <div class="flex max-w3xl mx-auto items-center justify-between rounded-2xl border border-gray-200 bg-white/90 p-3 shadow-md backdrop-blur dark:border-gray-700 dark:bg-gray-900/90 sm:p-4">
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
          <span class="truncate">{{ $t("articles.backToAllArticles") }}</span>
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
import { updateArticleSeo } from "../utils/seo";

export default {
  name: "article-1",
  props: ["slug"],
  data() {
    return {
      article: null,
      copiedIndex: null,
      copied: false,
      copyTimeout: null,
    };
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

    updateArticleSeo() {
      if (!this.article) return;
      updateArticleSeo(this.$route, this.locale, this.article, this.articleTitle, this.articleExcerpt);
    },
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
  unmounted() {
    if (this.copyTimeout) clearTimeout(this.copyTimeout);
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    articleTitle() {
      return this.article ? localizeField(this.article.title, this.locale) : "";
    },

    articleExcerpt() {
      return this.article ? localizeField(this.article.excerpt, this.locale) : "";
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
    slug: {
      immediate: true,
      handler(newSlug) {
        this.article = articles.find((a) => a.slug === newSlug) || null;
        if (this.article) {
          this.$nextTick(() => { 
            document.title = `${this.articleTitle} | obkworks`; 
            this.updateArticleSeo();
          });
        } else { 
          document.title = 'Article Not Found | obkworks';
        }
      },
    },
    locale() {
      if (this.article) { 
        document.title = `${this.articleTitle} | obkworks`; 
        this.updateArticleSeo();
      }
    }
  },
};
</script>