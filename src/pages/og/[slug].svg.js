import { metaphors, bySlug } from '../../data/metaphors.js'
import { families } from '../../data/families.js'
import { buildGlyphs, LITERAL_STROKES } from '../../data/glyphs.js'
import { SITE_NAME, SITE_TAGLINE } from '../../site.js'

export function getStaticPaths() {
  return [{ params: { slug: 'home' } }, ...metaphors.map((m) => ({ params: { slug: m.slug } }))]
}

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

// Newsreader is not available to a social crawler, so the images fall back to
// the same serif stack the design names after it.
const SERIF = "Newsreader, Georgia, 'Times New Roman', serif"
const MONO = "'IBM Plex Mono', ui-monospace, monospace"

/** Break a one-liner across at most two lines without measuring glyphs. */
function wrap(text, max) {
  const words = text.split(' ')
  const lines = ['']
  for (const word of words) {
    const candidate = lines[lines.length - 1] ? `${lines[lines.length - 1]} ${word}` : word
    if (candidate.length > max && lines[lines.length - 1]) lines.push(word)
    else lines[lines.length - 1] = candidate
  }
  return lines.slice(0, 3)
}

function card({ label, name, line, glyphKey }) {
  const glyphs = buildGlyphs(LITERAL_STROKES, false)
  const glyph = glyphs[glyphKey] ?? glyphs['north-star']
  const lines = wrap(line, 42)

  // The name is a variable, so size it to the space rather than assuming.
  const nameSize = name.length > 20 ? 40 : name.length > 12 ? 50 : 62
  const nameTrack = name.length > 20 ? 5 : name.length > 12 ? 7 : 9
  const ruleY = 356 + lines.length * 44 + 8
  const footY = ruleY + 56

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${esc(name)}. ${esc(line)}">
  <defs>
    <radialGradient id="field" cx="50%" cy="10%" r="90%">
      <stop offset="0%" stop-color="#161016"/>
      <stop offset="60%" stop-color="#0e0a07"/>
      <stop offset="100%" stop-color="#0a0705"/>
    </radialGradient>
    <linearGradient id="plate" x1="0" y1="0" x2="0.6" y2="1">
      <stop offset="0%" stop-color="#1b1510"/>
      <stop offset="100%" stop-color="#120e08"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#field)"/>
  <rect x="34" y="34" width="1132" height="562" rx="18" fill="url(#plate)" stroke="rgba(201,162,75,.45)" stroke-width="2"/>
  <rect x="50" y="50" width="1100" height="530" rx="12" fill="none" stroke="rgba(201,162,75,.35)" stroke-width="1"/>

  <rect x="110" y="150" width="330" height="330" rx="16" fill="url(#plate)" stroke="rgba(201,162,75,.4)" stroke-width="1"/>
  <g transform="translate(165 205) scale(2.5)">${glyph}</g>

  <text x="500" y="214" font-family="${MONO}" font-size="20" letter-spacing="4.4" fill="#c9a24b">${esc(label.toUpperCase())}</text>
  <text x="500" y="290" font-family="${SERIF}" font-size="${nameSize}" font-weight="500" letter-spacing="${nameTrack}" fill="#d8b25e">${esc(name.toUpperCase())}</text>
  ${lines
    .map(
      (l, i) =>
        `<text x="500" y="${356 + i * 44}" font-family="${SERIF}" font-size="32" font-style="italic" fill="rgba(240,233,218,.66)">${esc(l)}</text>`,
    )
    .join('\n  ')}

  <rect x="500" y="${ruleY}" width="80" height="1" fill="rgba(201,162,75,.5)"/>
  <text x="500" y="${footY}" font-family="${MONO}" font-size="17" letter-spacing="4.8" fill="rgba(240,233,218,.45)">${esc(SITE_NAME.toUpperCase())}</text>
</svg>`
}

export function GET({ params }) {
  const { slug } = params

  const svg =
    slug === 'home'
      ? card({
          label: 'A collection of twenty',
          name: SITE_NAME,
          line: SITE_TAGLINE,
          glyphKey: 'north-star',
        })
      : (() => {
          const m = bySlug[slug]
          return card({
            label: families[m.family].name,
            name: m.name,
            line: m.oneLiner,
            glyphKey: m.slug,
          })
        })()

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
