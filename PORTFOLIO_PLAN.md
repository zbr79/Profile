# Portfolio Plan & Session Notes

Read this first to catch up. Companion file: `EXPERIENCES.md` (append-only problem/solution log).

---

## Current state of this repo (`/home/ubuntu/Profile`, github.com/zbr79/Profile)

Live at: **https://profile.renstoolbox.com** (served from this VM, public IP `170.9.60.63`, ARM64/aarch64)

### Stack

| Component | Tech | Location |
|---|---|---|
| Frontend | Gatsby 3 (React 17, styled-components), static build | `frontend/` |
| Backend | Express 5 (TypeScript) | `backend/` (port 5000) |
| Serving | nginx serves `frontend/public` statically; `/api/` → 127.0.0.1:5000 | `/etc/nginx/sites-available/profile.renstoolbox.com` |
| Process | PM2 `profile-backend` only (frontend is static, no runtime) | `ecosystem.config.js` |
| TLS | Let's Encrypt, certbot webroot | `/etc/letsencrypt/live/profile.renstoolbox.com/` |

The frontend is a copy of **Brittany Chiang's portfolio template** (`github.com/bchiang7/v4`, Gatsby 3). We use it as a learning target for CSS/design craft. Plan is to modernize later (Next.js + TypeScript is the eventual target; Gatsby is dead-ended).

### BUILD REQUIREMENTS (critical for future sessions)

- Gatsby 3 does NOT run on Node 22 → must use **Node 16 via nvm**:
  `export NVM_DIR=$HOME/.nvm && . $NVM_DIR/nvm.sh && nvm use 16`
- VM is **ARM64**; Gatsby 3 native deps are x86-only. System packages installed:
  `build-essential pkg-config libvips-dev pngquant gifsicle potrace libjpeg-turbo-progs`
- mozjpeg + pngquant compiled from source; sharp built via node-gyp against system libvips
- Use **yarn**; install with `--ignore-scripts`, then manually run native postinstalls
- Build env vars: `PNGQUANT_BINARY=/usr/bin/pngquant MOZJPEG_BINARY=/usr/bin/cjpeg GIFSICLE_BINARY=/usr/bin/gifsicle POTRACE_BINARY=/usr/bin/potrace`
- Full reproducible steps are in `README.md`

Rebuild command (from `frontend/`):

```bash
export NVM_DIR=$HOME/.nvm && . $NVM_DIR/nvm.sh && nvm use 16
export PNGQUANT_BINARY=/usr/bin/pngquant MOZJPEG_BINARY=/usr/bin/cjpeg \
       GIFSICLE_BINARY=/usr/bin/gifsicle POTRACE_BINARY=/usr/bin/potrace
npm run build   # outputs to public/, nginx serves it automatically
```

### Content state

- Experience tab section repurposed as **Education** (nav renamed): MS Software Engineering (CSU Fullerton, conferred May 2026, GPA 3.80) + BS Computer Science (CSU Fullerton, Summer 2023) — real coursework bullets filled
- Projects grid shows placeholder entries (`content/projects/`) until real content is ready
- Design: Apple-style black & white light theme (reskin complete — white/#f5f5f7, system fonts, pill buttons, no side rails, no numbered headings). Accent color decision deferred
- Placeholders to fill: photo (`me.jpg`), resume PDF (later), projects grid content (Rencipe + AI project)
- Deleted from template: her jobs, featured section, 34 projects, blog posts (blog kept empty), resume.pdf, slides, photos/favicons, GA, logo letter
- `gatsby-node.js` has `createSchemaCustomization` so the build works with an empty blog
- Placeholder images generated with sharp (me.jpg, logo.png, og.png)

---

## Flagship project (user's real work)

### Rencipe — github.com/zbr79/Rencipe (cloned at `/home/ubuntu/opencode-tmp/Rencipe`)

Full-stack recipe app: Next.js 16 + React 19, Express 5 + Mongoose 9, Cloudinary uploads, meal plans, weekly plans, cart/favorites/drafts, en/zh i18n (next-intl), PM2 deploy script.
**Assessment: the user's "business-shaped" project.** Strengths: real product complexity, current stack, bilingual.
Gaps to fix (the upgrade project): UI redesign (main complaint), no auth (jwt unused, trusts client `authorId`), zero tests, no root README, no AI feature, CORS `*`.
**Decision: use this as the full-stack portfolio project** (after upgrade). Do NOT abandon — backend is the hard part and already done.

---

## Infrastructure notes (this VM)

- Public IP: 170.9.60.63 (private 10.0.0.253), ARM64, Ubuntu
- GitHub auth on VM: account **AndyR79S** (token via GIT_ASKPASS); has collaborator access to zbr79/Profile
- DNS: `profile.renstoolbox.com` → 170.9.60.63 (Namecheap)
- nginx protections verified: 444 exploit-path blocks, 403 query-string filter, rate limits (20r/s general, 10r/m on `/api/auth`), HSTS + security headers, method allowlist, `client_max_body_size 20M`, `/static/` immutable cache
- NOTE: location-level `add_header` overrides server-level ones — repeat headers per-location
- Node versions: system v22; nvm has v16.20.2 (Gatsby builds)
- certbot: two LE accounts merged under `/etc/letsencrypt/accounts/`

### Bug found & fixed (worth remembering)

nginx `return 301` at **server level** executes during the rewrite phase BEFORE location matching → `/.well-known/acme-challenge/` could never be served, breaking cert issuance. Fixed by moving redirects into `location /`. Not DNS cache (initial wrong theory).

---

## Roadmap

Job-readiness plan — 4 pieces, built in order. Total target: ~5 weeks.

### 1. Profile site — in progress (~1 day left)

- [x] Replace `[Placeholder]` hero: name, pitch, intro paragraph (Andy Ren)
- [x] Write About section story (3 paragraphs)
- [x] Social links in `frontend/src/config.js` (GitHub only; others removed)
- [x] Real email in `frontend/src/config.js` (zhibinren79@gmail.com)
- [x] Remove previous project entries from Experience + Projects sections (replaced with placeholders)
- [x] Education section: repurposed Jobs section, CSU Fullerton MS + BS entries with real coursework bullets
- [x] Footer credit name
- [x] SEO title/description in `gatsby-config.js`
- [ ] Your photo (replace generated `me.jpg`)
- [ ] Resume PDF (re-add resume button later)

### 2. Pure frontend project (~1 week)

- [ ] Choose concept: data dashboard (recommended) or animated landing page
- [ ] Build + deploy publicly
- [ ] Polish: responsive, a11y, empty/loading/error states, Lighthouse green

### 3. Rencipe upgrade (~2 weeks)

- [ ] UI redesign (main work — current UI is the weakness)
- [ ] Real auth (currently trusts client `authorId`; jwt installed but unused)
- [ ] Controller-level tests
- [ ] Root README: screenshots, demo URL, architecture, setup
- [ ] Input validation + CORS/rate-limit cleanup
- [ ] Deploy publicly with live demo

### 4. Standalone AI project (~1 week) — pick later

Rules: structured output, human edit/verify loop, clear single job (NOT a chatbot wrapper). Must be standalone (NOT a Rencipe sub-project).

Candidates:
- [ ] SnapRecipe — photo → AI-generated recipe card + share link (most demo-able)
- [ ] Chat-with-documents — RAG Q&A with cited sources (best for showing RAG)
- [ ] Inbox Triager — messy text → structured extraction with confidence + edit UI
- [ ] Structured summarizer — long text → headline/bullets/actions, streaming

### Supporting layer (as needed, not projects)

- [ ] English one-line resume entries for prior personal projects (public repos as backup evidence)
- [ ] Resume PDF
- [ ] LinkedIn + GitHub profile polish
- [ ] Blog posts — OPTIONAL, only if time (do not prioritize)

### Order rationale

Site first (closest to done) → frontend project (design skill needed BEFORE redesigning Rencipe) → Rencipe (apply those design skills) → AI last (no dependencies).

### Decisions locked

- Prior game-related projects: off the site, keep as resume evidence
- 2 flagship projects + profile site = enough (3 is ideal, no more scope)
- OCR topic dropped — do not raise again
- AI project must be standalone

### Next session starters

1. Finish profile site placeholders (roadmap §1)
2. Pick + scope the pure frontend project
3. Plan Rencipe UI redesign
4. Pick the AI project
