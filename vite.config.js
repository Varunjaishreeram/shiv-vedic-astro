import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import prerender from 'vite-plugin-prerender'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    // Copy prerender script into dist/
    viteStaticCopy({
      targets: [
        {
          src: 'prerender/index.js',
          dest: 'prerender'
        }
      ]
    }),

    // Prerender main page
    prerender({
      routes: ['/'],
      renderAfterDocumentEvent: 'render-event'
    })
  ]
})
