# Ember & Oak: Restaurant Website (Portfolio Sample #1)

**Read this whole file before writing any code. Re-read it at the start of every session. Then read `Errors.md` and fix everything open in it before building anything new.**

Sample site 1 of 5 for a web development portfolio (Lucky Mazuba Hangoma). A demo for a fictional modern wood-fire restaurant, **Ember & Oak**. It must look like a premium, intentional, hand-built site, not a template.

## Direction change (Nov 20): photography replaces low-poly art

The low-poly SVG illustrations are being **replaced by photorealistic, moody restaurant imagery**. Lucky has a reference contact sheet (`images/reference/reference-sheet.jpg`, shared with the builder in chat) showing the target look. Follow that mood: warm, dark, low-key, glowing embers, dark oak tables, shallow depth of field.

Everything about layout, palette, motion and code quality below still applies. Only the artwork changes.

## Status

- Done: all six HTML pages (`index.html`, `menu.html`, `about.html`, `gallery.html`, `reservations.html`, `contact.html`), shared CSS and JS; revision round 1 applied to the first three pages.
- Gallery and reservations still use low-poly artwork and must be reworked for photography.
- Contact page is built with a CSS-drawn exterior treatment and a stylised map; replace these with `contact-hero.webp` and `contact-map.webp` when the image assets are supplied.
- **Next steps in order:** (1) receive and commit the optimised image assets, (2) replace low-poly artwork across Home, Menu, About, Gallery and Reservations, and replace Contact's CSS-drawn art with the specified photos, (3) update social previews once the live domain is known, (4) run browser and responsive checks.
- Open items and unfinished-page link targets are tracked in `Errors.md`.

## Running locally and deploying

- Run locally by opening `index.html` in a browser, or serve the repository root with any static file server.
- Deploy the repository to Cloudflare Pages with the project root as the build directory and no build command; the output is the repository root.

## Rules of the build

- **Plain HTML, CSS and JavaScript only.** No frameworks, no animation libraries. Ask before adding anything.
- Multi-page static site, ready to host free on Cloudflare Pages.
- Mobile looks great already. **Do not change the mobile design** except where images require it.
- One shared `css/styles.css`, one shared `js/main.js`, plus small page scripts if needed.
- Clean, commented, readable code. No lorem ipsum. Footer says "Demo site, fictional business. Imagery is AI-generated."

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

## Image plan: 58 images

Generated by Lucky with an AI image tool, then optimised and committed to `images/`. **Keep original masters outside the repo.** Commit only optimised WebP files (PNG where noted), each **under 200 KB**, with the exact file names below.

### Shared style (use this prefix in every image prompt)

> Moody warm restaurant photography, low-key lighting, dark oak table, glowing wood-fire embers softly in the background, shallow depth of field, rich shadows with a subtle deep-blue tint, natural food styling, 3/4 camera angle. No text, no logos, no watermark, no signage lettering.

### Image rules

- **No text inside any image.** AI-generated text is garbled. All words are written in HTML.
- Landscape unless stated. Dishes at 3:2, 1200×800.
- Check every image at full size for AI mistakes: odd hands, warped glasses, melted cutlery, duplicated items. Regenerate if found.
- Team portraits: **flat illustrated style, as in the reference sheet.** Fictional people only, shown in chef whites or aprons on a plain light background. The disclaimer "fictional sample team" stays.
- No white backgrounds on dish or drink photos (the espresso in the reference had one). Use dark wood or dark stone.
- Do not show real brands, real people or real places.

### List

**Brand (3)**
1. `logo-mark.svg`: flame outline in `--ember` on transparent, vector. Also a version on `--ink`. Not on charcoal.
2. `favicon-512.png`: 512×512 (plus 180×180 `apple-touch-icon.png`)
3. `og-preview.png`: 1200×630 photo of the ribeye table scene. Add any text later in a design tool, not with AI.

**Home (5)**
4. `hero-home.webp`: wood-fire hearth with a chef plating, 2000×1100, plus a 4:5 crop `hero-home-mobile.webp` 900×1125
5. `story-hearth.webp`: stone hearth with glowing logs, 1200×1070
6. `dish-carrots.webp`
7. `dish-ribeye.webp`
8. `dish-peach.webp`

**Menu (2 + 24 items)**
9. `menu-hero.webp`: one wide image of several shared dishes on a dark table, 2000×700 (a single image, not a collage)
10. `fire-feature.webp`: steak on a grill or iron plate, 1200×800

Starters: 11 `dish-sourdough`, 12 `dish-ricotta`, 13 `dish-oyster-mushrooms`
Mains: 14 `dish-pappardelle`, 15 `dish-chicken`, 16 `dish-fish`, 17 `dish-aubergine-bowl`
From the fire: 18 `dish-striploin`, 19 `dish-lamb-chops`, 20 `dish-cauliflower`
Sides: 21 `dish-potatoes`, 22 `dish-greens`, 23 `dish-broccolini`, 24 `dish-lettuce-salad`
Desserts: 25 `dish-chocolate-pot`, 26 `dish-plum-sorbet`
Drinks: 27 `drink-old-fashioned`, 28 `drink-garden-spritz`, 29 `drink-glass-pour`, 30 `drink-rhubarb-fizz`, 31 `drink-smoked-lemonade`, 32 `drink-espresso`

(`dish-carrots`, `dish-ribeye` and `dish-peach` from Home are reused on the menu.)

**Our Story (9)**
33. `about-hero.webp`: open kitchen with a live fire, 1400×1300
34. `sourcing-produce.webp`: crate of fresh vegetables and herbs, 1200×1150
35. `team-alex.webp`, 36. `team-jordan.webp`, 37. `team-sam.webp`, 38. `team-taylor.webp`: illustrated portraits, 800×800
39. `timeline-idea.webp`: sketch or drawing style hearth, 900×900
40. `timeline-first-flame.webp`: chef lighting a flame over a pan, 900×900
41. `timeline-today.webp`: the team together in the kitchen, 900×900

**Gallery (12)**
42. `gallery-01.webp` to 53. `gallery-12.webp`: 1200×1200, a mix of 4 dishes, 3 dining room, 2 bar, 3 fire and kitchen. Each needs a category: Food, Room, Bar or Fire.

**Reservations (2)**
54. `reservations-hero.webp`: candle-lit set table, 1800×900
55. `reservations-success.webp`: simple flame illustration on a clean background, no text, 800×600

**Contact (2)**
56. `contact-hero.webp`: restaurant exterior at dusk, 1800×900
57. `contact-map.webp`: stylised neighbourhood map, no text labels, 1400×900

**Other (1)**
58. `404.webp`: empty plate with a small flame, no text, 1000×700

### Using the images

- Replace each inline low-poly scene with `<img>`. Keep inline SVG only for UI icons.
- Every `<img>` has `width` and `height` attributes (no layout shift), meaningful `alt` text (decorative images get `alt=""`), and `decoding="async"`.
- `loading="lazy"` everywhere **except** the home hero, which gets `fetchpriority="high"`.
- Use `<picture>` with the mobile crop for `hero-home`. Use `object-fit: cover` with the focal point set so the dish is never cropped out.
- Menu items show a rounded thumbnail on desktop only. Do not load these images on mobile (use `<picture>` with a media-gated `<source>`, or add them with JavaScript only when the viewport is 1024px or wider).
- Gallery: filter buttons by category with animated show and hide, and a keyboard-friendly lightbox. Images in the lightbox use the full-size file.
- Keep the whole site's image weight reasonable. Lighthouse Performance 90 or higher.

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
