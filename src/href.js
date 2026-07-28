// GitHub Pages serves this project from a subpath, so every internal link has
// to carry the base. Astro fills BASE_URL from `base` in astro.config.mjs, and
// it works the same in page frontmatter and in browser scripts.
const BASE = import.meta.env.BASE_URL.replace(/\/*$/, '/')

/** The collection index. */
export const home = () => BASE

/** An entry page. */
export const entry = (slug) => `${BASE}${slug}/`

/** Anything in public/, e.g. asset('favicon.svg'). */
export const asset = (path) => `${BASE}${path.replace(/^\/+/, '')}`
