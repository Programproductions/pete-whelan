# Sprint 2 — AI-Native Portfolio Platform

Branch: `feature/ai-native-portfolio-sprint2` (not merged to `main` — production remains on `main` until you approve).

Preview: connect this branch in Vercel for a preview URL, or run locally with `npm run dev`.

## Changes made

### Graph as the product
- **Hero + graph**: Interactive graph is the first-screen experience (desktop); mobile keeps accordion fallback.
- **Storytelling panel**: Node detail shows what / why / problem / outcome / led-to, grouped related entities, and **relationship path** (narrative or shortest path from Pete).
- **Animated path edges**: Dashed cyan lines on the selected narrative path.
- **Constellations**: Six narrative filters (AI-Native, Cloud, Cyber, Music Tech, Voice AI, Platform Engineering) cluster and highlight relevant nodes.
- **View modes**: Graph · Architecture (layered columns) · Timeline (career spine + milestone strip).
- **Visual polish**: Persistent labels on key nodes, pulse on focus, dimming, lens highlighting, lazy-loaded Three.js chunk.

### AI-native demonstration
- **Why I Built This Instead Of A CV** section.
- **Interactive methodology**: Click each delivery stage for human vs agent responsibilities, artefacts, quality, governance.
- **Architecture deep dives**: SVG system diagrams per featured project.
- **Earthbanc lens**: `?lens=earthbanc` highlights relevant nodes + banner.

### Recruiter mode
- Top toggle: **Interactive** vs **Traditional** (executive summary, projects, skills, PDF).

## Improvements beyond spec
- **Code-split graph**: `GraphScene` loads asynchronously (~926kb separate chunk) so first paint is faster.
- **Narrative paths in data**: Curated paths (e.g. Tautsec → Web4 → Terraform) override generic BFS when they tell a better story.
- **Architecture view** places Pete above layered columns (domains → companies → projects → tech → methodologies).

## Future recommendations
- Add `public/Pete-Whelan-CV.pdf` and real contact links.
- More curated `storyPath` entries for remaining nodes.
- Optional: URL-sync constellation/view mode for shareable links.
- Optional: reduce GraphScene bundle with instanced meshes if node count grows.
- Merge to `main` only when ready to replace production.

## Earthbanc preview URL

```
https://pete-whelan.vercel.app/?lens=earthbanc
```

(After deploying this branch or merging.)
