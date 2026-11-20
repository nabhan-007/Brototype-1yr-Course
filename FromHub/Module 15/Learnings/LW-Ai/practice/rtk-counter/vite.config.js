import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// 5190 so it never fights the OLX frontend on 5173
export default defineConfig({
  plugins: [react()],
  server: { port: 5190, strictPort: true },
})
