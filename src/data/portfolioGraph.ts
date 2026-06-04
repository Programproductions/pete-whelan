import {
  companyEngagements,
  projectEngagements,
  type CompanyRole,
} from './engagements'

export type { CompanyRole }

export type NodeType =
  | 'person'
  | 'company'
  | 'project'
  | 'skill'
  | 'domain'
  | 'methodology'
  | 'technology'

export type FilterCategory =
  | 'all'
  | 'projects'
  | 'skills'
  | 'companies'
  | 'ai'
  | 'cloud'
  | 'internal-tools'

export type PortfolioNode = {
  id: string
  label: string
  type: NodeType
  summary: string
  detail: string
  keyPoints?: string[]
  tags: string[]
  featured?: boolean
  earthbancRelevance?: string
  whyExists?: string
  problemSolved?: string
  ledTo?: string[]
  outcome?: string
  /** Company nodes: own org vs client */
  companyRole?: CompanyRole
  refereeName?: string
  refereeEmail?: string
  /** Project nodes: required client company */
  clientCompanyId?: string
  website?: string
  phase?: string
  contractLength?: string
  startDate?: string
  endDate?: string
}

export type PortfolioEdge = {
  source: string
  target: string
  label?: string
}

const portfolioNodesRaw: PortfolioNode[] = [
  {
    id: 'pete-whelan',
    label: 'Pete Whelan',
    type: 'person',
    summary: 'Solutions Architect · AI-Native Engineer · Cloud Platform Builder',
    detail:
      'I design and build cloud-native platforms, AI-driven products and internal engineering systems that help teams move from idea to production faster, safer and with better architectural control.',
    keyPoints: [
      'Solutions architecture across music tech, voice AI, healthcare and cyber',
      'AI-native delivery: spec-driven development, agent workflows, evaluation loops',
      'Platform engineering: Terraform governance, multi-tenant SaaS, internal tooling',
    ],
    tags: ['ai', 'cloud', 'internal-tools'],
    featured: true,
  },
  {
    id: 'program-music',
    label: 'Program Music Ltd',
    type: 'company',
    summary: 'Music technology and AI rights platform company.',
    detail:
      'Founded and led Program Music Ltd to build AiMi and related music-rights technology — combining catalogue intelligence, LLM orchestration and multi-tenant SaaS delivery.',
    tags: ['companies', 'projects'],
  },
  {
    id: 'program-productions',
    label: 'Program Productions Pty Ltd',
    type: 'company',
    summary: 'Delivery vehicle for platform and client engagements.',
    detail:
      'Operating company for Web4 engagements, cyber platforms, and production-grade cloud delivery across insurance, security and analytics products.',
    tags: ['companies'],
  },
  {
    id: 'web4',
    label: 'Web4',
    type: 'company',
    summary: 'Client engagements — cyber, analytics and platform builds.',
    detail:
      'Long-running engagement partner for Tautsec, Lexi and other cloud-native products — architecture, implementation and AI-assisted workflows.',
    tags: ['companies', 'projects', 'cloud'],
  },
  {
    id: 'wici',
    label: 'WICI',
    type: 'company',
    summary: 'Client — Florence AI (Alexa).',
    detail:
      'Client organisation for the Florence AI Alexa application and related healthcare conversational product work.',
    tags: ['companies', 'ai'],
  },
  {
    id: 'tautsec-pty',
    label: 'Tautsec Pty Ltd',
    type: 'company',
    summary: 'Client — Tautsec cyber platform and Cyber Pilot.',
    detail:
      'Contracted to deliver the Tautsec product — GCP architecture, Identity Platform, Terraform foundations and Cyber Pilot workflows.',
    tags: ['companies', 'projects', 'cloud'],
  },
  {
    id: 'upwork',
    label: 'Upwork',
    type: 'company',
    summary: 'Client — freelance platform engagements.',
    detail: 'Contract channel for product delivery including My Paralegal voice legal assistant work.',
    tags: ['companies', 'projects'],
  },
  {
    id: 'alltasks-it',
    label: 'AllTasks IT',
    type: 'company',
    summary: 'Client — logistics and voice product delivery.',
    detail:
      'Client organisation for Alexa voice applications in transport and logistics, including driver-facing delivery workflows.',
    tags: ['companies', 'ai', 'projects'],
  },
  {
    id: 'aimi',
    label: 'AiMi',
    type: 'project',
    summary: 'AI-powered music rights and royalty auditing platform.',
    detail:
      'Multi-tenant SaaS for catalogue analysis, rights metadata matching and royalty auditing — with LLM orchestration and human-in-the-loop review workflows.',
    keyPoints: [
      'Multi-tenant SaaS architecture',
      'LLM orchestration for catalogue and rights analysis',
      'Rights metadata matching and audit workflows',
      'Human-in-the-loop review for compliance-grade outputs',
    ],
    tags: ['projects', 'ai', 'cloud'],
    featured: true,
    earthbancRelevance:
      'Demonstrates regulated-domain AI, multi-tenant SaaS, and auditable human-in-the-loop patterns applicable to financial services platforms.',
  },
  {
    id: 'tautsec',
    label: 'Tautsec',
    type: 'project',
    summary: 'Cyber security and cyber insurance platform on GCP.',
    detail:
      'Cyber Pilot and AI-assisted cyber assessment workflows on GCP for Tautsec Pty Ltd — with Web4 as engagement partner and Program Productions as delivery vehicle.',
    keyPoints: [
      'GCP architecture with Identity Platform',
      'Terraform-managed infrastructure',
      'Cyber Pilot product workflows',
      'AI-assisted cyber assessment',
    ],
    tags: ['projects', 'ai', 'cloud'],
    featured: true,
    earthbancRelevance:
      'Shows delivery of risk, compliance and assessment workflows — relevant to regulated product engineering and platform governance.',
  },
  {
    id: 'lexi',
    label: 'Lexi',
    type: 'project',
    summary: 'AI-powered horse racing intelligence platform.',
    detail:
      'Predictive analytics and Betfair integration in an event-driven architecture — real-time data pipelines and decision-support UX.',
    keyPoints: [
      'Betfair API integration',
      'Predictive analytics models',
      'Event-driven architecture',
      'Real-time intelligence surfaces',
    ],
    tags: ['projects', 'ai', 'cloud'],
    featured: true,
    earthbancRelevance:
      'Illustrates event-driven analytics platforms and external API integration at scale — patterns common in fintech data products.',
  },
  {
    id: 'paradise-engineering',
    label: 'Paradise Engineering',
    type: 'methodology',
    summary: 'AI-native software delivery methodology.',
    detail:
      'Spec-driven development with Claude and Codex workflows — agent-assisted planning, implementation, review and continuous improvement of engineering process.',
    keyPoints: [
      'Spec-first discovery and scoping',
      'Agent-assisted planning and implementation',
      'Structured review and evaluation loops',
      'Process innovation for AI-native teams',
    ],
    tags: ['ai', 'internal-tools', 'projects'],
    featured: true,
    earthbancRelevance:
      'Direct proof of AI-native engineering practice — how Pete rebuilds delivery around agents, specs and guardrails.',
  },
  {
    id: 'flight-deck',
    label: 'Flight Deck',
    type: 'project',
    summary: 'Internal platform engineering and Terraform release governance.',
    detail:
      'Release governance system solving Terraform environment promotion as team complexity grew — enabling technical and non-technical stakeholders to approve, test and promote applications from dev through staging to production.',
    keyPoints: [
      'Terraform promotion workflows',
      'Approval gates for technical and non-technical stakeholders',
      'Environment visibility from dev → staging → production',
      'Safer deployment governance at scale',
    ],
    tags: ['projects', 'internal-tools', 'cloud'],
    featured: true,
    earthbancRelevance:
      'Platform engineering and deployment governance — critical for teams shipping regulated cloud products with audit trails.',
  },
  {
    id: 'florence-ai',
    label: 'Florence AI',
    type: 'project',
    summary: 'Healthcare Alexa voice application.',
    detail:
      'Florence AI — production Alexa app for WICI. Voice intents, certification and conversational UX in clinical-adjacent healthcare settings.',
    tags: ['projects', 'ai'],
  },
  {
    id: 'sage-chatbot',
    label: 'Sage',
    type: 'project',
    summary: 'Therapeutic chatbot — Program Productions.',
    detail:
      'Sage therapeutic chatbot delivered via Program Productions — safe conversational AI in clinical-adjacent settings (related healthcare domain work).',
    tags: ['projects', 'ai'],
  },
  {
    id: 'big-red-ronnie',
    label: 'BigRedRonnie',
    type: 'project',
    summary: 'Alexa voice app for Ron Finemore drivers.',
    detail:
      'BigRedRonnie — Alexa Voice App for Ron Finemore Transport truck drivers: hands-free logistics, delivery updates and driver workflows delivered for AllTasks IT.',
    tags: ['projects', 'ai'],
  },
  {
    id: 'my-paralegal',
    label: 'My Paralegal',
    type: 'project',
    summary: 'Voice-first legal assistant (Alexa-era).',
    detail:
      'My Paralegal — production legal assistant voice application delivered via Upwork engagement: conversational UX, intent design and certified voice deployments.',
    tags: ['projects', 'ai'],
  },
  {
    id: 'voice-ai-pioneer',
    label: 'Voice AI Pioneer',
    type: 'domain',
    summary: 'Conversational and voice systems before the ChatGPT wave.',
    detail:
      'Built Alexa applications, legal voice assistants and healthcare conversational workflows when voice AI required custom intent engineering and production hardening.',
    tags: ['ai', 'domains'],
  },
  {
    id: 'music-industry',
    label: 'Music Industry',
    type: 'domain',
    summary: 'Rights, royalties and catalogue complexity.',
    detail: 'Deep domain experience in music rights, metadata and royalty auditing.',
    tags: ['domains'],
  },
  {
    id: 'music-technology',
    label: 'Music Technology',
    type: 'domain',
    summary: 'Product engineering at the intersection of music and software.',
    detail: 'From music industry operations to production-grade music technology platforms.',
    tags: ['domains'],
  },
  {
    id: 'healthcare-ai',
    label: 'Healthcare AI',
    type: 'domain',
    summary: 'Clinical-adjacent AI workflows and therapeutic concepts.',
    detail: 'Healthcare AI including voice applications and therapeutic chatbot design.',
    tags: ['domains', 'ai'],
  },
  {
    id: 'cloud-architecture',
    label: 'Cloud Architecture',
    type: 'methodology',
    summary: 'GCP and AWS solution design at production scale.',
    detail:
      'Cloud-native architecture across serverless, identity, data platforms and infrastructure-as-code.',
    tags: ['cloud'],
  },
  {
    id: 'ai-native-engineering',
    label: 'AI-Native Engineering',
    type: 'methodology',
    summary: 'Engineering rebuilt around agents, specs and guardrails.',
    detail:
      'Applies voice-AI-era conversational discipline to modern agent systems, context engineering, evaluation loops and internal platform tooling.',
    tags: ['ai', 'internal-tools'],
    featured: true,
  },
  {
    id: 'platform-engineering',
    label: 'Platform Engineering',
    type: 'methodology',
    summary: 'Internal systems that accelerate safe delivery.',
    detail:
      'Flight Deck and related tooling — governance, CI/CD, environment promotion and stakeholder visibility.',
    tags: ['internal-tools', 'cloud'],
  },
  {
    id: 'gcp',
    label: 'GCP',
    type: 'technology',
    summary: 'Google Cloud Platform — primary cloud for recent platforms.',
    detail:
      'Cloud Functions Gen2, Cloud Run, Workflows, Pub/Sub, Firestore, Identity Platform and Terraform on GCP.',
    tags: ['cloud', 'skills'],
  },
  {
    id: 'aws',
    label: 'AWS',
    type: 'technology',
    summary: 'Amazon Web Services across serverless and data workloads.',
    detail: 'AWS architecture for APIs, compute and managed data services.',
    tags: ['cloud', 'skills'],
  },
  {
    id: 'terraform',
    label: 'Terraform',
    type: 'technology',
    summary: 'Infrastructure as code and environment promotion.',
    detail: 'Terraform modules, state management and Flight Deck promotion governance.',
    tags: ['cloud', 'skills', 'internal-tools'],
  },
  {
    id: 'identity-platform',
    label: 'Identity Platform',
    type: 'technology',
    summary: 'Authentication and multi-tenant identity on GCP.',
    detail: 'Production identity patterns for SaaS and cyber platforms including Tautsec.',
    tags: ['cloud', 'skills'],
  },
  {
    id: 'firestore',
    label: 'Firestore',
    type: 'technology',
    summary: 'Document data for real-time product backends.',
    detail: 'Firestore data modelling for multi-tenant and workflow-driven products.',
    tags: ['cloud', 'skills'],
  },
  {
    id: 'mongodb-atlas',
    label: 'MongoDB Atlas',
    type: 'technology',
    summary: 'Flexible document storage at scale.',
    detail: 'Atlas deployments for analytics and application data layers.',
    tags: ['cloud', 'skills'],
  },
  {
    id: 'react',
    label: 'React',
    type: 'technology',
    summary: 'Product UI and interactive experiences.',
    detail: 'React, JavaScript and modern component architecture for SaaS products.',
    tags: ['skills'],
  },
  {
    id: 'nodejs',
    label: 'Node.js',
    type: 'technology',
    summary: 'API and serverless backends.',
    detail: 'Node.js services, Cloud Functions and API design.',
    tags: ['skills', 'cloud'],
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    type: 'technology',
    summary: 'Type-safe full-stack delivery.',
    detail: 'End-to-end JavaScript for frontends, APIs and shared domain models.',
    tags: ['skills'],
  },
  {
    id: 'openai',
    label: 'OpenAI',
    type: 'technology',
    summary: 'LLM orchestration and product integration.',
    detail: 'OpenAI APIs for catalogue analysis, assistants and workflow automation.',
    tags: ['ai', 'skills'],
  },
  {
    id: 'cursor',
    label: 'Cursor',
    type: 'technology',
    summary: 'AI-native IDE and agent pair programming.',
    detail: 'Daily driver for spec-driven implementation, refactors and review loops.',
    tags: ['ai', 'skills', 'internal-tools'],
  },
  {
    id: 'codex',
    label: 'OpenAI Codex',
    type: 'technology',
    summary: 'Code generation and agent-assisted implementation.',
    detail: 'Used within Paradise Engineering workflows alongside Claude.',
    tags: ['ai', 'skills'],
  },
  {
    id: 'antigravity',
    label: 'Google Antigravity',
    type: 'technology',
    summary: 'Agentic development environment.',
    detail: 'Part of the multi-tool AI engineering stack for planning and delivery.',
    tags: ['ai', 'skills'],
  },
  {
    id: 'pinecone',
    label: 'Pinecone',
    type: 'technology',
    summary: 'Vector database for retrieval and context.',
    detail: 'Vector search patterns for RAG, embeddings and agent context packaging.',
    tags: ['ai', 'skills', 'cloud'],
  },
  {
    id: 'claude',
    label: 'Claude / Claude Code',
    type: 'technology',
    summary: 'Agent-assisted engineering and review.',
    detail:
      'Claude and Claude Code in Paradise Engineering workflows — planning, implementation and structured review.',
    tags: ['ai', 'skills'],
  },
  {
    id: 'agentic-workflows',
    label: 'Agentic Workflows',
    type: 'skill',
    summary: 'Multi-step agent systems with guardrails.',
    detail: 'Designing agent pipelines with context boundaries, tools and evaluation.',
    tags: ['ai', 'skills'],
  },
  {
    id: 'prompt-engineering',
    label: 'Prompt Engineering',
    type: 'skill',
    summary: 'Reliable LLM behaviour through structured prompts.',
    detail: 'Prompt design evolved from voice intent engineering to LLM system prompts.',
    tags: ['ai', 'skills'],
  },
  {
    id: 'alexa-apps',
    label: 'Alexa Skills',
    type: 'skill',
    summary: 'Alexa voice platform — intents, certification and production UX.',
    detail:
      'Capability across Florence AI, BigRedRonnie, My Paralegal and other certified Alexa voice applications — intent design, certification and conversational UX.',
    tags: ['ai', 'skills'],
  },
  {
    id: 'context-engineering',
    label: 'Context Engineering',
    type: 'skill',
    summary: 'Curating what models see and when.',
    detail: 'Context windows, retrieval and spec packaging for agent reliability.',
    tags: ['ai', 'skills'],
  },
  {
    id: 'evaluation-loops',
    label: 'Evaluation Loops',
    type: 'skill',
    summary: 'Measuring and improving AI outputs.',
    detail: 'Human-in-the-loop review, regression checks and quality gates for AI features.',
    tags: ['ai', 'skills'],
  },
  {
    id: 'spec-driven-development',
    label: 'Spec-Driven Development',
    type: 'methodology',
    summary: 'Specs as the contract between humans and agents.',
    detail: 'Feature specs drive planning, implementation and acceptance — including this portfolio.',
    tags: ['ai', 'internal-tools'],
  },
  {
    id: 'cicd',
    label: 'CI/CD',
    type: 'skill',
    summary: 'Automated build, test and deploy pipelines.',
    detail: 'Pipeline design integrated with Flight Deck promotion governance.',
    tags: ['cloud', 'internal-tools', 'skills'],
  },
  {
    id: 'cyber-security',
    label: 'Cyber Security',
    type: 'domain',
    summary: 'Security product and assessment domains.',
    detail: 'Tautsec and cyber insurance workflow expertise.',
    tags: ['domains'],
  },
  {
    id: 'insurance',
    label: 'Insurance',
    type: 'domain',
    summary: 'Cyber insurance and risk product patterns.',
    detail: 'Insurance-adjacent workflows in Tautsec and assessment automation.',
    tags: ['domains'],
  },
  {
    id: 'music-rights',
    label: 'Music Rights',
    type: 'domain',
    summary: 'Royalties, metadata and catalogue intelligence.',
    detail: 'Core domain for AiMi — rights matching and audit at scale.',
    tags: ['domains'],
  },
  {
    id: 'horse-racing-analytics',
    label: 'Horse Racing Analytics',
    type: 'domain',
    summary: 'Predictive intelligence for racing markets.',
    detail: 'Lexi domain — analytics, Betfair data and event-driven pipelines.',
    tags: ['domains'],
  },
  {
    id: 'internal-tooling',
    label: 'Internal Tooling',
    type: 'domain',
    summary: 'Engineering systems that multiply team output.',
    detail: 'Flight Deck, agent tooling and platform automation for delivery teams.',
    tags: ['internal-tools', 'domains'],
  },
  {
    id: 'infrastructure-automation',
    label: 'Infrastructure Automation',
    type: 'domain',
    summary: 'IaC, promotion and operational safety.',
    detail: 'Terraform automation with governance layers for growing engineering teams.',
    tags: ['cloud', 'internal-tools'],
  },
]

function applyEngagementData(nodes: PortfolioNode[]): PortfolioNode[] {
  return nodes.map((node) => {
    const company = companyEngagements[node.id]
    if (company) {
      return {
        ...node,
        companyRole: company.companyRole,
        refereeName: company.refereeName,
        refereeEmail: company.refereeEmail,
      }
    }
    const project = projectEngagements[node.id]
    if (project) {
      return {
        ...node,
        clientCompanyId: project.clientCompanyId,
        website: project.website,
        phase: project.phase,
        contractLength: project.contractLength,
        startDate: project.startDate,
        endDate: project.endDate,
      }
    }
    return node
  })
}

export const portfolioNodes: PortfolioNode[] = applyEngagementData(portfolioNodesRaw)

const CAPABILITY_TYPES: PortfolioNode['type'][] = [
  'skill',
  'technology',
  'domain',
  'methodology',
]

function withPeteCapabilityLinks(
  edges: PortfolioEdge[],
  nodes: PortfolioNode[],
): PortfolioEdge[] {
  const hasPeteLink = new Set<string>()
  for (const edge of edges) {
    if (edge.source === 'pete-whelan') hasPeteLink.add(edge.target)
    if (edge.target === 'pete-whelan') hasPeteLink.add(edge.source)
  }
  const extra: PortfolioEdge[] = []
  for (const node of nodes) {
    if (!CAPABILITY_TYPES.includes(node.type)) continue
    if (hasPeteLink.has(node.id)) continue
    extra.push({ source: 'pete-whelan', target: node.id, label: 'applies' })
  }
  return [...edges, ...extra]
}

export const portfolioEdgesCore: PortfolioEdge[] = [
  { source: 'pete-whelan', target: 'program-music', label: 'founded' },
  { source: 'pete-whelan', target: 'program-productions', label: 'leads' },
  { source: 'pete-whelan', target: 'web4', label: 'architects' },
  { source: 'pete-whelan', target: 'ai-native-engineering', label: 'practices' },
  { source: 'pete-whelan', target: 'cloud-architecture', label: 'practices' },
  { source: 'pete-whelan', target: 'voice-ai-pioneer', label: 'pioneered' },
  { source: 'program-music', target: 'aimi', label: 'built' },
  { source: 'program-productions', target: 'tautsec', label: 'delivered' },
  { source: 'program-productions', target: 'lexi', label: 'delivered' },
  { source: 'program-productions', target: 'flight-deck', label: 'delivered' },
  { source: 'program-productions', target: 'paradise-engineering', label: 'delivers' },
  { source: 'tautsec-pty', target: 'tautsec', label: 'client for' },
  { source: 'web4', target: 'tautsec', label: 'engagement' },
  { source: 'web4', target: 'tautsec-pty', label: 'partner' },
  { source: 'web4', target: 'lexi', label: 'engagement' },
  { source: 'wici', target: 'florence-ai', label: 'client for' },
  { source: 'pete-whelan', target: 'florence-ai', label: 'built' },
  { source: 'florence-ai', target: 'healthcare-ai', label: 'domain' },
  { source: 'voice-ai-pioneer', target: 'florence-ai', label: 'includes' },
  { source: 'program-productions', target: 'sage-chatbot', label: 'delivered' },
  { source: 'sage-chatbot', target: 'healthcare-ai', label: 'domain' },
  { source: 'alltasks-it', target: 'big-red-ronnie', label: 'client for' },
  { source: 'pete-whelan', target: 'big-red-ronnie', label: 'built' },
  { source: 'voice-ai-pioneer', target: 'big-red-ronnie', label: 'includes' },
  { source: 'upwork', target: 'my-paralegal', label: 'client for' },
  { source: 'pete-whelan', target: 'my-paralegal', label: 'built' },
  { source: 'pete-whelan', target: 'wici', label: 'delivered' },
  { source: 'pete-whelan', target: 'tautsec-pty', label: 'architects' },
  { source: 'pete-whelan', target: 'paradise-engineering', label: 'created' },
  { source: 'pete-whelan', target: 'flight-deck', label: 'architected' },
  { source: 'paradise-engineering', target: 'spec-driven-development', label: 'includes' },
  { source: 'paradise-engineering', target: 'claude', label: 'uses' },
  { source: 'paradise-engineering', target: 'cursor', label: 'uses' },
  { source: 'paradise-engineering', target: 'codex', label: 'uses' },
  { source: 'paradise-engineering', target: 'antigravity', label: 'uses' },
  { source: 'context-engineering', target: 'pinecone', label: 'uses' },
  { source: 'ai-native-engineering', target: 'cursor', label: 'uses' },
  { source: 'paradise-engineering', target: 'agentic-workflows', label: 'uses' },
  { source: 'flight-deck', target: 'terraform', label: 'governs' },
  { source: 'flight-deck', target: 'cicd', label: 'integrates' },
  { source: 'flight-deck', target: 'platform-engineering', label: 'enables' },
  { source: 'aimi', target: 'music-rights', label: 'domain' },
  { source: 'aimi', target: 'openai', label: 'uses' },
  { source: 'aimi', target: 'react', label: 'stack' },
  { source: 'tautsec', target: 'gcp', label: 'hosted on' },
  { source: 'tautsec', target: 'identity-platform', label: 'uses' },
  { source: 'tautsec', target: 'terraform', label: 'uses' },
  { source: 'tautsec', target: 'cyber-security', label: 'domain' },
  { source: 'tautsec', target: 'insurance', label: 'domain' },
  { source: 'lexi', target: 'horse-racing-analytics', label: 'domain' },
  { source: 'lexi', target: 'nodejs', label: 'stack' },
  { source: 'florence-ai', target: 'alexa-apps', label: 'platform' },
  { source: 'big-red-ronnie', target: 'alexa-apps', label: 'platform' },
  { source: 'my-paralegal', target: 'alexa-apps', label: 'platform' },
  { source: 'voice-ai-pioneer', target: 'alexa-apps', label: 'includes' },
  { source: 'voice-ai-pioneer', target: 'prompt-engineering', label: 'evolved to' },
  { source: 'ai-native-engineering', target: 'context-engineering', label: 'includes' },
  { source: 'ai-native-engineering', target: 'evaluation-loops', label: 'includes' },
  { source: 'music-industry', target: 'music-technology', label: 'led to' },
  { source: 'music-technology', target: 'aimi', label: 'produced' },
  { source: 'cloud-architecture', target: 'gcp', label: 'primary' },
  { source: 'cloud-architecture', target: 'aws', label: 'includes' },
  { source: 'platform-engineering', target: 'internal-tooling', label: 'domain' },
  { source: 'platform-engineering', target: 'infrastructure-automation', label: 'domain' },
  { source: 'aimi', target: 'javascript', label: 'stack' },
  { source: 'aimi', target: 'firestore', label: 'data' },
  { source: 'tautsec', target: 'agentic-workflows', label: 'AI workflows' },
  { source: 'lexi', target: 'mongodb-atlas', label: 'data' },
  { source: 'pete-whelan', target: 'music-industry', label: 'career' },
  { source: 'pete-whelan', target: 'healthcare-ai', label: 'career' },
]

export const portfolioEdges: PortfolioEdge[] = withPeteCapabilityLinks(
  portfolioEdgesCore,
  portfolioNodes,
)

export const nodeById = new Map(portfolioNodes.map((n) => [n.id, n]))

export function getClientCompany(project: PortfolioNode): PortfolioNode | undefined {
  if (!project.clientCompanyId) return undefined
  return nodeById.get(project.clientCompanyId)
}

export function getProjectsForCompany(companyId: string): PortfolioNode[] {
  return portfolioNodes.filter(
    (n) => n.type === 'project' && n.clientCompanyId === companyId,
  )
}

export function getNodeDisplayLabel(node: PortfolioNode): string {
  if (node.type === 'company') {
    if (node.companyRole === 'client') return `${node.label} · Client`
    if (node.companyRole === 'own') return `${node.label} · Own co.`
  }
  return node.label
}

export function formatEngagementPeriod(node: PortfolioNode): string | null {
  if (!node.startDate && !node.endDate) return null
  if (node.startDate && node.endDate) return `${node.startDate} → ${node.endDate}`
  return node.startDate ?? node.endDate ?? null
}

export function getConnectedIds(nodeId: string): Set<string> {
  const connected = new Set<string>()
  for (const edge of portfolioEdges) {
    if (edge.source === nodeId) connected.add(edge.target)
    if (edge.target === nodeId) connected.add(edge.source)
  }
  return connected
}

export function filterNodes(
  nodes: PortfolioNode[],
  category: FilterCategory,
  search: string,
): PortfolioNode[] {
  let filtered = nodes

  if (category !== 'all') {
    const tagMap: Record<Exclude<FilterCategory, 'all'>, string> = {
      projects: 'projects',
      skills: 'skills',
      companies: 'companies',
      ai: 'ai',
      cloud: 'cloud',
      'internal-tools': 'internal-tools',
    }
    const tag = tagMap[category]
    filtered = filtered.filter((n) => n.tags.includes(tag) || n.type === tag.replace('-', '') as NodeType)
    if (category === 'projects') filtered = filtered.filter((n) => n.type === 'project' || n.featured)
    if (category === 'skills') filtered = filtered.filter((n) => n.type === 'skill' || n.type === 'technology')
    if (category === 'companies') filtered = filtered.filter((n) => n.type === 'company')
    if (category === 'ai') filtered = filtered.filter((n) => n.tags.includes('ai'))
    if (category === 'cloud') filtered = filtered.filter((n) => n.tags.includes('cloud'))
    if (category === 'internal-tools') filtered = filtered.filter((n) => n.tags.includes('internal-tools'))
  }

  if (search.trim()) {
    const q = search.toLowerCase()
    filtered = filtered.filter(
      (n) =>
        n.label.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q) ||
        n.tags.some((t) => t.includes(q)),
    )
  }

  return filtered
}

export type NodePosition = { id: string; x: number; y: number; z: number }

export function computeGraphPositions(nodes: PortfolioNode[]): NodePosition[] {
  const center = nodes.find((n) => n.id === 'pete-whelan')
  const others = nodes.filter((n) => n.id !== 'pete-whelan')
  const positions: NodePosition[] = []

  if (center) positions.push({ id: center.id, x: 0, y: 0, z: 0 })

  const typeOrder: NodeType[] = [
    'project',
    'company',
    'methodology',
    'technology',
    'skill',
    'domain',
  ]

  const grouped = typeOrder.map((type) => others.filter((n) => n.type === type))

  grouped.forEach((group, ringIndex) => {
    const radius = 4 + ringIndex * 2.2
    const ySpread = (ringIndex % 2 === 0 ? 1 : -1) * 0.8
    group.forEach((node, i) => {
      const angle = (i / Math.max(group.length, 1)) * Math.PI * 2
      positions.push({
        id: node.id,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle * 0.7) * radius * 0.35 + ySpread,
        z: Math.sin(angle) * radius,
      })
    })
  })

  return positions
}
