import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nplus.page',
  base: '/portfolio',
  integrations: [sitemap()],
});
