import { resolve } from 'path'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/200": {
        target: "https://www.google.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/200/, '')
      },
    },
  },
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
