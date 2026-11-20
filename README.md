# Ember & Oak: Restaurant Website (Portfolio Sample #1)

**Read this whole file before writing any code. Re-read it at the start of every session. Then read `Errors.md` and fix everything open in it before building anything new.**

Sample site 1 of 5 for a web development portfolio (Lucky Mazuba Hangoma). A demo for a fictional modern wood-fire restaurant, **Ember & Oak**. It must look like a premium, intentional, hand-built site, not a template.

## Status

- Done: `index.html`, `menu.html`, `about.html`, shared CSS and JS; revision round 1 applied to all three existing pages.
- Added: `images/ember-og.svg` social preview artwork.
- Done: `gallery.html` with six original low-poly illustrations and accessible category filters.
- Still to build: `reservations.html` and `contact.html`.
- **Revision round 1: complete for the three existing pages.** New palette, desktop direction and the applicable review fixes are committed. Remaining checks and unfinished-page link targets are tracked in `Errors.md`.

## Running locally and deploying

- Run locally by opening `index.html` in a browser, or serve the repository root with any static file server.
- Deploy the repository to Cloudflare Pages with the project root as the build directory and no build command; the output is the repository root.

## Rules of the build

- **Plain HTML, CSS and JavaScript only.** No frameworks, no animation libraries. Ask before adding anything.
- Multi-page static site, ready to host free on Cloudflare Pages.
- Mobile looks great already. **Do not change the mobile design.** The work now is making desktop its own design.
- One shared `css/styles.css`, one shared `js/main.js`, plus small page scripts if needed.
- Clean, commented, readable code. No lorem ipsum. Footer says "Demo site, fictional business."

## Pages (6)

1. `index.html` Home
2. `menu.html` Menu with sticky category tabs, prices (USD), dietary tags
3. `about.html` Our Story: timeline, values, team (4 sample people), sourcing
4. `gallery.html` Gallery: filterable grid of low-poly artwork
5. `reservations.html` Reservations form with JS validation and a friendly success state (no backend)
6. `contact.html` Contact: address, hours, FAQ accordion, stylised low-poly map

## Design system (CSS variables, change the values in `:root` only)

**New palette (replaces charcoal, white and red).** Deep ink blue and warm oat cream, with one electric orange that is the true complement of the blue and nods to the fire.

- `--ink: #0C1B33` main dark (replaces charcoal)
- `--ink-soft: #14284A` cards on dark
- `--oat: #F4EBDB` main light (replaces white and paper)
- `--oat-deep: #E8DCC6` cards on light
- `--ember: #FF5B14` the bright accent. Buttons, key icons, big highlights, links on dark.
- `--ember-hot: #FF7A3C` hover state
- `--ember-deep: #B83B0A` accent for text on oat (check 4.5:1 contrast)
- **Text on an ember button is `--ink`, not white** (white on this orange fails contrast).
- Orange is the only loud colour. Use it where the eye should land: the main call to action, prices, highlights, one hero word. Not everywhere.
- Update the low-poly SVG artwork so its tones sit well on ink and oat. Warm food and fire tones in the art may stay.
- **Shape:** nothing sharp. Buttons fully rounded (`999px`), cards 24px, inputs 16px or fully rounded, rounded line caps.
- **Type:** headings "Outfit", body "Inter", loaded with a `<link>` in the `<head>`, system fallbacks.

## Desktop direction (the current desktop is mobile scaled up, and it shows)

Desktop must feel designed for a wide screen. Apply at `min-width: 1024px`, and test at 1280, 1440 and 1920 wide.

**Type and spacing**
- Container max width 1320px, side padding `clamp(2rem, 5vw, 4rem)`.
- Base font size 17px on desktop. **No text smaller than 14px** anywhere (many labels are 11 to 13px now).
- Letter-spacing is too tight. h1 `-0.025em`, h2 `-0.02em`, h3 `-0.01em`. Never tighter than `-0.03em`. Big decorative marks such as the "&" must not use `-0.1em`.
- h1 `clamp(3rem, 5.5vw, 5.75rem)` with line-height 1.05. h2 `clamp(2.25rem, 3.6vw, 3.5rem)`.
- Body letter-spacing 0, line-height 1.7, paragraphs max 65 characters wide.
- Eyebrows: 0.8rem, letter-spacing `.14em`.
- Section padding 7 to 8rem vertically. Generous white space.

**Layout**
- Heroes: a real two-column grid on desktop. Copy in one column, the low-poly art in the other, **full strength inside the grid**, not faded behind a gradient and not absolutely positioned.
- **Give each page's hero a different composition.** Home: copy left, big art right. Menu: large centred title with a row of dish illustrations. About: art left, copy right. Avoid the same "copy plus floating art" on every page.
- Menu page on desktop: sticky category list on the left, items in two columns on the right. No narrow single list.
- Use asymmetric grids (7/5 or 5/7 columns), overlapping cards and larger images on desktop.
- Visual rhythm: alternate dark (ink) and light (oat) sections with confidence.

**Desktop-only interaction (`@media (hover: hover) and (pointer: fine)`)**
- Soft cursor-following glow on the hero and CTA sections.
- Richer hover states on cards, with a gentle lift and the art responding.
- Interactive low-poly mesh reacts to the pointer (listen on the hero section, not the canvas).

## Visuals

- **No photos.** All imagery is low-poly SVG art, in one consistent style, using the palette plus restrained warm tones.
- Subtle motion: floating, shimmering facets, gentle parallax. Optimise SVG file size.

## Motion and interaction

- Smooth page transitions with the cross-document View Transitions API, with a fade fallback.
- Scroll reveals with IntersectionObserver, using only `transform` and `opacity`, easing `cubic-bezier(.22,.61,.36,1)`, 300 to 700ms.
- Interactive backgrounds in select areas only (hero, reservation CTA, contact header).
- Respect `prefers-reduced-motion`.

## Quality bar

- No horizontal scroll at any width. Phone, tablet and desktop all look intentional.
- Accessible: semantic HTML, alt text or aria labels on art, visible focus, keyboard navigation, form labels, contrast 4.5:1 for text.
- Fast: no layout shift, minimal JavaScript, fonts loaded with `<link>`.
- Unique `<title>` and meta description per page. Real `og:image` (generate a low-poly SVG or PNG), not a placeholder URL.
- Content must still be visible with JavaScript disabled.
- Footer year is 2026.

## Definition of done

- All 6 pages built and linked, no console errors
- `Errors.md` has no open items
- Looks great on a real phone **and** on a 1440px desktop
- Lighthouse around 90+ for Performance, Accessibility and Best Practices
- README updated with how to run locally and deploy to Cloudflare Pages

## Notes from the business side (Claude)

- This is a portfolio piece. Polish matters more than quantity. If something gets messy, simplify it.
- Commit after each page with a clear message. Report what changed and anything left out.
- Lucky checks everything on his own phone and desktop before it goes public.
