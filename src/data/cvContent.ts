/** How Pete's involvement and the delivery team are framed on the platform card */
export type DeliveryContext = {
  /** e.g. "Lead platform architect · team delivery" */
  label: string
  /** Visible on the card — clarifies team vs solo */
  summary: string
  organizations?: string[]
}

export type ProjectDeepDive = {
  id: string
  problem: string
  /** How the platform turns data into intelligence (shown as primary narrative) */
  intelligence: string
  delivery: DeliveryContext
  /** Technical scope — shown in collapsible details */
  role: string
  architecture: string
  technologies: string[]
  aiNative: string[]
  outcome: string
  earthbancRelevance: string
}

export const site = {
  pageTitle: 'Pete Whelan: Portfolio',
  brandLabel: 'Pete Whelan: Portfolio',
}

export const hero = {
  name: 'Pete Whelan',
  title: 'AI Systems Architect | Founder | Intelligence Platforms',
  tagline:
    'I architect AI-powered intelligence platforms — as founder or lead architect within delivery teams that ship production-grade products.',
  proofLine: 'Built from a spec. Structured as a graph. Designed for AI-native engineering.',
  platformsIntro: 'Current platforms include:',
  platforms: [
    {
      name: 'Tautsec',
      outcome: 'Posture management, Chubb cyber insurance and CyberPilot AI for Australian SMBs',
    },
    {
      name: 'Lexi',
      subtitle: 'lexi.tips',
      outcome: 'Horse racing intelligence, predictions and daily tips',
    },
    {
      name: 'AIMI',
      subtitle: 'Program Music',
      outcome:
        'Music rights intelligence, royalty recovery and guided dispute workflows — private beta, invite only',
    },
  ],
}

export const aiNativeStatement = {
  heading: 'AI-native before it was a job title',
  paragraphs: [
    'I was building conversational and voice-AI systems before the ChatGPT wave — Alexa applications, legal assistant voice apps, healthcare AI workflows and therapeutic chatbot concepts. That work required intent design, production certification and the discipline to make unreliable models feel dependable in real products.',
    'Today I apply the same rigour to AI-native software delivery: agent systems, spec-driven development, context engineering, evaluation loops and internal platform engineering. AI is not autocomplete — it is a structured engineering partner across discovery, architecture, implementation, testing and governance.',
  ],
}

/** Flagship platforms — Problem → Intelligence → Outcome on the home page */
export const PLATFORM_DEEP_DIVE_IDS = ['tautsec', 'lexi', 'aimi'] as const

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
    id: 'tautsec',
    problem:
      'Australian SMBs had no single platform connecting ongoing cyber posture to insurance-ready outcomes — compliance evidence and cover lived in separate tools and channels.',
    intelligence:
      'TautSec Cyber Protect bundles Chubb-underwritten cyber insurance with a compliance dashboard across Direct, Broker and MSP paths. Essential Eight at three ACSC levels, a 0–100 Protection Index, supply chain mapping, and CyberPilot — AI with vector search over a compliance knowledge base.',
    delivery: {
      label: 'Lead platform architect · team delivery',
      summary:
        'Delivered with Web4 and Program Productions for Tautsec Pty Ltd — Pete led GCP platform architecture, identity and the AI search pipeline; product, frontend and wider engineering as a shared team effort.',
      organizations: ['Tautsec Pty Ltd', 'Web4', 'Program Productions'],
    },
    role: 'Lead architect — serverless GCP platform, Firebase Identity multi-tenant auth, workspace-scoped Terraform, per-tenant databases, and CyberPilot vector search.',
    architecture:
      'Three pricing tiers and dedicated flows per sales channel; 127+ Cloud Functions in australia-southeast1 with Terraform-managed dev/staging/prod and per-developer namespaces. Firestore for transactions, MongoDB Atlas per tenant plus shared KB for AI, BigQuery analytics. CyberPilot quick actions include site scanning, executive reports, 90-day plans, policy drafts, and CVE alerts cross-referenced to live inventory. Integrations: Chubb Cyber ERM, ABR, Stripe, Attvest, SendGrid, NVD.',
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'GCP',
      'Cloud Functions',
      'Terraform',
      'Firestore',
      'MongoDB Atlas',
      'BigQuery',
      'Identity Platform',
      'OpenAI',
      'Vector search',
      'Stripe',
      'Vercel',
    ],
    aiNative: [
      'CyberPilot — vector search, session memory and source citations',
      'Per-control coaching adapted to persona (solo, SMB, corporate)',
      'CVE alerts vs live IT inventory and Essential Eight status',
      'Guided onboarding and MFA trainer with live web research',
    ],
    outcome:
      'One workflow from scanning and posture management to CyberPilot-assisted remediation and Chubb insurance — across self-serve, broker and MSP channels. Live at tautsec.com.au.',
    earthbancRelevance:
      'Risk, compliance and assessment automation patterns relevant to regulated fintech platforms.',
  },
  {
    id: 'lexi',
    problem:
      'Racing punters drown in form guides and pricing noise — without timely predictions they cannot act before the market moves.',
    intelligence:
      'LEXI ingests form, pricing and race-market data, analyses tens of thousands of signals, and outputs predictions and twice-daily tips punters can trust.',
    delivery: {
      label: 'Solutions architect · team delivery',
      summary:
        'Delivered on a Web4 engagement through Program Productions — shared product and engineering team; Pete owned architecture and AI platform design for LEXI at lexi.tips.',
      organizations: ['Web4', 'Program Productions'],
    },
    role: 'Solutions architect — data pipelines, AI analysis layer and platform architecture for lexi.tips.',
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
    id: 'aimi',
    problem:
      'Creators, labels and publishers lose time and revenue when catalogue and rights data are fragmented — manual auditing, slow dispute handling and inconsistent metadata leave money on the table.',
    intelligence:
      'AIMI combines guided creator workflows (identity, works intake, evidence-led disputes) with pattern detection and LLM-orchestrated catalogue matching on vector search — turning messy rights data into auditable intelligence, not just reports.',
    delivery: {
      label: 'Founder · primarily solo delivery',
      summary:
        'Pete as founder and primary architect — platform vision, product direction and hands-on build through Program Music (private beta, invite only).',
      organizations: ['Program Music Ltd'],
    },
    role: 'Founder & solutions architect — multi-tenant rights intelligence, creator workflows, and end-to-end platform delivery.',
    architecture:
      'Multi-tenant SaaS foundations on GCP (Terraform, BigQuery, LangChain, vector retrieval, human-in-the-loop audit) plus agent-first React surfaces and Firebase-backed functions for guided creator flows, dispute routing and conflict detection.',
    technologies: [
      'React',
      'Node.js',
      'JavaScript',
      'Firebase',
      'GCP',
      'Terraform',
      'BigQuery',
      'LangChain',
      'Vector search',
      'OpenAI',
      'Firestore',
      'Cloud Functions',
    ],
    aiNative: [
      'LangChain and vector-backed catalogue matching',
      'Pattern discovery and conflict detection across catalogues',
      'Dispute routing suggestions with evidence-led handoff',
      'Human-in-the-loop review for compliance-grade audit outputs',
    ],
    outcome:
      'Recover missing royalties and handle disputed records faster and safer — from catalogue-scale matching to creator-ready dispute routing. Private beta, invite only.',
    earthbancRelevance:
      'Regulated-domain AI with audit trails, dispute evidence and multi-tenant isolation — applicable to financial and rights-heavy data products.',
  },
  {
    id: 'paradise-engineering',
    problem:
      'Platform engineering and architecture need better ways to communicate structure, security and specs — especially as products like Tautsec grow in complexity.',
    intelligence:
      'Paradise Engineering — a bespoke internal project developing new ways to engineer and architect platforms: 3D visual interpretation of software architecture, coupled with documentation, security modelling and spec-driven components (work in progress for Tautsec).',
    delivery: {
      label: 'Bespoke internal · work in progress',
      summary:
        'Program Productions R&D — new approaches to platform engineering and architecture; 3D model and docs in active use against the Tautsec platform.',
      organizations: ['Program Productions Pty Ltd'],
    },
    role: 'Creator — bespoke internal platform engineering & architecture experiment (3D visualisation, docs, security/spec exploration).',
    architecture:
      '3D system model with documentation in the same surface — security boundaries and spec-defined components rendered as navigable structure, aligned to the evolving Tautsec platform architecture.',
    technologies: [
      '3D architecture visualisation',
      'Spec-driven components',
      'Architecture documentation',
      'Security modelling',
      'Claude',
      'Cursor',
    ],
    aiNative: [
      'Spec-driven component definitions',
      'Security exploration in the architecture model',
      'Documentation coupled to the live 3D view',
    ],
    outcome:
      'Bespoke internal lab for how Program Productions engineers and architects platforms — work in progress, focused on Tautsec.',
    earthbancRelevance:
      'Useful where regulated platforms need architecture and security intent visible before implementation hardens.',
  },
  {
    id: 'flight-deck',
    problem:
      'CI/CD and Terraform promotion need to evolve as teams and products scale — without blocking on a single technical gatekeeper.',
    intelligence:
      'Flight Deck — a bespoke internal project developing new CI/CD and release-governance patterns: approve, test and promote Terraform-managed environments from dev through production with stakeholder visibility.',
    delivery: {
      label: 'Bespoke internal · work in progress',
      summary:
        'Program Productions R&D — new ways to engineer CI/CD, Terraform promotion and release governance across delivery teams.',
      organizations: ['Program Productions Pty Ltd'],
    },
    role: 'Creator — bespoke internal CI/CD and release-governance experiment.',
    architecture:
      'Release governance layer over Terraform-managed apps — approval, test and promotion from dev → staging → production with stakeholder visibility.',
    technologies: ['Terraform', 'GCP', 'CI/CD', 'Internal web tooling', 'IAM'],
    aiNative: ['Process automation', 'Visibility for non-technical approvers', 'Safer promotion guardrails'],
    outcome:
      'Bespoke internal lab for how Program Productions runs CI/CD and promotes infrastructure — work in progress.',
    earthbancRelevance:
      'Platform engineering and deployment governance essential for regulated cloud products.',
  },
]

/** Traditional résumé entries — used for PDF export (not the interactive platform story) */
export type ResumeRole = {
  id: string
  headline: string
  context: string
  bullets: string[]
}

export const resumeExperience: ResumeRole[] = [
  {
    id: 'tautsec',
    headline: 'Lead Platform Architect — TautSec Cyber Protect',
    context: 'Contract · Jan 2026 – ongoing · Tautsec Pty Ltd with Web4 & Program Productions',
    bullets: [
      'Led GCP platform architecture (serverless, Identity Platform, Terraform, CyberPilot AI) within a multi-disciplinary delivery team.',
      'Chubb cyber insurance, Essential Eight, Protection Index and Direct / Broker / MSP channels — tautsec.com.au.',
    ],
  },
  {
    id: 'lexi',
    headline: 'Solutions Architect — LEXI (lexi.tips)',
    context: 'Contract · Jan 2025 – Jan 2026 · Web4 via Program Productions',
    bullets: [
      'Architecture and AI layer for racing intelligence on GCP — form, pricing and market data to predictions and daily tips.',
      'Delivered as part of a shared Web4 / Program Productions engineering team.',
    ],
  },
  {
    id: 'aimi',
    headline: 'Founder & Solutions Architect — AIMI',
    context: 'Founder project · Jun 2023 – ongoing · Program Music Ltd · Private beta, invite only',
    bullets: [
      'Music-rights intelligence — LLM + vector catalogue matching and guided creator dispute workflows.',
      'Multi-tenant GCP and Firebase platform; primary architect and hands-on builder.',
    ],
  },
  {
    id: 'paradise-engineering',
    headline: 'Creator — Paradise Engineering',
    context:
      'Bespoke internal · work in progress · platform engineering & architecture · Program Productions',
    bullets: [
      'Bespoke internal project developing new ways to engineer and architect platforms — 3D visualisation with linked documentation.',
      'Security and spec-driven component exploration; work in progress applied to the Tautsec platform.',
    ],
  },
  {
    id: 'flight-deck',
    headline: 'Creator — Flight Deck',
    context: 'Bespoke internal · work in progress · CI/CD · Program Productions Pty Ltd',
    bullets: [
      'Bespoke internal project developing new CI/CD and Terraform promotion patterns for delivery teams.',
      'Release governance — approve, test and promote from dev through production with stakeholder visibility.',
    ],
  },
]

export const contact = {
  email: 'petewhelan2020@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pawhelan/',
}
