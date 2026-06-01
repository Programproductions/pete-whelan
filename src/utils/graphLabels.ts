import type { PortfolioNode } from '../data/portfolioGraph'

/** Persistent name tags for orgs and delivery work; others on focus/hover. */
export function shouldShowGraphNodeLabel(
  node: PortfolioNode,
  options?: { highlighted?: boolean; hovered?: boolean },
): boolean {
  const { highlighted = false, hovered = false } = options ?? {}
  return (
    node.id === 'pete-whelan' ||
    node.type === 'company' ||
    node.type === 'project' ||
    highlighted ||
    hovered ||
    Boolean(node.phase)
  )
}
