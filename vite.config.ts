import { resolve } from 'path'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Inspect(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
})
