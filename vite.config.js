import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: ['fixme-j15h.onrender.com']
  },
  preview: {
    host: true,
    allowedHosts: ['fixme-j15h.onrender.com']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
