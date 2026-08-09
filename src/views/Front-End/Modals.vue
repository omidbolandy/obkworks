<template>
    <!-- Link to return to projects -->
    <div class="max-w-6xl py-2 sm:pt-8 mx-6 sm:mx-auto">
      <router-link
        to="/Projects"
        class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
        <svg
          class="h-4 w-4 transition-transform ltr:rotate-0 rtl:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        <span>{{ $t("projectsPage.backToProjects") }}</span>
      </router-link>
    </div>

  <div :dir="direction"
    class="flex flex-col items-center min-h-screen px-4 text-gray-800 dark:text-gray-100 transition-colors">
    <!-- Modals-Title -->
    <div class="text-3xl sm:text-5xl my-4 sm:my-8 text-center">
      <h1>{{ $t("modals.pageTitle") }}</h1>
    </div>

    <!-- Modals-Cards-Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 w-full max-w-6xl dark:bg-gray-900 p-7 rounded-2xl shadow-md">
      <!-- First Medal Card -->
      <div
        class="flex flex-col items-center text-center gap-3 h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">
          {{ $t("modals.modal1.title") }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {{ $t("modals.cards.modal1.description") }}
        </p>
        <button @click="showModal1 = true" aria-haspopup="dialog"
          class="min-w-[140px] rounded-xl bg-blue-600 px-5 py-2 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          {{ $t("modals.cta") }}
        </button>
      </div>

      <!-- Second Medal Card -->
      <div
        class="flex flex-col items-center text-center gap-3 h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">
          {{ $t("modals.modal4.title") }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {{ $t("modals.cards.modal4.description") }}
        </p>
        <button @click="showModal4 = true" aria-haspopup="dialog"
          class="min-w-[140px] rounded-xl bg-blue-600 px-5 py-2 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          {{ $t("modals.cta") }}
        </button>
      </div>

      <!-- Third Medal Card -->
      <div
        class="flex flex-col items-center text-center gap-3 h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">
          {{ $t("modals.modal5.title") }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {{ $t("modals.cards.modal5.description") }}
        </p>
        <button @click="showModal5 = true" aria-haspopup="dialog"
          class="min-w-[140px] rounded-xl bg-blue-600 px-5 py-2 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          {{ $t("modals.cta") }}
        </button>
      </div>

      <!-- Fourth Medal Card -->
      <div
        class="flex flex-col items-center text-center gap-3 h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">
          {{ $t("modals.modal6.title") }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {{ $t("modals.cards.modal6.description") }}
        </p>
        <button @click="showModal6 = true" aria-haspopup="dialog"
          class="min-w-[140px] rounded-xl bg-blue-600 px-5 py-2 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          {{ $t("modals.cta") }}
        </button>
      </div>

      <!-- Fifth Medal Card -->
      <div
        class="flex flex-col items-center text-center gap-3 h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">
          {{ $t("modals.modal7.title") }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {{ $t("modals.cards.modal7.description") }}
        </p>
        <button @click="showModal7 = true" aria-haspopup="dialog"
          class="min-w-[140px] rounded-xl bg-blue-600 px-5 py-2 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          {{ $t("modals.cta") }}
        </button>
      </div>

      <!-- Sixth Medal Card -->
      <div
        class="flex flex-col items-center text-center gap-3 h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">
          {{ $t("modals.modal8.title") }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {{ $t("modals.cards.modal8.description") }}
        </p>
        <button @click="showModal8 = true" aria-haspopup="dialog"
          class="min-w-[140px] rounded-xl bg-blue-600 px-5 py-2 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          {{ $t("modals.cta") }}
        </button>
      </div>

      <!-- Seventh Medal Card -->
      <div
        class="flex flex-col items-center text-center gap-3 h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">
          {{ $t("modals.modal9.title") }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {{ $t("modals.cards.modal9.description") }}
        </p>
        <button @click="showModal9 = true" aria-haspopup="dialog"
          class="min-w-[140px] rounded-xl bg-blue-600 px-5 py-2 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          {{ $t("modals.cta") }}
        </button>
      </div>

      <!-- The Eighth Medal Card -->
      <div
        class="flex flex-col items-center text-center gap-3 h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">
          {{ $t("modals.modal10.title") }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {{ $t("modals.cards.modal10.description") }}
        </p>
        <button @click="showModal10 = true" aria-haspopup="dialog"
          class="min-w-[140px] rounded-xl bg-blue-600 px-5 py-2 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          {{ $t("modals.cta") }}
        </button>
      </div>

      <!-- The Ninth Medal Card -->
      <div
        class="flex flex-col items-center text-center gap-3 h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">
          {{ $t("modals.modal11.title") }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {{ $t("modals.cards.modal11.description") }}
        </p>
        <button @click="showModal11 = true" aria-haspopup="dialog"
          class="min-w-[140px] rounded-xl bg-blue-600 px-5 py-2 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          {{ $t("modals.cta") }}
        </button>
      </div>

      <!-- 10th Medal Card (Step-by-Step) -->
      <div
        class="flex flex-col items-center text-center gap-3 h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">
          {{ $t("modals.buttons.step") }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {{ $t("modals.cards.step.description") }}
        </p>
        <button @click="openModal('step')" aria-haspopup="dialog"
          class="min-w-[140px] rounded-xl bg-blue-600 px-5 py-2 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          {{ $t("modals.cta") }}
        </button>
      </div>

      <!-- 11th Medal Card (Confirmation) -->
      <div
        class="flex flex-col items-center text-center gap-3 h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">
          {{ $t("modals.buttons.confirm") }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {{ $t("modals.cards.confirm.description") }}
        </p>
        <button @click="openModal('confirm')" aria-haspopup="dialog"
          class="min-w-[140px] rounded-xl bg-blue-600 px-5 py-2 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          {{ $t("modals.cta") }}
        </button>
      </div>

      <!-- 12th Medal Card (with timer) -->
      <div
        class="flex flex-col items-center text-center gap-3 h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">
          {{ $t("modals.buttons.auto") }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {{ $t("modals.cards.auto.description") }}
        </p>
        <button @click="openModal('auto')" aria-haspopup="dialog"
          class="min-w-[140px] rounded-xl bg-blue-600 px-5 py-2 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          {{ $t("modals.cta") }}
        </button>
      </div>

      <!-- Thirteenth Medal Card (Image Gallery) -->
      <div
        class="flex flex-col items-center text-center gap-3 h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">
          {{ $t("modals.buttons.carousel") }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {{ $t("modals.cards.carousel.description") }}
        </p>
        <button @click="openModal('carousel')" aria-haspopup="dialog"
          class="min-w-[140px] rounded-xl bg-blue-600 px-5 py-2 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          {{ $t("modals.cta") }}
        </button>
      </div>

      <!-- Thirteenth Medal Card (Full Screen) -->
      <div
        class="flex flex-col items-center text-center gap-3 h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">
          {{ $t("modals.buttons.fullscreen") }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {{ $t("modals.cards.fullscreen.description") }}
        </p>
        <button @click="openModal('fullscreen')" aria-haspopup="dialog"
          class="min-w-[140px] rounded-xl bg-blue-600 px-5 py-2 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          {{ $t("modals.cta") }}
        </button>
      </div>

      <!-- Fourteenth Medal Card -->
      <div
        class="flex flex-col items-center text-center gap-3 h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">
          {{ $t("modals.modal12.title") }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {{ $t("modals.cards.modal12.description") }}
        </p>
        <button @click="showModal12 = true" aria-haspopup="dialog"
          class="min-w-[140px] rounded-xl bg-blue-600 px-5 py-2 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          {{ $t("modals.cta") }}
        </button>
      </div>
    </div>


    <!-- Modals-First-Row -->
    <div>
      <!-- First Medal -->
      <div v-if="showModal1"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50 dark:bg-black/70 p-4" role="dialog"
        aria-modal="true" aria-labelledby="modal1Title" @click.self="showModal1 = false">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <div class="flex flex-col items-center py-2 mb-5 gap-4">
            <h2 id="modal1Title" class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              {{ $t("modals.modal1.title") }}
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              {{ $t("modals.modal1.text") }}
            </p>
          </div>
          <div class="flex justify-end">
            <button ref="modal1CloseBtn" @click="showModal1 = false"
              class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
              {{ $t("common.close") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals-Second-Row -->
    <div>
      <!-- Second Medal -->
      <div v-if="showModal4"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50 dark:bg-black/70 p-4" role="dialog"
        aria-modal="true" aria-labelledby="modal4Title" @click.self="showModal4 = false">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div class="flex flex-col justify-center items-center py-2 mb-14 gap-4">
            <h2 id="modal4Title" class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              {{ $t("modals.modal4.title") }}
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              {{ $t("modals.modal4.text1") }}
            </p>
            <img :src="modalSample" :alt="$t('modals.modal4.imageAlt')" class="rounded mb-4" />
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              {{ $t("modals.modal4.text2") }}
            </p>
          </div>
          <div class="flex justify-end">
            <button @click="showModal4 = false"
              class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
              {{ $t("common.close") }}
            </button>
          </div>
        </div>
      </div>

      <!-- Third Medal -->
      <div>
        <div v-if="showModal5"
          class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50 dark:bg-black/70 p-4" role="dialog"
          aria-modal="true" aria-labelledby="modal5Title" @click.self="showModal5 = false">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <div class="flex flex-col justify-center items-center py-2 mb-5 gap-4">
              <h2 id="modal5Title" class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                {{ $t("modals.modal5.title") }}
              </h2>
            </div>
            <form @submit.prevent="handleLogin" novalidate>
              <div class="flex flex-col justify-center items-start mb-4">
                <label for="modal5Email" class="block text-gray-700 dark:text-gray-200 mb-2">
                  {{ $t("modals.modal5.emailLabel") }}
                </label>
                <input id="modal5Email" type="email" autocomplete="email" maxlength="254"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  v-model.trim="email" required />
              </div>
              <div class="flex flex-col justify-center items-start mb-6">
                <label for="modal5Password" class="block text-gray-700 dark:text-gray-200 mb-2">
                  {{ $t("modals.modal5.passwordLabel") }}
                </label>
                <input id="modal5Password" type="password" autocomplete="current-password" minlength="8" maxlength="128"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  v-model="password" required />
              </div>
              <p v-if="loginError" class="text-red-600 dark:text-red-400 text-sm mb-4">
                {{ loginError }}
              </p>
              <div class="flex justify-between">
                <button type="button" @click="showModal5 = false"
                  class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
                  {{ $t("common.cancel") }}
                </button>
                <button type="submit"
                  class="min-w-[170px] rounded-xl bg-blue-600 px-5 py-2.5 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                  {{ $t("modals.modal5.submit") }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals-Third-Row -->
    <div>
      <!-- The Fourth Medal -->
      <div>
        <transition enter-active-class="transition-opacity duration-300 ease-out"
          leave-active-class="transition-opacity duration-300 ease-in" enter-from-class="opacity-0"
          leave-to-class="opacity-0">
          <div v-if="showModal6"
            class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50 dark:bg-black/70 p-4"
            role="dialog" aria-modal="true" aria-labelledby="modal6Title" @click.self="showModal6 = false">
            <div
              class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full transform transition-transform duration-300"
              :class="showModal6 ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                ">
              <div class="flex flex-col justify-center items-center py-2 mb-5 gap-4">
                <h2 id="modal6Title" class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  {{ $t("modals.modal6.title") }}
                </h2>
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                  {{ $t("modals.modal6.text") }}
                </p>
              </div>
              <div class="flex justify-end">
                <button @click="showModal6 = false"
                  class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
                  {{ $t("common.close") }}
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- The Fifth Medal -->
      <div>
        <transition enter-active-class="transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          leave-active-class="transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          enter-from-class="opacity-0 scale-75 -rotate-12" leave-to-class="opacity-0 scale-110 rotate-12">
          <div v-if="showModal7"
            class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50 dark:bg-black/70 p-4"
            role="dialog" aria-modal="true" aria-labelledby="modal7Title" @click.self="showModal7 = false">
            <div
              class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full transform transition-all duration-500">
              <div class="flex flex-col justify-center items-center py-2 mb-5 gap-4">
                <h2 id="modal7Title" class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  {{ $t("modals.modal7.title") }}
                </h2>
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                  {{ $t("modals.modal7.text") }}
                </p>
              </div>
              <div class="flex justify-end">
                <button @click="showModal7 = false"
                  class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
                  {{ $t("common.close") }}
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Modals-Fourth-Row -->
    <div>
      <!-- The Sixth Medal -->
      <div>
        <transition enter-active-class="transform transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]"
          leave-active-class="transform transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]"
          enter-from-class="opacity-0 translate-y-full" leave-to-class="opacity-0 translate-y-full">
          <div v-if="showModal8"
            class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50 dark:bg-black/70 p-4"
            role="dialog" aria-modal="true" aria-labelledby="modal8Title" @click.self="showModal8 = false">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full transform transition-all">
              <div class="flex flex-col justify-center items-center py-2 mb-5 gap-4">
                <h2 id="modal8Title" class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  {{ $t("modals.modal8.title") }}
                </h2>
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                  {{ $t("modals.modal8.text") }}
                </p>
              </div>
              <div class="flex justify-end">
                <button @click="showModal8 = false"
                  class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
                  {{ $t("common.close") }}
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- The Seventh Medal -->
      <div>
        <transition enter-active-class="transform transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]"
          leave-active-class="transform transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]"
          enter-from-class="opacity-0 -translate-y-full" leave-to-class="opacity-0 -translate-y-full">
          <div v-if="showModal9"
            class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50 dark:bg-black/70 p-4"
            role="dialog" aria-modal="true" aria-labelledby="modal9Title" @click.self="showModal9 = false">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full transform transition-all">
              <div class="flex flex-col justify-center items-center py-2 mb-5 gap-4">
                <h2 id="modal9Title" class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  {{ $t("modals.modal9.title") }}
                </h2>
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                  {{ $t("modals.modal9.text") }}
                </p>
              </div>
              <div class="flex justify-end">
                <button @click="showModal9 = false"
                  class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
                  {{ $t("common.close") }}
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- The Eighth Medal -->
      <div>
        <transition enter-active-class="transform transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]"
          leave-active-class="transform transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]"
          enter-from-class="opacity-0 translate-x-full" leave-to-class="opacity-0 translate-x-full">
          <div v-if="showModal10"
            class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50 dark:bg-black/70 p-4"
            role="dialog" aria-modal="true" aria-labelledby="modal10Title" @click.self="showModal10 = false">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full transform transition-all">
              <div class="flex flex-col justify-center items-center py-2 mb-5 gap-4">
                <h2 id="modal10Title" class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  {{ $t("modals.modal10.title") }}
                </h2>
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                  {{ $t("modals.modal10.text") }}
                </p>
              </div>
              <div class="flex justify-end">
                <button @click="showModal10 = false"
                  class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
                  {{ $t("common.close") }}
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- The Ninth Medal -->
      <div>
        <transition enter-active-class="transform transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]"
          leave-active-class="transform transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]"
          enter-from-class="opacity-0 -translate-x-full" leave-to-class="opacity-0 -translate-x-full">
          <div v-if="showModal11"
            class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50 dark:bg-black/70 p-4"
            role="dialog" aria-modal="true" aria-labelledby="modal11Title" @click.self="showModal11 = false">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full transform transition-all">
              <div class="flex flex-col justify-center items-center py-2 mb-5 gap-4">
                <h2 id="modal11Title" class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  {{ $t("modals.modal11.title") }}
                </h2>
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                  {{ $t("modals.modal11.text") }}
                </p>
              </div>
              <div class="flex justify-end">
                <button @click="showModal11 = false"
                  class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
                  {{ $t("common.close") }}
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Modals-Fifth-Row -->
    <div>
      <!-- The Tenth Medal (Step-by-Step) -->
      <div v-if="activeModal === 'step'"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 p-4" role="dialog"
        aria-modal="true" aria-labelledby="stepModalTitle" @click.self="closeModal">
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full md:w-1/2 max-w-lg space-y-4">
          <div class="flex items-start justify-between gap-4 mb-4">
            <div class="flex flex-col items-center flex-1 gap-4 text-center">
              <h2 id="stepModalTitle" class="text-xl font-bold text-gray-800 dark:text-gray-100">
                {{ $t("modals.step.title", { step, total: 3 }) }}
              </h2>
              <p class="text-gray-600 dark:text-gray-300">
                {{ $t("modals.step.text", { step }) }}
              </p>
            </div>
            <button @click="closeModal" :aria-label="$t('common.close')"
              class="shrink-0 text-2xl leading-none text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded">
              &times;
            </button>
          </div>
          <div class="flex flex-wrap justify-between gap-3">
            <button @click="prevStep" :disabled="step === 1"
              class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
              :class="{ 'opacity-50 cursor-not-allowed': step === 1 }">
              {{ $t("common.previous") }}
            </button>
            <button v-if="step < 3" @click="nextStep"
              class="min-w-[170px] rounded-xl bg-blue-600 px-5 py-2.5 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              {{ $t("common.next") }}
            </button>
            <button v-else @click="closeModal"
              class="min-w-[170px] rounded-xl bg-blue-600 px-5 py-2.5 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              {{ $t("common.finish") }}
            </button>
          </div>
        </div>
      </div>

      <!-- Eleventh Medal (Confirmation) -->
      <div v-if="activeModal === 'confirm'"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 p-4" role="dialog"
        aria-modal="true" aria-labelledby="confirmModalTitle" @click.self="closeModal">
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full md:w-1/3 max-w-md space-y-4">
          <div class="flex flex-col items-center py-2 mb-14 gap-4">
            <h2 id="confirmModalTitle" class="text-xl font-bold text-gray-800 dark:text-gray-100">
              {{ $t("modals.confirmModal.title") }}
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t("modals.confirmModal.text") }}
            </p>
          </div>
          <div class="flex justify-between gap-4">
            <button @click="closeModal"
              class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
              {{ $t("common.cancel") }}
            </button>
            <button @click="confirmAction"
              class="min-w-[170px] rounded-xl bg-blue-600 px-5 py-2.5 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              {{ $t("common.confirm") }}
            </button>
          </div>
        </div>
      </div>

      <!-- 12th Medal (with timer) -->
      <div v-if="activeModal === 'auto'"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 p-4" role="dialog"
        aria-modal="true" aria-labelledby="autoModalTitle">
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full md:w-1/3 max-w-md space-y-4">
          <div class="flex flex-col items-center py-2 mb-14 gap-4">
            <h2 id="autoModalTitle" class="text-xl font-bold text-gray-800 dark:text-gray-100">
              {{ $t("modals.auto.title") }}
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t("modals.auto.text", { timer }) }}
            </p>
          </div>
          <div class="flex justify-end">
            <button @click="closeModal"
              class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
              {{ $t("common.close") }}
            </button>
          </div>
        </div>
      </div>

      <!-- The Thirteenth Medal (Image Gallery) -->
      <div v-if="activeModal === 'carousel'"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 p-4" role="dialog"
        aria-modal="true" aria-labelledby="carouselModalTitle" @click.self="closeModal">
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full md:w-1/2 max-w-2xl space-y-4">
          <div class="flex items-start justify-between gap-4 mb-4">
            <h2 id="carouselModalTitle" class="text-xl font-bold text-gray-800 dark:text-gray-100 flex-1 text-center">
              {{ $t("modals.carousel.title") }}
            </h2>
            <button @click="closeModal" :aria-label="$t('common.close')"
              class="shrink-0 text-2xl leading-none text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded">
              &times;
            </button>
          </div>
          <div class="flex w-auto h-64 sm:h-96 justify-center">
            <img :src="carouselImages[carouselIndex]" :alt="$t('modals.carousel.title') + ' ' + (carouselIndex + 1)"
              class="rounded-lg max-h-full" />
          </div>
          <div class="flex justify-center gap-3">
            <button @click="prevImage"
              class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
              {{ $t("common.previous") }}
            </button>
            <button @click="nextImage"
              class="min-w-[170px] rounded-xl bg-blue-600 px-5 py-2.5 text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              {{ $t("common.next") }}
            </button>
          </div>
        </div>
      </div>

      <!-- Fourteenth Medal (Full Screen) -->
      <div v-if="activeModal === 'fullscreen'"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70" role="dialog"
        aria-modal="true" aria-labelledby="fullscreenModalTitle">
        <div class="bg-white dark:bg-gray-900 w-full h-full flex flex-col justify-center items-center space-y-4 px-4">
          <div class="flex flex-col items-center py-2 mb-14 gap-4 text-center">
            <h2 id="fullscreenModalTitle" class="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {{ $t("modals.fullscreen.title") }}
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t("modals.fullscreen.text") }}
            </p>
          </div>
          <div class="flex justify-end">
            <button @click="closeModal"
              class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
              {{ $t("common.close") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- The Fifteenth Medal-->
    <div>
      <transition enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in" enter-from-class="opacity-0 scale-50"
        leave-to-class="opacity-0 scale-50">
        <div v-if="showModal12"
          class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50 dark:bg-black/70 p-4" role="dialog"
          aria-modal="true" aria-labelledby="modal12Title" @click.self="showModal12 = false">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <div class="flex flex-col items-center py-2 mb-5 gap-4">
              <h2 id="modal12Title" class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                {{ $t("modals.modal12.title") }}
              </h2>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                {{ $t("modals.modal12.text") }}
              </p>
            </div>
            <div class="flex justify-end">
              <button @click="showModal12 = false"
                class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-100 rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
                {{ $t("common.close") }}
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>

  </div>
</template>

<script>
import modalSample from "@/assets/modal-1.webp";
import routerPhoto from "@/assets/modal-2.webp";
import tailwindPhoto from "@/assets/modal-3.webp";
import vuePhoto from "@/assets/modal-4.webp";

export default {
  name: "Modals-1",
  data() {
    return {
      modalSample,
      showModal1: false,
      showModal4: false,
      showModal5: false,
      showModal6: false,
      showModal7: false,
      showModal8: false,
      showModal9: false,
      showModal10: false,
      showModal11: false,
      showModal12: false,
      activeModal: null,
      step: 1,
      initialTimer: 5,
      timer: 5,
      timerInterval: null,
      carouselIndex: 0,
      carouselImages: [modalSample, routerPhoto, tailwindPhoto, vuePhoto],

      email: "",
      password: "",
      loginError: "",
    };
  },
  computed: {
    direction() {
      return this.$i18n.locale === "fa" ? "rtl" : "ltr";
    },
    isAnyModalOpen() {
      return (
        this.showModal1 ||
        this.showModal4 ||
        this.showModal5 ||
        this.showModal6 ||
        this.showModal7 ||
        this.showModal8 ||
        this.showModal9 ||
        this.showModal10 ||
        this.showModal11 ||
        this.showModal12 ||
        this.activeModal !== null
      );
    },
  },
  watch: {
    isAnyModalOpen(open) {
      document.body.style.overflow = open ? "hidden" : "";
    },
  },
  mounted() {
    document.addEventListener("keydown", this.handleEscape);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleEscape);
    document.body.style.overflow = "";
    this.clearTimerInterval();
  },
  methods: {
    handleEscape(event) {
      if (event.key === "Escape" && this.isAnyModalOpen) {
        this.closeAllModals();
      }
    },
    closeAllModals() {
      this.showModal1 = false;
      this.showModal4 = false;
      this.showModal5 = false;
      this.showModal6 = false;
      this.showModal7 = false;
      this.showModal8 = false;
      this.showModal9 = false;
      this.showModal10 = false;
      this.showModal11 = false;
      this.showModal12 = false;
      this.closeModal();
    },
    openModal(modal) {
      this.activeModal = modal;
      if (modal === "auto") {
        this.resetTimer();
        this.startTimer();
      }
    },
    closeModal() {
      this.activeModal = null;
      this.step = 1;
      this.clearTimerInterval();
    },
    nextStep() {
      if (this.step < 3) this.step++;
    },
    prevStep() {
      if (this.step > 1) this.step--;
    },
    resetTimer() {
      this.timer = this.initialTimer;
    },
    startTimer() {
      this.clearTimerInterval();
      this.timerInterval = setInterval(() => {
        this.timer--;
        if (this.timer <= 0) {
          this.clearTimerInterval();
          this.closeModal();
        }
      }, 1000);
    },
    clearTimerInterval() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    },
    confirmAction() {
      window.alert(this.$t("modals.confirmModal.confirmedAlert"));
      this.closeModal();
    },
    nextImage() {
      this.carouselIndex =
        (this.carouselIndex + 1) % this.carouselImages.length;
    },
    prevImage() {
      this.carouselIndex =
        (this.carouselIndex - 1 + this.carouselImages.length) %
        this.carouselImages.length;
    },
    handleLogin() {
      this.loginError = "";
      if (!this.email || !this.password) {
        this.loginError = this.$t("modals.modal5.validationError");
        return;
      }
      this.showModal5 = false;
      this.email = "";
      this.password = "";
    },
  },
};
</script>