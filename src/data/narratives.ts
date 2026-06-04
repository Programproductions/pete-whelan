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
      'Terraform promotion governance for technical and non-technical stakeholders — work in progress at Program Productions.',
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
      'Australian SMBs needed one path from ongoing posture to insurance-ready outcomes across direct, broker and MSP channels.',
    problemSolved:
      'Fragmented scans, manual Essential Eight work and insurance applications disconnected from live compliance evidence.',
    ledTo: ['cyber-security', 'insurance', 'identity-platform', 'agentic-workflows'],
    outcome:
      'TautSec Cyber Protect — Chubb cover, compliance dashboard and CyberPilot AI on GCP (tautsec.com.au).',
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
    whyExists:
      'Music rights need both catalogue-scale intelligence and creator-ready dispute workflows — not spreadsheets and manual audits.',
    problemSolved:
      'Fragmented metadata, slow royalty auditing and ambiguous disputed records across creators and rights holders.',
    ledTo: ['music-rights', 'program-music', 'agentic-workflows', 'openai'],
    outcome:
      'AIMI — recover royalties, route disputes safely, audit with human-in-the-loop; private beta, invite only.',
    storyPath: ['pete-whelan', 'program-music', 'aimi', 'music-rights', 'openai'],
  },
  lexi: {
    whyExists:
      'Racing punters needed AI tips grounded in form, pricing and live market data — not gut feel or stale form guides.',
    problemSolved:
      'Turning fragmented form and pricing inputs into timely predictions and twice-daily tips at scale.',
    ledTo: ['horse-racing-analytics', 'nodejs', 'openai', 'prompt-engineering'],
    outcome:
      'Shipped lexi.tips — LEXI analyses race data and delivers intelligence, predictions and tips.',
    storyPath: ['pete-whelan', 'program-productions', 'web4', 'lexi', 'horse-racing-analytics'],
  },
  'paradise-engineering': {
    whyExists:
      'Teams need to see how security boundaries and spec-driven components fit the platform they are building — not only in flat diagrams.',
    problemSolved:
      'Architecture and security intent were hard to communicate from docs alone while Tautsec was evolving.',
    ledTo: ['tautsec', 'spec-driven-development', 'cyber-security', 'claude', 'cursor'],
    outcome:
      'Experimental 3D architecture view with documentation — work in progress for the Tautsec platform.',
    storyPath: [
      'pete-whelan',
      'program-productions',
      'paradise-engineering',
      'tautsec',
      'spec-driven-development',
      'cyber-security',
    ],
  },
  'florence-ai': {
    whyExists: 'WICI needed a production Alexa surface for Florence healthcare conversational AI.',
    problemSolved: 'Voice-first clinical-adjacent assistance with certification and intent reliability.',
    ledTo: ['healthcare-ai', 'prompt-engineering', 'voice-ai-pioneer'],
    outcome: 'Shipped Florence AI as a certified Alexa application for the client.',
    storyPath: ['pete-whelan', 'wici', 'florence-ai', 'healthcare-ai'],
  },
  'big-red-ronnie': {
    whyExists:
      'AllTasks IT needed a hands-free Alexa surface for Ron Finemore Transport drivers on the road.',
    problemSolved:
      'Drivers needed logistics and delivery updates without taking eyes off the road or hands off the wheel.',
    ledTo: ['voice-ai-pioneer', 'prompt-engineering'],
    outcome:
      'Shipped BigRedRonnie — a certified Alexa Voice App for driver logistics and delivery workflows.',
    storyPath: ['pete-whelan', 'alltasks-it', 'big-red-ronnie', 'voice-ai-pioneer'],
  },
  'voice-ai-pioneer': {
    whyExists: 'Voice was the first mass-market conversational surface — before LLM chat became default.',
    problemSolved: 'Making unreliable speech and intent systems feel dependable in production.',
    ledTo: [
      'florence-ai',
      'big-red-ronnie',
      'alexa-apps',
      'my-paralegal',
      'prompt-engineering',
      'healthcare-ai',
    ],
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
  'big-red-ronnie',
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
