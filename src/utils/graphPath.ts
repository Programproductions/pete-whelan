import { portfolioEdges, nodeById } from '../data/portfolioGraph'
import { nodeNarratives } from '../data/narratives'

const adjacency = new Map<string, string[]>()

for (const edge of portfolioEdges) {
  if (!adjacency.has(edge.source)) adjacency.set(edge.source, [])
  if (!adjacency.has(edge.target)) adjacency.set(edge.target, [])
  adjacency.get(edge.source)!.push(edge.target)
  adjacency.get(edge.target)!.push(edge.source)
}

/** Shortest path between two nodes (undirected BFS). */
export function findShortestPath(fromId: string, toId: string): string[] {
  if (fromId === toId) return [fromId]
  const queue: string[] = [fromId]
  const visited = new Set<string>([fromId])
  const parent = new Map<string, string>()

  while (queue.length > 0) {
    const current = queue.shift()!
    const neighbors = adjacency.get(current) ?? []
    for (const next of neighbors) {
      if (visited.has(next)) continue
      visited.add(next)
      parent.set(next, current)
      if (next === toId) {
        const path: string[] = [toId]
        let cursor: string | undefined = toId
        while (cursor && cursor !== fromId) {
          cursor = parent.get(cursor)
          if (cursor) path.unshift(cursor)
        }
        return path
      }
      queue.push(next)
    }
  }
  return [fromId, toId]
}

/** Preferred narrative path, or shortest path from Pete. */
export function getRelationshipPath(targetId: string, rootId = 'pete-whelan'): string[] {
  const narrative = nodeNarratives[targetId]?.storyPath
  if (narrative && narrative.length > 0) return narrative
  if (!nodeById.has(targetId)) return []
  return findShortestPath(rootId, targetId)
}

export function pathEdgeKeys(path: string[]): Set<string> {
  const keys = new Set<string>()
  for (let i = 0; i < path.length - 1; i++) {
    const a = path[i]
    const b = path[i + 1]
    keys.add(`${a}-${b}`)
    keys.add(`${b}-${a}`)
  }
  return keys
}
