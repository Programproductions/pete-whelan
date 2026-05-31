import { useMemo } from 'react'
import {
  filterNodes,
  getConnectedIds,
  portfolioEdges,
  portfolioNodes,
  type PortfolioNode,
} from '../data/portfolioGraph'
import { usePortfolioStore } from '../store/usePortfolioStore'
import {
  computeSemanticLayout,
  isEdgeVisible,
  isNodeVisibleInLayers,
} from '../utils/graphLayers'

const PETE_ID = 'pete-whelan'

export function useGraphDisplay() {
  const {
    filter,
    search,
    graphLayers,
    selectedNode,
    hoveredNodeId,
  } = usePortfolioStore()

  const layerNodes = useMemo(
    () => portfolioNodes.filter((n) => isNodeVisibleInLayers(n, graphLayers)),
    [graphLayers],
  )

  const filtered = useMemo(() => {
    if (filter === 'all' && !search.trim()) return layerNodes
    const allowed = new Set(layerNodes.map((n) => n.id))
    return filterNodes(portfolioNodes, filter, search).filter((n) => allowed.has(n.id))
  }, [layerNodes, filter, search])

  const visibleIds = useMemo(() => new Set(filtered.map((n) => n.id)), [filtered])

  const positionMap = useMemo(() => {
    const positions = computeSemanticLayout(portfolioNodes)
    return new Map(positions.map((p) => [p.id, p]))
  }, [])

  const focusId = selectedNode?.id ?? hoveredNodeId

  const highlightIds = useMemo(() => {
    const ids = new Set<string>([PETE_ID])
    if (!focusId) return ids
    ids.add(focusId)
    getConnectedIds(focusId).forEach((id) => {
      if (visibleIds.has(id)) ids.add(id)
    })
    return ids
  }, [focusId, visibleIds])

  const hasFocus = focusId !== null

  const edges = useMemo(() => {
    return portfolioEdges
      .filter((e) => isEdgeVisible(e.source, e.target, visibleIds))
      .map((edge) => {
        const active =
          !hasFocus ||
          highlightIds.has(edge.source) ||
          highlightIds.has(edge.target)
        return { ...edge, active }
      })
  }, [visibleIds, highlightIds, hasFocus])

  const nodeState = (node: PortfolioNode) => {
    const inHighlight = highlightIds.has(node.id)
    const dimmed = hasFocus && !inHighlight
    const highlighted = hasFocus && inHighlight
    return { dimmed, highlighted, inHighlight }
  }

  return {
    filtered,
    visibleIds,
    positionMap,
    edges,
    focusId,
    hasFocus,
    highlightIds,
    nodeState,
  }
}
