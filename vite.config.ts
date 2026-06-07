import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import i18next from 'vite-plugin-i18next-loader';
import path from 'path';

export default defineConfig({
  plugins: [react() ,i18next({paths: [ "./locales" ]})],
  build: {
    outDir: 'build'
  },
  resolve: {
    alias: {
      "@core": path.resolve(__dirname, "./src/core"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@": path.resolve(__dirname, "./src"),
    }
  }
});
