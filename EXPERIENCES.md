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
