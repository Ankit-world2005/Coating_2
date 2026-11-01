import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        glass: resolve(import.meta.dirname, 'glass.html'),
        roof: resolve(import.meta.dirname, 'roof.html'),
        sofa: resolve(import.meta.dirname, 'sofa.html'),
        tiles: resolve(import.meta.dirname, 'tiles.html'),
        wood: resolve(import.meta.dirname, 'wood.html'),
      },
    },
  },
});
