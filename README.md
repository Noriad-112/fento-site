# Fento website — www.thefento.com

Next.js + TypeScript + Tailwind CSS v4. Vercel deploys automatically when `main` changes.

## Where things are

| Folder / file | What's in it |
|---|---|
| `src/content/` | **All the words, prices and hours.** `menu.ts` = menu + sauces, `site.ts` = locations, opening hours, page texts, SEO |
| `src/app/` | The pages: `page.tsx` (home), `menu/`, `story/`, `visit/`, `catering/` |
| `src/components/` | Building blocks: `layout/` (header, footer), `ui/` (pills, menu cards, banners…), `seo/` |
| `public/photos/` | Photos **used on the site** (web-sized) |
| `docs/` | Deploy notes, launch checklist, design specs |
| `_assets/` | **Not part of the site** (kept out of git): `logos/`, `photos-originals/`, `inspiration/`, `brainstorm-mockups/`, `unused-web-images/` |
| `AGENTS.md`, `CODEx-RULES.md` | Rules for AI coding assistants |
| everything else in the root | Config files: leave as they are |

## Common edits
- **Change a price or dish:** `src/content/menu.ts`
- **Change opening hours or address:** `src/content/site.ts` → `locations`
- **Add a photo:** export it web-sized into `public/photos/`, then reference it as `/photos/name.jpg`

## Run it
```bash
npm install
npm run dev          # http://localhost:3000
npm run lint && npm run typecheck
```
Windows build: `NEXT_DISABLE_TURBOPACK=1 NEXT_PRIVATE_DISABLE_TURBOPACK=1 npx next build` (from Git Bash).
