// @ts-check
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://metaphors.example.com',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
})
