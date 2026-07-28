# Metaphors Worth Living By

A static collection of twenty metaphors. Each is a card on the home page and a
page of its own: its moment, its mechanics, its breaking point.

```
npm install
npm run dev      # local, with hot reload
npm run build    # static output in dist/
npm run preview  # serve the build
```

Astro, no client framework. The only JavaScript shipped to the browser is the
draw and the arrow keys, together well under 1 KB.

## Where things live

| What | Where |
| --- | --- |
| Site name, tagline, intro copy | `src/site.js` |
| The twenty entries | `src/data/metaphors.js` |
| Family names and colors | `src/data/families.js` |
| Glyph path data | `src/data/glyphs.js` |
| Colors, type, geometry | `src/styles/tokens.css` |
| Layout and components | `src/styles/global.css` |
| Social images | `src/pages/og/[slug].svg.js` |

### Renaming the site

`SITE_NAME` in `src/site.js` feeds the header, the title tag, the metadata, and
the social images. Change it there only. The social images size the name to fit,
so a longer or shorter name needs no other edit.

### Reskinning

Every visual value traces to `src/styles/tokens.css`, which is a direct
transcription of the design file. Family colors live in two places that must
stay in step: the `--fam-*` custom properties in `tokens.css` and the `field` /
`accent` values in `src/data/families.js`. The data file's copies exist because
the social images render outside the page, where CSS custom properties do not
resolve.

### Marking copy as final

Nineteen entries carry `draft: true` in `src/data/metaphors.js`, which prints a
small "draft" marker beside the name. Flip it to `false` as each is revised.
Flywheel is already final and carries the finished copy verbatim.

## Behavior

- **The draw** picks at random and will not repeat a card until all twenty have
  come up, tracked in `localStorage` under `mwlb:drawn`. It degrades to a plain
  link with JavaScript off.
- **Arrow keys** move left and right through the collection on entry pages, and
  wrap at both ends. Escape returns to the collection.
- **Motion** is limited to the design's hover states, plus the chrysalis opening
  and the candle's flicker. All of it stops under `prefers-reduced-motion`.

## Where the design and the brief disagreed

The design governs visuals; the brief governs content, structure, and behavior.
Six places needed a call, and two are worth a second look.

1. **Entry pages.** The design opens a card into a panel in the middle of the
   grid. The brief asks for one page per metaphor. Built as real routed pages,
   using the design's panel styling for the entry anatomy.
2. **Card 2's name.** The design calls it "Helm"; the brief calls it "Steering
   wheel". Used the brief's name with the design's artwork.
3. **Section labels.** The design has four (reach for it when / it asks you /
   the mechanics / where it breaks); the brief has three, with the question
   folded into "its moment". Used the brief's three. Labels are written in
   sentence case and uppercased in CSS, so the source stays sentence case per
   the voice rules while the page keeps the design's look.
4. **Flywheel copy.** The design file carries older Flywheel text. Used the
   brief's finished copy, verbatim.
5. **The draw slot.** ⚠️ The brief puts it in the final grid cell; the design
   puts "Draw a card →" inside the centre intro panel, and the twenty cards fill
   the ring exactly with no spare cell. Followed the design, since adding a
   twenty-first cell would break the ring. Say the word and it can move.
6. **Family color.** ⚠️ The brief asks for cards grouped by family color and a
   family-color illustration background. The design is a single gold-on-dark
   skin with no family hues at all. The card grid stays uniform gold, and the
   ring order already runs family by family. Five night-range family colors were
   added for the places the brief names specifically: the entry page's
   illustration area, its family label, and the per-entry `theme-color`. Pushing
   family color onto the cards themselves is a one-file change if you want it.

One deliberate deviation from the design: the "Related" label was lifted from
`rgba(240,233,218,.4)` to `.55`, which takes it from 3.4:1 to 5.3:1 against the
panel. The design's value fails WCAG AA, and the brief asks for accessibility
above 95.

## Checks

Lighthouse, mobile emulation, against the production build:

| Page | Performance | Accessibility | Best practices | SEO |
| --- | --- | --- | --- | --- |
| Home | 97 | 100 | 100 | 100 |
| `/flywheel/` | 96 | 100 | 100 | 100 |
| `/chrysalis/` | 97 | 100 | 100 | 100 |

Verified in Chromium: twenty consecutive draws return twenty distinct cards and
the twenty-first starts a fresh pass; arrow keys step and wrap; all twenty card
links and all forty related chips resolve. Laid out at 380px and 1440px.
