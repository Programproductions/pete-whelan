export type MethodologyStage = {
  id: string
  label: string
  human: string[]
  agent: string[]
  artefacts: string[]
  quality: string[]
  governance: string[]
}

export const methodologyStages: MethodologyStage[] = [
  {
    id: 'idea',
    label: 'Idea',
    human: [
      'Frame the problem and constraints',
      'Define success criteria and risks',
      'Choose build vs. buy vs. automate',
    ],
    agent: [
      'Research comparable patterns',
      'Summarise unknowns and assumptions',
      'Draft discovery questions',
    ],
    artefacts: ['Problem statement', 'Constraints log', 'Initial scope'],
    quality: ['Stakeholder alignment', 'Clear outcome definition'],
    governance: ['Scope boundary agreed before spec work'],
  },
  {
    id: 'spec',
    label: 'Spec',
    human: [
      'Own the specification as the contract',
      'Decide architecture boundaries',
      'Approve acceptance criteria',
    ],
    agent: [
      'Expand spec into tasks and interfaces',
      'Propose data models and API shapes',
      'Flag gaps and contradictions',
    ],
    artefacts: ['Feature spec', 'API sketch', 'Acceptance criteria'],
    quality: ['Spec review before implementation'],
    governance: ['No implementation without approved spec'],
  },
  {
    id: 'agent-planning',
    label: 'Agent Planning',
    human: [
      'Select tools and agent boundaries',
      'Define context packages and guardrails',
      'Sequence work for reviewability',
    ],
    agent: [
      'Break spec into implementation plan',
      'Identify dependencies and test points',
      'Prepare context bundles per task',
    ],
    artefacts: ['Implementation plan', 'Context packs', 'Risk register'],
    quality: ['Plan sized for reviewable diffs'],
    governance: ['Agents operate within defined tool access'],
  },
  {
    id: 'implementation',
    label: 'Implementation',
    human: [
      'Review diffs and architectural fit',
      'Integrate with platform standards',
      'Resolve edge cases agents miss',
    ],
    agent: [
      'Implement against spec and plan',
      'Generate tests and documentation drafts',
      'Iterate within evaluation loops',
    ],
    artefacts: ['Code', 'Tests', 'Migration notes'],
    quality: ['CI green', 'Lint and type checks'],
    governance: ['Secrets and prod access never in agent context'],
  },
  {
    id: 'review',
    label: 'Review',
    human: [
      'Architecture and security review',
      'Validate AI outputs against criteria',
      'Sign off for promotion',
    ],
    agent: [
      'Self-review against spec',
      'Summarise changes and risks',
      'Propose fixes for failed checks',
    ],
    artefacts: ['Review notes', 'Eval results', 'Change summary'],
    quality: ['Evaluation loops for AI features', 'Peer review for platform changes'],
    governance: ['Human sign-off before environment promotion'],
  },
  {
    id: 'promotion',
    label: 'Promotion',
    human: [
      'Approve environment promotion',
      'Coordinate non-technical stakeholders',
      'Verify rollback paths',
    ],
    agent: [
      'Generate promotion checklists',
      'Summarise infra diffs',
      'Assist test evidence collation',
    ],
    artefacts: ['Promotion record', 'Test evidence', 'Terraform plan'],
    quality: ['Staging validation complete'],
    governance: ['Flight Deck / CI gates for Terraform apps'],
  },
  {
    id: 'production',
    label: 'Production',
    human: [
      'Monitor SLOs and incidents',
      'Own operational response',
      'Feed learnings back into specs',
    ],
    agent: [
      'Triage logs and summarise incidents',
      'Draft post-incident notes',
      'Suggest spec updates from production signals',
    ],
    artefacts: ['Runbooks', 'Dashboards', 'Post-incident review'],
    quality: ['Observability and alerting in place'],
    governance: ['Continuous improvement loop to spec-driven delivery'],
  },
]
