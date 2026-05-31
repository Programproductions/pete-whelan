import type { NodeType } from '../data/portfolioGraph'

const colors: Record<NodeType, string> = {
  person: '#22d3ee',
  company: '#a78bfa',
  project: '#34d399',
  skill: '#fbbf24',
  domain: '#f472b6',
  methodology: '#60a5fa',
  technology: '#94a3b8',
}

export function getNodeColor(type: NodeType): string {
  return colors[type]
}

export function getNodeScale(type: NodeType, featured?: boolean): number {
  if (type === 'person') return 0.45
  if (featured) return 0.28
  if (type === 'project') return 0.24
  return 0.18
}
