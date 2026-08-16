# Portfolio — Nanthaphat Phetsanghan (lsupwp)

Personal portfolio website for a cybersecurity student & security developer.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [daisyUI 5](https://daisyui.com)
- [Framer Motion](https://motion.dev) (section reveals + modal animations)

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

Other commands:

```bash
npm run lint       # eslint
```

## Project Structure

```
app/
├── app/                        # Next.js App Router source
│   ├── layout.tsx              # Root layout (metadata, theme init script)
│   ├── page.tsx                # Home page (/)
│   ├── globals.css             # Tailwind + daisyUI theme config
│   ├── certificates/
│   │   └── page.tsx            # /certificates page
│   ├── components/
│   │   ├── theme-toggle.tsx    # Light/dark toggle
│   │   ├── icons.tsx           # Inline SVG icons
│   │   ├── reveal.tsx          # Framer Motion scroll reveal wrapper
│   │   ├── certificate-card.tsx# Home highlight card (hover preview + flip)
│   │   └── certificates-view.tsx# Full certificate grid + modal
│   └── data/
│       ├── projects.ts         # Featured projects data
│       ├── certificates.ts     # Home highlight certificates (3)
│       └── all-certificates.ts # All certificates for /certificates
├── public/
│   ├── profile.jpeg            # Profile image
│   └── Certificate/            # Certificate files + previews
│       ├── CTF/
│       ├── E-Learning/
│       ├── Hackthon/
│       └── preview/            # Rendered PNG previews (for PDFs)
├── next.config.ts
├── tsconfig.json               # Path alias: @/* -> ./app/*
└── package.json
```

## Theming

- daisyUI `light` / `dark` themes, controlled via `data-theme` attribute on `<html>`.
- Primary color is `#2563eb` (set in `app/globals.css` for both themes).
- Dark is the default; the selected theme is persisted in `localStorage` (`theme`).
- The init script in `layout.tsx` runs pre-paint to avoid a flash; `suppressHydrationWarning` is set on `<html>` because of it.
- The `dark:` Tailwind variant is bound to `data-theme="dark"` via `@custom-variant` in `globals.css`.

## Content

All page content lives in `app/data/*.ts` — edit those files to change projects,
certificates, skills, etc. Certificate previews for PDFs are generated PNGs kept
in `public/Certificate/preview/`.
