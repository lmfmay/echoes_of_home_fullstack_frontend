import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //add proxy server
  server: {
    proxy: {
      '/api': 'https://echoes-of-home-fullstack-backend.onrender.com'
    }
  },
  plugins: [react()],
})
