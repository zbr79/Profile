# Profile

Service for `profile.renstoolbox.com` — Gatsby static frontend + Express backend behind nginx.

Based on the Brittany Chiang v4 portfolio template (Gatsby 3 / styled-components).

## Stack

| Component | Type | Dir |
|---|---|---|
| Frontend | Gatsby 3 static site (build → `public/`) | `frontend/` |
| API | Express (port 5000) | `backend/` |

The frontend is served by nginx directly from `frontend/public` (no Node runtime).
Only the API runs under PM2.

## Prerequisites (this VM is ARM64 — see below)

- Node 16 via nvm (Gatsby 3 does not run on Node 22):

  ```bash
  nvm install 16 && nvm use 16
  corepack enable   # or: npm i -g yarn@1.22.22
  ```

- ARM64 system image tools (Gatsby 3's native binaries are x86-only;
  these get compiled from source or resolved via env vars):

  ```bash
  sudo apt-get install -y build-essential pkg-config libvips-dev \
      pngquant gifsicle potrace libjpeg-turbo-progs
  ```

## Build (frontend)

```bash
export NVM_DIR=$HOME/.nvm && . $NVM_DIR/nvm.sh && nvm use 16
export PNGQUANT_BINARY=/usr/bin/pngquant
export MOZJPEG_BINARY=/usr/bin/cjpeg
export GIFSICLE_BINARY=/usr/bin/gifsicle
export POTRACE_BINARY=/usr/bin/potrace

yarn install --ignore-scripts        # skips broken native postinstalls

# manual native builds:
(cd node_modules/mozjpeg     && node lib/install.js)   # compiles from source on arm64
(cd node_modules/pngquant-bin && node lib/install.js)
(cd node_modules/sharp       && node install/libvips && node install/dll-copy && (node ../.bin/prebuild-install || node-gyp rebuild))

npm run build                          # outputs to public/
```

Serve: nginx serves `frontend/public` statically (see `nginx/` config).

## Backend

```bash
cd backend && npm install && npm run build
pm2 start ecosystem.config.js
```

## nginx

Full protected config: `nginx/profile.renstoolbox.com.conf`
Rate-limit zones (required): `nginx/nginx.conf.rate-limit.snippet.txt`

Protections included:

- HTTP → HTTPS 301 redirect; TLS 1.2/1.3 only
- `444` hard-block of exploit/scanner paths (`exec`, `cmd`, `shell`, `cgi-bin`, `phpmyadmin`, `wp-admin`, `vendor`, `.env`, ...)
- Query-string filter (`child_process`, `base64`, `curl`, `wget`, `/proc/self`, `/etc/passwd`, `id_rsa`, `.env`, ...) → 403
- Rate limiting: 20r/s general, 10r/m on `/api/auth` (brute-force)
- Method allowlist on `/` (GET/HEAD/OPTIONS only) → 405
- `client_max_body_size 20M`
- HSTS + `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`
- No-store caching on API, immutable caching on `/static/`

### Deploy steps

1. **DNS:** `A` record `profile.renstoolbox.com` → server public IP
2. **Rate-limit zones:** add lines from `nginx/nginx.conf.rate-limit.snippet.txt`
   to the `http {}` block of `/etc/nginx/nginx.conf` (+ `server_tokens off;`)
3. **Install config:**

   ```bash
   sudo cp nginx/profile.renstoolbox.com.conf /etc/nginx/sites-available/profile.renstoolbox.com
   sudo ln -s /etc/nginx/sites-available/profile.renstoolbox.com \
              /etc/nginx/conf.d/profile.renstoolbox.com.conf
   ```

4. **Cert:**

   ```bash
   sudo certbot certonly --webroot -w /var/www/acme -d profile.renstoolbox.com
   sudo nginx -t && sudo systemctl reload nginx
   ```

5. **Verify:**

   ```bash
   curl -I https://profile.renstoolbox.com/                    # 200
   curl -o /dev/null -w '%{http_code}\n' https://profile.renstoolbox.com/phpmyadmin   # 000 (444)
   curl -o /dev/null -w '%{http_code}\n' 'https://profile.renstoolbox.com/?x=base64'  # 403
   curl -s https://profile.renstoolbox.com/api/health          # {"status":"ok",...}
   ```

## Notes

- nginx needs `o+x` on the path to `frontend/public` (home dirs are 750 by default):

  ```bash
  sudo chmod o+x /home/ubuntu /home/ubuntu/Profile /home/ubuntu/Profile/frontend /home/ubuntu/Profile/frontend/public
  ```
