import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dinobooks.kz',
  build: { format: 'directory' },
  server: { port: 4321 },
  devToolbar: { enabled: false },
});
