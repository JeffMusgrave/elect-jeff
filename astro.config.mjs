import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

import robots from "astro-robots-txt"


// https://astro.build/config
export default defineConfig({
  site: 'https://www.electjeff.ca',
  integrations: [tailwind(), sitemap(), robots()]
});