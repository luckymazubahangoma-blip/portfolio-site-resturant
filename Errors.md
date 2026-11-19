# Errors.md: open problems found in review

**Read this at the start of every session, right after README.md.** Fix every open item before building anything new. When an item is fixed, move it to the "Fixed" list at the bottom with the commit message. Do not repeat these mistakes on the remaining pages (`gallery.html`, `reservations.html`, `contact.html`) or on the next sites.

Reviewed: `css/styles.css`, `js/main.js`, `index.html`, `menu.html`, `about.html`.

## High priority
1. **Broken links to pages still in progress.** gallery.html, reservations.html and contact.html are not built yet. This remains open until all six pages exist and every local link is checked.

2. **Colour audit is not fully closed.** The new palette tokens and brand mark are in place. Remaining literal colours are primarily inside low-poly SVG artwork (permitted by the README), but the stylesheet still needs a final audit to ensure no non-art CSS colour literals remain.

## Medium priority
- **Desktop visual verification remains outstanding.** Desktop layouts and type scale have been revised, but the required 1280, 1440 and 1920 viewport checks have not been run in a browser.
- **No browser console or Lighthouse run yet.** These require a real browser test before sign-off.

## Rules to avoid repeating these

- Never hard-code a colour outside `:root`. Use variables everywhere, including SVG.
- Check every link points to a file that exists before committing.
- Test at 360px, 768px, 1280px, 1440px and 1920px, and look at desktop separately from mobile.
- No text under 14px. No letter-spacing tighter than `-0.03em`.
- Every interactive or informational element needs an accessible name.
- Accurate wording for anything about food allergies, prices and opening hours.
- Read this file first, fix first, and log fixes at the bottom.

## Fixed

- Revision round 1 palette: added the ink/oat/ember token set and updated shared page styling.
- Added desktop-specific hero compositions, a two-column menu layout, a left-side sticky menu category rail, wider content and spacing.
- Added real low-poly social preview artwork and og:image metadata to all three existing pages.
- Added the inline early js class and updated all existing theme-color metadata.
- Fixed Escape-key focus handling and preserved mesh jitter across resize.
- Replaced the allergen note with the requested clear warning; removed uncertain gluten-free and vegetarian claims.
- Added accessible full-word dietary labels, corrected drinks heading levels, replaced decorative Unicode symbols with SVG, and corrected oversized ampersand tracking.
- Removed the unused about-hero grain element and darkened low-contrast supporting text.

- Mesh did not react to the pointer (now listens on the hero section)
- Mesh was disabled on devices with 4 or fewer CPU cores (check removed)
- `.reveal` content stayed hidden without JavaScript (now gated by the `js` class)
- Fonts loaded through `@import` (now `<link>` in the head on menu and about)
- Footer year was 2025 (now 2026)
- Footer logo was a text symbol (now the flame SVG)
