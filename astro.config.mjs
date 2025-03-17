// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare({ imageService: 'cloudflare' }),
  image: { service: passthroughImageService() }
})
