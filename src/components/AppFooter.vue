<template>
  <footer class="bg-gray-100 dark:bg-[#1a2030] rounded-2xl mx-4 relative">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between mx-5 mb-8">
        <div class="mb-12 md:mb-0 md:max-w-xs">

          <!-- obk Icon -->
          <router-link class="flex items-center self-center text-2xl max-[425px]:text-xl max-[320px]:text-lg font-semibold whitespace-nowrap dark:text-white"
            to="/">
            <img src="/src/assets/obk-Logo-2.webp" class="w-10 h-10 mx-2 sm:h-16 sm:w-16 rounded-full"
              alt="obkProject Logo" />
            {{ $t("appName") }}
          </router-link>
          <p class="text-start leading-6 mt-3 max-sm:text-sm text-[0.9375rem] text-gray-500 dark:text-gray-400">
            {{ $t("footer.tagline") }}
          </p>
        </div>

        <!-- quickAccess -->
        <div class="flex flex-col items-center text-center md:items-start md:text-start md:ms-20">
          <h3 class="mb-2 md:mb-3 text-md font-bold text-gray-900 uppercase dark:text-white">
            {{ $t("footer.quickAccess") }}
          </h3>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-1.5 md:mb-2">
              <router-link class="hover:underline" to="/">{{ $t("nav.home") }}</router-link>
            </li>
            <li class="mb-1.5 md:mb-2">
              <router-link class="hover:underline" to="/Projects">{{ $t("nav.projects") }}</router-link>
            </li>
            <li class="mb-1.5 md:mb-2">
              <router-link class="hover:underline" to="/Articles">{{ $t("nav.articles") }}</router-link>
            </li>
            <li class="mb-1.5 md:mb-2">
              <button 
                @click="openModal" 
                class="relative overflow-hidden group rounded-lg py-0.5 -ms-1 px-1 text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1.5 transition-colors">
                <span class="absolute top-0 -left-[100%] w-full h-full rounded-lg bg-gradient-to-r from-transparent via-amber-200/60 dark:via-white/30 to-transparent transition-all duration-700 group-hover:left-[100%] pointer-events-none"></span>

                <span>{{ $t("donate.button") }}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />

      <!-- copyright & contact -->
      <div class="sm:flex sm:items-center sm:justify-between sm:mx-3 mx-3">
        <span class="text-sm max-[425px]:text-xs max-[375px]:text-[11px] text-gray-500 sm:text-center dark:text-gray-400">
          {{ $t("footer.copyright") }}
        </span>
        <div class="flex items-center mt-4 sm:justify-center sm:mt-0">
          <a href="mailto:omidbolandy@gmail.com" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.4l-8 6-8-6V6h16Zm-16 12V8.9l7.4 5.55a1 1 0 0 0 1.2 0L20 8.9V18H4Z" />
            </svg>
            <span class="sr-only">{{ $t("home.contact.gmail") }}</span>
          </a>
          <a href="https://www.github.com/omidbolandy" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-7">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clip-rule="evenodd" />
            </svg>
            <span class="sr-only">{{ $t("home.contact.github") }}</span>
          </a>
          <a
            href="https://www.linkedin.com/in/omid-bolandy"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-7">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.333 1H3.667C2.193 1 1 2.193 1 3.667v12.666C1 17.807 2.193 19 3.667 19h12.666c1.474 0 2.667-1.193 2.667-2.667V3.667C19 2.193 17.807 1 16.333 1ZM6.002 16.002H3.335V7.335h2.667v8.667ZM4.668 6.135a1.534 1.534 0 1 1 0-3.068 1.534 1.534 0 0 1 0 3.068ZM16.668 16.002h-2.667v-4.175c0-1.002-.018-2.29-1.396-2.29-1.397 0-1.611 1.092-1.611 2.218v4.247H8.327V7.335h2.56v1.184h.036c.356-.675 1.226-1.387 2.525-1.387 2.702 0 3.2 1.778 3.2 4.092v4.778Z"
                clip-rule="evenodd"/>
            </svg>
            <span class="sr-only">{{ $t("home.contact.linkedin") }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- DONATE MODAL -->
    <Transition name="fade">
      <div 
        v-if="isModalOpen" 
        class="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/75 backdrop-blur-sm overflow-y-auto px-4 py-10 sm:py-6"
        @click.self="closeModal">
        <div class="relative w-full max-w-4xl my-auto bg-white dark:bg-[#1a2030] rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors">

          <!-- Close button (X) -->
          <button 
            @click="closeModal" 
            class="absolute top-4 left-4 z-10 p-2 text-gray-400 hover:text-gray-700 dark:hover:text-white bg-gray-100 dark:bg-gray-800 rounded-full transition-colors"
            title="Esc">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        
          <!-- Modal Header -->
          <div class="text-center pt-8 pb-4 px-6 border-b border-gray-100 dark:border-gray-800">
            <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              {{ $t("donate.title") }}
            </h2>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
              {{ $t("donate.description") }}
            </p>
          </div>
        
          <!-- Modal body (two columns with synchronized alignment) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 lg:p-8 items-stretch">
          
            <!-- Right: Cafe Ted (Rial-based / inside Iran) -->
            <div class="flex flex-col justify-between p-6 bg-amber-50/60 dark:bg-amber-950/20 rounded-2xl border border-amber-200/80 dark:border-amber-900/40 h-full">
              <div class="flex flex-col items-center text-center w-full">

                <!-- Badge & Switch area space holder for alignment -->
                <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 rounded-full text-xs font-bold mb-3">
                  <span>🇮🇷</span> {{ $t("donate.domesticTitle") }}
                </div>
              
                <!-- Empty space element to align with Crypto network buttons -->
                <div class="h-[38px] mb-3"></div>
              
                <!-- Title & Subtitle with min-height -->
                <div class="min-h-[64px] flex flex-col justify-center mb-4">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {{ $t("donate.domesticName") }}
                  </h3>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ $t("donate.domesticDesc") }}
                  </p>
                </div>
              
                <!-- QR Code Box -->
                <div 
                  @click="copyToClipboard(coffeeteUrl, $t('donate.domesticName'))" 
                  class="group relative inline-block p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 cursor-pointer transition-transform hover:scale-105 mb-4"
                  :title="$t('donate.domesticName') + ' - ' + $t('donate.clickToCopy')">
                  <img :src="coffeeteQrImage" alt="Coffeete QR Code" class="w-40 h-40 object-contain mx-auto rounded-lg" />
                  <div class="absolute inset-0 bg-black/60 rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-medium transition-opacity">
                    {{ $t("donate.copyLink") }}
                  </div>
                </div>
              
                <!-- Copy Link Box -->
                <div class="w-full bg-white dark:bg-gray-800 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-between gap-2">
                  <span class="text-xs font-mono text-gray-600 dark:text-gray-300 truncate dir-ltr">
                    {{ coffeeteUrl }}
                  </span>
                  <button 
                    @click="copyToClipboard(coffeeteUrl, $t('donate.domesticName'))" 
                    class="shrink-0 px-3 py-1.5 text-xs font-medium bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors flex items-center gap-1">
                    <span>{{ $t("donate.copy") }}</span>
                  </button>
                </div>
              </div>
            
              <a 
                :href="coffeeteUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="w-full mt-4 py-2.5 px-4 text-center text-xs font-bold text-amber-900 bg-amber-200 hover:bg-amber-300 dark:bg-amber-800/80 dark:text-amber-100 dark:hover:bg-amber-700 rounded-xl transition-colors">
                {{ $t("donate.directLink") }}
              </a>
            </div>
          
            <!-- Left: Crypto / International -->
            <div class="flex flex-col justify-between p-6 bg-sky-50/60 dark:bg-sky-950/20 rounded-2xl border border-sky-200/80 dark:border-sky-900/40 h-full">
              <div class="flex flex-col items-center text-center w-full">

                <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-100 dark:bg-sky-900/60 text-sky-800 dark:text-sky-300 rounded-full text-xs font-bold mb-3">
                  <span>🌐</span> {{ $t("donate.cryptoTitle") }}
                </div>
              
                <!-- High visibility Network Toggle Buttons -->
                <div class="inline-flex items-center justify-center gap-1 p-1 mb-3 rounded-xl bg-sky-200/80 dark:bg-sky-900/80 border border-sky-300 dark:border-sky-700 h-[38px]">
                  <button
                    type="button"
                    @click="cryptoNetwork = 'tron'"
                    :class="[
                      'px-3.5 py-1 text-xs font-extrabold rounded-lg transition-all duration-200',
                      cryptoNetwork === 'tron'
                        ? 'bg-sky-600 text-white dark:bg-sky-400 dark:text-gray-950 shadow-md scale-105'
                        : 'text-sky-800 dark:text-sky-200 hover:bg-sky-300/60 dark:hover:bg-sky-800/80'
                    ]">
                    Tron (TRC20)
                  </button>
                  <button
                    type="button"
                    @click="cryptoNetwork = 'bnb'"
                    :class="[
                      'px-3.5 py-1 text-xs font-extrabold rounded-lg transition-all duration-200',
                      cryptoNetwork === 'bnb'
                        ? 'bg-sky-600 text-white dark:bg-sky-400 dark:text-gray-950 shadow-md scale-105'
                        : 'text-sky-800 dark:text-sky-200 hover:bg-sky-300/60 dark:hover:bg-sky-800/80'
                    ]">
                    Binance (BEP20)
                  </button>
                </div>
              
                <!-- Title & Subtitle with matching min-height -->
                <div class="min-h-[64px] flex flex-col justify-center mb-4">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {{ cryptoTitle }}
                  </h3>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ cryptoSubtitle }}
                  </p>
                </div>
              
                <!-- QR Code Box -->
                <div 
                  @click="copyToClipboard(cryptoAddress, cryptoTitle)" 
                  class="group relative inline-block p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 cursor-pointer transition-transform hover:scale-105 mb-4"
                  :title="cryptoTitle + ' - ' + $t('donate.clickToCopy')">
                  <img 
                    :src="cryptoQrImage" 
                    :alt="cryptoAltText" 
                    class="w-40 h-40 object-contain mx-auto rounded-lg" />
                  <div class="absolute inset-0 bg-black/60 rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-medium transition-opacity">
                    {{ $t("donate.copyAddress") }}
                  </div>
                </div>
              
                <!-- Copy Address Box -->
                <div class="w-full bg-white dark:bg-gray-800 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-between gap-2">
                  <span class="text-xs font-mono text-gray-600 dark:text-gray-300 truncate dir-ltr" :title="cryptoAddress">
                    {{ cryptoAddress }}
                  </span>
                  <button 
                    @click="copyToClipboard(cryptoAddress, cryptoTitle)" 
                    class="shrink-0 px-3 py-1.5 text-xs font-medium bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors flex items-center gap-1">
                    <span>{{ $t("donate.copy") }}</span>
                  </button>
                </div>
              </div>
            
              <!-- Warning text aligned with direct link button height -->
              <div class="w-full mt-4 p-2 text-center text-[11px] text-sky-800 dark:text-sky-300 bg-sky-100/70 dark:bg-sky-900/40 rounded-xl min-h-[42px] flex items-center justify-center">
                ⚠️ {{ cryptoWarning }}
              </div>
            </div>
          </div>
        
          <!-- Modal Footnote -->
          <div class="text-center pb-6 pt-2 px-6">
            <span class="text-xs text-gray-400 dark:text-gray-500">
              {{ $t("donate.footerNote") }}
            </span>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Successful copy toast message -->
    <Transition name="toast">
      <div 
        v-if="toastMessage" 
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium rounded-full shadow-lg flex items-center gap-2 border border-gray-700 dark:border-gray-300"
      >
        <span>✅</span>
        <span>{{ toastMessage }} {{ $t("donate.copiedToast") }}</span>
      </div>
    </Transition>
  </footer>
</template>

<script>
import binanceQr from "@/assets/Donate/Binance.webp";
import tronQr from "@/assets/Donate/Tron.webp";
import coffeeteQr from "@/assets/Donate/Coffeete-QRCode-obkdev.png";

export default {
  name: "AppFooter",
  data() {
    return {
      isModalOpen: false,
      toastMessage: "",
      coffeeteUrl: "https://www.coffeete.ir/obkdev",
      cryptoNetwork: "tron",
      cryptoAddressTron: "TA7EZq1AD2uN9UeWaEUnWnjYgjhSAwGMzM",
      cryptoAddressBnb: "0x530d4C4f0790f5F42b45f5Ab928f4eF319c3c04E",
      coffeeteQrImage: coffeeteQr,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
      window.addEventListener("keydown", this.handleKeyDown);
      window.dispatchEvent(new CustomEvent("modal-toggle", { detail: true }));
    },
    closeModal() {
      this.isModalOpen = false;
      window.removeEventListener("keydown", this.handleKeyDown);
      window.dispatchEvent(new CustomEvent("modal-toggle", { detail: false }));
    },
    handleKeyDown(event) {
      if (event.key === "Escape") {
        this.closeModal();
      }
    },
    async copyToClipboard(text, label) {
      try {
        await navigator.clipboard.writeText(text);
        this.showToast(label);
      } catch (err) {
        console.error("Copy error:", err);
      }
    },
    showToast(label) {
      this.toastMessage = label;
      setTimeout(() => {
        this.toastMessage = "";
      }, 3000);
    },
  },
  computed: {
    cryptoAddress() {
      return this.cryptoNetwork === "bnb" ? this.cryptoAddressBnb : this.cryptoAddressTron;
    },
    cryptoQrImage() {
      return this.cryptoNetwork === "bnb" ? binanceQr : tronQr;
    },
    cryptoTitle() {
      return this.cryptoNetwork === "bnb"
        ? this.$t("donate.crypto.bnb.title")
        : this.$t("donate.crypto.tron.title");
    },
    cryptoSubtitle() {
      return this.cryptoNetwork === "bnb"
        ? this.$t("donate.crypto.bnb.subtitle")
        : this.$t("donate.crypto.tron.subtitle");
    },
    cryptoWarning() {
      return this.cryptoNetwork === "bnb"
        ? this.$t("donate.crypto.bnb.warning")
        : this.$t("donate.crypto.tron.warning");
    },
    cryptoAltText() {
      return this.cryptoNetwork === "bnb"
        ? this.$t("donate.crypto.bnb.alt")
        : this.$t("donate.crypto.tron.alt");
    }
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}

.dir-ltr {
  direction: ltr;
}
</style>