import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served as a project site under the user-level primary domain:
// https://nplus.page/portfolio/ — hence the base path. If this ever moves to a
// dedicated subdomain (public/CNAME + DNS record), drop `base` and update `site`.
export default defineConfig({
  site: 'https://nplus.page',
  base: '/portfolio',
  integrations: [sitemap()],
});
