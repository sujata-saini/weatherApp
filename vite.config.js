// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   base: process.env.NODE_ENV === 'production' ? '/weatherApp/' : './',
//   plugins: [react()],

// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: process.env.NODE_ENV === 'production' ? '/weatherApp/' : './',
  base: '/weatherApp/', 
  plugins: [react()],
})



