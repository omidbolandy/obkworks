<template>
  <!-- Thumbnail -->
  <div
    class="group my-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 cursor-zoom-in"
    @click="open = true"
  >
    <div class="relative">
      <img
        :src="src"
        :alt="title"
        class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <!-- Hover zoom icon -->
      <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="bg-black/50 rounded-full p-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- Lightbox Modal -->
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/75"
        @click.self="open = false"
      >
        <!-- Outer wrapper: centers everything, gives room for top bar -->
        <div class="relative flex flex-col items-center max-h-[90vh] max-w-[90vw] md:max-w-[80vw]">

          <!-- Action buttons — positioned above the image box -->
          <div class="w-full flex justify-end items-center gap-3 mb-3 px-1">

            <!-- Download -->
            <a
              :href="src"
              :download="title"
              class="text-white/70 hover:text-white transition-colors"
              :title="$t('lightbox.download')"
              @click.stop
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>

            <!-- Share -->
            <button
              class="text-white/70 hover:text-white transition-colors"
              :title="$t('lightbox.share')"
              @click.stop="share"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>

            <!-- Print -->
            <button
              class="text-white/70 hover:text-white transition-colors"
              :title="$t('lightbox.print')"
              @click.stop="print"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
            </button>

            <!-- Close -->
            <button
              class="text-white/70 hover:text-white transition-colors"
              :title="$t('lightbox.close')"
              @click.stop="open = false"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <!--
            KEY FIX:
            - "inline-flex flex-col" makes the container shrink to the image's actual rendered size,
              so the title bar always hugs the bottom of the image regardless of aspect ratio.
            - max-h is set here so the image never overflows the screen.
          -->
          <div class="inline-flex flex-col rounded-xl overflow-hidden shadow-2xl" style="max-height: calc(90vh - 3rem);">
            <img
              :src="src"
              :alt="title"
              class="block object-contain"
              style="max-height: calc(90vh - 3rem - 36px); max-width: 90vw;"
            />
            <!-- Title bar — always flush with the image bottom -->
            <div class="bg-black/80 px-4 py-2 text-center shrink-0">
              <span class="text-white text-sm font-medium tracking-wide">{{ title }}</span>
            </div>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  title: { type: String, default: '' }
})

const instance = getCurrentInstance()
const t = (key) => instance.appContext.config.globalProperties.$t(key)

const open = ref(false)

const onKey = (e) => { if (e.key === 'Escape') open.value = false }
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))

const share = async () => {
  if (navigator.share) {
    await navigator.share({ title: props.title, url: window.location.href })
  } else {
    await navigator.clipboard.writeText(window.location.href)
    alert(t('lightbox.linkCopied'))
  }
}

const print = () => {
  const win = window.open('', '_blank')
  win.document.write(`
    <html><head><title>${props.title}</title>
    <style>
      body { margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; background: #fff; }
      img { max-width: 100%; max-height: 90vh; object-fit: contain; }
      p { font-family: sans-serif; font-size: 14px; color: #333; margin-top: 12px; }
    </style></head>
    <body>
      <img src="${props.src}" />
      <p>${props.title}</p>
      <script>window.onload = () => { window.print(); window.close(); }<\/script>
    </body></html>
  `)
  win.document.close()
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>