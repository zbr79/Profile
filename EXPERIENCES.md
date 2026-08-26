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
