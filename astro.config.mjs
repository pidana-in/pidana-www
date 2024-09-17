// @ts-check
import { defineConfig } from "astro/config"

import react from "@astrojs/react"

import tailwind from "@astrojs/tailwind"

import netlify from "@astrojs/netlify"

// https://astro.build/config
export default defineConfig({
  compressHTML: true,

  build: {
    inlineStylesheets: "auto",
  },

  image: {
    domains: ["neon.ipsator.com"],
  },

  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  vite: {
    build: {
      assetsInlineLimit: 1024,
    },
  },

  output: "server",
  adapter: netlify({
    cacheOnDemandPages: true,
    imageCDN: false,
  }),
})
