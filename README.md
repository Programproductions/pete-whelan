# Pete Whelan — AI-Native Interactive CV

Interactive portfolio and CV for Pete Whelan: a data-driven 3D career graph, project deep dives, and AI-native methodology — built from spec with Vite, React, TypeScript, Tailwind, and React Three Fiber.

**Tagline:** Built from a spec. Structured as a graph. Designed for AI-native engineering.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- React Three Fiber + Drei
- Framer Motion + Zustand

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework preset: **Vite** (or use the included `vercel.json`).
4. Production deploys from `main`; preview deploys on feature branches.

## PDF CV

Place a static PDF at `public/Pete-Whelan-CV.pdf`. The download button enables automatically when the file is present.

## Content model

All graph nodes and edges live in `src/data/portfolioGraph.ts`. Page copy and project deep dives are in `src/data/cvContent.ts`.
