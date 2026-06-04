import {
  nodeById,
  portfolioEdges,
  portfolioNodes,
  type NodePosition,
  type PortfolioNode,
} from '../data/portfolioGraph'

export type GraphLayerId = 'organizations' | 'projects' | 'domains' | 'skills'

export type GraphLayers = Record<GraphLayerId, boolean>

export const DEFAULT_GRAPH_LAYERS: GraphLayers = {
  organizations: true,
  projects: true,
  domains: false,
  skills: false,
}

const PETE_ID = 'pete-whelan'
const R_ORG = 4.2
const R_PROJECT = 7.8
/** Domains sit above skills — closer to projects and Pete */
const Y_DOMAIN = -3.2
/** Skills, tech and methods — lowest layer under domains */
const Y_SKILL = -6.2
const MIN_LAYER_SPACING = 1.35

const DOMAIN_TYPES: PortfolioNode['type'][] = ['domain']
const SKILL_TYPES: PortfolioNode['type'][] = ['skill', 'technology', 'methodology']

export function isDomainNode(node: PortfolioNode): boolean {
  return node.type === 'domain'
}

export function isSkillLayerNode(node: PortfolioNode): boolean {
  return SKILL_TYPES.includes(node.type)
}

export function nodeLayer(node: PortfolioNode): GraphLayerId | 'person' {
  if (node.id === PETE_ID || node.type === 'person') return 'person'
  if (node.type === 'company') return 'organizations'
  if (node.type === 'project') return 'projects'
  if (node.type === 'domain') return 'domains'
  return 'skills'
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
  const project = nodeById.get(projectId)
  if (project?.clientCompanyId) return project.clientCompanyId
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

function getLinkedProjectIds(nodeId: string): string[] {
  const projectIds: string[] = []
  for (const edge of portfolioEdges) {
    const otherId =
      edge.source === nodeId ? edge.target : edge.target === nodeId ? edge.source : null
    if (!otherId) continue
    if (nodeById.get(otherId)?.type === 'project') projectIds.push(otherId)
  }
  return projectIds
}

function findSkillAnchor(capId: string): string {
  const priority: PortfolioNode['type'][] = ['project', 'company', 'domain', 'person']
  for (const want of priority) {
    for (const edge of portfolioEdges) {
      const otherId =
        edge.source === capId ? edge.target : edge.target === capId ? edge.source : null
      if (!otherId) continue
      const other = nodeById.get(otherId)
      if (other && (other.type === want || (want === 'person' && other.id === PETE_ID))) {
        return otherId
      }
    }
  }
  return PETE_ID
}

function draftPositionForNode(
  node: PortfolioNode,
  positions: NodePosition[],
  companyAngle: Map<string, number>,
  pullTowardProjects: number,
): { x: number; z: number } {
  const linkedProjectIds = getLinkedProjectIds(node.id)
  const projectPositions = linkedProjectIds
    .map((id) => positions.find((p) => p.id === id))
    .filter((p): p is NodePosition => Boolean(p))

  if (projectPositions.length > 0) {
    const x =
      (projectPositions.reduce((sum, p) => sum + p.x, 0) / projectPositions.length) *
      pullTowardProjects
    const z =
      (projectPositions.reduce((sum, p) => sum + p.z, 0) / projectPositions.length) *
      pullTowardProjects
    return { x, z }
  }

  const anchorId = findSkillAnchor(node.id)
  const anchorPos = positions.find((p) => p.id === anchorId)
  const baseAngle = anchorPos
    ? Math.atan2(anchorPos.z, anchorPos.x)
    : (companyAngle.get(anchorId) ?? 0)
  const radius = anchorPos ? Math.hypot(anchorPos.x, anchorPos.z) * pullTowardProjects * 0.85 : 3.2
  return {
    x: Math.cos(baseAngle) * radius,
    z: Math.sin(baseAngle) * radius,
  }
}

function spreadLayerPositions(
  drafts: { id: string; x: number; z: number }[],
  y: number,
): NodePosition[] {
  const sorted = [...drafts].sort((a, b) => Math.atan2(a.z, a.x) - Math.atan2(b.z, b.x))
  const placed: { x: number; z: number }[] = []

  return sorted.map((draft) => {
    let { x, z } = draft
    for (let attempt = 0; attempt < 12; attempt++) {
      const collision = placed.some((p) => {
        const dx = p.x - x
        const dz = p.z - z
        return Math.hypot(dx, dz) < MIN_LAYER_SPACING
      })
      if (!collision) break
      const angle = Math.atan2(z, x) + 0.22 * (attempt + 1)
      const radius = Math.hypot(x, z) + 0.35
      x = Math.cos(angle) * radius
      z = Math.sin(angle) * radius
    }
    placed.push({ x, z })
    return { id: draft.id, x, y, z }
  })
}

/** Pete-centred: companies → projects → domains → skills (top to bottom). */
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

  const domains = nodes.filter((n) => DOMAIN_TYPES.includes(n.type))
  const domainDrafts = domains.map((node) => ({
    id: node.id,
    ...draftPositionForNode(node, positions, companyAngle, 0.72),
  }))
  positions.push(...spreadLayerPositions(domainDrafts, Y_DOMAIN))

  const skills = nodes.filter((n) => SKILL_TYPES.includes(n.type))
  const skillDrafts = skills.map((node) => ({
    id: node.id,
    ...draftPositionForNode(node, positions, companyAngle, 0.52),
  }))
  positions.push(...spreadLayerPositions(skillDrafts, Y_SKILL))

  return positions
}
