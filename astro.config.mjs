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
  // This card shipped briefly as "Steering wheel". Static hosts cannot issue a
  // real redirect, so Astro emits a meta-refresh page at the old address.
  //
  // The route key is resolved against the base, but the destination is written
  // out verbatim, so that one has to carry the base itself.
  redirects: {
    '/steering-wheel/': `${BASE.replace(/\/+$/, '')}/helm/`,
  },
  build: {
    inlineStylesheets: 'always',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
})
