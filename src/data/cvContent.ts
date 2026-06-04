export type ProjectDeepDive = {
  id: string
  problem: string
  /** How the platform turns data into intelligence (shown as primary narrative) */
  intelligence: string
  role: string
  architecture: string
  technologies: string[]
  aiNative: string[]
  outcome: string
  earthbancRelevance: string
}

export const site = {
  pageTitle: 'Pete Whelan — AI Systems Architect',
  brandLabel: 'Pete Whelan',
}

export const hero = {
  name: 'Pete Whelan',
  title: 'AI Systems Architect | Founder | Intelligence Platforms',
  tagline:
    'I architect and build AI-powered platforms that transform complex, messy industry data into actionable intelligence and commercial outcomes.',
  proofLine: 'Cross-domain intelligence architect — music, cyber, analytics & more',
  platformsIntro: 'Current platforms include:',
  platforms: [
    {
      name: 'AiMi',
      outcome: 'Music rights intelligence and royalty recovery',
    },
    {
      name: 'Cyber Pilot',
      subtitle: 'Tautsec',
      outcome: 'Cyber security assessment and insurance readiness',
    },
    {
      name: 'Lexi',
      subtitle: 'lexi.tips',
      outcome: 'Horse racing intelligence, predictions and daily tips',
    },
  ],
}

export const aiNativeStatement = {
  heading: 'AI-native before it was a job title',
  paragraphs: [
    'Voice AI, healthcare workflows and agentic delivery long before it was fashionable — now applied as structured intelligence platforms across regulated and data-heavy industries.',
  ],
}

/** Flagship platforms — Problem → Intelligence → Outcome on the home page */
export const PLATFORM_DEEP_DIVE_IDS = ['aimi', 'tautsec', 'lexi'] as const

export const skillClusters = [
  {
    title: 'AI & Agent Systems',
    items: [
      'Claude / Claude Code',
      'OpenAI',
      'Codex',
      'Cursor',
      'Google Antigravity',
      'Prompt engineering',
      'Context engineering',
      'Agent workflows',
      'Evaluation loops',
      'Spec-driven delivery',
    ],
  },
  {
    title: 'Cloud & Platform',
    items: [
      'GCP',
      'AWS',
      'Terraform',
      'Cloud Functions / Cloud Run',
      'Workflows & Pub/Sub',
      'Firestore',
      'Identity Platform',
      'Pinecone',
      'MongoDB Atlas',
    ],
  },
  {
    title: 'Product Engineering',
    items: [
      'React',
      'Node.js',
      'JavaScript',
      'API design',
      'SaaS architecture',
      'Multi-tenancy',
      'CI/CD',
    ],
  },
  {
    title: 'Domains',
    items: [
      'Music rights',
      'Cyber security',
      'Healthcare AI',
      'Insurance',
      'Voice AI',
      'Analytics',
      'Internal tooling',
    ],
  },
]

export const projectDeepDives: ProjectDeepDive[] = [
  {
    id: 'aimi',
    problem:
      'Labels and publishers lose revenue when catalogue and rights metadata are fragmented — royalty auditing is manual, slow and error-prone.',
    intelligence:
      'AiMi ingests catalogue and rights data, matches metadata with LLM orchestration and vector search, and surfaces auditable intelligence so teams recover missing royalties — not just report on them.',
    role: 'Founder & solutions architect — platform design through production delivery.',
    architecture:
      'Multi-tenant SaaS on GCP with Terraform-managed infrastructure, BigQuery analytics, vector retrieval and LangChain orchestration for catalogue ingestion, rights matching and audit workflows; human-in-the-loop review for compliance-grade outputs.',
    technologies: [
      'React',
      'JavaScript',
      'Node.js',
      'OpenAI',
      'GCP',
      'Terraform',
      'BigQuery',
      'Vector database',
      'LangChain',
      'AI tooling',
      'Firestore',
      'Cloud Functions',
    ],
    aiNative: [
      'LangChain orchestration pipelines',
      'Vector search and retrieval',
      'Structured evaluation of match quality',
      'Human-in-the-loop review gates',
    ],
    outcome:
      'Recover missing royalties. Turn catalogue chaos into auditable, scalable rights intelligence.',
    earthbancRelevance:
      'Regulated-domain AI with audit trails and multi-tenant isolation — directly applicable to financial product engineering.',
  },
  {
    id: 'tautsec',
    problem:
      'Australian SMBs struggle to prove cyber posture and qualify for cover — assessments are slow, inconsistent and disconnected from insurance outcomes.',
    intelligence:
      'Cyber Pilot runs structured assessments, AI-assisted evidence capture and risk scoring — turning security signals into insurance-ready intelligence partners and brokers can act on.',
    role: 'Lead architect — GCP platform, identity and Terraform foundations.',
    architecture:
      'Tautsec Cyber Protect: partners and SMEs run Cyber Pilot assessments, AI-assisted risk and evidence capture, quantified risk scoring, then insurance-aligned workflows — on GCP with Identity Platform, Terraform, MongoDB, BigQuery and LangChain/vector tooling.',
    technologies: [
      'GCP',
      'Terraform',
      'Identity Platform',
      'BigQuery',
      'Vector database',
      'LangChain',
      'AI tooling',
      'MongoDB',
      'React',
      'Node.js',
      'JavaScript',
    ],
    aiNative: [
      'AI-assisted cyber assessment',
      'LangChain and vector-backed evidence retrieval',
      'Workflow automation',
      'Structured risk evidence capture',
    ],
    outcome:
      'Improve cyber resilience. Move from checklist scans to evidence-based, insurance-aligned readiness.',
    earthbancRelevance:
      'Risk, compliance and assessment automation patterns relevant to regulated fintech platforms.',
  },
  {
    id: 'lexi',
    problem:
      'Racing punters drown in form guides and pricing noise — without timely predictions they cannot act before the market moves.',
    intelligence:
      'LEXI ingests form, pricing and race-market data, analyses tens of thousands of signals, and outputs predictions and twice-daily tips punters can trust.',
    role: 'Architect — LEXI (Learned Expert Intelligence) at lexi.tips.',
    architecture:
      'lexi.tips ingests form, pricing and race-market inputs, runs them through AI analysis on GCP (BigQuery, vector retrieval, LangChain) and surfaces intelligence, predictions and twice-daily tips — plus chat with LEXI.',
    technologies: [
      'React',
      'Node.js',
      'JavaScript',
      'GCP',
      'Terraform',
      'BigQuery',
      'Vector database',
      'LangChain',
      'AI tooling',
      'Betfair API',
    ],
    aiNative: [
      'AI-driven analysis across form, pricing and race data',
      'Predictive tips and performance tracking',
      'LangChain and vector-backed feature pipelines',
      'Conversational LEXI guide (chat)',
    ],
    outcome:
      'Turn complex racing data into actionable intelligence — daily AI tips and predictions at lexi.tips.',
    earthbancRelevance:
      'High-volume structured inputs → ML predictions → consumer intelligence surfaces — patterns common in fintech and markets products.',
  },
  {
    id: 'paradise-engineering',
    problem: 'Traditional delivery breaks down when AI agents become part of the engineering team.',
    intelligence:
      'Paradise Engineering — spec-first delivery with agents as structured partners across planning, implementation, review and promotion.',
    role: 'Creator of methodology and internal practice — shaping how specs, agents and review connect.',
    architecture:
      'Spec-first workflow: discovery → agent planning → implementation → evaluation → promotion, with Claude/Codex as structured partners.',
    technologies: ['Claude Code', 'Codex', 'Git', 'CI/CD', 'Spec documents'],
    aiNative: [
      'Agent-assisted planning',
      'Context engineering',
      'Evaluation loops',
      'This portfolio as proof-of-work',
    ],
    outcome: 'Repeatable AI-native delivery practice that scales with team complexity.',
    earthbancRelevance:
      'Demonstrates how Pete rebuilds engineering around AI — the core signal for AI-native leadership roles.',
  },
  {
    id: 'flight-deck',
    problem:
      'As teams grow, Terraform environment promotion becomes opaque, risky and blocked on technical gatekeepers.',
    intelligence:
      'Flight Deck — release governance so technical and non-technical stakeholders can approve, test and promote from dev through production safely.',
    role: 'Architect of internal platform and governance workflows.',
    architecture:
      'Release governance layer over Terraform-managed apps — approval, test and promotion from dev → staging → production with stakeholder visibility.',
    technologies: ['Terraform', 'GCP', 'CI/CD', 'Internal web tooling', 'IAM'],
    aiNative: ['Process automation', 'Visibility for non-technical approvers', 'Safer promotion guardrails'],
    outcome:
      'Teams ship infrastructure changes with governance, auditability and reduced promotion friction.',
    earthbancRelevance:
      'Platform engineering and deployment governance essential for regulated cloud products.',
  },
]

export const contact = {
  email: 'hello@petewhelan.dev',
  linkedin: 'https://www.linkedin.com/in/petewhelan',
}
