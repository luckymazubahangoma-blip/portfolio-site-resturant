# Errors.md: open problems found in review

**Read this at the start of every session, right after README.md.** Fix applicable open items before starting a new page. When an item is fixed, move it to the Fixed list with the commit that resolved it.

Last reviewed (Nov 20): all six HTML pages and shared CSS for the stock-photo refresh and footer credits. Browser checks remain outstanding.

## High priority

1. ~~Broken links to pages not built yet.~~ All six pages now exist. A local-link audit across all six HTML pages found no broken page links (124 local page references checked). Recheck after future edits.

2. **Social preview format and canonical URL.** Existing pages currently reference a relative SVG. Social crawlers need an absolute PNG/JPG URL. The live site domain has not yet been provided, so the absolute image URL and `og:url` cannot be set reliably. Finish when the Cloudflare Pages domain/custom domain is known.

## Medium priority

3. ~~Photography assets not yet committed.~~ Switched the visual direction to a compact set of Unsplash-hosted stock photographs across Home, Menu, About, Gallery, Reservations and Contact. Footer credit now identifies the imagery as stock photography. The map remains a simple inline graphic and fictional team portraits remain illustrated.

4. **Browser and viewport checks.** Required checks at 360, 768, 900, 1024, 1280, 1440 and 1920px, plus real-phone inspection, console checks and Lighthouse are not yet complete. Do not claim a score until measured.

## Fixed

- Replaced the main low-poly hero, story, dish, menu, gallery, reservation and contact visual treatments with a coherent set of Unsplash-hosted stock photographs. Increased the home hero dish image size and added a dark overlay for readable copy. Updated every page footer to credit stock photography. Commit: `868cb97` (photo styles), followed by per-page footer/accessibility commits.
- Built `contact.html` with address, opening hours, phone/email links, a stylised neighbourhood map and keyboard-accessible native FAQ disclosures. Added responsive desktop styling; mobile layout follows the existing design conventions.
- Audited local page links across all six pages: 124 local page references checked, no missing page targets. Commit: `76905bb` (page), `f8b9972` (styles), `2eb63f4` (map label cleanup).
- Built `reservations.html` with an accessible table-request form, native field validation, a date minimum, responsive desktop layout and an explicit demo-only success state; no backend or real booking submission is implied.
- Built `gallery.html` with six original low-poly SVG illustrations, responsive asymmetric cards and keyboard-accessible category filters.
- Corrected duplicate CTA eyebrow class attributes on all three existing pages; CTA eyebrow now uses ink text on ember.
- Rebuilt the desktop menu navigation as a two-column layout with an in-flow sticky category rail; removed the fixed rail and menu offset.
- Replaced old charcoal/red CSS values with the ink/oat/ember token system and alpha RGB tokens.
- Updated footer flame marks to use ink rather than white on orange.
- Removed stacked revision patches and consolidated desktop layout rules into a single responsive composition layer.
- Kept the CTA decorative ring intact; pointer glow now uses a separate hero pseudo-element and a pointer-positioned CTA background.
- Added a dedicated 900–1023px tablet-landscape layout.
- Raised small supporting text styles to at least 14px without changing the mobile component layout.
- Added role=img to dietary labels and testimonial star ratings.
- Replaced duplicated allergen copy with the approved single sentence: “We're happy to help with allergies and dietary needs. Our kitchen handles common allergens, so we cannot guarantee any dish is free of them. Please tell your server about any allergy before ordering.”
- Removed the unused about-hero grain element and its CSS.
- Corrected brand letter spacing to -.02em and selection text to ink.
- Footer year, reveal fallback, font loading and mesh pointer/resize fixes remain in place from earlier revisions.

## Rules to avoid repeating these

- No hard-coded colours outside :root, except inside low-poly SVG artwork.
- One class attribute per element.
- Edit existing rules in place; do not stack revision patches.
- Check every local link before final sign-off.
- Test 360, 768, 900, 1024, 1280, 1440 and 1920 wide.
- No letter-spacing tighter than -.03em; no text smaller than 14px.
- Keep mobile design intact.
- Every interactive or informational element needs an accessible screen-reader name.
- Do not mark browser tests or Lighthouse as complete without actually running them.
