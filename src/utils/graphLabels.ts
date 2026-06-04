import type { PortfolioNode } from '../data/portfolioGraph'
import { isDomainNode, isSkillLayerNode } from './graphLayers'

/** Persistent name tags for orgs, projects, domains and skills when their layer is on. */
export function shouldShowGraphNodeLabel(
  node: PortfolioNode,
  options?: {
    highlighted?: boolean
    hovered?: boolean
    domainsLayer?: boolean
    skillsLayer?: boolean
  },
): boolean {
  const {
    highlighted = false,
    hovered = false,
    domainsLayer = false,
    skillsLayer = false,
  } = options ?? {}
  return (
    node.id === 'pete-whelan' ||
    node.type === 'company' ||
    node.type === 'project' ||
    (domainsLayer && isDomainNode(node)) ||
    (skillsLayer && isSkillLayerNode(node)) ||
    highlighted ||
    hovered ||
    Boolean(node.phase) ||
    Boolean(node.startDate)
  )
}
