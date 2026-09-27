import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  root,
  plugins: [vue()],
  build: {
    outDir: fileURLToPath(new URL('../../dist/apps/my-app', import.meta.url)),
    emptyOutDir: true
  }
})
