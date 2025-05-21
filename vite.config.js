// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/yookassa-landing/',   // чтобы в gh-pages под /yookassa-landing/
  plugins: [ react() ],
})
