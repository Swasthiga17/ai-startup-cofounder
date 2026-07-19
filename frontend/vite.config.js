import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    proxy: {
      '/analyze': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
      '/download': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
      '/chat': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
      '/upload-document': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})

