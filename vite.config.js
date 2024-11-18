import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //add proxy server
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [react()],
})