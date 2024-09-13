// @ts-check
import { defineConfig } from "astro/config"

import react from "@astrojs/react"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["neon.ipsator.com"],
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
