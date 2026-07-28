// The twenty glyphs, ported verbatim from the design file's icon() method.
//
// Colors arrive as parameters so the same path data serves the rendered page
// (where they are CSS custom properties) and the social images (where they must
// be literal values, since an SVG opened outside the page has no variables).
//
// The data- attributes are handles for the motion in global.css. They are inert
// on their own: nothing moves unless the <svg> carries data-motion-glyph, so the
// social images render exactly as they always have. Where a motion needs a part
// the design does not draw, that part is written with opacity="0" and the
// keyframes bring it in, for the same reason.
//
// They are written data-x="" rather than bare, because the social images are
// served as image/svg+xml and read by an XML parser, which rejects a valueless
// attribute and refuses the whole file.

export function buildGlyphs({ w, d, a }, animate = false) {
  const wheelSpokes = [0, 45, 90, 135, 180, 225, 270, 315]
    .map(
      (t) =>
        `<line x1="48" y1="29" x2="48" y2="19" stroke="${w}" stroke-width="2.5" stroke-linecap="round" transform="rotate(${t} 48 48)"/>`,
    )
    .join('')

  const flywheelSpokes = [0, 45, 90, 135]
    .map((t) => `<line x1="48" y1="27" x2="48" y2="69" transform="rotate(${t} 48 48)"/>`)
    .join('')

  return {
    'north-star': `
      <path d="M48 16 L54 42 L80 48 L54 54 L48 80 L42 54 L16 48 L42 42 Z" stroke="${w}" stroke-width="3" fill="none" stroke-linejoin="round"/>
      <circle cx="48" cy="48" r="3" fill="${a}" data-core=""/>
      <circle cx="24" cy="24" r="1.8" fill="${d}" data-twinkle="" style="--i:0"/>
      <circle cx="76" cy="22" r="2.2" fill="${d}" data-twinkle="" style="--i:1"/>
      <circle cx="78" cy="74" r="1.6" fill="${d}" data-twinkle="" style="--i:2"/>`,

    helm: `
      <g data-wheel="">
        <circle cx="48" cy="48" r="19" stroke="${w}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="48" cy="48" r="4.5" fill="${w}"/>
        ${wheelSpokes}
        <circle cx="48" cy="17" r="2.8" fill="${a}"/>
      </g>`,

    map: `
      <path d="M20 26 L39 32 L58 26 L77 32 L77 70 L58 64 L39 70 L20 64 Z" stroke="${w}" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
      <line x1="39" y1="32" x2="39" y2="70" stroke="${d}" stroke-width="1.5"/>
      <line x1="58" y1="26" x2="58" y2="64" stroke="${d}" stroke-width="1.5"/>
      <path d="M27 56 Q40 46 52 50 Q64 54 68 42" stroke="${a}" stroke-width="2" stroke-dasharray="3 4" fill="none" stroke-linecap="round" data-route=""/>
      <path d="M65 39 L71 45 M71 39 L65 45" stroke="${a}" stroke-width="2" fill="none" stroke-linecap="round" data-mark=""/>`,

    river: `
      <path d="M18 32 Q28 26 38 32 T58 32 T78 32" stroke="${w}" stroke-width="3" fill="none" stroke-linecap="round" data-current="" style="--i:0"/>
      <path d="M18 50 Q28 44 38 50 T58 50 T78 50" stroke="${d}" stroke-width="2.2" fill="none" stroke-linecap="round" data-current="" style="--i:1"/>
      <path d="M18 68 Q28 62 38 68 T58 68 T78 68" stroke="${w}" stroke-width="3" fill="none" stroke-linecap="round" data-current="" style="--i:2"/>
      <circle cx="52" cy="49" r="3.4" fill="${a}" data-carried=""/>`,

    flywheel: `
      <g data-wheel="">
        <circle cx="48" cy="48" r="25" stroke="${w}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <g stroke="${w}" stroke-width="1.7">${flywheelSpokes}</g>
        <circle cx="48" cy="48" r="5.5" fill="${w}"/>
      </g>
      <g data-arcs="">
        <circle cx="48" cy="48" r="33" stroke="${a}" stroke-width="2" stroke-dasharray="16 191" transform="rotate(-20 48 48)" fill="none" stroke-linecap="round"/>
        <circle cx="48" cy="48" r="33" stroke="${a}" stroke-width="2" stroke-dasharray="16 191" transform="rotate(160 48 48)" fill="none" stroke-linecap="round"/>
      </g>`,

    battery: `
      <rect x="26" y="36" width="38" height="26" rx="4" stroke="${w}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <rect x="68" y="44" width="7" height="10" rx="2" fill="${w}" data-terminal=""/>
      <rect x="33" y="43" width="8" height="12" fill="${a}"/>
      <rect x="47" y="43" width="8" height="12" stroke="${d}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <rect x="47" y="43" width="8" height="12" fill="${a}" opacity="0" data-charge=""/>`,

    whetstone: `
      <rect x="26" y="56" width="44" height="12" rx="3" stroke="${w}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <g data-blade="">
        <line x1="30" y1="52" x2="68" y2="34" stroke="${w}" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="33" y1="57" x2="66" y2="41" stroke="${d}" stroke-width="1.5" stroke-linecap="round"/>
      </g>
      <path d="M70 30 L76 24 M74 34 L81 31" stroke="${a}" stroke-width="2.2" fill="none" stroke-linecap="round" data-sparks=""/>`,

    ratchet: `
      <g data-teeth="">
        <circle cx="48" cy="48" r="24" stroke="${w}" stroke-width="3.5" stroke-dasharray="5 4" fill="none" stroke-linecap="round"/>
        <circle cx="48" cy="48" r="11" stroke="${w}" stroke-width="2" fill="none" stroke-linecap="round"/>
      </g>
      <path d="M74 22 L60 32 L72 40 Z" fill="${a}" data-pawl=""/>
      <path d="M30 78 A 30 30 0 0 1 18 48" stroke="${d}" stroke-width="2" fill="none" stroke-linecap="round"/>`,

    trellis: `
      <path d="M34 26 L34 74 M48 26 L48 74 M62 26 L62 74 M26 40 L70 40 M26 58 L70 58" stroke="${d}" stroke-width="2" fill="none" stroke-linecap="round"/>
      <g data-vine="">
        <path d="M34 76 Q40 60 48 56 Q60 50 58 34" stroke="${a}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <circle cx="44" cy="58" r="2.6" fill="${a}" data-bud="" style="--ox:44px;--oy:58px;--i:0"/>
        <circle cx="56" cy="40" r="2.6" fill="${a}" data-bud="" style="--ox:56px;--oy:40px;--i:1"/>
      </g>`,

    chrysalis: animate
      ? `
      <line x1="34" y1="18" x2="62" y2="18" stroke="${d}" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="48" y1="18" x2="48" y2="26" stroke="${w}" stroke-width="2"/>
      <g data-shell-l=""><path d="M48 26 Q36 34 38 48 Q40 62 48 68" stroke="${w}" stroke-width="3" fill="none" stroke-linejoin="round" stroke-linecap="round"/></g>
      <g data-shell-r=""><path d="M48 26 Q60 34 58 48 Q56 62 48 68" stroke="${w}" stroke-width="3" fill="none" stroke-linejoin="round" stroke-linecap="round"/></g>
      <path d="M48 38 L52 45 L45 52 L50 60" stroke="${a}" stroke-width="2" fill="none" stroke-linecap="round" data-seam=""/>
      <g data-butterfly="">
        <g data-wing-l=""><path d="M48 46 Q30 30 24 45 Q22 58 48 55 Z" stroke="${a}" stroke-width="1.8" fill="rgba(240,180,63,.16)" stroke-linejoin="round"/></g>
        <g data-wing-r=""><path d="M48 46 Q66 30 72 45 Q74 58 48 55 Z" stroke="${a}" stroke-width="1.8" fill="rgba(240,180,63,.16)" stroke-linejoin="round"/></g>
        <line x1="48" y1="41" x2="48" y2="58" stroke="${w}" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M48 41 L43 34 M48 41 L53 34" stroke="${w}" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      </g>
      <circle cx="68" cy="32" r="1.6" fill="${d}"/>
      <circle cx="27" cy="46" r="1.4" fill="${d}"/>`
      : `
      <line x1="34" y1="18" x2="62" y2="18" stroke="${d}" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="48" y1="18" x2="48" y2="26" stroke="${w}" stroke-width="2"/>
      <path d="M48 26 Q60 34 58 48 Q56 62 48 68 Q40 62 38 48 Q36 34 48 26 Z" stroke="${w}" stroke-width="3" fill="none" stroke-linejoin="round"/>
      <path d="M48 38 L52 45 L45 52 L50 60" stroke="${a}" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="68" cy="32" r="1.6" fill="${d}"/>
      <circle cx="27" cy="46" r="1.4" fill="${d}"/>`,

    candle: `
      <rect x="40" y="46" width="16" height="26" rx="2" stroke="${w}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <line x1="48" y1="40" x2="48" y2="46" stroke="${w}" stroke-width="2"/>
      <g data-flame=""><path d="M48 26 Q54 34 48 40 Q42 34 48 26 Z" fill="${a}"/></g>
      <circle cx="48" cy="33" r="13" stroke="${d}" stroke-width="1.5" stroke-dasharray="3 5" fill="none" stroke-linecap="round" data-halo=""/>
      <path d="M40 52 Q38 56 40 60" stroke="${d}" stroke-width="1.8" fill="none" stroke-linecap="round"/>`,

    magnet: `
      <path d="M36 24 L36 46 Q36 60 48 60 Q60 60 60 46 L60 24" stroke="${w}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <rect x="31" y="20" width="10" height="9" fill="${a}"/>
      <rect x="55" y="20" width="10" height="9" fill="${a}"/>
      <path d="M26 34 Q14 48 26 62" stroke="${d}" stroke-width="1.6" stroke-dasharray="3 4" fill="none" stroke-linecap="round" data-field=""/>
      <path d="M70 34 Q82 48 70 62" stroke="${d}" stroke-width="1.6" stroke-dasharray="3 4" fill="none" stroke-linecap="round" data-field=""/>
      <circle cx="22" cy="72" r="1.8" fill="${d}" data-filing="" style="--dx:1.1px;--dy:-3.8px;--i:0"/>
      <circle cx="30" cy="76" r="1.5" fill="${d}" data-filing="" style="--dx:0.5px;--dy:-3.9px;--i:1"/>
      <circle cx="70" cy="74" r="1.7" fill="${d}" data-filing="" style="--dx:-0.8px;--dy:-3.9px;--i:2"/>`,

    'the-game': `
      <rect x="22" y="42" width="36" height="36" stroke="${w}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M34 42 L34 78 M46 42 L46 78 M22 54 L58 54 M22 66 L58 66" stroke="${d}" stroke-width="1.5" fill="none"/>
      <g data-piece="">
        <circle cx="70" cy="44" r="5" fill="${a}"/>
        <path d="M70 49 L65 68 L75 68 Z" fill="${a}"/>
        <rect x="63" y="69" width="14" height="4" rx="1.5" fill="${a}"/>
      </g>`,

    portal: `
      <path d="M34 74 L34 42 Q34 26 48 26 Q62 26 62 42 L62 74" stroke="${w}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M40 74 L40 44 Q40 32 48 32 Q56 32 56 44 L56 74" stroke="${a}" stroke-width="1.6" stroke-dasharray="3 4" fill="none" stroke-linecap="round" data-threshold=""/>
      <line x1="28" y1="74" x2="68" y2="74" stroke="${w}" stroke-width="2.5" stroke-linecap="round"/>`,

    deck: `
      <rect x="24" y="52" width="34" height="22" rx="4" fill="${d}" opacity="0.35" data-leaf="" style="--i:3"/>
      <rect x="31" y="44" width="34" height="22" rx="4" fill="${d}" opacity="0.6" data-leaf="" style="--i:2"/>
      <rect x="38" y="36" width="34" height="22" rx="4" fill="${w}" opacity="0.85" data-leaf="" style="--i:1"/>
      <rect x="45" y="28" width="34" height="22" rx="4" stroke="${a}" stroke-width="2.5" fill="none" stroke-linecap="round" data-leaf="" style="--i:0"/>`,

    door: `
      <g data-door="">
        <rect x="34" y="24" width="28" height="48" rx="1" stroke="${w}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="56" cy="50" r="2.6" fill="${a}"/>
      </g>
      <line x1="32" y1="82" x2="64" y2="82" stroke="${a}" stroke-width="2" stroke-dasharray="4 3"/>
      <path d="M38 78 L32 82 L38 86 M58 78 L64 82 L58 86" stroke="${a}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

    vortex: `
      <g data-wheel="">
        <path d="M48 48 A4 4 0 1 1 56 48 A8 8 0 1 1 40 48 A14 14 0 1 1 68 48 A22 22 0 1 1 26 48" stroke="${w}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      </g>
      <circle cx="70" cy="28" r="3" fill="${a}" data-speck=""/>
      <line x1="73" y1="25" x2="82" y2="18" stroke="${a}" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round" data-escape=""/>`,

    abyss: `
      <ellipse cx="48" cy="44" rx="26" ry="8" stroke="${w}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M30 52 Q48 62 66 52" stroke="${d}" stroke-width="2" fill="none" stroke-linecap="round" data-ripple="" style="--i:0"/>
      <path d="M36 60 Q48 68 60 60" stroke="${d}" stroke-width="1.6" fill="none" stroke-linecap="round" data-ripple="" style="--i:1"/>
      <path d="M42 67 Q48 72 54 67" stroke="${d}" stroke-width="1.3" fill="none" stroke-linecap="round" data-ripple="" style="--i:2"/>
      <g data-probe="">
        <circle cx="48" cy="25" r="3" fill="${a}"/>
        <line x1="48" y1="28" x2="48" y2="33" stroke="${a}" stroke-width="2" stroke-linecap="round"/>
      </g>`,

    spotlight: `
      <circle cx="28" cy="22" r="4.5" fill="${w}" data-lamp=""/>
      <g data-beam="">
        <path d="M28 22 L58 74 L18 74 Z" fill="${d}" opacity="0.45"/>
        <circle cx="38" cy="66" r="4" fill="${a}"/>
      </g>
      <circle cx="70" cy="36" r="1.8" fill="${d}" data-twinkle="" style="--i:0"/>
      <circle cx="78" cy="56" r="1.6" fill="${d}" data-twinkle="" style="--i:1"/>
      <circle cx="64" cy="22" r="1.5" fill="${d}" data-twinkle="" style="--i:2"/>`,

    mask: `
      <g data-mask="">
        <path d="M48 24 Q70 24 70 44 Q70 62 48 74 Q26 62 26 44 Q26 24 48 24 Z" stroke="${w}" stroke-width="3" fill="none" stroke-linejoin="round"/>
        <ellipse cx="40" cy="44" rx="4.5" ry="3" fill="${w}" data-eye="" style="--ox:40px;--oy:44px"/>
        <ellipse cx="56" cy="44" rx="4.5" ry="3" fill="${w}" data-eye="" style="--ox:56px;--oy:44px"/>
        <line x1="26" y1="40" x2="14" y2="34" stroke="${a}" stroke-width="2" stroke-linecap="round"/>
        <line x1="70" y1="40" x2="82" y2="34" stroke="${a}" stroke-width="2" stroke-linecap="round"/>
      </g>`,
  }
}

// Literal equivalents of the design's w / d / a constants, for use outside the
// page where CSS custom properties do not resolve.
export const LITERAL_STROKES = {
  w: 'rgba(255,252,243,.92)',
  d: 'rgba(255,252,243,.42)',
  a: '#f0b43f',
}
