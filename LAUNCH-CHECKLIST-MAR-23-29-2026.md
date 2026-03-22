# Fento Launch Checklist (March 23-29, 2026)

## Content Lock

1. Confirm final menu item names and prices with operator.
2. Confirm opening hours for both locations in `src/content/site.ts`.
3. Confirm the active inquiry channel (Instagram URL) is correct.
4. Confirm dietary and allergen statements with kitchen lead.

## Site QA

1. Desktop and mobile pass on `/`, `/menu`, `/visit`, `/catering`, `/story`.
2. Check button links, especially maps and Instagram.
3. Verify `/journal` is not indexed and returns 404.
4. Verify menu "Last updated" date matches the latest menu change.

## Technical QA

1. Run `npm run lint`.
2. Run `npm run typecheck`.
3. Run `npm run build`.
4. Validate `robots.txt` and `sitemap.xml` include only active pages.

## Launch Day

1. Deploy `main` in Vercel.
2. Run production smoke checks from `DEPLOYING.md`.
3. Update `src/content/site.ts` `siteUrl` if production domain changed.
4. Capture post-launch proof screenshot set for key pages.

## Post-Launch (Within 24 Hours)

1. Fix any copy or price corrections from first-day feedback.
2. Re-run lint/typecheck/build before redeploy.
3. Log all menu changes in `/home/basecamp_noriad/TKHome/work/fento-menu/notes.md`.
