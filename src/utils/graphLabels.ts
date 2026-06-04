import type { PortfolioNode } from '../data/portfolioGraph'

const CAPABILITY_NODE_TYPES: PortfolioNode['type'][] = [
  'skill',
  'technology',
  'domain',
  'methodology',
]

export function isCapabilityNode(node: PortfolioNode): boolean {
  return CAPABILITY_NODE_TYPES.includes(node.type)
}

/** Persistent name tags for orgs, delivery work, and capabilities when that layer is on. */
export function shouldShowGraphNodeLabel(
  node: PortfolioNode,
  options?: {
    highlighted?: boolean
    hovered?: boolean
    capabilitiesLayer?: boolean
  },
): boolean {
  const { highlighted = false, hovered = false, capabilitiesLayer = false } = options ?? {}
  return (
    node.id === 'pete-whelan' ||
    node.type === 'company' ||
    node.type === 'project' ||
    (capabilitiesLayer && isCapabilityNode(node)) ||
    highlighted ||
    hovered ||
    Boolean(node.phase)
  )
}
