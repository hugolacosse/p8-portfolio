// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://hugolacosse.github.io',
  base: '/p8-portfolio',
  build: {
    assets: 'assets'
  },
  vite: {
      plugins: [tailwindcss()],
      server: {
          watch: {
              usePolling: true,
          },
      },
  },
  integrations: [icon()]
});