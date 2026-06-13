# MIITJEE Website

MIITJEE is Jharkhand's leading coaching institute for JEE, NEET, and Foundation programmes. This repository contains the source code for the official MIITJEE website.

## Tech Stack
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database / Backend**: [Supabase](https://supabase.com/)

## Getting Started

First, install dependencies:
```bash
pnpm install
```

Then, run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture

- `src/app`: Next.js App Router pages and API routes.
- `src/components`: Reusable UI components.
- `src/lib`: Utilities, constants, and Supabase client configurations.
- `supabase/migrations`: Database schema definitions and migrations.

## Scripts
- `pnpm dev`: Start the development server.
- `pnpm build`: Build for production.
- `pnpm start`: Start the production server.
- `pnpm lint`: Run ESLint.
