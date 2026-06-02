import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['nonimpedimentary-confoundingly-tifany.ngrok-free.dev']
  },
  build: {
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor'
            }
            if (id.includes('swiper')) {
              return 'swiper-vendor'
            }
            if (id.includes('@emailjs')) {
              return 'emailjs-vendor'
            }
            if (id.includes('react-icons')) {
              return 'icons-vendor'
            }
            return 'vendor'
          }
        },
      },
    },
    // Warn if any chunk exceeds 600KB
    chunkSizeWarningLimit: 600,
  },
  // Optimise deps for faster dev server
  optimizeDeps: {
    include: [
      'react', 'react-dom', 'react-router-dom',
      'swiper', '@emailjs/browser',
    ],
  },
})
