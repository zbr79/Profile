# Profile

Service for `profile.renstoolbox.com` — Next.js frontend + Express backend behind nginx.

## Stack

| Component | Port | Dir |
|---|---|---|
| Next.js frontend | 3000 | `frontend/` |
| Express API | 5000 | `backend/` |

## Local development

```bash
# backend
cd backend && npm install && npm run dev     # http://localhost:5000

# frontend (another terminal)
cd frontend && npm install && npm run dev    # http://localhost:3000
```

## Production build

```bash
cd backend && npm install && npm run build
cd ../frontend && npm install && npm run build

pm2 start ecosystem.config.js   # from repo root
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
- HMR locked to dev IP (`/_next/webpack-hmr`)
- HSTS + `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`
- No-store caching on API, immutable caching on `/_next/static/`

## Deploy on the server

1. **DNS:** create `A` record `profile.renstoolbox.com` → server public IP, wait for propagation:

   ```bash
   dig +short profile.renstoolbox.com
   ```

2. **Rate-limit zones:** add the lines from `nginx/nginx.conf.rate-limit.snippet.txt`
   to the `http {}` block of `/etc/nginx/nginx.conf` and set `server_tokens off;`.

3. **Install site config:**

   ```bash
   sudo cp nginx/profile.renstoolbox.com.conf /etc/nginx/sites-available/profile.renstoolbox.com
   sudo ln -s /etc/nginx/sites-available/profile.renstoolbox.com \
              /etc/nginx/conf.d/profile.renstoolbox.com.conf
   ```

4. **Certificate (after DNS resolves):**

   ```bash
   sudo certbot certonly --webroot -w /var/www/acme -d profile.renstoolbox.com
   sudo nginx -t && sudo systemctl reload nginx
   ```

5. **Verify:**

   ```bash
   curl -I https://profile.renstoolbox.com/                       # 200
   curl -o /dev/null -w '%{http_code}\n' https://profile.renstoolbox.com/phpmyadmin   # 000 (444)
   curl -o /dev/null -w '%{http_code}\n' 'https://profile.renstoolbox.com/?x=base64'  # 403
   curl -s https://profile.renstoolbox.com/api/health             # {"status":"ok",...}
   ```
