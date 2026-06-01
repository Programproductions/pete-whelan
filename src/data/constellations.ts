export type ConstellationId =
  | 'ai-native-engineering'
  | 'cloud-architecture'
  | 'cyber-security'
  | 'music-technology'
  | 'voice-ai'
  | 'platform-engineering'

export type Constellation = {
  id: ConstellationId
  label: string
  description: string
  nodeIds: string[]
}

export const constellations: Constellation[] = [
  {
    id: 'ai-native-engineering',
    label: 'AI-Native Engineering',
    description: 'Spec-driven delivery, agents, evaluation and context engineering.',
    nodeIds: [
      'pete-whelan',
      'paradise-engineering',
      'ai-native-engineering',
      'spec-driven-development',
      'claude',
      'agentic-workflows',
      'context-engineering',
      'evaluation-loops',
      'openai',
      'aimi',
      'tautsec',
    ],
  },
  {
    id: 'cloud-architecture',
    label: 'Cloud Architecture',
    description: 'GCP, AWS, Terraform and production platform design.',
    nodeIds: [
      'pete-whelan',
      'cloud-architecture',
      'gcp',
      'aws',
      'terraform',
      'identity-platform',
      'firestore',
      'tautsec',
      'flight-deck',
      'cicd',
    ],
  },
  {
    id: 'cyber-security',
    label: 'Cyber Security',
    description: 'Cyber platforms, insurance workflows and assessment automation.',
    nodeIds: [
      'pete-whelan',
      'tautsec',
      'web4',
      'program-productions',
      'cyber-security',
      'insurance',
      'gcp',
      'terraform',
      'identity-platform',
      'agentic-workflows',
    ],
  },
  {
    id: 'music-technology',
    label: 'Music Technology',
    description: 'Rights, catalogues and AI-powered royalty intelligence.',
    nodeIds: [
      'pete-whelan',
      'music-industry',
      'music-technology',
      'program-music',
      'aimi',
      'music-rights',
      'openai',
    ],
  },
  {
    id: 'voice-ai',
    label: 'Voice AI',
    description: 'Alexa, legal assistants and healthcare conversational systems.',
    nodeIds: [
      'pete-whelan',
      'voice-ai-pioneer',
      'alexa-apps',
      'my-paralegal',
      'florence-ai',
      'big-red-ronnie',
      'sage-chatbot',
      'wici',
      'alltasks-it',
      'healthcare-ai',
      'prompt-engineering',
    ],
  },
  {
    id: 'platform-engineering',
    label: 'Platform Engineering',
    description: 'Internal tooling, governance and safer promotion workflows.',
    nodeIds: [
      'pete-whelan',
      'flight-deck',
      'platform-engineering',
      'terraform',
      'cicd',
      'internal-tooling',
      'infrastructure-automation',
      'paradise-engineering',
      'tautsec',
    ],
  },
]

export const constellationById = new Map(constellations.map((c) => [c.id, c]))
