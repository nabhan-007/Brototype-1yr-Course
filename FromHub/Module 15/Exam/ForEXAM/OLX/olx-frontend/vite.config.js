// Vite dev config: react plugin tells Vite to compile JSX before serving.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
