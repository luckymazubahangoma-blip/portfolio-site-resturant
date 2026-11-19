# Ember & Oak: Restaurant Website (Portfolio Sample #1)

**Read this whole file before writing any code. Re-read it at the start of every session.**

This is sample site 1 of 5 for a web development portfolio (Lucky Mazuba Hangoma). It is a demo for a fictional modern wood-fire restaurant called **Ember & Oak**. It must look like a premium, intentional, hand-built site, not a template.

## Rules of the build

- **Plain HTML, CSS and JavaScript only.** No frameworks and no animation libraries. Ask before adding anything.
- Multi-page static site, ready to host free on Cloudflare Pages.
- Mobile-first, then tablet and desktop. Test at 360px, 768px and 1280px+.
- One shared `css/styles.css`, one shared `js/main.js`, plus small page-specific scripts if needed.
- Clean, commented, readable code. A different developer must be able to take it over.
- Use real, believable content. **No lorem ipsum.** Mark testimonials and people as sample content in the footer ("Demo site, fictional business").

## Pages (6)

1. `index.html` Home: full-screen hero, short story, featured dishes, opening hours, testimonials, reservation call to action
2. `menu.html` Menu: starters, mains, from the fire, sides, desserts, drinks, with prices (USD), dietary tags (V, VG, GF) and a sticky category tab bar
3. `about.html` Our Story: timeline, values, the team (4 sample people), sourcing
4. `gallery.html` Gallery: filterable grid of low-poly artwork (food, interiors, fire)
5. `reservations.html` Reservations: form with date, time, party size, notes. Validate in JavaScript and show a friendly success state (no backend)
6. `contact.html` Contact: address, hours, phone, email, FAQ accordion, and a stylised low-poly map illustration

Every page shares the same header (rounded nav, mobile menu) and footer.

## Design system (define as CSS variables first)

- `--charcoal: #1F2124` main dark
- `--charcoal-soft: #2B2E33` cards on dark
- `--white: #FFFFFF`
- `--paper: #F6F4F0` soft light background
- `--accent: #D3342F` vibrant red. **Use only for buttons, key icons, big highlights and small moments.** It is the only loud colour.
- Mix: charcoal and white/paper for most of the site, red for emphasis.
- **Shape:** nothing sharp. Buttons are fully rounded (`border-radius: 999px`). Cards 24px radius. Inputs 16px or fully rounded. Rounded line caps and joins on icons.
- **Type:** headings in "Outfit" (rounded geometric), body in "Inter", loaded from Google Fonts with system fallbacks.
- **Spacing:** generous. A consistent 8px scale.
- Meet contrast rules: accent red is for large text, buttons with bold 18px+ labels, and graphics, never small body text on charcoal.

## Visuals: low-poly, no stock photos

- **No photos.** All imagery is **low-poly / polygonal artwork** made as inline SVG or SVG files: dishes, the fire pit, interior scenes, hero scene, team avatars, map.
- Keep one consistent low-poly style, using the site palette plus warm tones for fire and food (kept restrained).
- Subtle motion on the artwork: slow floating, shimmering facets, gentle parallax on scroll.
- Optimise SVGs: simple paths, no huge files.

## Motion and interaction

- **Smooth page transitions** between pages using the cross-document View Transitions API (`@view-transition { navigation: auto; }`), with a graceful fallback (a simple fade) where unsupported.
- **Scroll reveals** with IntersectionObserver plus CSS transitions: fade, rise and soft scale. Stagger groups.
- **Buttery feel:** animate only `transform` and `opacity`, use custom easing (for example `cubic-bezier(.22,.61,.36,1)`), and keep durations 300 to 700ms.
- **Interactive backgrounds in select areas only** (hero, reservation call to action, contact header): a canvas low-poly mesh that gently reacts to the pointer or touch. Pause it when off-screen. Static fallback on small or low-power devices.
- Buttons: soft hover lift, press feedback, smooth focus ring.
- Menu tab bar highlights as you scroll. Gallery filter animates items in and out. FAQ accordion expands smoothly.
- **Respect `prefers-reduced-motion`.** Turn off heavy motion for those users.

## Quality bar

- Responsive on phone and desktop with no horizontal scroll.
- Accessible: semantic HTML, alt text and aria labels on SVG art, visible focus states, keyboard-friendly menu, form labels.
- Fast: no layout shift, lazy-load non-critical assets, minimal JavaScript.
- Each page has a unique `<title>` and meta description, plus Open Graph tags.
- Works with JavaScript disabled for content (animations are enhancements).

## Suggested build order

1. `css/styles.css` tokens, base styles, buttons, header and footer
2. `index.html` with the hero and interactive background
3. `menu.html`
4. Remaining pages
5. Polish pass: transitions, reduced motion, cross-browser and mobile checks

Commit after each page with a clear message.

## Definition of done

- All 6 pages built and linked
- Looks great on a real phone and on desktop
- No console errors
- Lighthouse scores around 90+ for Performance, Accessibility and Best Practices
- README updated with how to run it locally and how to deploy to Cloudflare Pages

## Notes from the business side (Claude)

- This is a portfolio piece. Quality and polish matter more than quantity. If a feature gets messy, simplify it.
- Report what was built and anything left out. Lucky checks everything on his own phone before it goes public.
