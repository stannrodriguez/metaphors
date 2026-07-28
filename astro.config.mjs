// @ts-check
import { defineConfig } from 'astro/config'

// GitHub Pages serves a project site from https://<user>.github.io/<repo>/, so
// the build needs both halves of that URL. Override either with an environment
// variable, which is how the deploy workflow points at whatever the repository
// is actually called.
//
// Moving to a custom domain: set SITE to it, set BASE to '/', and add the
// domain to public/CNAME.
const SITE = process.env.SITE ?? 'https://stannrodriguez.github.io'
const BASE = process.env.BASE ?? '/metaphors'

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
})
