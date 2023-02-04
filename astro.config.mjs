import { defineConfig } from 'astro/config';
import unocss from 'unocss/vite';

// https://astro.build/config
import frontendistahtmlMinify from "@frontendista/astro-html-minify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [unocss()]
  },
  integrations: [frontendistahtmlMinify()]
});