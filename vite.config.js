import { defineConfig } from 'vite';
import { join as joinPath } from 'node:path';

const cwd = process.cwd();

export default defineConfig({
  server: {
    port: 7777,
  },
  base: './',
  publicDir: joinPath(cwd, 'src/public'),
  root: joinPath(cwd, 'src'),
  build: {
    outDir: joinPath(cwd, 'dist'),
  },
});
