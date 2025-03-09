import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //設定產品(production)、開發中路徑(dev)
  base: process.env.NODE_ENV === 'production' ? '/react-gh-pages-week05/' : '/',
  plugins: [react()],
})