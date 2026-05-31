import {
  nodeById,
  portfolioEdges,
  portfolioNodes,
  type NodePosition,
  type PortfolioNode,
} from '../data/portfolioGraph'

export type GraphLayerId = 'organizations' | 'projects' | 'capabilities'

export type GraphLayers = Record<GraphLayerId, boolean>

export const DEFAULT_GRAPH_LAYERS: GraphLayers = {
  organizations: true,
  projects: true,
  capabilities: false,
}

const PETE_ID = 'pete-whelan'
const R_ORG = 4.2
const R_PROJECT = 7.8
const R_CAPABILITY = 10.8

export function nodeLayer(node: PortfolioNode): GraphLayerId | 'person' {
  if (node.id === PETE_ID || node.type === 'person') return 'person'
  if (node.type === 'company') return 'organizations'
  if (node.type === 'project') return 'projects'
  return 'capabilities'
}

export function isNodeVisibleInLayers(
  node: PortfolioNode,
  layers: GraphLayers,
): boolean {
  const layer = nodeLayer(node)
  if (layer === 'person') return true
  return layers[layer]
}

export function isEdgeVisible(
  sourceId: string,
  targetId: string,
  visibleIds: Set<string>,
): boolean {
  return visibleIds.has(sourceId) && visibleIds.has(targetId)
}

function findProjectAnchor(projectId: string): string {
  for (const edge of portfolioEdges) {
    if (edge.target !== projectId) continue
    const source = nodeById.get(edge.source)
    if (source?.type === 'company') return edge.source
  }
  for (const edge of portfolioEdges) {
    if (edge.target === projectId && edge.source === PETE_ID) return PETE_ID
  }
  return PETE_ID
}

function findCapabilityAnchor(capId: string): string {
  const priority: PortfolioNode['type'][] = ['project', 'company', 'methodology', 'person']
  for (const want of priority) {
    for (const edge of portfolioEdges) {
      const otherId = edge.source === capId ? edge.target : edge.target === capId ? edge.source : null
      if (!otherId) continue
      const other = nodeById.get(otherId)
      if (other && (other.type === want || (want === 'person' && other.id === PETE_ID))) {
        return otherId
      }
    }
  }
  return PETE_ID
}

/** Pete-centred layout: companies on inner ring, projects on middle, capabilities on outer. */
export function computeSemanticLayout(nodes: PortfolioNode[] = portfolioNodes): NodePosition[] {
  const positions: NodePosition[] = []
  const pete = nodes.find((n) => n.id === PETE_ID)
  if (pete) positions.push({ id: PETE_ID, x: 0, y: 0, z: 0 })

  const companies = nodes.filter((n) => n.type === 'company')
  const companyAngle = new Map<string, number>()
  companies.forEach((company, i) => {
    const angle = (i / Math.max(companies.length, 1)) * Math.PI * 2
    companyAngle.set(company.id, angle)
    positions.push({
      id: company.id,
      x: Math.cos(angle) * R_ORG,
      y: 0,
      z: Math.sin(angle) * R_ORG,
    })
  })

  const projects = nodes.filter((n) => n.type === 'project')
  const byAnchor = new Map<string, PortfolioNode[]>()
  for (const project of projects) {
    const anchor = findProjectAnchor(project.id)
    if (!byAnchor.has(anchor)) byAnchor.set(anchor, [])
    byAnchor.get(anchor)!.push(project)
  }

  for (const [anchorId, group] of byAnchor) {
    const base = companyAngle.get(anchorId) ?? 0
    group.forEach((project, j) => {
      const spread = 0.38
      const angle = base + (j - (group.length - 1) / 2) * spread
      positions.push({
        id: project.id,
        x: Math.cos(angle) * R_PROJECT,
        y: ((j % 2) * 2 - 1) * 0.35,
        z: Math.sin(angle) * R_PROJECT,
      })
    })
  }

  const capabilities = nodes.filter((n) =>
    ['skill', 'technology', 'domain', 'methodology'].includes(n.type),
  )
  const capByAnchor = new Map<string, PortfolioNode[]>()
  for (const cap of capabilities) {
    const anchor = findCapabilityAnchor(cap.id)
    if (!capByAnchor.has(anchor)) capByAnchor.set(anchor, [])
    capByAnchor.get(anchor)!.push(cap)
  }

  for (const [anchorId, group] of capByAnchor) {
    const anchorPos = positions.find((p) => p.id === anchorId)
    const baseAngle = anchorPos
      ? Math.atan2(anchorPos.z, anchorPos.x)
      : (companyAngle.get(anchorId) ?? 0)
    group.forEach((cap, j) => {
      const spread = 0.28
      const angle = baseAngle + (j - (group.length - 1) / 2) * spread
      positions.push({
        id: cap.id,
        x: Math.cos(angle) * R_CAPABILITY,
        y: ((j % 3) - 1) * 0.45,
        z: Math.sin(angle) * R_CAPABILITY,
      })
    })
  }

  return positions
}
