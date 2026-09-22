# EXPERIENCES.md

Append-only log. Record every solved problem / unresolved issue / disproved approach.

Format per entry:

```
## YYYY-MM-DD — Title

### Solved
- What fixed it.

### Unresolved
- What's still open.

### Disproved
- What was tried and didn't work (and why).
```

Companion file: `PORTFOLIO_PLAN.md` (read-first handoff + roadmap).

---

## 2026-08-26 — Docs restructure

### Solved
- Merged `SESSION_NOTES.md` into `PORTFOLIO_PLAN.md` (one read-first doc); created `AGENTS.md` from an existing project's generic rules (app-specific rules stripped); created this log.
- Rationale: plan is a living checklist, session notes are context — both read at session start; this log stays separate because it grows append-only (a prior project's log reached ~536KB and would bury the plan).

---

## 2026-08-26 — Removed prior projects from the site

### Solved
- Deleted prior game-project content (`content/jobs/*`, `content/projects/*`) and replaced with placeholder entries so the Experience and Projects sections still render.
- Removed the footer's GitHub star/fork fetch (pointed at an old repo) and its state logic.
- Scrubbed project names from `PORTFOLIO_PLAN.md` and this log; marked the roadmap item done.

---

## 2026-08-26 — Education section (repurposed from template's Jobs section)

### Solved
- Template has no education section (verified against bchiang7/v4: Hero, About, Jobs, Featured, Projects, Contact — Featured already removed in an earlier session).
- Repurposed the tabbed Jobs section: heading "Where I've Built" → "Education", nav "Experience" → "Education", added CSU Fullerton MS (expected Spring 2026) + BS (Summer 2023) entries. No invented facts — coursework bullets left as placeholders.

---

## 2026-08-26 — Identity content fill (Andy Ren)

### Solved
- Filled hero (name/pitch/intro), About story (3 paragraphs), contact text, footer credit with real identity — all derived from known facts (education, Rencipe, game projects).
- `config.js`: trimmed socials to GitHub only; email set to `andy.ren@example.com` — REAL EMAIL STILL NEEDED from user.
- `gatsby-config.js`: title/description/manifest now "Andy Ren"; twitterUsername emptied (no account).
- Education tabs now show `tabLabel` (degree + years) instead of school name via a new frontmatter field.

---

## 2026-08-26 — Real email + transcript-based education content

### Solved
- Swapped placeholder email for the real one (user-provided).
- Updated identity copy: MS is now CONFERED (05/15/2026, GPA 3.80), not expected — fixed hero, About, and MS entry (`Master — 2024–2026`, transcript shows Fall 2024 start, not 2023).
- Filled education bullets from the unofficial transcript, cherry-picking strong entries only (undergrad GPA 2.78 and low grades intentionally omitted; grad GPA 3.80 and A-range courses highlighted).

---

## 2026-08-26 — Apple B&W reskin (escape the Brittany Chiang template)

### Solved
- Replaced the template's navy/green design tokens with a semantic light-theme palette (--bg, --surface, --border, --text-primary/secondary/muted, --accent). Mechanical rename via script across 21 files (order matters: longest token names first to avoid substring corruption).
- System font stack (-apple-system / ui-monospace) instead of bundled Calibre/SF Mono web fonts.
- Killed template signatures: removed numbered section headings + counters, removed left/right fixed rails (deleted side/social/email/loader components), centered hero with pill CTAs, text logo, translucent white blur nav, white cards with hairline borders, underline-style education tabs, restrained hover states.
- Buttons are now Apple-style filled pills (border-radius 980px); motion kept as subtle fades only (no loader overlay).

### Unresolved
- og.png social preview still shows the old dark design — regenerate later.
- PrismStyles (blog code blocks) still has dark-theme hardcoded colors — blog is empty, revisit if posts are added.
- Photo is still the generated placeholder.

---

## 2026-08-26 — Nav links stacked vertically at top-right (hydration mismatch)

### Solved
- Symptom: after removing the Loader overlay, desktop nav links rendered as a vertical column partially off-screen at top right ("dropdowns all over the place"). Diagnosed with headless Chromium layout probes (no browser on VM previously — installed playwright-core chromium-headless-shell in /home/ubuntu/opencode-tmp/shot).
- Root cause: nav.js/hero.js/404.js gated content behind client-only `isMounted` state + react-transition-group, so SSR HTML (renders prefersReducedMotion branch / loader era) and the first client render differed. With the loader gone, React 17 hydration mis-reconciled the DOM: the links' `<ol>` ended up inside a duplicated `.logo` div, losing the flex row.
- Fix: render identically on server and client; entrance animation via pure CSS `.anim-fadeup` keyframes (guarded by prefers-reduced-motion) with inline animation-delay. Removed react-transition-group from nav/hero/404.
- Verified: links row at x=1095→1317, y=10; 1 logo; no duplicated hero items.

### Disproved
- Guessing at CSS misalignment in nav styles — the actual cause was hydration, not styling.

---

## 2026-08-26 — Smooth-flow section rhythm (devonstank.com inspiration)

### Solved
- User liked devonstank.com's seamless top-to-bottom feel ("no page switching"). Implemented alternating full-bleed bands — About (#f5f5f7) and Projects (#f5f5f7) via the `box-shadow: 0 0 0 100vmax` + `clip-path: inset(0 -100vmax)` full-bleed trick, keeping the 1000px content column.
- Softened ScrollReveal: duration 700ms, 24px rise, ease-out bezier.
- Verified with headless probe: hero white → about gray → education white → projects gray → contact white.

---

## 2026-08-26 — Projects-first reorder + 3-card grid

### Solved
- Moved Projects directly under Hero (recruiter pattern: Name → Title → Projects → Skills → Contact); nav reordered to match (Work first).
- Added a real Rencipe card (GitHub link, honest description). Replaced the two generic placeholders with "Coming Soon" slots that state what they're reserved for (AI project, frontend design project) — reads as intentional, not broken.
- Grid tuned for 3–5 cards (minmax 280px, wider gap); "Show More" button now hidden when ≤6 projects; project titles render as plain text when no external link exists (no fake link icons on coming-soon cards).
- Section renamed "Other Noteworthy Projects" → "Selected Projects".

---

## 2026-08-26 — Editorial split layout (sticky heading column)

### Solved
- About / Education / Projects now use a shared split layout (`components/split.js`): 240px left column with sticky section heading + overline, content on the right. Hero and Contact stay centered as bookends.
- Mobile: single column, headings stack above content, sticky off.
- Fixed a horizontal-overflow regression the split introduced on mobile: grid column must be `minmax(0, 1fr)` — plain `1fr` (auto min) let the education tablist's bleed trick blow out the column width.
- Verified with headless probes: sticky computed on desktop, static + no overflow at 375px.

---

## 2026-08-27 — GemChat built (AI project)

### Solved
- Built gemini-chat (zbr79/gemini-chat) at `/home/ubuntu/gemini-chat`: Next.js 16 + React 19 + @google/genai SDK, streaming text chat + image upload, PM2 `gemini-chat` on port 3001. Free tier: Gemini (`gemini-2.5-flash`), no credit card, vision included.
- Free API research (Aug 2026): Gemini best overall free tier (15–60 rpm, 1M ctx, multimodal); alternatives: Groq (fastest), OpenRouter `:free` (14+ models, 50 req/day), Cloudflare Workers AI (10k neurons/day), Mistral/SambaNova/Cohere. opencode itself also runs on free models (Ollama/OpenRouter), but that's a dev tool, not the app backend.
- Streaming relay pattern: route handler returns `ReadableStream`, `X-Accel-Buffering: no` header so future nginx proxy won't buffer.
- Git identity for the new repo: VM global git user was set but repo-local author unknown (`ubuntu@renvnic09.(none)`) → set repo-local `user.name`/`user.email` to match Profile repo's author (Andy Ren <853493541@qq.com>).
- TS fix: `ChatMessage["image"]` is `ChatImage | undefined`, so casting to it still errors on property access → cast through `{ mimeType?: unknown }` shape instead.

### Unresolved
- `GEMINI_API_KEY` in `/home/ubuntu/gemini-chat/.env` is a placeholder — owner must get a free key at aistudio.google.com/apikey, then `pm2 restart gemini-chat`.
- No public URL yet: app is on VM port 3001 only. Needs DNS record + nginx + certbot (owner action).

### Disproved
- "AI project must not be a chatbot wrapper" plan rule — user overrode it (2026-08-27). Compromise: added vision + streaming + deployment to keep it demo-worthy; structured-output/human-loop requirements dropped.

## 2026-08-27 — GemChat: key wired, model migration, free-tier 503s

### Solved
- Real Gemini key added to `gemini-chat/.env` (gitignored, never committed). Key format `AQ...` is valid (models list works) — NOT the `AIza...` shape from older docs; SDK accepts it fine.
- `gemini-2.5-flash` returns 404 "no longer available to new users" (2026 retirement) → migrated to `gemini-3.6-flash`.
- Free tier intermittently returns 503 "high demand" (esp. vision path) → added 3× retry with backoff (1.5s × attempt) in `lib/gemini.ts`; route now streams the real error message instead of the misleading "is the API key valid?".
- Model probe results (2026-08-27, free tier): `gemini-3.6-flash`, `gemini-3-flash-preview`, `gemma-4-26b-a4b-it` handle images OK; `gemini-3.5-flash` vision 503s; `gemini-flash-latest` 503s; `gemini-2.5-flash-lite` retired; `gemini-2.5-flash-image` 429 quota.

### Unresolved
- No public URL yet: DNS + nginx + certbot (owner action).
- Post-initial-commit fixes (README/PLAN/lib/route/.env.example) not committed — waiting for explicit ask.

### Disproved
- "Model names are stable" — Google retires them; use `gemini-flash-latest` alias or re-probe when migrating. Also disproved: older assumption that a failing chat = bad API key (turned out to be model retirement + transient 503s).

## 2026-08-27 — GemChat public deployment (chatbot.renstoolbox.com)

### Solved
- Public URL live: https://chatbot.renstoolbox.com — nginx reverse proxy → 127.0.0.1:3001, same protection pattern as profile site (rate zones, 444 exploit blocks, query filter, HSTS).
- Streaming through nginx: `proxy_buffering off; proxy_cache off; proxy_read_timeout 300s; chunked_transfer_encoding on;` on `/api/chat` — without this, responses would arrive in one buffered blob.
- Stricter chat rate zone: `chatbot_chat` 20r/m burst 10 (chat calls are expensive — free-tier protection).
- Cert: certbot webroot `/var/www/acme`, account `7d0e8f08c9249ab022ed2f1f3f0feffb` (the 2026-08-26 profile account; certbot errors with "Please choose an account" without `--account`).
- Method allowlist per location: GET|HEAD|OPTIONS on `/`, POST|OPTIONS on `/api/chat`.
- DNS verification loop: `dig +short chatbot.renstoolbox.com @dns1.registrar-servers.com` (Namecheap authoritative) — record appears there FIRST; public resolvers (1.1.1.1, 8.8.8.8) confirmed shortly after.

### Unresolved
- VM's own resolver (Oracle VCN 169.254.169.254 via systemd-resolved) still returns NXDOMAIN for the new name (TTL lag) — local `curl chatbot.renstoolbox.com` fails until it refreshes; public access unaffected. Workaround for local tests: `curl --resolve chatbot.renstoolbox.com:443:170.9.60.63`.
- Post-initial-commit fixes in gemini-chat repo still uncommitted (waiting for explicit ask).

### Disproved
- "Certificate issuance needs DNS propagation everywhere" — only the authoritative NS + the LE validation path matter; certbot succeeded while the VM's local resolver still couldn't see the name (webroot challenge is served locally by nginx on port 80, no external DNS lookup by LE... well, LE looks up from ITS resolvers, which had the record).

---

## 2026-09-10 — Dedicated project detail pages

### Solved
- Created Gatsby project pages from every Markdown file in `content/projects/`, using the `/projects/<project-name>/` route pattern.
- Added a shared project detail template with project metadata, technology tags, GitHub/live links, Markdown content, and a link back to the archive.
- Linked homepage project cards and archive titles to their dedicated pages.

### Unresolved
- Project URLs currently derive from the project title; changing a title will change its URL.

### Disproved
- No alternate approach was needed.

---

## 2026-09-10 — Rencipe showcase page

### Solved
- Replaced the generic Rencipe project detail view with a dedicated case-study presentation covering discovery, organization, cooking workflow, architecture, and product proof points.
- Added a real deployed-product screenshot from the Rencipe repository, live-demo and source links, responsive layouts, IntersectionObserver reveal animations, a floating hero preview, and reduced-motion fallbacks.
- Updated Rencipe metadata with its deployed URL and aligned the copy with verified repository and live-product capabilities.

### Unresolved
- The local IDE browser could not reach the isolated preview server, so visual verification was completed through the production build, generated HTML, and HTTP smoke test instead.
- The hero screenshot is loaded from the public Rencipe GitHub repository rather than bundled locally.

### Disproved
- A generic Markdown-only detail page was not enough to present the project’s product and engineering depth.

---

## 2026-09-10 — Public Rencipe route alias

### Solved
- Added `/project/rencipe/` as the requested singular public route while retaining `/projects/rencipe/` as a compatibility path.
- Rebuilt Gatsby and verified the live profile host returns the Rencipe showcase content at the singular URL.

### Unresolved
- The deployment remains an uncommitted working-tree build; no commit or push was requested.

### Disproved
- No separate runtime restart was needed because the profile host serves the generated static `public/` output.

---

## 2026-09-10 — Rencipe showcase CSS audit

### Solved
- Fixed global `section` styles overriding the showcase hero, workflow band, and CTA width.
- Restored full-width bands and a usable desktop hero grid; the previous 74px hero-copy column was causing one-word line breaks.
- Verified the live page at a 1920px viewport and a 390px mobile viewport with no horizontal overflow.

### Unresolved
- The browser service worker can retain an older inline stylesheet until the page is opened in a fresh or cache-busted tab.

### Disproved
- The issue was not caused by the Rencipe grid math; it was caused by inherited global section constraints.

---

## 2026-09-10 — Removed test screenshot from Rencipe hero

### Solved
- Removed the Playwright visual-regression PNG because it contained mocked recipe images and a development artifact.
- Replaced it with an iframe preview of the deployed Rencipe homepage at `https://rencipe.renstoolbox.com/`, so the hero displays the real production product.
- Verified the generated page contains the production preview URL and the build completes successfully.

### Unresolved
- The embedded preview depends on the live Rencipe site remaining available and frame-embeddable.

### Disproved
- The visual-regression screenshot was not an acceptable portfolio asset even though it came from the real repository.

---

## 2026-09-10 — Clean static Rencipe hero capture

### Solved
- Replaced the live iframe with a static screenshot captured from the production Rencipe homepage.
- Cropped the real featured-recipe surface so the hero contains actual recipe photography and cards without the app shell’s transient unstyled/debug layer.
- Removed the unused intermediate screenshot asset and verified the generated page references only the clean local image.

### Unresolved
- The static capture can become visually outdated if the live Rencipe homepage changes substantially.

### Disproved
- Embedding the live app was not the right presentation treatment for this portfolio hero.

---

## 2026-09-10 — Removed rejected Rencipe hero capture

### Solved
- Removed the rejected cropped screenshot from the live hero so the page no longer presents the wrong UI scale or any debug artifact.
- Replaced it with an honest live-product panel linking directly to the deployed Rencipe app.
- Deleted the unused screenshot asset and verified the showcase no longer imports it.

### Unresolved
- The exact clean, full-page original screenshot still needs to be supplied or made transferable before it can be restored as the hero asset.

### Disproved
- Repeatedly cropping or reframing the available screenshot does not satisfy the requirement for an original full UI capture.

---

## 2026-09-10 — Simplified Rencipe screenshot hero

### Solved
- Reused the original 1440×900 repository screenshot so the real Rencipe navigation, typography, recipe text, and kitchen converter remain visible.
- Removed the screenshot's red Playwright issue badge while preserving the rest of the interface.
- Restored the hero as a local static image with its full 16:10 aspect ratio, avoiding the previous crop and incorrect UI scale.

### Unresolved
- The source screenshot is a visual-regression fixture, so it intentionally contains simplified non-food image blocks rather than production food photography.

### Disproved
- Replacing the screenshot with a fabricated text-only product panel did not meet the user's request for a simplified screenshot.

---

## 2026-09-10 — Reduced converter density in Rencipe hero

### Solved
- Kept the real converter card and its first volume conversion while removing the extra weight and temperature controls from the static showcase image.
- Preserved the card's original position, proportions, and surrounding Rencipe UI so the right side is less visually crowded.

### Unresolved
- The hero remains based on the repository's simplified visual-regression fixture, not a production screenshot with food photography.

### Disproved
- Showing all converter categories made the hero preview compete with the featured recipe surface.

---

## 2026-09-10 — Reduced converter unit choices

### Solved
- Kept the `1 cup → 240 ml` example and removed the extra cups/tablespoon/teaspoon/milliliter/liter option pills from the screenshot.
- Replaced the long unit lists with only the selected `cups` and `ml` controls, making the converter read as a focused example rather than a full control panel.

### Unresolved
- The screenshot is still a static presentation asset; the live Rencipe converter remains unchanged.

### Disproved
- Removing the whole converter was too aggressive; the problem was the number of visible choices inside it.

---

## 2026-09-10 — Filled simplified Rencipe browse panel

### Solved
- Added three verified browse labels to the simplified Explore area: Breakfast, Vegetarian, and Dessert.
- Added two real recipe titles from the deployed Rencipe homepage, Char Siu and Peking Duck, as neutral image-free recipe cards beside the existing fixture card.
- Kept the simplified screenshot free of food photography and debug overlays while giving the main panel more visual substance.

### Unresolved
- The added cards are presentation-only screenshot content; the deployed Rencipe app itself was not changed.

### Disproved
- Leaving the single fixture card alone made the main browse area feel unintentionally empty.

---

## 2026-09-10 — Restored guest sidebar indicator

### Solved
- Removed the three added Explore bullet items from the simplified screenshot.
- Added a bottom-left `Guest` account indicator beside the existing settings control.
- Kept the red Playwright issue badge removed.

### Unresolved
- The guest indicator is part of the static hero presentation; no authentication behavior was changed in the live Rencipe app.

### Disproved
- Adding extra sidebar browse labels did not match the intended Rencipe sidebar design.

---

## 2026-09-10 — Borderless guest indicator

### Solved
- Removed the pill border around the static `Guest` indicator.
- Kept only the small guest avatar and label beside the settings control.
- Confirmed this remains presentation-only and does not imply live authentication state.

### Unresolved
- The screenshot still represents a simplified static presentation, not the live account UI.

### Disproved
- The bordered guest pill did not match the requested sidebar design.

---

## 2026-09-10 — Replaced fixture wording with live recipe text

### Solved
- Replaced `Visual Recipe` and `Stable visual fixture` in the featured panel with verified live content: `Twice-Cooked Pork`, `Pork belly with leeks`, its real description, rating, views, and servings.
- Replaced the card fixture/subtitle text with verified live recipe content: Banh Mi, Char Siu, and Peking Duck with their real supporting descriptions.
- Kept all food-image regions neutral so the screenshot shows real product text without displaying food photography.

### Unresolved
- The text is presentation-only inside the static hero screenshot; the live Rencipe data was not modified.

### Disproved
- Test-fixture wording made the hero look like a test screen instead of a presentation of the actual product.

---

## 2026-09-10 — Shortened featured recipe description

### Solved
- Reduced the featured recipe description from three lines to one concise line: `Pork belly first simmered, then wok-seared with leeks.`
- Kept the verified recipe title, subtitle, rating, views, and servings.

### Unresolved
- The shorter copy is still part of the static hero presentation and does not change the deployed recipe content.

### Disproved
- The full recipe description created an unnecessarily dense text stack in the hero.

---

## 2026-09-10 — Bottom-aligned featured metadata

### Solved
- Removed the featured recipe description completely.
- Moved the verified rating, views, and servings row to the bottom of the featured text panel.

### Unresolved
- The positioning is represented in the static hero screenshot only; the live Rencipe page was not changed.

### Disproved
- Keeping metadata directly beneath the subtitle made it appear centered in the hero panel instead of anchored to the bottom.

---

## 2026-09-10 — Guest-only four-surface Rencipe showcase

### Solved
- Audited the Rencipe README, guest navigation, and `AuthGate` to separate public routes from authenticated and admin workflows.
- Reduced the showcase to four guest-facing surfaces: Home, Browse, Recipe Detail, and About/Legal/Contact.
- Removed bilingual, saved/meal-plan/draft, private authoring, and admin image-focus messaging from the presentation.
- Replaced the longer case-study sections with a concise four-card guest-view layout and verified the live route returns the new copy.

### Unresolved
- The showcase still uses a simplified static hero image; the live Rencipe application remains unchanged.

### Disproved
- Presenting the full product roadmap and private workflows made the portfolio page broader than the experience an interviewer can access as a guest.

---

## 2026-09-10 — Guest-only wording cleanup

### Solved
- Removed references to omitted private workflows from the visible showcase copy so the page describes only the guest experience.
- Rebuilt and verified the live route contains the four-surface guest presentation without bilingual or private-feature claims.

### Unresolved
- The latest guest-only changes are not committed or pushed yet.

### Disproved
- Explaining excluded features in the showcase copy added noise to a page intended for guest-facing product evidence.

---

## 2026-09-10 — Restored guest hero grid width

### Solved
- Diagnosed the vertical text stack with live computed geometry: the global `section { max-width: 1000px; }` rule left only 74px for the hero copy beside the 480px preview minimum.
- Explicitly restored full-width showcase bands so the desktop hero now renders a 455px copy column beside a 655px preview column.
- Rebuilt and visually verified the live route at a 1920px viewport.

### Unresolved
- A fresh cache-busted URL may be needed if an older service-worker stylesheet is still open.

### Disproved
- The regression was not caused by the four guest cards; it was caused by the inherited global section width constraint.

---

## 2026-09-10 — Reusable simplified screenshot method

### Solved
- Documented a repeatable process in `SCREENSHOT_METHOD.md` for producing static product previews from real UI captures.
- Recorded the rules for neutralizing image regions, removing debug artifacts, preserving verified copy and aspect ratio, reducing control density, and linking to the working live product.

### Unresolved
- The method is documented but not yet automated into a capture/masking script.

### Disproved
- A fabricated UI reconstruction is not equivalent to a real screenshot; future previews must keep the real layout and clearly separate the static asset from the working demo.

---

## 2026-09-10 — Added recipe detail simplified preview

### Solved
- Verified the public Twice-Cooked Pork detail route and captured its guest-visible structure: metadata, tags, ingredients, steps, and cooking context.
- Added `rencipe-recipe-detail-focused.png` as the second guest-facing visual, with the sidebar removed, the food image neutralized, and the real recipe text preserved.
- Added the detail preview section and live-recipe link to the Rencipe showcase.

### Unresolved
- The live recipe server returned HTTP 500 for a required stylesheet during local capture, so the asset is explicitly documented as a simplified preview based on browser-verified layout and content.

### Disproved
- Using the unstyled local headless capture would have produced another misleading portfolio image; it was rejected in favor of the verified styled browser layout.

---

## 2026-09-10 — Corrected detail preview placement

### Solved
- Made the recipe detail section full-bleed so its white background spans the viewport instead of ending at a left-aligned 1600px boundary.
- Added a centered inner grid and alternated the detail visual to the left while keeping the homepage visual on the right.
- Kept the detail screenshot focused on the recipe content after the homepage had already established the full application shell.

### Unresolved
- The focused preview still uses a neutral image block because no approved food photography asset was provided.

### Disproved
- Repeating the full sidebar screenshot for the detail section would add visual weight without showing new recipe information.

---

## 2026-09-10 — Enlarged detail preview composition

### Solved
- Tightened the focused detail crop from 1220×900 to 840×900 so the recipe content is larger and no longer surrounded by excessive internal whitespace.
- Expanded the detail grid to 1480px, gave the visual the larger column, widened the copy column, and kept the copy on the right.
- Matched the image frame ratio to the new asset so CSS does not introduce letterboxing.
- Restored copy-first reading order on mobile while keeping the visual-first composition on desktop.

### Unresolved
- The neutral food-image block remains intentional because no approved food photography asset was provided.

### Disproved
- The previous wide crop and 16:10 image ratio were making the actual recipe UI appear smaller than necessary.

---

## 2026-09-10 — Rebalanced detail section to match hero scale

### Solved
- Matched the recipe-detail band to the hero: 1240px inner grid, mirrored column split, and the same 16:10 browser frame.
- Kept the focused recipe crop, but stopped it from using a portrait frame that made the second section much taller than the first.
- Anchored the detail copy to the right column at the same 540px width as the hero copy, with copy-first stacking restored on mobile.

### Unresolved
- The focused crop is still taller than 16:10, so the frame uses contain plus the product cream background instead of stretching the UI.

### Disproved
- Giving the detail screenshot its own larger grid and native 840×900 ratio unbalances the page; section frames need to stay similar even when the source crop is different.

---

## 2026-09-10 — Removed empty side gutters from detail preview

### Solved
- Trimmed leftover cream margins from the focused recipe crop so the title, image block, and cards sit closer to the edges.
- Replaced 16:10 `contain` letterboxing with `cover`, so the browser frame is filled instead of showing empty bars on the left and right.
- Reduced the white section's side padding and widened the inner grid so the cream-to-white band still reads, without large empty columns beside the screenshot.

### Unresolved
- Covering a taller crop to 16:10 still clips the lower steps if the viewport is wide; the live recipe link remains the source of the full page.

### Disproved
- Keeping `object-fit: contain` in a landscape frame recreates the empty left/right gutters the focused crop was meant to remove.

---

## 2026-09-10 — Restored full detail preview at a smaller size

### Solved
- Stopped using 16:10 `cover` with top focus, which zoomed into the title and hid the rest of the recipe.
- Show the full focused crop again (title through ingredients and steps) at a 400px-wide frame so it stays similar in scale to the homepage screenshot.
- Kept the left/right cream trim; the empty side gutters are gone without enlarging or cropping the page vertically.

### Unresolved
- None for this layout pass.

### Disproved
- Filling a landscape frame with `object-fit: cover` is not the same as removing left/right empty space; it just magnifies the top of the page.

---

## 2026-09-11 — Removed browser chrome from the detail screenshot

### Solved
- Dropped the fake browser frame, traffic-light bar, and cream padding around the recipe-detail image.
- The screenshot now sits flush on the white section, with only a light shadow and corner radius.

### Unresolved
- None for this pass.

### Disproved
- The white surround was CSS chrome, not part of the product screenshot.

---

## 2026-09-11 — Matched detail screenshot border to homepage preview

### Solved
- Added the same gray `1px solid rgba(47, 41, 35, 0.16)` border and 18px radius used on the homepage browser frame.
- Reused the homepage `.browser-frame` wrapper so the gray outline is the same CSS as the first screenshot, with padding removed so the white chrome does not return.

### Unresolved
- None for this pass.

### Disproved
- Putting the border on the `img` does not match the first card, whose outline is on the surrounding frame.

---

## 2026-09-11 — Swapped detail showcase dish to Char Siu

### Solved
- Verified the public Char Siu route and replaced the repeated Twice-Cooked Pork detail content.
- Updated the detail preview with verified Char Siu copy: Cantonese BBQ Pork, rating metadata, tags, description, ingredients, and cooking steps.
- Kept the same neutral image block, dimensions, gray frame, and guest-facing layout as the existing detail showcase.

### Unresolved
- The food image remains neutralized because no approved food photography asset was provided.

### Disproved
- Reusing Twice-Cooked Pork on both showcase pages made the two product views feel repetitive.

---

## 2026-09-11 — Repositioned Char Siu save button

### Solved
- Moved the static heart/save control from the old Twice-Cooked Pork title position to immediately beside the shorter Char Siu title.
- Covered the old control location so no duplicate or clipped heart remains.

### Unresolved
- None for this pass.

### Disproved
- The save-button placement was not controlled by showcase CSS; it was baked into the previous screenshot asset.

---

## 2026-09-11 — Increased showcase screenshot resolution

### Solved
- Regenerated both Rencipe showcase PNGs at 2× their displayed dimensions so text and UI edges remain sharper during CSS scaling and rotation.
- Preserved the existing visual sizes, crops, neutral image blocks, and layout.

### Unresolved
- The assets remain simplified previews rather than full live captures, by design.

### Disproved
- Increasing the CSS frame size would not solve raster softness; the source assets needed more pixels.

---

## 2026-09-11 — Added responsive access section

### Solved
- Added a third Rencipe showcase section comparing the same guest homepage on desktop and mobile.
- Added a compact mobile companion preview with verified recipe names, responsive navigation, neutral
  image regions, and a fixed bottom navigation treatment.
- Added responsive layout behavior so the paired views sit side by side on desktop and stack cleanly
  on smaller screens.

### Unresolved
- The mobile companion is a simplified static preview rather than a direct live capture.

### Disproved
- Showing only the desktop homepage did not communicate the product's “access anywhere” behavior.

---

## 2026-09-11 — Increased responsive preview emphasis

### Solved
- Widened the desktop/mobile screenshot gallery and reduced the responsive section copy scale.
- Kept the responsive comparison readable while making the paired screenshots the primary visual focus.

### Unresolved
- None for this pass.

### Disproved
- A large copy column beside smaller device previews weakened the “same experience anywhere” message.

---

## 2026-09-11 — Expanded responsive screenshot gallery

### Solved
- Removed the two-column constraint from the third section so the screenshot gallery can use the full band width.
- Kept the explanatory copy compact above the gallery and expanded the desktop/mobile device widths.

### Unresolved
- None for this pass.

### Disproved
- Increasing the screenshot width inside the original narrow grid was insufficient; the grid itself was the limiting factor.

---

## 2026-09-11 — Fixed responsive gallery wrapping

### Solved
- Replaced flex wrapping with a responsive two-column device grid so the phone preview stays beside the desktop preview at medium widths.
- Added an explicit one-column mobile breakpoint for predictable stacking.

### Unresolved
- None for this pass.

### Disproved
- The visual break was not caused by the screenshot assets; the flex container was allowing the phone card to drop into a separate row.

---

## 2026-09-11 — Restored left-copy/right-gallery composition

### Solved
- Restored the third section to a two-column layout with compact copy on the left and the paired screenshots on the right.
- Kept the desktop and mobile previews locked together in their own two-column grid until the mobile breakpoint.

### Unresolved
- None for this pass.

### Disproved
- Moving the copy above a full-width gallery did not match the intended editorial composition.

---

## 2026-09-11 — Ensured desktop responsive preview visibility

### Solved
- Removed reveal gating from the desktop/mobile screenshot pair so both device previews render immediately.
- Kept reveal animation on the explanatory copy only, preventing the desktop screenshot from appearing missing while the section is entering view.

### Unresolved
- None for this pass.

### Disproved
- The desktop asset was not missing or broken; the shared reveal wrapper was hiding the visual during layout entry.

---

## 2026-09-11 — Pinned desktop preview to responsive grid

### Solved
- Explicitly assigned desktop and mobile previews to grid columns and rows.
- Set both device wrappers to visible block elements so inherited layout or visibility rules cannot collapse the desktop slot.

### Unresolved
- None for this pass.

### Disproved
- The remaining desktop-preview issue was not an asset path failure; the layout needed explicit grid placement and visibility.

---

## 2026-09-11 — Removed global section width cap from responsive gallery

### Solved
- Overrode the portfolio-wide 1000px section max-width on the responsive showcase section.
- The left copy/right screenshot composition can now use the full-width band and provide enough room for the desktop preview.

### Unresolved
- None for this pass.

### Disproved
- The small desktop block was not caused by the image dimensions; the global section cap was squeezing the entire gallery.

---

## 2026-09-11 — Added Browse desktop and mobile showcase

### Solved
- Added a fourth guest-facing section for the public `/browse` route.
- Added paired desktop and mobile Browse previews using verified guest copy, public recipe names, category filters, and popular sorting.
- Reused the established left-copy/right-device composition so the Browse surface is visually consistent with the responsive homepage section.

### Unresolved
- The new Browse previews are simplified static presentation assets; the live demo link remains the source for interaction.

### Disproved
- Reusing the homepage screenshots would not demonstrate the missing discovery step between the landing surface and recipe detail.

---

## 2026-09-11 — Validated Browse preview delivery

### Solved
- Served the desktop and mobile SVG previews from Gatsby's public root so the site's CSP accepts them.
- Removed invalid control characters from the SVG markup and confirmed both images load at their natural dimensions.
- Verified the live showcase renders both Browse previews with no broken-image state.

### Unresolved
- None for this pass.

### Disproved
- The blank preview was not a layout-sizing problem; the inline SVG data URI was blocked by the deployed site's image policy.

---

## 2026-09-11 — Made Browse the third showcase section

### Solved
- Replaced the third section's repeated homepage desktop/mobile comparison with the public Browse desktop/mobile comparison.
- Removed the duplicate fourth Browse section so the presentation remains a three-page showcase: home, recipe detail, and Browse discovery.
- Removed the unused homepage mobile import and the unused alternate section styling.

### Unresolved
- None for this pass.

### Disproved
- Browse did not need a separate fourth section; it is the intended responsive-design example for section three.

---

## 2026-09-11 — Removed save labels from Browse previews

### Solved
- Removed the visible `Save` text from desktop and mobile Browse recipe cards.
- Preserved the card geometry and guest Browse layout while leaving the existing Saved navigation label intact.

### Unresolved
- None for this pass.

### Disproved
- Removing the label did not require changing the Browse card sizing or responsive layout.

---

## 2026-09-11 — Overlapped Browse responsive previews

### Solved
- Layered the phone preview over the right edge of the desktop preview so section 3 reads as an iPad-and-iPhone responsive comparison.
- Kept the phone above the desktop frame with a controlled overlap and preserved the stacked layout at mobile widths.

### Unresolved
- None for this pass.

### Disproved
- A separate gap between the two devices was not needed to communicate responsive design.

---

## 2026-09-11 — Reduced section 3 device gallery by 20 percent

### Solved
- Reduced both Browse previews to 80 percent of their previous desktop dimensions.
- Preserved the phone overlap and centered the smaller stacked gallery at narrow mobile widths.

### Unresolved
- None for this pass.

### Disproved
- Scaling the full showcase section was unnecessary; only the device gallery needed to be reduced.

---

## 2026-09-12 — Added final Rencipe conclusion section

### Solved
- Shifted the section 3 copy toward the reduced device gallery without narrowing the text block.
- Added a final conclusion band summarizing the guest journey as discover, read, and cook.
- Added responsive conclusion styling that stacks cleanly on smaller screens before the launch CTA.

### Unresolved
- None for this pass.

### Disproved
- The conclusion did not need another screenshot; the final section is stronger as a concise product takeaway and action lead-in.

---

## 2026-09-12 — Verified live conclusion delivery

### Solved
- Confirmed the public `/project/rencipe/` HTML contains the new conclusion section and Browse copy.
- Confirmed the live route returns HTTP 200 with `cache-control: no-cache`.
- Verified the conclusion is positioned after the guest-surface cards and before the orange launch CTA.

### Unresolved
- The conclusion is an in-page section rather than a separate route; visitors must scroll to it.

### Disproved
- The reported lack of visible change was not caused by a stale server build; the current HTML is already live.

---

## 2026-09-12 — Removed unclear guest-surface summary

### Solved
- Removed the “Four public surfaces are enough” card section because it did not show a concrete product screen or add useful showcase context.
- Promoted the conclusion band to the clear fourth section, labeled `04 / Conclusion`.
- Shifted the section 3 copy farther right while preserving its full text width; the measured desktop gap to the device gallery is now about 169px.

### Unresolved
- None for this pass.

### Disproved
- A route-summary card grid was not necessary after the homepage, Browse, and recipe-detail visuals already establish the guest journey.

---

## 2026-09-12 — Redesigned conclusion from case-study patterns

### Solved
- Reviewed case-study guidance emphasizing reflection, proof, one clear next action, and optional portfolio navigation at the end.
- Replaced the generic conclusion-plus-orange-CTA sequence with one dark closing panel.
- Added three qualitative proof points without inventing performance metrics: public discovery, readable recipe detail, and flexible access.
- Added one primary `Open guest demo` action and a secondary `View more projects` route.

### Unresolved
- None for this pass.

### Disproved
- A generic “See the public experience” CTA without a closing takeaway was not strong enough as the end of the case study.

---

## 2026-09-12 — Replaced ad-style conclusion with build notes

### Solved
- Replaced the dark conclusion/CTA panel with a neutral `04 / Build notes` section.
- Added the verified Rencipe architecture flow: Next.js / React → Express API → MongoDB.
- Added compact technology cards for frontend, backend, data, media, and delivery.
- Kept the section informational; live demo and source actions remain in the hero.

### Unresolved
- None for this pass.

### Disproved
- A large conversion-style CTA was not the right ending for this technical project showcase.

---

## 2026-09-12 — Simplified build-notes stack display

### Solved
- Removed the standalone `Next.js / React → Express API → MongoDB` architecture line.
- Kept the individual technology cards as the only stack presentation.

### Unresolved
- None for this pass.

### Disproved
- The architecture flow added useful context but was not necessary once each stack is labeled directly.

---

## 2026-09-12 — Reduced build-notes copy

### Solved
- Shortened the section heading and intro to keep the technical ending scannable.
- Removed repeated descriptions from the technology cards.
- Kept only the stack category and technology name in each card.

### Unresolved
- None for this pass.

### Disproved
- Explanatory copy inside every technology card was unnecessary after the stack labels were clear.

---

## 2026-09-12 — Aligned build-note technology sizing

### Solved
- Reduced the technology-name text from 21px to 18px.
- Added a consistent line height so all stack cards fit and align cleanly.
- Left the recipe-detail section typography unchanged.

### Unresolved
- None for this pass.

### Disproved
- The section 2 typography did not need adjustment; the mismatch was isolated to the build-note cards.

---

## 2026-09-12 — Expanded and repositioned the technology grid

### Solved
- Added TypeScript and Playwright to the visible stack.
- Moved the technology grid toward the center by reducing the section gap and aligning the grid to its column start.
- Preserved the compact card typography and the existing section 2 scale.

### Unresolved
- None for this pass.

### Disproved
- The technology grid did not need to remain pushed to the far right of the section.

---

## 2026-09-12 — Optimized the full Rencipe showcase for phones

### Solved
- Made the project navigation wrap cleanly on narrow screens.
- Stacked hero buttons at phone width for more reliable tap targets.
- Reduced mobile heading scale and spacing while preserving section 2’s desktop layout.
- Expanded the Browse device preview to use the available phone width.
- Tightened the mobile technology cards and prevented the final section from feeling oversized.

### Unresolved
- None for this pass.

### Disproved
- A desktop-first layout with only basic one-column stacking was not enough for the full phone experience.

---

## 2026-09-12 — Fixed collapsed phone technology grid

### Solved
- Reproduced the layout at a 390px viewport and measured the build-notes grid at only 158px wide.
- Added an explicit `width: 100%` to the build-notes details column so its technology cards fill the phone content width.
- Confirmed the issue was an intrinsic-width collapse caused by `justify-self: start`, not page-level horizontal overflow.

### Unresolved
- None for this pass.

### Disproved
- The phone page did not need a full structural rewrite; the most severe breakage came from one collapsed grid container.

---

## 2026-09-12 — Added Playwright Rencipe showcase audit

### Solved
- Added `tests/rencipe-showcase-audit.cjs` covering desktop and 390px phone viewports.
- Added measurable checks for horizontal overflow, section widths, image loading, heading structure, alt text, link names, phone navigation, hero actions, and technology-grid width.
- Generated desktop and phone screenshots plus a JSON report under `test-results/rencipe-showcase/`.
- Audit result: desktop 100, phone 100, layout average 100, accessibility 100.

### Unresolved
- Playwright is currently run from an isolated temporary dependency because the legacy frontend `node_modules` has corrupted native image binaries.

### Disproved
- The current built page does not have measurable phone overflow or stack-grid collapse after the width fix.

---

## 2026-09-12 — Improved phone technology cards

### Solved
- Changed the final stack cards from a long single-column list to a compact two-column phone grid.
- Kept the Delivery card full width and reduced mobile card padding and type size.
- Re-ran the Playwright audit after the change: phone 100, desktop 100, accessibility 100.

### Unresolved
- None for this pass.

### Disproved
- A single-column stack list was not the best phone presentation even though it passed overflow checks.

---

## 2026-09-12 — Removed repeated portfolio navigation from Rencipe

### Solved
- Added an opt-out for the shared portfolio header and footer in the project layout.
- Disabled that shared chrome only for the Rencipe showcase.
- Removed the duplicate `← Project archive` row from the showcase hero.
- Reduced the hero’s top padding now that the fixed portfolio header is absent.
- Updated the Playwright audit to verify the dedicated page has no repeated portfolio navigation.

### Unresolved
- None for this pass.

### Disproved
- The Rencipe showcase did not need both the site-wide portfolio navigation and an in-page archive navigation.

---

## 2026-09-12 — Repositioned Rencipe as a recipe discovery platform

### Solved
- Replaced the `Guest-facing recipe platform` framing with `Recipe discovery platform`.
- Removed guest-oriented wording from the hero CTA, facts, recipe-detail copy, Browse facts, and homepage alt text.
- Kept the public/open-access behavior accurate without making it the page’s primary identity.

### Unresolved
- None for this pass.

### Disproved
- “Guest-facing” was not the clearest primary presentation for the product; recipe discovery better describes the project.

---

## 2026-09-12 — Added the Rencipe entry to the main project grid

### Solved
- Replaced the long Rencipe card copy with a concise recipe-discovery summary.
- Reduced the homepage technology tags to the core stack: Next.js, React, Express, MongoDB, and Cloudinary.
- Updated the Rencipe card to use the canonical `/project/rencipe/` route.
- Preserved the existing six-card limit so four future projects can be added without changing the grid behavior.

### Unresolved
- Future project entries still need their real descriptions, technologies, and links before being added.

### Disproved
- The main page does not need to duplicate the dedicated Rencipe screenshots or case-study narrative.

---

## 2026-09-12 — Replaced generic project cards with editorial project rows

### Solved
- Researched Brittany Chiang’s compact project entries and editorial portfolio patterns before changing the main page.
- Replaced bordered folder cards with numbered rows containing project type, title, one-line description, technologies, and source/live links.
- Kept Rencipe visually consistent with future projects while giving the list a clear reading order.
- Preserved the existing six-project reveal limit and responsive one-column behavior.

### Unresolved
- The main page currently has two intentional “Coming Soon” entries; four future real projects still need to replace or supplement them.

### Disproved
- Updating only the old card copy did not solve the visual problem; the card structure itself was too generic for the researched editorial direction.

---

## 2026-09-12 — Added focused navigation to the Rencipe showcase

### Solved
- Added a sticky project bar with a return-to-work link, live demo, and GitHub actions.
- Added anchors for Overview, Recipe detail, Responsive, and Stack sections.
- Added a horizontally scrollable section navigation treatment for smaller screens.
- Rebuilt and verified the `/project/rencipe/` route contains the navigation markup.

### Unresolved
- Previous/next project navigation should wait until more real projects are added.

### Disproved
- A dedicated project page does not need the full portfolio navigation to remain useful; a focused project bar provides the needed wayfinding without repeating the homepage menu.

---

## 2026-09-13 — Replaced the crowded mobile project bar

### Solved
- Replaced the multi-link mobile top bar with a minimal Rencipe title and Menu control.
- Added a right-side slide-out panel for Work, section anchors, live demo, and GitHub.
- Added Escape-key closing, backdrop closing, and body scroll locking while the panel is open.
- Kept the desktop project navigation unchanged.

### Unresolved
- The mobile side panel still needs a visual browser check once the Playwright runner is available.

### Disproved
- A two-row mobile project bar was not a good fit; it consumed too much attention before the showcase content.

---

## 2026-09-13 — Replaced the project bar with a floating menu

### Solved
- Removed the Rencipe project top bar entirely on desktop and mobile.
- Added one compact floating Menu control in the upper-right corner.
- Changed the navigation panel from a full-height drawer to a small floating popover.
- Kept Work, section anchors, live demo, and GitHub available inside the popover.

### Unresolved
- The interaction still needs a visual browser check once the Playwright runner is available.

### Disproved
- A presentation page did not benefit from persistent app-like navigation or a full-height mobile side drawer.

---

## 2026-09-13 — Reworked navigation as a floating side index

### Solved
- Researched sticky sidebars, off-canvas project navigation, floating side navigation, and scrollspy patterns from portfolio and case-study references.
- Replaced the floating top-right menu with a right-edge vertical Index control.
- Changed the open state to a compact side panel rather than a top-aligned popover.
- Added an active-section indicator for Overview, Recipe detail, Responsive, and Stack.

### Unresolved
- The side index still needs a fresh visual browser check once the Playwright runner is available.

### Disproved
- The top-right floating popover was not the strongest match for a presentation-style project page; established references use a side rail or floating side index for long case studies.

---

## 2026-09-13 — Matched the requested floating trigger and right drawer

### Solved
- Researched ten relevant references across Framer, One Page Love, Awwwards, Material UI, and accessible drawer patterns.
- Replaced the vertical Index control with a small circular floating button at the lower-right.
- Changed navigation to a simple full-height panel that slides in from the right.
- Removed the scrollspy and active-index treatment to keep the presentation page simple.
- Preserved Escape, backdrop, and link-click closing behavior.

### Unresolved
- A fresh visual browser check is still unavailable because the local Playwright runner is incomplete.

### Disproved
- The vertical side index added unnecessary interface language; the common floating-trigger/right-drawer pattern is a better fit for this page.

---

## 2026-09-13 — Simplified the floating drawer controls

### Solved
- Replaced the two-line floating mark with a standard three-line hamburger that morphs into a close icon.
- Removed the redundant “Project menu” and “Open project” labels.
- Kept only the Rencipe brand, Back to Work, section links, Live demo, and GitHub.

### Unresolved
- A fresh visual browser check is still unavailable because the local Playwright runner is incomplete.

### Disproved
- The vertical Index label and extra panel headings added interface noise to a simple presentation page.

---

## 2026-09-13 — Simplified drawer layering and destination links

### Solved
- Kept the floating button below the drawer and backdrop so the open panel owns the interaction.
- Removed the hamburger-to-X animation; the panel close control handles dismissal.
- Removed the Back to Work link because this panel is for navigating within the Rencipe presentation.

### Unresolved
- A fresh visual browser check is still unavailable because the local Playwright runner is incomplete.

### Disproved
- Keeping the trigger above the open drawer created a competing interaction layer.

---

## 2026-09-13 — Reduced drawer dividers and added link icons

### Solved
- Removed the heavy divider between the panel brand and section links.
- Kept only subtle bottom rules beneath individual navigation options.
- Removed the divider above the external links.
- Added the GitHub icon for the source link and the external-link icon for the live demo.

### Unresolved
- A fresh visual browser check is still unavailable because the local Playwright runner is incomplete.

### Disproved
- Group-level divider lines made the compact navigation panel feel over-structured.

---

## 2026-09-13 — Changed external actions to circular icon buttons

### Solved
- Removed visible Live demo and GitHub text from the bottom action row.
- Added circular icon buttons for the external demo and GitHub source.
- Preserved accessible labels and browser tooltips for both icon-only links.
- Kept the section navigation separators unchanged.

### Unresolved
- A fresh visual browser check is still unavailable because the local Playwright runner is incomplete.

### Disproved
- Text labels and divider rules were necessary for the two external actions; recognizable icons are clearer in this compact panel.

---

## 2026-09-13 — Used the actual Rencipe and GitHub brand marks

### Solved
- Retrieved the Rencipe site icon from its live `/icon.svg` asset.
- Added the real GitHub brand mark as a local SVG asset.
- Replaced styled circles and generic stroke icons with the two raw brand icons.
- Kept accessible link labels and tooltips while removing visible text.

### Unresolved
- A fresh visual browser check is still unavailable because the local Playwright runner is incomplete.

### Disproved
- Generic external-link artwork and colored circular button treatments were not the correct visual language for the requested brand links.

---

## 2026-09-13 — Sharpened brand marks and tightened drawer spacing

### Solved
- Increased the rendered SVG marks from 24px to 30px so they read clearly.
- Reduced the gap between the section links and the icon row.
- Kept the icon links raw and borderless.

### Unresolved
- A fresh visual browser check is still unavailable because the local Playwright runner is incomplete.

### Disproved
- The smaller 24px presentation and 24px spacing made the brand actions feel blurry and disconnected from the navigation.

---

## 2026-09-13 — Replaced image icons with inline SVG marks

### Solved
- Confirmed the previous build emitted the marks as base64 image data URIs.
- Replaced those image elements with inline SVG brand components.
- Preserved the exact Rencipe site mark and GitHub brand path while eliminating the image-rendering layer.
- Kept the tightened spacing between section links and brand actions.

### Unresolved
- A fresh visual browser check is still unavailable because the local Playwright runner is incomplete.

### Disproved
- Increasing the size of a small image element alone was not enough to guarantee a crisp result in the presentation panel.

---

## 2026-09-14 — Unified Rencipe section title styling

### Solved
- Used section 3’s title treatment as the shared style for sections 2, 3, and 4.
- Unified their color, type scale, tracking, line height, and mobile sizing.
- Preserved each section’s individual width and layout spacing.

### Unresolved
- None for this pass.

### Disproved
- Different title scales across the showcase sections weakened the visual rhythm.

---

## 2026-09-14 — Simplified and reduced the hero title

### Solved
- Removed the special serif and italic treatment from “real life.”
- Rendered the full hero title in the same sans-serif style and color.
- Reduced the title scale to fit the hero content area more comfortably.

### Unresolved
- None for this pass.

### Disproved
- The mixed serif/italic emphasis was not needed for the recipe introduction title.

---

## 2026-09-14 — Reframed the hero value proposition

### Solved
- Changed the hero title to “Discover what to cook next.”
- Increased the hero title line height so a two-line wrap remains clearly separated.

### Unresolved
- None for this pass.

### Disproved
- “Recipes for real life” did not communicate Rencipe’s recipe-discovery focus strongly enough.

---

## 2026-09-14 — Straightened responsive previews on phones

### Solved
- Removed the angled transforms from both responsive screenshots at the phone breakpoint.
- Kept the desktop screenshot rotations unchanged on larger screens.

### Unresolved
- None for this pass.

### Disproved
- The desktop presentation tilt was not appropriate when the previews stacked vertically on phones.

---

## 2026-09-14 — Extended straight preview behavior to tablet widths

### Solved
- Moved the no-rotation rule from the narrow phone-only breakpoint to the 900px responsive breakpoint.
- Covered tablet-sized mobile layouts where the previews had still appeared angled.
- Preserved the angled treatment above 900px for desktop presentation.

### Unresolved
- None for this pass.

### Disproved
- A 680px-only override was broad enough for every mobile-sized viewport.

---

## 2026-09-14 — Removed all mobile screenshot rotation

### Solved
- Disabled rotation and floating animation for the hero screenshot below 900px.
- Removed the recipe-detail screenshot tilt at the same breakpoint.
- Kept all screenshot angles intact for desktop widths above 900px.

### Unresolved
- None for this pass.

### Disproved
- Straightening only the responsive showcase pair did not cover every screenshot section on an iPhone viewport.

---

## 2026-09-14 — Simplified recipe detail and tightened responsive comparison

### Solved
- Removed the unnecessary live-recipe link from section 2.
- Increased the desktop comparison area and overlap between the horizontal desktop preview and vertical phone preview in section 3.
- Kept the overlap and tilt desktop-only; phone layouts remain straight.

### Unresolved
- None for this pass.

### Disproved
- The extra section 2 link added useful context; the screenshots and explanatory copy already carry the story.

---

## 2026-09-14 — Made section 3 previews share one overlap layer

### Solved
- Placed the desktop and mobile Browse previews in the same grid cell so the phone view visibly overlays the desktop view.
- Applied the overlap at desktop, tablet, and phone widths instead of stacking the previews vertically.
- Preserved straight frames on phone layouts and the desktop-only angled treatment.

### Unresolved
- None for this pass.

### Disproved
- Separate grid rows did not satisfy the requested desktop/mobile comparison composition.

---

## 2026-09-15 — Added Provider Usage Monitor project page

### Solved
- Read the `fix/widget-hardening` branch and documented its latest local-first security and reliability changes in a dedicated portfolio case study.
- Added `/project/provider-usage-monitor/` with a four-section showcase for the widget, settings boundary, provider coverage, and build stack.
- Added the project to the homepage project index with verified repository metadata.

### Unresolved
- The new showcase uses a CSS-rendered interface study rather than screenshots because no approved portfolio screenshots were supplied.

### Disproved
- A generic Markdown project page would not communicate the widget’s cross-provider workflow and local-only security boundary clearly enough.

---

## 2026-09-15 — Reused the project showcase shell and verified deployment

### Solved
- Extracted the floating project navigation into `ProjectShowcaseNav` so future case studies can reuse the same interaction pattern.
- Kept project-specific section content and responsive visuals separate while sharing the presentation shell.
- Rebuilt the Gatsby site, restarted the local preview, and verified the public Provider Usage Monitor route returns HTTP 200 with the rebuilt page.
- Added responsive layout breakpoints for stacked copy, compact provider cards, scrollable settings tabs, and mobile-sized typography.

### Unresolved
- The showcase visual styling remains project-specific; a future data-driven section schema could reduce repeated markup further.

### Disproved
- Rebuilding only the local preview would not be enough to verify the page was online; the public route also needed an HTTP/content check.

---

## 2026-09-15 — Replaced Usage interface studies with real captures

### Solved
- Ran the actual production Usage app locally and captured its `/widget` and `/settings` screens.
- Removed the invented provider-card and settings mockups from the portfolio page.
- Added the authentic widget and settings captures to the Provider Usage Monitor showcase.
- Rebuilt and verified the public page serves both real screenshot assets.

### Unresolved
- The captures reflect the current local environment: no OpenCode accounts are configured, so the widget shows the real signed-out/empty states.

### Disproved
- A feature-faithful reconstruction was not an acceptable substitute for the product’s actual UI.

---

## 2026-09-15 — Reworked Provider Usage desktop composition

### Solved
- Matched the Provider Usage desktop page to the Rencipe case-study rhythm: hero, alternating visual/text sections, and a final build-notes grid.
- Standardized desktop title sizing, section spacing, and visual alignment with the reusable showcase pattern.
- Confirmed `/project/provider-usage-monitor/` is the canonical URL and the non-slash variant redirects to it.

### Unresolved
- Mobile-specific visual tuning remains the next pass after the desktop composition is approved.

### Disproved
- The non-slash URL was not a missing page; the server correctly redirects it to the trailing-slash canonical route.

---

## 2026-09-15 — Made Provider Usage URL canonical without trailing slash

### Solved
- Configured nginx to serve `/project/provider-usage-monitor` directly with HTTP 200.
- Updated Gatsby’s dedicated route and homepage project link to use the no-slash URL.
- Rebuilt and verified the public page and real screenshot assets after the route change.

### Unresolved
- Other project routes retain their existing slash conventions.

### Disproved
- Relying on the default directory redirect did not match the requested canonical link format.

---

## 2026-09-15 — Corrected Provider Usage desktop breakpoint

### Solved
- Confirmed the desktop page was loading the desktop stylesheet, but the hero copy column was collapsing too narrowly and making the title look like a phone layout.
- Widened the desktop hero copy column and moved the hero stack breakpoint to 1100px.
- Captured a 1440px verification screenshot showing the corrected two-column desktop composition.

### Unresolved
- The actual Usage widget remains intentionally narrow because the product window is 238px wide.

### Disproved
- The issue was not Chrome showing a mobile viewport; it was desktop grid sizing.

---

## 2026-09-16 — Removed the global section-width constraint

### Solved
- Confirmed the global stylesheet was limiting every showcase `section` to 1000px.
- Added full-width overrides for the Provider Usage hero and section bands while keeping their inner grids centered.
- Verified a 1440px capture now spans the viewport and presents the desktop composition correctly.

### Unresolved
- None for the desktop width issue.

### Disproved
- The remaining narrow page was not caused by the widget screenshot’s native 238px width; the surrounding showcase bands were also constrained.

---

## 2026-09-16 — Added four distinct real Usage states

### Solved
- Captured the actual production widget in compact and expanded states.
- Captured the real Account Management and System Settings screens.
- Assigned one distinct real screenshot to each Provider Usage showcase section.
- Rebuilt and verified all four assets are served on the public page.

### Unresolved
- The current local environment has no configured OpenCode accounts, so the captured widget reflects the real signed-out/empty state.

### Disproved
- Reusing the same widget capture across sections did not tell a clear four-part product story.

---

## 2026-09-16 — Reduced Provider Usage showcase to three sections

### Solved
- Consolidated the page into the main widget view, settings screen, and a stack-focused conclusion.
- Recaptured the real widget at 3× and the settings modal at 2× device scale.
- Captured only the product elements so the assets no longer include the browser’s white surround.
- Removed the unused expanded-widget and system-settings assets.
- Rebuilt the Gatsby site successfully.

### Unresolved
- The local capture still reflects the signed-out/empty account state because no local OpenCode accounts are configured.

### Disproved
- A full-page browser screenshot was not necessary for the settings visual; element capture preserves the real UI while removing the surrounding frame.

---

## 2026-09-16 — Added authentic light-theme Usage captures

### Solved
- Verified the Usage repository is clean, current with `origin/fix/widget-hardening`, and based on commit `4d72f46`.
- Captured compact and expanded widget states using the product’s real `themeMode: "light"` behavior.
- Preserved transparent surroundings and high-resolution output for both light-theme assets.
- Updated the Provider Usage showcase hero to use the light-theme widget capture.

### Unresolved
- The current Usage settings modal remains dark in the real application; no white settings image was fabricated.

### Disproved
- Overriding the screenshot colors after capture was unnecessary; the product’s own light theme produced the correct white widget.

---

## 2026-09-18 — Replaced Usage showcase visuals with supplied product screenshots

### Solved
- Replaced the light widget visual with the supplied full provider-status screenshot.
- Replaced the settings visual with the supplied Accounts screen screenshot.
- Kept the existing component imports and asset paths so no layout code changes were required.

### Unresolved
- The supplied screenshots include their original viewport framing and account data exactly as provided.

### Disproved
- A new browser recapture was not needed when the supplied screenshots already represented the desired product states.

---

## 2026-09-18 — Corrected supplied settings screenshot MIME type

### Solved
- Renamed the supplied settings asset from `.png` to `.jpg` because its file contents are JPEG.
- Updated the component import so browsers receive the correct image type.

### Unresolved
- None.

### Disproved
- Keeping JPEG bytes under a `.png` extension was not a reliable deployment format.

---

## 2026-09-18 — Added product feature content to Usage showcase

### Solved
- Added multi-provider visibility and smart-ranking highlights to the main view.
- Added account management, provider visibility, and theme controls to the settings section.
- Added local-first architecture and reliability points to the conclusion section.
- Kept the existing three-section structure and supplied screenshots.

### Unresolved
- None.

### Disproved
- The page did not need another screenshot or a fourth section to explain the core product value.

---

## 2026-09-18 — Updated widget visual with latest supplied state

### Solved
- Replaced the Provider Usage hero widget asset with the newly supplied 441×732 screenshot.
- Preserved the existing light-theme asset path so the showcase code required no changes.

### Unresolved
- None.

### Disproved
- The previous widget capture was not the latest visual state supplied for the product showcase.

---

## 2026-09-18 — Updated widget visual with the newest supplied state

### Solved
- Replaced the widget visual with the newest supplied 609×1024 screenshot.
- Stored it as JPEG and updated the import extension to match the actual file format.

### Unresolved
- None.

### Disproved
- The supplied file’s `.png` name did not match its JPEG contents, so retaining that extension was not reliable.

---

## 2026-09-18 — Added presentation framing around real screenshots

### Solved
- Wrapped the widget and settings screenshots in styled product-presentation frames.
- Added feature labels, section markers, captions, contrast staging, offset backplates, borders, and shadows.
- Added mobile sizing rules while leaving the supplied screenshot pixels unchanged.

### Unresolved
- None.

### Disproved
- A decorative browser mockup was not needed; restrained product framing gives the real UI enough visual context.

---

## 2026-09-18 — Added white mat borders around screenshots

### Solved
- Added a visible white padded border around both supplied screenshots.
- Preserved the existing gray staging, offset backplate, and responsive behavior.
- Reduced the mat padding on mobile so the screenshots retain useful scale.

### Unresolved
- None.

### Disproved
- A border directly drawn over the screenshot would not provide enough separation from the stage background.

---

## 2026-09-18 — Simplified screenshot presentation framing

### Solved
- Removed the outer gray stage treatment and offset backplates.
- Kept only the white mat, thin border, subtle shadow, label, and caption.
- Reduced mobile stage spacing to preserve screenshot scale.

### Unresolved
- None.

### Disproved
- Multiple layered frames did not improve the screenshots after the white mat was added.

---

## 2026-09-18 — Restored one subtle screenshot stage layer

### Solved
- Restored a restrained light-gray stage around each white screenshot frame.
- Kept the offset backplate removed, so only one additional presentation layer returned.
- Added smaller stage padding for mobile.

### Unresolved
- None.

### Disproved
- The presentation needed the decorative offset backplate; the simpler gray stage provides enough separation.

---

## 2026-09-22 — rwkit.com migration preparation

### Solved
- Updated the Profile site metadata, Rencipe links, deployment documentation, and nginx template to use `rwkit.com`.
- Staged new nginx vhosts for the Profile, Agent, InChat, Rencipe, and apex redirect hostnames without activating them before certificates exist.
- Updated Agent and InChat deployment documentation to their new hostnames.

### Unresolved
- DNS records for `rwkit.com` and its application subdomains have not been added yet, so certificates and live nginx activation remain pending.
- The old `renstoolbox.com` hostnames remain active until the new endpoints pass validation.
- Baizhan was excluded after confirming its public DNS points to `147.224.13.78`, not this machine; its local frontend/backend routing is not part of this migration.

### Disproved
- The first Profile build attempt was not a source failure; it used the system Node 24 runtime. Rebuilding with the project-required Node 16 runtime completed successfully.

---

## 2026-09-21 — rwkit.com application cutover

### Solved
- Added DNS for `rwkit.com`, `www`, `agent`, `inschat`, `profile`, and `rencipe`, all targeting `170.9.60.63`.
- Issued Let's Encrypt certificates for the apex and four migrated application hostnames.
- Activated nginx vhosts for Agent, InChat, Profile, Rencipe, and the apex redirect to Profile.
- Moved Rencipe's shared rate-limit and WebSocket directives into one global nginx include so old and new vhosts could coexist without duplicate-directive errors.
- Verified HTTPS roots, Profile and Rencipe health routes, InChat CORS preflight, Agent routes, TLS certificates, and the apex redirects.
- Left Baizhan unchanged because its public DNS points to `147.224.13.78`, not this machine.

### Unresolved
- The four original `renstoolbox.com` vhosts, DNS records, and certificates remain temporarily active until the confirmed cutover cleanup is completed.

### Disproved
- The first nginx activation attempt was not a certificate or routing failure; Rencipe's duplicated global directives were the cause. Centralizing them fixed nginx validation and reload.

---

## 2026-09-21 — retired original application URLs

### Solved
- Disabled the original Agent, InChat, Profile, and Rencipe nginx vhosts while preserving rollback copies as `.conf.disabled`.
- Removed their old Let's Encrypt certificates and renewal entries.
- Reloaded nginx successfully; the new `rwkit.com` vhosts remain active.
- Kept Baizhan's original nginx configuration, DNS, and certificate untouched.

### Unresolved
- The four old DNS A records still point to this server and should be removed at the registrar to complete retirement.

### Disproved
- The original HTTPS URLs no longer present their original certificates or applications after nginx retirement.
