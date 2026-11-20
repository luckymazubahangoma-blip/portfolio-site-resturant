# Errors.md: open problems found in review

**Read this at the start of every session, right after README.md.** Fix every open item before building anything new. When an item is fixed, move it to the "Fixed" list at the bottom with the commit message. Do not repeat these mistakes on the remaining pages (`gallery.html`, `reservations.html`, `contact.html`) or on the next sites.

Last reviewed (Nov 20): `css/styles.css`, `js/main.js`, `index.html`, `menu.html`, `about.html`. Reviewed by reading the code only. Nobody has checked the pages in a browser yet.

## High priority

1. **Broken links to pages not built yet.** `gallery.html`, `reservations.html` and `contact.html` do not exist, but every nav, CTA and footer links to them. Build them, then check every local link.
2. **Invalid duplicate `class` attribute in the CTA eyebrow, on all three pages.** The markup is `<p class="eyebrow" class="eyebrow eyebrow--cta">`. Browsers ignore the second attribute, so `.eyebrow--cta` never applies and the eyebrow text stays `--ember-hot` on an `--ember` background (almost invisible). Use one attribute: `class="eyebrow eyebrow--cta"`. Also remove the `!important` on `.eyebrow--cta` once the selector is correct.
3. **Menu category rail is `position: fixed` for the whole page** (`.menu-tabs` at 1024px and up). It will float over the hero and the footer, and `.menu-content { margin-left }` pushes the menu away from the centred hero, note, CTA and footer, so the left edges do not line up. Fix: wrap the rail and the menu in a two-column grid and make the rail `position: sticky` inside it. Check at 1024, 1280 and 1440 wide.
4. **Colour audit is not closed.** Old charcoal and red literals remain in the CSS, outside `:root`: `rgba(31,33,36,…)` in hero, menu-hero, about-hero and nav gradients (on mobile this tints the new ink blue grey), `rgba(211,52,47,…)` in `.btn:hover` and `.dish-card:hover`, `rgba(240,140,134,…)` and `#F2A39D` on diet tags, value icons and sourcing numbers, `rgba(169,39,36,…)` on paper diet tags. Replace every one with a variable (add `--ink-rgb` style tokens if you need alpha). Greys such as `#B8B7B3`, `#C4C2BE`, `#C3BFBA` should come from `--muted` or `--oat-deep`.
5. **Footer logo is still white on orange** on all three pages (`stroke="white"`, `fill="white"`). Use `var(--ink)` like the header.

## Medium priority

6. **`og:image` will not work.** It is a relative path to an SVG (`images/ember-og.svg`). Facebook, LinkedIn and X do not show SVG, and they need an absolute URL. Export a 1200×630 PNG or JPG, use an absolute URL once the domain is known, and add `og:url`.
7. **CSS has patches on top of patches.** The file ends with "Revision round 1" and "Final desktop composition" blocks that override earlier rules. For example `.hero-art` is set to `position: relative`, then `absolute`, then `relative` again inside the same 1024px query. Merge the overrides into the original rules and delete the dead ones, so each component is defined once.
8. **Pointer glow clashes with the CTA ring.** `.reservation-cta::after` is already the decorative ring (460px, bottom right). The desktop glow rule also targets `::after` with `inset: 0`, which moves and resizes the ring. Use a different pseudo-element or a child element for the glow.
9. **900 to 1023px is not designed.** Desktop changes start at 1024px, so tablets in landscape get the old mobile-style overlays. Test and tune this range.
10. **Mobile text under 14px remains** (for example `.value-number`, `.timeline-year`, `.hero-note`, `.footer-bottom`, `.menu-tabs a`). README says no text under 14px anywhere. Lucky likes the mobile look, so do not redesign it. Raise these only to 13 to 14px where it does not change the layout, and report what changed.
11. **`aria-label` on `<span>` and `<div>` is unreliable.** The dietary tags and `.quote-stars` use it. Add `role="img"` to the element, or use visually hidden text.
12. **Desktop and browser checks not done.** Run 1280, 1440 and 1920 wide, a real phone, the console, and Lighthouse. Report the scores.

## Low priority

13. **Allergen note repeats itself.** "Please let your server know before ordering…" appears twice. Keep one clear version: "We're happy to help with allergies and dietary needs. Our kitchen handles common allergens, so we cannot guarantee any dish is free of them. Please tell your server about any allergy before ordering."
14. **Dead element still in the HTML.** `<div class="about-hero-grain">` is only hidden with `display: none`. Delete it and its CSS.
15. **`.brand` letter-spacing is `-0.035em`,** tighter than the `-0.03em` limit. `::selection` uses oat text on orange, which is hard to read. Use `--ink`.

## Rules to avoid repeating these

- Never hard-code a colour outside `:root`. Use variables everywhere, including inline SVG icons and rgba gradients.
- One `class` attribute per element. Validate the HTML before committing.
- Edit existing rules in place. Do not stack overrides at the end of the stylesheet.
- Check every link points to a file that exists before committing.
- Test at 360, 768, 1024, 1280, 1440 and 1920 wide, and look at desktop separately from mobile.
- No letter-spacing tighter than `-0.03em`.
- Every interactive or informational element needs an accessible name that works in screen readers.
- Accurate wording for anything about food allergies, prices and opening hours.
- Do not mark something Fixed until it is truly done in the code. Read this file first, fix first, and log fixes at the bottom.

## Fixed

- Revision round 1 palette: ink, oat and ember tokens added and shared styling updated
- Desktop hero compositions, two-column menu list and wider content added (still needs a browser check)
- Real social preview artwork added and `og:image` tags added to all three pages (but see item 6)
- Inline early `js` class added to every page and `theme-color` updated
- Escape-key focus handling fixed and mesh jitter preserved on resize
- Allergen note replaced with a clear warning (but see item 13), and uncertain gluten-free and vegetarian claims removed
- Dietary labels given full-word names, drinks heading levels corrected, decorative Unicode symbols replaced with SVG, oversized ampersand tracking corrected
- Low-contrast supporting text darkened
- Mesh did not react to the pointer (now listens on the hero section)
- Mesh was disabled on devices with 4 or fewer CPU cores (check removed)
- `.reveal` content stayed hidden without JavaScript (now gated by the `js` class)
- Fonts loaded through `@import` (now `<link>` in the head)
- Footer year was 2025 (now 2026)
