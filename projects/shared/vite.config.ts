import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      name: '@3divi/shared',
      entry: 'src/index.ts',
    },
    outDir: './build',
    minify: 'esbuild',
  },
  server: {
    port: 3010,
  },
  plugins: [react(), checker({ typescript: true })],
});
