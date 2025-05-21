import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  /** ОБЯЗАТЕЛЬНО: путь = /<slug репозитория>/ */
  base: '/yookassa-landing/',
})
