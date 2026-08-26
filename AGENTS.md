# Profile Project - OpenCode Working Instructions

## Task Handling

- Execute numbered instructions point-by-point, in order.
- End each session with a chart: Point | What Was Done | What to Test.
- IMPORTANT: Always re-read the file's newest contents immediately before editing it — even if it was read earlier in the same session. Files can change between reads.
- Record every solved problem / unresolved issue / disproved approach in `EXPERIENCES.md`.
- Respond in English even if the user writes Chinese, unless Chinese output is requested.
- Ask, don't guess: when requirements are ambiguous (names, emails, design choices), ask the user instead of inventing values.
- Report, don't fake: if a task can't be completed (missing asset, blocked environment), report what's missing instead of creating a fake substitute.

## Build & Verification

- After each numbered point: run the project's builds again before replying.
- Restart the app process only after the newest successful build.
- Confirm the process is running the newest build with no startup-blocking errors.
- Restart only this project's PM2 apps — never `pm2 restart all`, never touch other projects' processes.
- Port conflict: `lsof -ti:PORT | xargs kill -9`, then restart.
- Don't skip the build unless no code changed.

## Code Quality

- ALWAYS use modular design: extract reusable components/hooks/utils into their own files instead of growing a single file.
- If a file exceeds ~300 lines, stop and consider splitting it into smaller modules.
- Never dump unrelated logic into an existing file — create a new module with a clear name.
- Follow existing code style in the file you're editing (imports, naming, patterns).

## Guardrails

- Scope discipline: only touch files needed for the task — don't refactor or "clean up" unrelated code on the way.
- Never assume a library is available: check `package.json` / existing imports before using it; don't add dependencies without checking first.
- Never guess commands or URLs: verify scripts exist in `package.json`, and check URLs/ports (e.g. `curl -I`) before relying on them.

## Git & Assets

- Never commit unless explicitly requested; "commit once" = exactly one commit.
- Don't create icons/art assets unless requested; report missing asset names instead.

## Testing

- Run E2E tests only for large/high-impact changes or when explicitly asked.
- Never hardcode passwords/tokens in repo files or instructions.
