import { useMemo } from 'react'
import {
  computeGraphPositions,
  filterNodes,
  getConnectedIds,
  portfolioEdges,
  portfolioNodes,
  type NodePosition,
  type PortfolioNode,
} from '../data/portfolioGraph'
import { usePortfolioStore } from '../store/usePortfolioStore'
import { getNodeColor, getNodeScale } from '../utils/nodeColors'

const VB = { width: 900, height: 520, pad: 48 }

function projectPositions(positions: NodePosition[]) {
  const xs = positions.map((p) => p.x)
  const zs = positions.map((p) => p.z)
  const minX = Math.min(...xs)
  const maxX = Math.max(...xs)
  const minZ = Math.min(...zs)
  const maxZ = Math.max(...zs)
  const spanX = maxX - minX || 1
  const spanZ = maxZ - minZ || 1
  const innerW = VB.width - VB.pad * 2
  const innerH = VB.height - VB.pad * 2

  const map = new Map<string, { x: number; y: number }>()
  positions.forEach((p) => {
    map.set(p.id, {
      x: VB.pad + ((p.x - minX) / spanX) * innerW,
      y: VB.pad + ((p.z - minZ) / spanZ) * innerH,
    })
  })
  return map
}

type Graph2DViewProps = {
  className?: string
}

/** SVG career graph — works when WebGL is blocked or disabled. */
export function Graph2DView({ className = '' }: Graph2DViewProps) {
  const {
    filter,
    search,
    selectedNode,
    hoveredNodeId,
    selectNodeWithPath,
    setHoveredNodeId,
  } = usePortfolioStore()

  const filtered = useMemo(
    () => filterNodes(portfolioNodes, filter, search),
    [filter, search],
  )
  const visibleIds = useMemo(() => new Set(filtered.map((n) => n.id)), [filtered])

  const coords = useMemo(() => {
    const positions = computeGraphPositions(portfolioNodes)
    return projectPositions(positions)
  }, [])

  const focusId = selectedNode?.id ?? hoveredNodeId
  const highlightIds = useMemo(() => {
    if (!focusId) return new Set<string>()
    const ids = getConnectedIds(focusId)
    ids.add(focusId)
    return ids
  }, [focusId])

  const hasFocus = focusId !== null

  const edges = useMemo(() => {
    return portfolioEdges
      .filter((e) => visibleIds.has(e.source) && visibleIds.has(e.target))
      .map((edge) => {
        const a = coords.get(edge.source)
        const b = coords.get(edge.target)
        if (!a || !b) return null
        const active =
          !hasFocus || highlightIds.has(edge.source) || highlightIds.has(edge.target)
        return { key: `${edge.source}-${edge.target}`, a, b, active }
      })
      .filter(Boolean) as {
      key: string
      a: { x: number; y: number }
      b: { x: number; y: number }
      active: boolean
    }[]
  }, [coords, visibleIds, highlightIds, hasFocus])

  const renderNode = (node: PortfolioNode) => {
    const c = coords.get(node.id)
    if (!c) return null
    const inHighlight = highlightIds.has(node.id)
    const dimmed = hasFocus && !inHighlight
    const highlighted = hasFocus && inHighlight
    const r = Math.max(5, getNodeScale(node.type, node.featured) * 36)
    const color = getNodeColor(node.type)
    const showLabel =
      node.id === 'pete-whelan' || highlighted || hoveredNodeId === node.id

    return (
      <g
        key={node.id}
        className="cursor-pointer"
        onClick={() => selectNodeWithPath(node)}
        onMouseEnter={() => setHoveredNodeId(node.id)}
        onMouseLeave={() => setHoveredNodeId(null)}
      >
        <circle
          cx={c.x}
          cy={c.y}
          r={r}
          fill={color}
          fillOpacity={dimmed ? 0.2 : 0.9}
          stroke={highlighted ? '#fff' : color}
          strokeWidth={highlighted ? 2 : 0}
          strokeOpacity={highlighted ? 0.8 : 0}
        />
        {showLabel && (
          <text
            x={c.x}
            y={c.y - r - 6}
            textAnchor="middle"
            className="fill-zinc-200 text-[10px]"
            style={{ fontSize: 10, pointerEvents: 'none' }}
          >
            {node.label}
          </text>
        )}
      </g>
    )
  }

  return (
    <div
      className={`relative overflow-auto rounded-xl border border-zinc-800 bg-[#050608] ${className}`}
    >
      <svg
        viewBox={`0 0 ${VB.width} ${VB.height}`}
        className="h-full min-h-[320px] w-full"
        role="img"
        aria-label="Career relationship graph"
      >
        <rect width={VB.width} height={VB.height} fill="#050608" />
        <g>
          {edges.map((e) => (
            <line
              key={e.key}
              x1={e.a.x}
              y1={e.a.y}
              x2={e.b.x}
              y2={e.b.y}
              stroke={e.active ? '#22d3ee' : '#3f3f46'}
              strokeWidth={e.active ? 1.5 : 1}
              strokeOpacity={e.active ? 0.55 : 0.22}
            />
          ))}
        </g>
        <g>{filtered.map(renderNode)}</g>
      </svg>
    </div>
  )
}
