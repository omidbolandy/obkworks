import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  worker: {
    format: 'es'
  },
  optimizeDeps: {
    include: ['maplibre-gl', '@neshan-maps-platform/maplibre-sdk']
  }
})