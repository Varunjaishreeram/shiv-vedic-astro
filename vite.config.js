import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ViteSSG } from 'vite-ssg/plugin';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteSSG()
  ],
  build: {
    rollupOptions: {
      input: '/index.html'
    }
  }
});
