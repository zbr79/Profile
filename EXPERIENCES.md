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
