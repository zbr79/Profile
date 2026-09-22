# Simplified Product Screenshot Method

Use this method when a portfolio page needs to show a real product UI without exposing
food, customer, or unfinished imagery.

## Goal

Create a static preview that preserves the real interface structure and verified product
copy while neutralizing image-only regions. The preview is presentation-only; the actual
working UI remains available through the live-product link.

## Method

1. **Inspect the real product first**
   - Read the repository README and route structure.
   - Identify what a guest can actually open.
   - Check the deployed product for current titles, subtitles, labels, and metadata.
   - Do not use private, admin-only, unfinished, or deprecated features in the preview.

2. **Capture the real UI at a fixed size**
   - Prefer a clean browser capture of the deployed product.
   - If a repository visual-regression snapshot is the only reliable source, use it only
     after checking for test data, debug overlays, and stale copy.
   - Keep the natural capture dimensions and aspect ratio. The Rencipe preview is
     1440×900 (16:10).
   - If a browser capture cannot be transferred into the project, label the result as a
     simplified preview and keep the real browser verification separate. Do not present a
     manual composition as an untouched screenshot.

3. **Mask image-only regions**
   - Cover only food/photo pixels with a neutral block that matches the surrounding UI.
   - Preserve navigation, controls, card geometry, typography, spacing, and text.
   - Do not rebuild the interface with invented HTML/CSS and call it a screenshot.

4. **Remove transient artifacts**
   - Remove Playwright issue badges, debug bars, test overlays, and development-only
     notices.
   - Never leave a visible error indicator in a portfolio asset.

5. **Replace fixture copy with verified product copy**
   - Replace labels such as `Visual Recipe` or `Stable visual fixture` with real titles,
     subtitles, descriptions, and metadata from the deployed product.
   - Shorten copy only when the design requires it; keep the shortened text faithful to
     the verified source.

6. **Reduce density without changing the feature**
   - Keep the feature recognizable.
   - Hide extra option pills or secondary controls when the screenshot becomes crowded.
   - Keep one clear selected example, such as `1 cup → 240 ml`, rather than deleting the
     whole converter.

7. **Bundle and present the asset**
   - Save the final image under `frontend/src/images/`.
   - Import it as a local static image in the showcase.
   - Keep a clear live-demo button beside the preview so visitors can use the real UI.

## Validation checklist

- [ ] The visible copy is verified against the current product.
- [ ] Image regions are neutralized without changing the UI geometry.
- [ ] No debug, test, error, or placeholder wording remains.
- [ ] The image keeps its natural aspect ratio.
- [ ] The screenshot is labeled or implemented as static presentation content.
- [ ] The live-demo link opens the working application.
- [ ] `NODE_OPTIONS=--openssl-legacy-provider npm run build` passes in `frontend/`.
- [ ] `curl -I https://profile.rwkit.com/project/rencipe` returns HTTP 200.
- [ ] A cache-busted browser check confirms the latest asset and layout.

## Rencipe example

`frontend/src/images/rencipe-homepage-simplified.png` follows this method:

- Real Rencipe navigation, recipe text, cards, and converter layout.
- Food-image areas represented by neutral blocks.
- Real recipe text such as Twice-Cooked Pork, Banh Mi, Char Siu, and Peking Duck.
- Converter reduced to the focused `1 cup → 240 ml` example.
- Guest indicator retained without the original debug/error badge.
- Full 1440×900 aspect ratio preserved.

`frontend/src/images/rencipe-recipe-detail-focused.png` applies the same presentation
rules to the public recipe detail surface:

- Real title, subtitle, metadata, tags, ingredients, and step text verified from the live
  Char Siu route.
- Neutral image block in place of food photography.
- Sidebar cropped out so the second visual focuses on the recipe content after the homepage
  preview has already established the application shell.
- Extra cream margins on the left and right of that crop were trimmed so the recipe content
  fills the frame instead of sitting in empty side gutters.
- Displayed at the crop's natural height, at a smaller width than the homepage screenshot,
  so the full recipe remains visible. Do not force this asset into a 16:10 cover crop.
- Exported at 2× display resolution so the static preview stays sharp through the rotated
  showcase frame.
- Labeled as a simplified preview because the browser service could not transfer its
  stylesheet-backed capture into the local project.

`frontend/src/images/rencipe-homepage-mobile-simplified.png` is the responsive companion:

- Same guest homepage flow and verified recipe names as the desktop preview.
- Mobile app bar, featured recipe, two-column cards, and bottom navigation reflect the
  deployed mobile layout.
- Food-image areas remain neutralized and the asset is labeled as a simplified preview.
