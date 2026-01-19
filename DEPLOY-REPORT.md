# Deploy Report — Fento Site

## Build status
- Lint: pass (eslint)
- Typecheck: pass (`tsc --noEmit --incremental false`)
- Build: pass (required elevated permissions to write `.next`)

## What broke and fixes applied
- `npm run typecheck` failed due to write permissions for `tsconfig.tsbuildinfo`.
  - Fixed by adding `--incremental false` to the typecheck script.
- `npm run build` failed because `.next` could not be created in the repo.
  - Ran build with elevated permissions to allow writing build artifacts.
  - This indicates the repo is not writable by default for the current user.

## Files changed
- `package.json`
  - Added `typecheck` script: `tsc --noEmit --incremental false`.
  - Kept `lint` as `eslint` since `next lint` failed with a project directory error.

## Vercel deployment notes
- Install command: `npm install`
- Build command: `npm run build`
- Start command: `npm run start`
- App type: standard Next.js app router project.
- Environment variables: none required at this time.

## Outstanding issues / TODOs
- Repo write permissions: local builds require elevated permissions to write `.next`.
  - Recommended: ensure `/home/basecamp_noriad/dev/fento-site` is writable by the current user to avoid needing sudo.
- Copy polish and real opening hours remain TODOs in content (not blocking deploy).
