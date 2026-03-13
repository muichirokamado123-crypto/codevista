# CodeVista — Project Conventions

## Overview
Business website for CodeVista, a Pakistan-based tech company offering web development, AI solutions, automation, and social media management.

## Tech Stack
- **Framework:** Next.js 16.1 (App Router, Server Components)
- **Language:** TypeScript (strict mode)
- **Styling:** TailwindCSS v4
- **UI Components:** MagicUI + shadcn/ui
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Email:** Nodemailer (SMTP via Namecheap Private Email)
- **Icons:** Lucide React

## Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure
- `src/app/` — Pages and API routes (App Router)
- `src/components/layout/` — Navbar, Footer
- `src/components/sections/` — Page sections (hero, services, stats, etc.)
- `src/components/ui/` — shadcn/MagicUI components (auto-generated, do not edit)
- `src/lib/` — Utilities, constants, email config
- `public/` — Static assets (logo, favicon, images)
- `docs/` — Project documentation

## Coding Standards
- Use functional components with TypeScript
- Use `cn()` helper from `src/lib/utils.ts` for conditional classes
- Mobile-first responsive design (sm → md → lg → xl breakpoints)
- Server Components by default; add `"use client"` only when needed
- Keep components small and focused
- Services data lives in `src/lib/constants.ts`

## Brand
- **Name:** CodeVista
- **Domain:** codevista.com
- **Colors:** Primary `#2563eb`, Accent `#0ea5e9`, BG `#ffffff`, Text `#1e293b`
- **Font:** Inter (via next/font/google)
- **Location:** Bahria Town Phase 7, Rawalpindi, Pakistan

## Environment Variables
Required in `.env.local`:
```
SMTP_HOST=mail.privateemail.com
SMTP_PORT=465
SMTP_USER=info@codevista.com
SMTP_PASS=<password>
CONTACT_EMAIL=info@codevista.com
```
