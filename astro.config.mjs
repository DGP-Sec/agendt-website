// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://agendt.de',
  integrations: [sitemap()],
  vite: {
    build: {
      // Moderne Browser-Ziele: Lightning CSS behaelt backdrop-filter
      // in Standard- UND -webkit-Form (sonst nur Praefix -> kein Blur in Firefox)
      cssTarget: ['chrome110', 'firefox110', 'safari16'],
    },
  },
});
