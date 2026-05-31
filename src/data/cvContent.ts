export type ProjectDeepDive = {
  id: string
  problem: string
  role: string
  architecture: string
  technologies: string[]
  aiNative: string[]
  outcome: string
  earthbancRelevance: string
}

export const hero = {
  name: 'Pete Whelan',
  title: 'Solutions Architect | AI-Native Engineer | Cloud Platform Builder',
  tagline:
    'I design and build cloud-native platforms, AI-driven products and internal engineering systems that help teams move from idea to production faster, safer and with better architectural control.',
  proofLine: 'Built from a spec. Structured as a graph. Designed for AI-native engineering.',
}

export const aiNativeStatement = {
  heading: 'AI-native before it was a job title',
  paragraphs: [
    'I was building conversational and voice-AI systems before the ChatGPT wave — Alexa applications, legal assistant voice apps, healthcare AI workflows and therapeutic chatbot concepts. That work required intent design, production certification and the discipline to make unreliable models feel dependable in real products.',
    'Today I apply the same rigour to AI-native software delivery: agent systems, spec-driven development, context engineering, evaluation loops and internal platform engineering. AI is not autocomplete — it is a structured engineering partner across discovery, architecture, implementation, testing and governance.',
  ],
}

export const methodologySteps = [
  'Idea',
  'Spec',
  'Agent Planning',
  'Implementation',
  'Review',
  'Promotion',
  'Production',
]

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
      'Music catalogues and rights metadata are fragmented; royalty auditing is manual, slow and error-prone.',
    role: 'Solutions architect and technical lead — platform design through production delivery.',
    architecture:
      'Multi-tenant SaaS with LLM orchestration for catalogue ingestion, rights matching and audit workflows; human-in-the-loop review for compliance-grade outputs.',
    technologies: ['React', 'JavaScript', 'Node.js', 'OpenAI', 'GCP', 'Firestore', 'Cloud Functions'],
    aiNative: [
      'LLM orchestration pipelines',
      'Structured evaluation of match quality',
      'Human-in-the-loop review gates',
    ],
    outcome:
      'A production platform that turns catalogue complexity into auditable, scalable rights intelligence.',
    earthbancRelevance:
      'Regulated-domain AI with audit trails and multi-tenant isolation — directly applicable to financial product engineering.',
  },
  {
    id: 'tautsec',
    problem:
      'Organisations need faster, evidence-based cyber assessment and insurance-aligned risk workflows.',
    role: 'Lead architect for GCP platform, identity and Terraform foundations.',
    architecture:
      'GCP-native product with Identity Platform, Terraform-managed environments and AI-assisted assessment workflows (Cyber Pilot).',
    technologies: ['GCP', 'Terraform', 'Identity Platform', 'React', 'Node.js', 'JavaScript'],
    aiNative: ['AI-assisted cyber assessment', 'Workflow automation', 'Structured risk evidence capture'],
    outcome: 'Production cyber platform connecting assessment, evidence and insurance-aligned workflows.',
    earthbancRelevance:
      'Risk, compliance and assessment automation patterns relevant to regulated fintech platforms.',
  },
  {
    id: 'lexi',
    problem: 'Racing intelligence requires real-time data fusion and decision support across volatile markets.',
    role: 'Architect for event-driven platform and Betfair integration.',
    architecture:
      'Event-driven services with predictive analytics, external API integration and real-time intelligence surfaces.',
    technologies: ['Node.js', 'MongoDB Atlas', 'Betfair API', 'JavaScript', 'React'],
    aiNative: ['Predictive models', 'Feature pipelines', 'Decision-support UX'],
    outcome: 'Analytics platform delivering timely intelligence for racing market decisions.',
    earthbancRelevance:
      'Event-driven data products and external API integration at scale — common fintech architecture patterns.',
  },
  {
    id: 'paradise-engineering',
    problem: 'Traditional delivery breaks down when AI agents become part of the engineering team.',
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

export const pdfPath = '/Pete-Whelan-CV.pdf'
