import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages project site: https://mrzewnicki.github.io/CV/
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
})
