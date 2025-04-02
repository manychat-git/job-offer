import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  // Base public path when served in development or production
  base: './',
  // Configure server options
  server: {
    // Open browser on server start
    open: true
  },
  // Add React and Tailwind plugins
  plugins: [
    react(),
    tailwindcss()
  ],
  // Resolve extensions and aliases
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
}) 