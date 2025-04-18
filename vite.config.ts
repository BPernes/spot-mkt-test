import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@components': path.resolve('./src/components/'),
    },
  },
  plugins: [react(), tailwindcss()],
});
