import type { NodePosition, PortfolioNode } from '../data/portfolioGraph'

const TIMELINE_ORDER = [
  'music-industry',
  'music-technology',
  'voice-ai-pioneer',
  'alexa-apps',
  'healthcare-ai',
  'cloud-architecture',
  'ai-native-engineering',
  'paradise-engineering',
  'pete-whelan',
]

const ARCH_LAYERS: { types: PortfolioNode['type'][]; x: number; spread: number }[] = [
  { types: ['domain'], x: -8, spread: 5 },
  { types: ['company'], x: -4, spread: 4 },
  { types: ['project'], x: 0, spread: 5 },
  { types: ['technology', 'skill'], x: 4, spread: 5 },
  { types: ['methodology'], x: 8, spread: 4 },
]

export type GraphViewMode = 'graph' | 'architecture' | 'timeline'

export function computeLayoutPositions(
  nodes: PortfolioNode[],
  mode: GraphViewMode,
): NodePosition[] {
  if (mode === 'architecture') return computeArchitectureLayout(nodes)
  if (mode === 'timeline') return computeTimelineLayout(nodes)
  return computeOrbitalLayout(nodes)
}

function computeOrbitalLayout(nodes: PortfolioNode[]): NodePosition[] {
  const center = nodes.find((n) => n.id === 'pete-whelan')
  const others = nodes.filter((n) => n.id !== 'pete-whelan')
  const positions: NodePosition[] = []
  if (center) positions.push({ id: center.id, x: 0, y: 0, z: 0 })

  const typeOrder: PortfolioNode['type'][] = [
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

function computeArchitectureLayout(nodes: PortfolioNode[]): NodePosition[] {
  const positions: NodePosition[] = []
  const pete = nodes.find((n) => n.id === 'pete-whelan')
  if (pete) positions.push({ id: pete.id, x: 0, y: 2, z: 0 })

  for (const layer of ARCH_LAYERS) {
    const layerNodes = nodes.filter((n) => layer.types.includes(n.type) && n.id !== 'pete-whelan')
    layerNodes.forEach((node, i) => {
      const row = i - (layerNodes.length - 1) / 2
      positions.push({
        id: node.id,
        x: layer.x,
        y: row * 1.1,
        z: (i % 3) * 0.5 - 0.5,
      })
    })
  }

  const placed = new Set(positions.map((p) => p.id))
  nodes.forEach((node, i) => {
    if (!placed.has(node.id)) {
      positions.push({ id: node.id, x: -10 + (i % 5) * 2, y: -4, z: 0 })
    }
  })
  return positions
}

function computeTimelineLayout(nodes: PortfolioNode[]): NodePosition[] {
  const positions: NodePosition[] = []
  const ordered = TIMELINE_ORDER.filter((id) => nodes.some((n) => n.id === id))
  const step = 3.5
  ordered.forEach((id, i) => {
    positions.push({
      id,
      x: -((ordered.length - 1) * step) / 2 + i * step,
      y: 0,
      z: 0,
    })
  })

  const placed = new Set(ordered)
  let fallback = 0
  nodes.forEach((node) => {
    if (!placed.has(node.id)) {
      positions.push({
        id: node.id,
        x: 8 + (fallback % 4) * 1.5,
        y: (fallback % 3) * 1.2 - 1,
        z: Math.floor(fallback / 4) * 0.8,
      })
      fallback++
    }
  })
  return positions
}

export const timelineMilestones = [
  'Music Industry',
  'Music Technology',
  'Voice AI',
  'Healthcare AI',
  'Cloud Engineering',
  'Solution Architecture',
  'AI-Native Engineering',
]
