# Imad Hassan — Portfolio (Next.js)

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
```
## Deploy
Push to GitHub and import the repo on Vercel (framework: Next.js, no extra settings).

## Edit content
- Text, projects, skills, links: `lib/data.ts` (skills, projects, experience, education) and `app/page.tsx` (About, AI intro, Contact).
- Intro animation (PORTFOLIO text, search bar, project cards): `components/Intro.tsx` and the `STAGE` part of `app/globals.css`.
- Photo: replace `public/imad.webp` with a transparent-background PNG/WebP (keep the same name, or update `Intro.tsx`).
