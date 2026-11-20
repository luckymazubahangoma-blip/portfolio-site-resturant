# Ember & Oak: Restaurant Website (Portfolio Sample #1)

**Read this whole file before writing any code. Re-read it at the start of every session. Then read `Errors.md` and fix everything open in it before building anything new.**

Sample site 1 of 5 for a web development portfolio (Lucky Mazuba Hangoma). A demo for a fictional modern wood-fire restaurant, **Ember & Oak**. It must look like a premium, intentional, hand-built site, not a template.

## Direction change (Nov 20): photography replaces low-poly art

The low-poly SVG illustrations are being **replaced by photorealistic, moody restaurant imagery**. Lucky has a reference contact sheet (`images/reference/reference-sheet.jpg`, shared with the builder in chat) showing the target look. Follow that mood: warm, dark, low-key, glowing embers, dark oak tables, shallow depth of field.

Everything about layout, palette, motion and code quality below still applies. Only the artwork changes.

## Status

- Done: all six HTML pages (`index.html`, `menu.html`, `about.html`, `gallery.html`, `reservations.html`, `contact.html`), shared CSS and JS; revision round 1 applied to the first three pages.
- All six pages now use a coherent Unsplash stock-photography direction for the main visual areas; the home hero has a large, prominent food image.
- The site remains a lightweight portfolio sample. The contact map stays as a simple inline graphic; the fictional team portraits remain illustrated.
- **Next steps in order:** (1) provide the live Cloudflare Pages/custom domain for social preview metadata, (2) run browser and responsive checks, (3) replace externally hosted stock URLs with local licensed assets only if the site moves beyond portfolio-demo use.
- Open items and unfinished-page link targets are tracked in `Errors.md`.

## Running locally and deploying

- Run locally by opening `index.html` in a browser, or serve the repository root with any static file server.
- Deploy the repository to Cloudflare Pages with the project root as the build directory and no build command; the output is the repository root.

## Rules of the build

- **Plain HTML, CSS and JavaScript only.** No frameworks, no animation libraries. Ask before adding anything.
- Multi-page static site, ready to host free on Cloudflare Pages.
- Mobile looks great already. **Do not change the mobile design** except where images require it.
- One shared `css/styles.css`, one shared `js/main.js`, plus small page scripts if needed.
- Clean, commented, readable code. No lorem ipsum. Footer says "Demo site, fictional business. Stock photography sourced from Unsplash."

## Pages (6)

1. `index.html` Home
2. `menu.html` Menu with sticky category rail, prices (USD), dietary tags, dish thumbnails on desktop
3. `about.html` Our Story: timeline, values, team (4 sample people), sourcing
4. `gallery.html` Gallery: filterable grid of 12 photos
5. `reservations.html` Reservations form with JS validation and a friendly success state (no backend)
6. `contact.html` Contact: address, hours, FAQ accordion, stylised map

## Design system (CSS variables, change the values in `:root` only)

- `--ink: #0C1B33` main dark
- `--ink-soft: #14284A` cards on dark
- `--oat: #F4EBDB` main light
- `--oat-deep: #E8DCC6` cards on light
- `--ember: #FF5B14` the bright accent. Buttons, key icons, big highlights.
- `--ember-hot: #FF7A3C` hover state
- `--ember-deep: #B83B0A` accent for text on oat (check 4.5:1 contrast)
- **Text on an ember button is `--ink`, not white.**
- Orange is the only loud colour. Use it where the eye should land.
- **Shape:** nothing sharp. Buttons fully rounded (`999px`), cards 24px, images in rounded frames (24px), inputs 16px or fully rounded.
- **Type:** headings "Outfit", body "Inter", loaded with a `<link>` in the `<head>`, system fallbacks.
- Photos are warm with slightly blue shadows so they sit naturally on the ink background. Put a soft ink gradient over any photo that carries text.

## Desktop direction

Desktop must feel designed for a wide screen. Apply at `min-width: 1024px`, and test at 1280, 1440 and 1920 wide.

- Container max width 1320px, side padding `clamp(2rem, 5vw, 4rem)`.
- Base font size 17px on desktop. No text smaller than 14px on desktop.
- h1 `clamp(3rem, 5.5vw, 5.75rem)` line-height 1.05, letter-spacing `-0.025em`. h2 `clamp(2.25rem, 3.6vw, 3.5rem)`. Never tighter than `-0.03em`.
- Body line-height 1.7, paragraphs max 65 characters.
- Section padding 7 to 8rem. Alternate ink and oat sections.
- **Give each page's hero a different composition.** Home: full-bleed photo with an ink gradient on the left and the copy over it. Menu: centred title over a wide dark photo band. About: photo left, copy right. Gallery, Reservations and Contact: each its own layout.
- Menu on desktop: sticky category rail inside a two-column layout (rail left, items right), **not** `position: fixed`.
- Desktop-only interaction (`@media (hover: hover) and (pointer: fine)`): soft cursor glow on hero and CTA sections, richer card hover states, gentle image zoom on hover.

## Motion and interaction

- Smooth page transitions with the cross-document View Transitions API, with a fade fallback.
- Scroll reveals with IntersectionObserver, using only `transform` and `opacity`, easing `cubic-bezier(.22,.61,.36,1)`, 300 to 700ms.
- **Interactive background (replaces the low-poly mesh):** a subtle canvas of drifting ember sparks over the home hero photo, reacting gently to the pointer. Pause when off-screen. No canvas on small screens. Keep it light.
- Gentle parallax on hero and gallery images, only `transform`.
- Respect `prefers-reduced-motion`.

## Image plan: simplified stock photography

For this portfolio version, use a small, coherent set of stock photographs hosted by the Unsplash image CDN. This keeps the site lightweight to manage and avoids requiring a large image ZIP upload. Images are referenced directly from `images.unsplash.com` with responsive crop and quality parameters; they are not stored in the repository.

- Home hero: prominent wood-fired food photograph, with the dish large and clearly visible beside the headline.
- Home story: warm restaurant dining-room photograph.
- Signature dishes: separate food photographs for carrots, steak and dessert.
- Menu: wide shared-table food photograph and a steak/fire feature photograph.
- Our Story: restaurant interior and fresh-produce photographs. Keep the four fictional team portraits illustrated.
- Gallery: use a small varied set of food, dining-room, bar and live-fire photographs, reused only where needed for this portfolio sample.
- Reservations: candlelit dining/table photograph as the hero backdrop.
- Contact: warm restaurant exterior photograph; retain the simple inline neighbourhood map.
- Keep the Unsplash credit in every page footer: "Stock photography sourced from Unsplash."

Stock image URLs are third-party hosted and therefore require an internet connection. If this project later becomes a real client site, replace them with properly licensed, locally optimised images and confirm the usage rights for the intended commercial use.

## Quality bar

- No horizontal scroll at any width. Phone, tablet and desktop all look intentional.
- Accessible: semantic HTML, alt text on photos, visible focus, keyboard navigation, form labels, contrast 4.5:1 for text over photos (use gradients).
- Fast: no layout shift, minimal JavaScript, fonts loaded with `<link>`.
- Unique `<title>` and meta description per page. Real `og:image` as a **PNG or JPG with an absolute URL**, not an SVG or a relative path.
- Content must still be visible with JavaScript disabled.
- Footer year is 2026.

## Definition of done

- All 6 pages built and linked, no console errors
- All 58 images in place with correct names, sizes and alt text
- `Errors.md` has no open items
- Looks great on a real phone **and** on a 1440px desktop
- Lighthouse around 90+ for Performance, Accessibility and Best Practices

## Notes from the business side (Claude)

- This is a portfolio piece. Polish matters more than quantity. If something gets messy, simplify it.
- Commit after each page with a clear message. Report what changed and anything left out.
- Lucky checks everything on his own phone and desktop before it goes public.
