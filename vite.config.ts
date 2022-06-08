import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src',
  build: {
    manifest: true,
    outDir: '../dist',
  },
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: { icon: true },
    }),
  ],
});
