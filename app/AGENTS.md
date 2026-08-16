<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project: Portfolio (Nanthaphat Phetsanghan / lsupwp)

Personal portfolio website. Next.js 16 (App Router, Turbopack) + React 19 +
TypeScript + Tailwind CSS v4 + daisyUI 5 + Framer Motion.

## Structure

- Source root: `app/` (this is a single Next.js app; `@/*` maps to `./app/*`).
- `app/app/page.tsx` — home page (`/`).
- `app/app/certificates/page.tsx` — certificates page (`/certificates`).
- `app/app/layout.tsx` — root layout: metadata, theme init script, `<html>` with `suppressHydrationWarning`.
- `app/app/globals.css` — Tailwind + daisyUI config, primary color, `@custom-variant dark`.
- `app/app/components/` — UI components (theme-toggle, icons, reveal, certificate-card, certificates-view).
- `app/app/data/` — all content/data (`projects.ts`, `certificates.ts`, `all-certificates.ts`).
- `app/public/` — static assets (`profile.jpeg`, `Certificate/` files + `Certificate/preview/` PNG renders).

## Constraints & Conventions

- **No code comments** unless explicitly asked. Use clear names instead.
- Read `node_modules/next/dist/docs/` before using unfamiliar Next.js APIs — Next 16 has breaking changes vs older versions.
- Keep content in `app/app/data/*.ts`; do not hardcode copy in components.
- **Theming**: daisyUI light/dark via `data-theme` on `<html>`, primary `#2563eb`, dark default, persisted in `localStorage` (`theme`). The `dark:` variant is bound to `data-theme="dark"`. Do not add `data-theme` to JSX — the inline head script + toggle own it (hydration).
- **Images**: use `next/image` for static images (e.g. profile). Certificate PDFs are previewed as generated PNGs in `public/Certificate/preview/`; use `<img>` there (PDFs cannot render in `next/image`).
- **Badges**: long text badges need `h-auto whitespace-normal py-1` to avoid fixed-height overflow (see skills/project tech badges).
- Do not commit `node_modules`, `.next/`, or `.env*` (covered by `.gitignore`).

## Commands

```bash
npm run dev     # start dev server (http://localhost:3000)
npm run lint    # eslint
npm run build   # production build
npm run start   # serve production build
```

Run `npm run lint` and `npm run build` after changes to verify.
