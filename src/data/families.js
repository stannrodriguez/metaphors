// The five families.
//
// The design ships one gold-on-dark skin with no per-family hues, so these
// colors stay out of the card grid and appear only where the brief calls for a
// family color: the entry page's illustration area, its family label, and the
// per-entry theme color. All five sit in the design's night range.
//
// Keep these in step with the --fam-* custom properties in styles/tokens.css.
export const families = {
  'direction-and-time': {
    name: 'Direction and time',
    field: '#111c26',
    accent: '#8fb6cf',
  },
  'momentum-and-capacity': {
    name: 'Momentum and capacity',
    field: '#241a0b',
    accent: '#e2b264',
  },
  growth: {
    name: 'Growth',
    field: '#131f16',
    accent: '#8fbe86',
  },
  'play-and-terrain': {
    name: 'Play and terrain',
    field: '#241119',
    accent: '#d98fa0',
  },
  'inner-weather': {
    name: 'Inner weather',
    field: '#171430',
    accent: '#a79ad8',
  },
}

export const familyOrder = Object.keys(families)
