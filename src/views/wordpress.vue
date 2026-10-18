<template>
  <main class="mx-auto max-w-7xl px-4 py-8 pb-16 sm:px-6 lg:px-8" :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'">
    
    <!-- Page Header -->
    <header class="mx-auto mb-12 text-center">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
        {{ $t('wordpressShowcase.title') }}
      </h1>
      <p class="mt-4 text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
        {{ $t('wordpressShowcase.description') }}
      </p>
    </header>

    <!-- Portfolio List -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div 
        v-for="(site, index) in wordpressSites" 
        :key="index" 
        class="group flex flex-col sm:flex-row items-center sm:items-center gap-6 rounded-2xl border border-gray-200 bg-white p-6 sm:p-5 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
        
        <div class="w-24 h-24 sm:w-[120px] sm:h-[120px] p-1.5 rounded-2xl bg-gray-700 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700 shrink-0 overflow-hidden shadow-inner">
          <img :src="site.logo" :alt="$t(site.titleKey)" class="w-full h-full object-contain rounded-xl" loading="lazy" />
        </div>

        <div class="flex-1 flex flex-col text-center sm:text-start w-full min-w-0">
          
          <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors mb-2">
            {{ $t(site.titleKey) }}
          </h3>

          <p class="text-sm sm:text-base leading-6 text-gray-600 dark:text-gray-300 mb-4">
            {{ $t(site.descKey) }}
          </p>

          <div class="flex justify-center sm:justify-start">
            <a 
              :href="site.url" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group/link">
              <span>{{ $t('wordpressShowcase.visitSite') }}</span>
              <svg class="w-4 h-4 rtl:rotate-180 transition-transform group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </div>

  </main>
</template>

<script>
import logo1 from "../assets/wordpress/obk_automation_logo.webp";
import logo2 from "../assets/wordpress/obk_it_company_logo.webp";
import logo3 from "../assets/wordpress/obk_docs_logo.webp";
import logo4 from "../assets/wordpress/obk_downloads_logo.webp";
import logo5 from "../assets/wordpress/obk_helpdesk_logo.webp";
import logo6 from "../assets/wordpress/obk-Store-logo.webp";

export default {
  name: "WordPressShowcase",
  data() {
    return {
      wordpressSites: [
        {
          titleKey: "wordpressShowcase.sites.store.title",
          descKey: "wordpressShowcase.sites.store.desc",
          logo: logo6,
          url: "https://store.obkworks.tr"
        },
        {
          titleKey: "wordpressShowcase.sites.helpdesk.title",
          descKey: "wordpressShowcase.sites.helpdesk.desc",
          logo: logo5,
          url: "https://helpdesk.obkworks.tr"
        },
        {
          titleKey: "wordpressShowcase.sites.company.title",
          descKey: "wordpressShowcase.sites.company.desc",
          logo: logo2,
          url: "https://company.obkworks.tr"
        },
        {
          titleKey: "wordpressShowcase.sites.downloads.title",
          descKey: "wordpressShowcase.sites.downloads.desc",
          logo: logo4,
          url: "https://downloads.obkworks.tr"
        },
        {
          titleKey: "wordpressShowcase.sites.automation.title",
          descKey: "wordpressShowcase.sites.automation.desc",
          logo: logo1,
          url: "https://automation.obkworks.tr"
        },
        {
          titleKey: "wordpressShowcase.sites.docs.title",
          descKey: "wordpressShowcase.sites.docs.desc",
          logo: logo3,
          url: "https://docs.obkworks.tr"
        }
      ]
    };
  }
};
</script>