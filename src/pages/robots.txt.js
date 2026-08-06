import { asset } from '../href.js'

export function GET({ site }) {
  const sitemap = new URL(asset('sitemap.xml'), site)
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
