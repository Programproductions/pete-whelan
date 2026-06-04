# Portfolio project intake (spec-driven)

This directory defines how **other agents** (or humans) describe a platform/project so it can be merged into Pete Whelan's interactive portfolio without improvising structure or tone.

## Files

| File | Purpose |
|------|---------|
| [`project-intake.schema.json`](./project-intake.schema.json) | JSON Schema for validation |
| [`project-intake.template.yaml`](./project-intake.template.yaml) | Empty form — copy per project |
| [`examples/tautsec.yaml`](./examples/tautsec.yaml) | Reference intake (distilled from full product brief) |
| [`examples/aimi.yaml`](./examples/aimi.yaml) | Shorter reference intake |
| [`AGENT-WORKFLOW.md`](./AGENT-WORKFLOW.md) | Step-by-step: intake → code changes |

## Quick rules (executive positioning)

1. **Outcomes before tech** — Problem / Intelligence / Outcome are what visitors read first.
2. **No résumé voice** — Write what the *platform* does for the *industry*, not "I built GCP".
3. **Role & architecture** belong in the collapsible / graph detail layer, not the card headlines.
4. **One commercial sentence** for the hero platform bullet (`hero.outcome`).
5. **IDs are stable** — `id` must be kebab-case and match across all data files.

## Validate an intake (optional)

```bash
npx --yes ajv-cli validate -s spec/project-intake.schema.json -d spec/examples/tautsec.yaml
```

(Requires YAML → JSON conversion or use a YAML-aware validator; agents may validate by schema mentally.)

## Where content lands in the repo

| Intake section | Code destination |
|----------------|------------------|
| `hero` | `src/data/cvContent.ts` → `hero.platforms[]` |
| `card` + `delivery` | `src/data/cvContent.ts` → `projectDeepDives[]` |
| `featured: true` | `src/data/cvContent.ts` → `PLATFORM_DEEP_DIVE_IDS` |
| `graph` | `src/data/portfolioGraph.ts` → node + edges |
| `engagement` | `src/data/engagements.ts` → `projectEngagements` |
| `narrative` | `src/data/narratives.ts` → `nodeNarratives` |
| Custom diagram | `src/components/ArchitectureDiagram.tsx` (only if needed) |

See [`AGENT-WORKFLOW.md`](./AGENT-WORKFLOW.md) for the full checklist.
