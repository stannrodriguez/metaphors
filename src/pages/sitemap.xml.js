import { metaphors } from '../data/metaphors.js'
import { about, entry, home } from '../href.js'

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

export function GET({ site }) {
  const paths = [home(), about(), ...metaphors.map((metaphor) => entry(metaphor.slug))]
  const urls = paths
    .map((path) => `  <url><loc>${escapeXml(new URL(path, site))}</loc></url>`)
    .join('\n')
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
