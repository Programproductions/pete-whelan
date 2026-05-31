import type { PortfolioNode } from './portfolioGraph'

export type NodeNarrative = {
  whyExists?: string
  problemSolved?: string
  ledTo?: string[]
  outcome?: string
  storyPath?: string[]
}

export const nodeNarratives: Record<string, NodeNarrative> = {
  'pete-whelan': {
    whyExists: 'Central node — career as a system of platforms, domains and delivery practices.',
    problemSolved: 'Connecting product vision to production architecture across regulated and creative industries.',
    ledTo: ['program-music', 'program-productions', 'paradise-engineering', 'flight-deck'],
    outcome: 'Solutions architect operating at the intersection of AI-native delivery and cloud platforms.',
  },
  'flight-deck': {
    whyExists:
      'Terraform promotion and deployment workflows became difficult to manage as environments, products and contributors expanded.',
    problemSolved:
      'Opaque, risky infrastructure promotion blocked on technical gatekeepers; non-technical stakeholders lacked visibility.',
    ledTo: ['platform-engineering', 'cicd', 'terraform', 'internal-tooling'],
    outcome:
      'Enabled technical and non-technical stakeholders to safely promote infrastructure and applications from development through production.',
    storyPath: [
      'pete-whelan',
      'program-productions',
      'flight-deck',
      'terraform',
      'cicd',
      'platform-engineering',
    ],
  },
  tautsec: {
    whyExists:
      'Organisations needed faster, evidence-based cyber assessment aligned with insurance and risk workflows.',
    problemSolved: 'Manual cyber assessments were slow, inconsistent and hard to scale across clients.',
    ledTo: ['cyber-security', 'insurance', 'identity-platform', 'agentic-workflows'],
    outcome: 'Production cyber platform with Cyber Pilot and AI-assisted assessment on GCP.',
    storyPath: [
      'pete-whelan',
      'program-productions',
      'tautsec-pty',
      'web4',
      'tautsec',
      'terraform',
      'identity-platform',
      'gcp',
    ],
  },
  aimi: {
    whyExists: 'Music catalogues and rights metadata are fragmented; royalty auditing does not scale manually.',
    problemSolved: 'Rights teams drowning in catalogue complexity and inconsistent metadata.',
    ledTo: ['music-rights', 'openai', 'program-music'],
    outcome: 'Multi-tenant SaaS with LLM orchestration and human-in-the-loop audit workflows.',
    storyPath: ['pete-whelan', 'program-music', 'aimi', 'music-rights', 'openai'],
  },
  lexi: {
    whyExists: 'Racing intelligence requires real-time fusion of market data and predictive signals.',
    problemSolved: 'Fragmented data sources and slow decision support for time-sensitive markets.',
    ledTo: ['horse-racing-analytics', 'nodejs', 'mongodb-atlas'],
    outcome: 'Event-driven analytics platform with Betfair integration and predictive surfaces.',
    storyPath: ['pete-whelan', 'program-productions', 'web4', 'lexi', 'horse-racing-analytics'],
  },
  'paradise-engineering': {
    whyExists:
      'Traditional delivery breaks when AI agents become part of the engineering team without structure.',
    problemSolved: 'Ad-hoc AI usage created inconsistent quality, context loss and ungoverned changes.',
    ledTo: ['spec-driven-development', 'claude', 'cursor', 'codex', 'agentic-workflows'],
    outcome: 'Repeatable AI-native practice — this portfolio is a live proof-of-work.',
    storyPath: [
      'pete-whelan',
      'paradise-engineering',
      'spec-driven-development',
      'claude',
      'cursor',
      'agentic-workflows',
    ],
  },
  'florence-ai': {
    whyExists: 'WICI needed a production Alexa surface for Florence healthcare conversational AI.',
    problemSolved: 'Voice-first clinical-adjacent assistance with certification and intent reliability.',
    ledTo: ['healthcare-ai', 'prompt-engineering', 'voice-ai-pioneer'],
    outcome: 'Shipped Florence AI as a certified Alexa application for the client.',
    storyPath: ['pete-whelan', 'wici', 'florence-ai', 'florence-medical', 'healthcare-ai'],
  },
  'voice-ai-pioneer': {
    whyExists: 'Voice was the first mass-market conversational surface — before LLM chat became default.',
    problemSolved: 'Making unreliable speech and intent systems feel dependable in production.',
    ledTo: ['florence-ai', 'alexa-apps', 'my-paralegal', 'prompt-engineering', 'healthcare-ai'],
    outcome: 'Foundation for modern context engineering and agent guardrails.',
  },
  'ai-native-engineering': {
    whyExists: 'Engineering organisations need a deliberate operating model for agents, not tool sprawl.',
    problemSolved: 'Teams using AI without specs, evaluation or promotion governance.',
    ledTo: ['paradise-engineering', 'flight-deck', 'context-engineering', 'cursor'],
    outcome: 'Delivery rebuilt around specs, agents, platforms and measurable quality.',
  },
}

export function enrichNode(node: PortfolioNode): PortfolioNode {
  const narrative = nodeNarratives[node.id]
  if (!narrative) return node
  return { ...node, ...narrative }
}

export const ALWAYS_LABELED_NODES = new Set([
  'pete-whelan',
  'aimi',
  'tautsec',
  'lexi',
  'flight-deck',
  'paradise-engineering',
  'florence-ai',
])

export const EARTHBNC_LENS_NODE_IDS = new Set([
  'pete-whelan',
  'paradise-engineering',
  'ai-native-engineering',
  'spec-driven-development',
  'claude',
  'codex',
  'cursor',
  'antigravity',
  'openai',
  'agentic-workflows',
  'context-engineering',
  'evaluation-loops',
  'prompt-engineering',
  'pinecone',
  'mongodb-atlas',
  'flight-deck',
  'platform-engineering',
  'internal-tooling',
  'tautsec',
  'aimi',
  'cicd',
  'terraform',
])
