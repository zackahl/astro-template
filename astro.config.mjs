import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // Use site prop below to produce a sitemap
  // site: 'https://example.com',
  integrations: [
    sitemap(),
    mdx(),
    tailwind(),
    vue(),
    icon({
      include: {
        mdi: ["*"], // (Default) Loads entire Material Design Icon set)]
      }
    })
  ]
});