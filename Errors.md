# Errors.md: open problems found in review

**Read this at the start of every session, right after README.md.** Fix every open item before building anything new. When an item is fixed, move it to the "Fixed" list at the bottom with the commit message. Do not repeat these mistakes on the remaining pages (`gallery.html`, `reservations.html`, `contact.html`) or on the next sites.

Reviewed: `css/styles.css`, `js/main.js`, `index.html`, `menu.html`, `about.html`.

## High priority

1. **Broken links on every page.** `gallery.html`, `reservations.html` and `contact.html` do not exist yet, but the nav, CTAs and footer all link to them. Build them, then check every link.
2. **Hard-coded colours will break the new palette.** Inline styles such as `style="color:#F08C69"` and `style="color:#FFE0D6"` (footer brand "&", CTA eyebrow) and the `stroke="white"` flame logo ignore the CSS variables. Replace every hard-coded colour in HTML, SVG and CSS with a variable. No colour values outside `:root`, except inside the low-poly artwork.
3. **Brand mark contrast after the palette change.** The flame icon sits on the orange accent. White on `#FF5B14` fails contrast, so the icon must be `--ink`.
4. **Wrong or misleading allergen sentence in `menu.html`.** The note says "While we take care, our kitchen handles common allergens." That reads as a reassurance and is poorly worded. Replace with: "Our kitchen handles common allergens, so we cannot guarantee any dish is free of them. Please tell your server about any allergy before ordering." Food allergy wording must be accurate and clear.
5. **Desktop layout is mobile scaled up.** See README "Desktop direction". Includes tiny text (11 to 13px), over-tight letter-spacing, and the same hero composition on every page.

## Medium priority

6. **Flash of visible content on load.** `js/main.js` adds the `js` class with a deferred script, so `.reveal` content shows, then hides, then animates in. Add `<script>document.documentElement.classList.add('js')</script>` inline in the `<head>` of every page, before the stylesheet.
7. **Escape key steals focus.** In `main.js`, pressing Escape anywhere focuses the menu button, even when the menu is closed. Only close and refocus when the menu is open.
8. **Mesh jumps on resize.** `resize()` calls `makePoints()`, which re-randomises the jitter. Keep a fixed seed or scale the existing points.
9. **Missing `og:image`** on `menu.html` and `about.html`, and `index.html` uses a placeholder URL. Make a real social image and add the tag to every page.
10. **`theme-color` meta is the old charcoal** on every page. Update it to `--ink`.
11. **Dead element.** `about.html` has `<div class="about-hero-grain">` and no CSS for it. Remove it or style it.
12. **Dietary tags are not accessible.** `<span>V</span>`, `GF` and `VG` are read out as bare letters. Add `aria-label` or visually hidden full words ("Vegetarian", "Gluten-free", "Vegan").
13. **Possibly wrong dietary tags.** "Crispy oyster mushrooms" is tagged GF but crispy coatings usually contain wheat flour. Parmesan is usually not vegetarian (animal rennet). Either change the dish description or the tag.
14. **Heading hierarchy in the drinks section.** `h3.menu-subheading` ("From the bar") has `h3` items inside it. Items should be `h4`.
15. **Unicode symbols used as icons** (`✳`, `⌁`, `♡`) in the values cards and the "menu-meta" line. They render differently or not at all on some devices. Replace with inline SVG icons.

## Low priority

16. **`letter-spacing: -.1em`** on `.about-big-mark` ("E&O") crushes the letters. Use no tighter than `-0.03em`.
17. **Small grey text below 4.5:1 contrast** on the paper background: `.timeline-note`, `.team-disclaimer`, `.sourcing-disclaimer`. Darken them.
18. **Menu tab bar alignment on desktop.** `.menu-tabs-inner` uses `width: max-content` with auto margins, so on wide screens the tabs may centre instead of aligning with the content edge. Check at 1440px.
19. **Duplicate CSS declarations.** `.hero` has two `min-height` lines and `.reveal` is defined twice. Clean up.
20. **Em dashes in copy** (for example "begins—and"). The owner prefers commas or full stops. Rewrite them.

## Rules to avoid repeating these

- Never hard-code a colour outside `:root`. Use variables everywhere, including SVG.
- Check every link points to a file that exists before committing.
- Test at 360px, 768px, 1280px, 1440px and 1920px, and look at desktop separately from mobile.
- No text under 14px. No letter-spacing tighter than `-0.03em`.
- Every interactive or informational element needs an accessible name.
- Accurate wording for anything about food allergies, prices and opening hours.
- Add the "Errors.md" check to your routine: read it first, fix first, log fixes.

## Fixed

- Mesh did not react to the pointer (now listens on the hero section)
- Mesh was disabled on devices with 4 or fewer CPU cores (check removed)
- `.reveal` content stayed hidden without JavaScript (now gated by the `js` class)
- Fonts loaded through `@import` (now `<link>` in the head on menu and about)
- Footer year was 2025 (now 2026)
- Footer logo was a text symbol (now the flame SVG)
