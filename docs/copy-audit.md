# Copy Audit: Metaphors Worth Living By

Audit of user-facing interface copy, metadata, accessibility labels, and `README.md` across `stannrodriguez.github.io/metaphors`.

## Issues found and changes made

- **404 page (`src/pages/404.astro`)**: Replaced figurative title and heading ("Not the territory", which collided with the Map card's one-liner) and cryptic body copy with plain "Page not found" messaging and clear next steps; aligned the back link ("All cards") and draw button `aria-label`.
- **Entry meta descriptions (`src/pages/[slug].astro`)**: Combined each entry's authored `oneLiner` and `moment` instead of `oneLiner` alone (previously 18 to 38 characters) so search and social previews explain when the metaphor applies.
- **Entry navigation (`src/pages/[slug].astro`)**: Changed "Draw again" to "Draw a card" (accurate for direct visits and consistent with the home and 404 pages), changed "All twenty" to "All cards" with full `aria-label`, updated nav `aria-label` to "Entry navigation", and added target metaphor names to `Prev`/`Next` tooltips and `aria-label` attributes.
- **Side sheet controls (`src/components/EntrySheet.astro`)**: Changed "Full page" to "Open page" (avoids implying the sheet hides content) and added plain `aria-label` text to `Prev`, `Next`, and the standalone-page link so screen readers skip decorative arrows.
- **Home tagline and social image (`src/site.js`, `src/pages/og/[slug].svg.js`)**: Tightened `SITE_TAGLINE` to drop "A collection of" and include the fourth entry section ("a practice to try"); changed the home OG eyebrow from "A collection of twenty" to "The collection" to stop repeating the tagline and match `/about/`.
- **About page (`src/pages/about.astro`)**: Replaced vague meta description with concrete page summary; aligned nav label ("Collection navigation") and back link ("All cards"); updated "browse by family" in the usage instructions to "pick a card" plus arrow-key browsing because the home page has no family filter or family headings.
- **Accessibility labels (`src/layouts/Base.astro`, `src/pages/index.astro`, `src/components/Card.astro`, `src/components/EntryArticle.astro`)**: Clarified skip link ("Skip to main content"), added `aria-label` to the home draw button, separated card names and one-liners with a colon in card `aria-label` attributes, and labeled the related-metaphors list.
- **Documentation (`README.md`)**: Fixed outdated statements about JavaScript scope/size, draw-button fallback (it is a `<button>`, not a link), glyph animations (all twenty animate, not just chrysalis and candle), and the deploy branch wording; added side-sheet and fourth-section details; changed "centre" to "center" for US English consistency.

## Left alone on purpose

- **All 20 metaphor entries (`src/data/metaphors.js`)**: Authored by Stephanie (names, one-liners, moments, questions, practices, mechanics, breaking points). Left untouched.
- **Family names (`src/data/families.js`)**: Authored taxonomy labels. Left untouched.
- **Site name and home intro (`SITE_NAME`, `INTRO` in `src/site.js`)**: Stephanie's title and Lakoff/Johnson framing prose. Left untouched.
- **Entry section headings (`src/components/EntryArticle.astro`)**: "Its moment", "Its mechanics", "Its breaking point", "Try it now", "The question it asks:", and "Related" are settled brief/voice choices documented in `README.md`.
- **About page premise and authorship (`src/pages/about.astro`)**: Lede, "Why metaphor", the second sentence of "How to use the collection", and "Authorship" are Stephanie's prose and verified attribution.
- **Historical notes and Lighthouse scores (`README.md`)**: Design-vs-brief calls and recorded Lighthouse table left untouched to avoid altering historical records or inventing numbers.

## Not done (next pass)

- **Home OG footer duplication (`src/pages/og/[slug].svg.js`)**: The home social card renders `SITE_NAME` both as the main heading and again in the footer; fixing it requires conditional SVG layout logic outside copy-only scope.
- **Dynamic sheet Prev/Next names (`src/components/EntrySheet.astro`)**: Updating `aria-label` and `title` with neighbor names as the user navigates inside the sheet requires script logic changes.
