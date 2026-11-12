# Deploying Fento Site

Repository: `/home/basecamp_noriad/dev/fento-site`

## Pre-Deploy Local Checks

1. `npm install`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run build`

## Vercel Project Settings

1. Framework preset: `Next.js`
2. Install command: `npm install`
3. Build command: `npm run build`
4. Start command: `npm run start`
5. Root directory: repository root (`/`)
6. Production branch: `main`

## Deploy Steps

1. Push latest `main` changes to GitHub.
2. In Vercel, open the `fento-site` project.
3. Trigger deploy from `main` (or let auto-deploy run).
4. Wait for build to complete.
5. Open production URL and run the smoke checks.

## Production Smoke Checks

1. `https://<production-domain>/` loads and primary CTA works.
2. `https://<production-domain>/menu` shows prices and "Last updated" line.
3. `https://<production-domain>/visit` renders both locations and directions links.
4. `https://<production-domain>/catering` inquiry CTA opens Instagram.
5. `https://<production-domain>/robots.txt` and `/sitemap.xml` load.
6. `/journal` returns 404.

## Notes

- Keep `site.siteUrl` in `src/content/site.ts` aligned with the active production domain.
- If domain cutover happens, confirm DNS and then recheck canonical URLs and sitemap.
