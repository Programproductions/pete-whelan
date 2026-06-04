import { useMemo } from 'react'
import type { PortfolioNode } from '../data/portfolioGraph'
import { usePortfolioStore } from '../store/usePortfolioStore'
import { getNodeColor, getNodeScale } from '../utils/nodeColors'
import { shouldShowGraphNodeLabel } from '../utils/graphLabels'
import { useGraphDisplay } from '../hooks/useGraphDisplay'

const VB = { width: 900, height: 520, pad: 48 }

function projectPositions(
  positions: { id: string; x: number; y: number; z: number }[],
) {
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

export function Graph2DView({ className = '' }: Graph2DViewProps) {
  const { selectNodeWithPath, setHoveredNodeId, hoveredNodeId, graphLayers } =
    usePortfolioStore()
  const { filtered, positionMap, edges, nodeState } = useGraphDisplay()
  const capabilitiesLayer = graphLayers.capabilities

  const coords = useMemo(() => {
    const positions = [...positionMap.values()]
    return projectPositions(positions)
  }, [positionMap])

  const renderNode = (node: PortfolioNode) => {
    const c = coords.get(node.id)
    if (!c) return null
    const { dimmed, highlighted } = nodeState(node)
    const r = Math.max(5, getNodeScale(node.type, node.featured) * 36)
    const color = getNodeColor(node.type)
    const showLabel = shouldShowGraphNodeLabel(node, {
      highlighted,
      hovered: hoveredNodeId === node.id,
      capabilitiesLayer,
    })

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
          fillOpacity={dimmed ? 0.42 : 0.92}
          stroke={highlighted ? '#fff' : color}
          strokeWidth={highlighted ? 2 : 0}
          strokeOpacity={highlighted ? 0.85 : 0}
        />
        {showLabel && (
          <>
            <text
              x={c.x}
              y={c.y - r - (node.phase ? 10 : 6)}
              textAnchor="middle"
              className="fill-zinc-200 text-[10px]"
              style={{ fontSize: 10, pointerEvents: 'none' }}
            >
              {node.label}
            </text>
            {node.phase && (
              <text
                x={c.x}
                y={c.y - r + 2}
                textAnchor="middle"
                className="fill-cyan-400/80 text-[8px]"
                style={{ fontSize: 8, pointerEvents: 'none' }}
              >
                {node.phase}
              </text>
            )}
          </>
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
          {edges.map((e) => {
            const a = coords.get(e.source)
            const b = coords.get(e.target)
            if (!a || !b) return null
            return (
              <line
                key={`${e.source}-${e.target}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={e.active ? '#22d3ee' : '#3f3f46'}
                strokeWidth={e.active ? 1.5 : 1}
                strokeOpacity={e.active ? 0.55 : 0.28}
              />
            )
          })}
        </g>
        <g>{filtered.map(renderNode)}</g>
      </svg>
    </div>
  )
}
