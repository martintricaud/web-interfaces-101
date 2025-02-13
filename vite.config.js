import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/web-interfaces-101/",
  publicDir: 'docs',
  build: {
    // minify: false, // Disable minification to check if styles are altered
    cssCodeSplit: false, // Prevent CSS splitting
  },
  
})