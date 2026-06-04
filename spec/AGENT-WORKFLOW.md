# Agent workflow: project intake → portfolio

Use this when you are an **implementing agent** (or human) adding or updating a platform on the Pete Whelan portfolio.

## Phase 1 — Research & write intake (research agent)

### Inputs to gather

| Input | Why |
|-------|-----|
| Live product URL | Outcome line, phase, validation |
| One-paragraph executive pitch | Hero bullet |
| Problem in the industry (no tech) | `card.problem` |
| What the product *does* with data/AI | `card.intelligence` |
| Commercial outcome / who pays | `card.outcome` |
| Your role + client + partners | `delivery.role` |
| Architecture one-pager | `delivery.architecture` |
| Stack list | `delivery.technologies` |
| AI features (named products) | `delivery.aiCapabilities` |
| Client company name | `engagement.clientCompanyId` (create company node if missing) |

### Writing rules (positioning)

**Voice:** Intelligence platforms that deliver **commercial outcomes** — not “I know GCP”.

| Field | Do | Don't |
|-------|----|-------|
| `card.problem` | Industry pain, cost of status quo | Stack names, “I built…” |
| `card.intelligence` | Platform name, channels, AI product, what intelligence means | Raw function counts (save for `delivery.architecture`) |
| `card.outcome` | Result buyers care about; optional URL | Feature laundry lists |
| `hero.outcome` | ~8–15 words, verb-led | Same as full card outcome |
| `delivery.*` | Terraform, regions, integrations, scale | — |

**Length targets (visible card):**

- `card.problem`: 1–2 sentences (~25–45 words)
- `card.intelligence`: 2–3 sentences (~35–55 words)
- `card.outcome`: 1–2 sentences (~15–35 words)

### Steps

1. Copy [`project-intake.template.yaml`](./project-intake.template.yaml) → `spec/intake/<id>.yaml`
2. Fill all required sections; paste long brief into `source.fullBrief`
3. Compare tone to [`examples/tautsec.yaml`](./examples/tautsec.yaml) and [`examples/aimi.yaml`](./examples/aimi.yaml)
4. Set `featured: true` only for flagship platforms that should appear in hero + home deep dives

---

## Phase 2 — Implement in repo (build agent)

### Checklist

- [ ] **Company exists** — `portfolioGraph.ts` company node + `engagements.ts` → `companyEngagements`
- [ ] **Project node** — `portfolioGraph.ts` → `portfolioNodesRaw[]` entry (`id`, `label`, `summary`, `detail`, `keyPoints`, `tags`, `featured`)
- [ ] **Edges** — `portfolioEdges` from `graph.edgeHints` (dedupe with existing edges)
- [ ] **Engagement** — `engagements.ts` → `projectEngagements[id]`
- [ ] **Narrative** — `narratives.ts` → `nodeNarratives[id]` (if `narrative` provided)
- [ ] **Deep dive** — `cvContent.ts` → `projectDeepDives` object:

```ts
{
  id: '<id>',
  problem: '<card.problem>',
  intelligence: '<card.intelligence>',
  delivery: {
    label: '<team.label>',
    summary: '<team.summary>',
    organizations: [...], // team.organizations
  },
  role: '<delivery.role>',
  architecture: '<delivery.architecture>',
  technologies: [...],
  aiNative: [...], // from delivery.aiCapabilities
  outcome: '<card.outcome>',
  earthbancRelevance: '<delivery.earthbancRelevance || ''>',
}
```

**Team vs solo:** Always fill `team` for featured platforms. Use *team delivery* for client work (Tautsec, Lexi); *primarily solo* only when accurate (AIMI).

- [ ] **Featured list** — if `featured: true`, append `id` to `PLATFORM_DEEP_DIVE_IDS` (order = display order on home)
- [ ] **Hero bullet** — if featured, add to `hero.platforms[]`:

```ts
{ name: '<hero.name>', subtitle: '<optional>', outcome: '<hero.outcome>' }
```

- [ ] **Diagram** — if new flagship, add SVG case in `ArchitectureDiagram.tsx` (optional; reuse pattern from `aimi` / `tautsec` / `lexi`)
- [ ] **Build** — `npm run build`
- [ ] **Do not** change unrelated copy or graph nodes

### Field mapping table

| Intake path | TypeScript destination |
|-------------|------------------------|
| `id` | Same everywhere |
| `displayName` | `portfolioGraph` → `label` |
| `card.problem` | `projectDeepDives[].problem` |
| `card.intelligence` | `projectDeepDives[].intelligence` |
| `card.outcome` | `projectDeepDives[].outcome` |
| `team.*` | `projectDeepDives[].delivery` |
| `delivery.role` | `projectDeepDives[].role` |
| `delivery.architecture` | `projectDeepDives[].architecture` |
| `delivery.technologies` | `projectDeepDives[].technologies` |
| `delivery.aiCapabilities` | `projectDeepDives[].aiNative` |
| `delivery.earthbancRelevance` | `projectDeepDives[].earthbancRelevance` |
| `graph.summary` | `PortfolioNode.summary` |
| `graph.detail` | `PortfolioNode.detail` |
| `graph.keyPoints` | `PortfolioNode.keyPoints` |
| `graph.tags` | `PortfolioNode.tags` |
| `engagement.*` | `projectEngagements[id]` |
| `narrative.*` | `nodeNarratives[id]` |

### Adding a new company

1. Add company to `portfolioNodesRaw` (`type: 'company'`, `companyRole` via engagements)
2. Add `companyEngagements[companyId]`
3. Wire edges: client → project, program-productions → project, pete-whelan → client, etc.

### Page order (do not change unless asked)

`Home.tsx`: Hero → ProjectDeepDive (`#platforms`) → Graph → AiNative → WhyNotCv → SkillClusters → PDF

---

## Phase 3 — Review (review agent)

- [ ] Hero reads as **founder / intelligence platforms**, not job-title CV
- [ ] Card passes **Problem → Intelligence → Outcome** scan in &lt;30 seconds
- [ ] Tech details only in `<details>` collapsible
- [ ] `id` consistent across all four data files
- [ ] No duplicate platform in `hero.platforms` and graph with different names

---

## Prompt snippet for research agents

```text
You are writing a portfolio project intake for Pete Whelan's site.

Read spec/README.md and spec/project-intake.template.yaml.
Output a single YAML file conforming to spec/project-intake.schema.json.

Rules:
- Outcomes before technology on the card fields.
- problem / intelligence / outcome are for executives.
- Put full technical detail in delivery.architecture and source.fullBrief.
- Use kebab-case id; featured only if this is a flagship platform.

Source material:
[paste brief, URLs, notes]
```

---

## Prompt snippet for implement agents

```text
Implement spec/intake/<id>.yaml into the pete-whelan repo.

Follow spec/AGENT-WORKFLOW.md Phase 2 checklist exactly.
Do not refactor unrelated files.
Run npm run build and fix errors.
```
