import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** GitHub Pages serves 404.html for unknown paths so client routing works. */
function ghPagesSpaFallback() {
  return {
    name: 'gh-pages-spa-fallback',
    closeBundle() {
      const index = join('dist', 'index.html')
      if (existsSync(index)) {
        copyFileSync(index, join('dist', '404.html'))
      }
    },
  }
}

export default defineConfig({
  // GitHub Pages project site: https://mrzewnicki.github.io/CV/
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss(), ghPagesSpaFallback()],
})
