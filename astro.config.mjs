// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import cloudflare from '@astrojs/cloudflare'

import db from '@astrojs/db';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare({ imageService: 'cloudflare' }),
  image: { service: passthroughImageService() },
  integrations: [db(), vue()]
})