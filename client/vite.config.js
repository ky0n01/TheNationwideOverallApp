import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
  // server: {
  //   port: 3000,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true, 
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  // },
  // Create shortcut url /api instead of http://localhost:8000
  // proxy: {
  //   '/api': {
  //     target: 'http://localhost:5000',
  //     changeOrigin: true, 
  //     rewrite: (path) => path.replace(/^\/api/, '')
  //   }
  // }
})
