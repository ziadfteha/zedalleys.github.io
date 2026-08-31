import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
//
// This project is the "Learning Hub" sub-app of the Zed Alleys personal site.
// Its source lives in `_hub/` (the leading underscore makes GitHub Pages'
// Jekyll ignore it, so the raw source is never served). `npm run build`
// emits the production bundle straight into `../learning-hub/`, which IS
// committed and served at https://zedalleys.com/learning-hub/.
export default defineConfig({
  plugins: [react()],
  base: '/learning-hub/',
  build: {
    outDir: '../learning-hub',
    emptyOutDir: true,
  },
})
