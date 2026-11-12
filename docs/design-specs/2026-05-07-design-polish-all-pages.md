# Design Polish — All Pages
Date: 2026-05-07
Approach: Option C — Redesign

## Context

Repo: `Noriad-112/fento-site` (Next.js + TypeScript + Tailwind, auto-deploy on push to `main`)
Scope: `/`, `/menu`, `/visit`, `/catering`

Design references: salsashop.com, tacombi.com, sweetgreen.com, superiorityburger.com

### Problems to fix
- Site is too text-heavy — copy needs trimming, not new content
- No visual structure — sections don't have a single clear job
- No imagery — photo slots designed in now, real photos drop in later without touching structure
- Too many CTAs competing — reduce to 2 max per section

### Constraints
- No new dependencies (CODEx-RULES.md)
- No route deletions without asking
- Color palette unchanged: `--accent: #1f4b3f`, `--background: #f6f2ec`
- No photos available yet — use `PhotoSlot` placeholder component

---

## New Shared Component: `PhotoSlot`

File: `src/components/ui/PhotoSlot.tsx`

A styled placeholder that renders a soft green (`--accent-soft`) rounded box at a given aspect ratio. Accepts an optional `alt` and `aspectRatio` prop. When photos arrive, replace with `next/image` — no other file changes needed.

```
<PhotoSlot aspectRatio="16/9" alt="Fento Foodhallen stand" />
```

---

## Home (`src/app/page.tsx`)

### Hero section
- Full-bleed dark green panel (`--accent` background)
- White eyebrow: `Amsterdam · Foodhallen`
- Serif headline: `Clean, bold, made in-house.`
- 2 CTAs only: `See the menu` (primary, white) + `Visit us` (secondary, outlined white)
- `PhotoSlot` fills the background when photos arrive (absolute positioned, object-cover)

### Marquee strip
- Thin horizontal band below hero, `--surface` background
- Text: `Vegan-built · In-house sauces · Gluten-aware · Amsterdam`
- Uppercase, small tracking, slate-500

### Location cards
- 2-col grid
- Each card: `PhotoSlot` on top (16/9), location name (serif), hours in one line, 1 CTA
- Foodhallen CTA: `Explore menu` → `/menu`
- Sauvage Space CTA: `Plan an event` → `/catering`

---

## Menu (`src/app/menu/page.tsx`)

### Header
- Keep eyebrow + title + single-sentence description (trim current 2-sentence copy to 1)

### Dietary strip
- Replace bulleted list with a row of pill tags using `--accent-soft` / `--surface-muted`
- Pills: `Vegan-built`, `Dairy-free options`, `Gluten-free options`, `Ask staff for allergens`

### Menu section cards
- Keep 4-col grid
- Add `PhotoSlot` (4/3 ratio) at top of each card
- Item name + price on same line, detail text below in slate-500
- Remove `menu.note` and `menu.ingredientsSourceNote` lines (redundant with header copy)

### Sauces
- Replace `<ul>` grid with a compact horizontal pill/tag row
- Show name only — remove ingredients text from pills (too dense at small size)

---

## Visit (`src/app/visit/page.tsx`)

### Header
- Keep eyebrow + title + single-line shared note (already short, fine as-is)

### Location cards
- 2-col grid
- Each card: `PhotoSlot` on top (3/2 ratio), location label (uppercase small), serif name, address, hours grid, 2 CTAs
- Hours rendered as a 2-col grid (day range left, time right) instead of a flat list
- CTAs: `Get directions` (primary) + context CTA (Menu for Foodhallen, Plan an event for Sauvage)

---

## Catering (`src/app/catering/page.tsx`)

### Header
- Keep existing eyebrow + headline + description (no copy changes)

### Photo slot
- `PhotoSlot` (16/9) between header and tags

### Offer tags
- Row of 3 pills: `Office catering`, `Private events`, `De Hallen collabs`

### Inquiry
- Keep existing inquiry paragraph (trimmed to 1 sentence)
- Single CTA: `Send inquiry on Instagram`

---

## File plan

| Action | File |
|---|---|
| Create | `src/components/ui/PhotoSlot.tsx` |
| Edit | `src/app/page.tsx` |
| Edit | `src/app/menu/page.tsx` |
| Edit | `src/app/visit/page.tsx` |
| Edit | `src/app/catering/page.tsx` |

No changes to `src/content/`, `src/components/layout/`, or `package.json`.

---

## Definition of done

- `npm run lint && npm run typecheck && npm run build` all pass
- Smoke test passes on all 4 URLs after deploy
- Photo slots render cleanly without real images
