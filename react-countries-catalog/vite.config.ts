import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/React-Countried-Catalog/', // Update the base URL to match your repository name
  plugins: [react()],
  build: {
    outDir: 'dist', // Change the output directory to 'docs' for compatibility with GitHub Pages
  },
});
