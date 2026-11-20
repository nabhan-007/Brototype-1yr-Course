import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// 5191 so it never fights the OLX frontend (5173) or the rtk-counter (5190)
export default defineConfig({
  plugins: [react()],
  server: { port: 5191, strictPort: true },
})
