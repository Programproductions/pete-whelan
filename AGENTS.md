# AGENTS.md

Guidance for AI agents working in this repository.

## Cursor Cloud specific instructions

### Product

Single frontend app: **pete-whelan-cv** — an interactive portfolio/CV (Vite + React 19 + TypeScript). No backend, database, or Docker services in this repo.

### Dependencies

- **Node.js** (v22+ works; repo uses npm with `package-lock.json`).
- After clone or pull: `npm install` (also runs automatically via the Cloud VM update script).

### Run locally

| Command | Purpose |
|--------|---------|
| `npm run dev` | Dev server at **http://localhost:5173** (use `--host 0.0.0.0` in Cloud VMs) |
| `npm run build` | `tsc -b` + production bundle to `dist/` |
| `npm run preview` | Serves `dist/` on **http://localhost:4173** (default) |
| `npm run lint` | ESLint over the project |

Start the dev server in **tmux** for long-running sessions (e.g. `npm run dev -- --host 0.0.0.0`).

### Lint / tests

- **Lint:** `npm run lint` — as of setup, two `react-hooks/set-state-in-effect` findings in `CareerGraphViewer.tsx` and `useMediaQuery.ts` may fail CI-style lint until addressed.
- **Tests:** No `test` script or test runner in `package.json`; validate via lint, build, and manual/browser checks.

### Hello-world verification

1. `npm run dev` → open `http://localhost:5173`
2. Toggle **Traditional** ↔ **Interactive** in the header
3. Optional: `?lens=earthbanc` for lens highlighting

Desktop WebGL is used for the 3D career graph; mobile falls back to accordion UI.

### Deploy

Production deploy is Vercel (see root `README.md` and `vercel.json`). Not required for local development.
