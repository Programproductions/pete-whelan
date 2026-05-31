import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html, Line, OrbitControls } from '@react-three/drei'
import { Suspense, useMemo, useRef, useEffect } from 'react'
import * as THREE from 'three'
import { constellationById } from '../data/constellations'
import { ALWAYS_LABELED_NODES, EARTHBNC_LENS_NODE_IDS } from '../data/narratives'
import {
  filterNodes,
  getConnectedIds,
  portfolioEdges,
  portfolioNodes,
  type NodePosition,
  type PortfolioNode,
} from '../data/portfolioGraph'
import { usePortfolioStore } from '../store/usePortfolioStore'
import { getNodeColor, getNodeScale } from '../utils/nodeColors'
import { computeLayoutPositions } from '../utils/graphLayout'
import { pathEdgeKeys } from '../utils/graphPath'

function CameraRig({ target }: { target: THREE.Vector3 | null }) {
  const { camera } = useThree()
  const desired = useRef(new THREE.Vector3(0, 2, 14))
  const lookAt = useRef(new THREE.Vector3(0, 0, 0))

  useEffect(() => {
    if (target) {
      desired.current.set(target.x + 2.2, target.y + 1.8, target.z + 5.5)
      lookAt.current.copy(target)
    } else {
      desired.current.set(0, 2, 14)
      lookAt.current.set(0, 0, 0)
    }
  }, [target])

  useFrame(() => {
    camera.position.lerp(desired.current, 0.05)
    camera.lookAt(lookAt.current)
  })

  return null
}

function AnimatedPathLine({ points }: { points: [number, number, number][] }) {
  return (
    <Line
      points={points}
      color="#22d3ee"
      lineWidth={2.5}
      dashed
      dashSize={0.35}
      gapSize={0.18}
      transparent
      opacity={0.92}
    />
  )
}

function GraphNode({
  node,
  position,
  dimmed,
  highlighted,
  pathActive,
  showLabel,
  onSelect,
  onHover,
}: {
  node: PortfolioNode
  position: NodePosition
  dimmed: boolean
  highlighted: boolean
  pathActive: boolean
  showLabel: boolean
  onSelect: () => void
  onHover: (hover: boolean) => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const color = getNodeColor(node.type)
  const scale = getNodeScale(node.type, node.featured)
  const emissive = pathActive ? 0.9 : highlighted ? 0.65 : dimmed ? 0.04 : 0.28

  useFrame((state) => {
    if (!meshRef.current) return
    const pulse = highlighted || pathActive ? 1 + Math.sin(state.clock.elapsedTime * 3) * 0.06 : 1
    meshRef.current.scale.setScalar(scale * pulse)
  })

  return (
    <group position={[position.x, position.y, position.z]}>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation()
          onSelect()
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          document.body.style.cursor = 'pointer'
          onHover(true)
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'default'
          onHover(false)
        }}
      >
        <sphereGeometry args={[1, 28, 28]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissive}
          transparent
          opacity={dimmed ? 0.2 : 0.98}
          roughness={0.35}
          metalness={0.4}
        />
      </mesh>
      {(showLabel || highlighted || pathActive) && (
        <Html distanceFactor={14} center style={{ pointerEvents: 'none' }}>
          <span
            className={`whitespace-nowrap rounded px-2 py-0.5 text-[10px] backdrop-blur ${
              pathActive
                ? 'bg-cyan-500/30 font-medium text-cyan-100 ring-1 ring-cyan-400/50'
                : 'bg-black/75 text-zinc-200'
            }`}
          >
            {node.label}
          </span>
        </Html>
      )}
    </group>
  )
}

function GraphEdges({
  positions,
  visibleIds,
  highlightIds,
  pathKeys,
}: {
  positions: Map<string, NodePosition>
  visibleIds: Set<string>
  highlightIds: Set<string>
  pathKeys: Set<string>
}) {
  const lines = useMemo(() => {
    return portfolioEdges
      .filter((e) => visibleIds.has(e.source) && visibleIds.has(e.target))
      .map((edge) => {
        const a = positions.get(edge.source)
        const b = positions.get(edge.target)
        if (!a || !b) return null
        const edgeKey = `${edge.source}-${edge.target}`
        const onPath = pathKeys.has(edgeKey)
        const connected =
          onPath ||
          highlightIds.has(edge.source) ||
          highlightIds.has(edge.target)
        return {
          key: edgeKey,
          points: [
            [a.x, a.y, a.z] as [number, number, number],
            [b.x, b.y, b.z] as [number, number, number],
          ],
          connected,
          onPath,
        }
      })
      .filter(Boolean) as {
      key: string
      points: [number, number, number][]
      connected: boolean
      onPath: boolean
    }[]
  }, [positions, visibleIds, highlightIds, pathKeys])

  return (
    <>
      {lines.map((line) =>
        line.onPath ? (
          <AnimatedPathLine key={line.key} points={line.points} />
        ) : (
          <Line
            key={line.key}
            points={line.points}
            color={line.connected ? '#22d3ee' : '#3f3f46'}
            lineWidth={line.connected ? 1 : 0.4}
            transparent
            opacity={line.connected ? 0.45 : 0.12}
          />
        ),
      )}
    </>
  )
}

function SceneContent() {
  const {
    filter,
    search,
    viewMode,
    constellation,
    lens,
    selectedNode,
    hoveredNodeId,
    relationshipPath,
    selectNodeWithPath,
    setHoveredNodeId,
  } = usePortfolioStore()

  const filtered = useMemo(
    () => filterNodes(portfolioNodes, filter, search),
    [filter, search],
  )
  const visibleIds = useMemo(() => new Set(filtered.map((n) => n.id)), [filtered])

  const constellationIds = useMemo(() => {
    if (!constellation) return null
    const c = constellationById.get(constellation)
    return c ? new Set(c.nodeIds) : null
  }, [constellation])

  const lensIds = useMemo(
    () => (lens === 'earthbanc' ? EARTHBNC_LENS_NODE_IDS : null),
    [lens],
  )

  const basePositions = useMemo(
    () => computeLayoutPositions(filtered, viewMode),
    [filtered, viewMode],
  )

  const positionMap = useMemo(() => {
    const map = new Map(basePositions.map((p) => [p.id, { ...p }]))
    if (constellationIds) {
      const focus = filtered.filter((n) => constellationIds.has(n.id))
      focus.forEach((node, i) => {
        const pos = map.get(node.id)
        if (!pos) return
        const angle = (i / Math.max(focus.length, 1)) * Math.PI * 2
        const pull = 0.55
        pos.x *= pull
        pos.z *= pull
        pos.y += Math.sin(angle) * 0.3
      })
    }
    return map
  }, [basePositions, constellationIds, filtered])

  const pathKeys = useMemo(() => pathEdgeKeys(relationshipPath), [relationshipPath])
  const pathSet = useMemo(() => new Set(relationshipPath), [relationshipPath])

  const focusId = selectedNode?.id ?? hoveredNodeId
  const highlightIds = useMemo(() => {
    const ids = new Set<string>()
    if (pathSet.size > 0) {
      pathSet.forEach((id) => ids.add(id))
      return ids
    }
    if (constellationIds) {
      constellationIds.forEach((id) => {
        if (visibleIds.has(id)) ids.add(id)
      })
      constellationIds.forEach((id) => {
        getConnectedIds(id).forEach((c) => {
          if (visibleIds.has(c)) ids.add(c)
        })
      })
      return ids
    }
    if (lensIds && !focusId) {
      lensIds.forEach((id) => {
        if (visibleIds.has(id)) ids.add(id)
      })
      return ids
    }
    if (!focusId) return ids
    getConnectedIds(focusId).forEach((id) => ids.add(id))
    ids.add(focusId)
    return ids
  }, [focusId, constellationIds, lensIds, pathSet, visibleIds])

  const hasHighlight = highlightIds.size > 0 || pathSet.size > 0

  const cameraTarget = useMemo(() => {
    if (!selectedNode) return null
    const pos = positionMap.get(selectedNode.id)
    if (!pos) return null
    return new THREE.Vector3(pos.x, pos.y, pos.z)
  }, [selectedNode, positionMap])

  return (
    <>
      <ambientLight intensity={0.32} />
      <pointLight position={[10, 10, 10]} intensity={0.85} color="#22d3ee" />
      <pointLight position={[-8, -4, -6]} intensity={0.35} color="#a78bfa" />
      <fog attach="fog" args={['#050608', 18, 42]} />
      <CameraRig target={cameraTarget} />
      <GraphEdges
        positions={positionMap}
        visibleIds={visibleIds}
        highlightIds={highlightIds}
        pathKeys={pathKeys}
      />
      {filtered.map((node) => {
        const pos = positionMap.get(node.id)
        if (!pos) return null
        const inHighlight = highlightIds.has(node.id)
        const dimmed = hasHighlight && !inHighlight
        const pathActive = pathSet.has(node.id)
        const lensDimmed = lensIds !== null && !lensIds.has(node.id) && !inHighlight
        const showLabel =
          ALWAYS_LABELED_NODES.has(node.id) ||
          hoveredNodeId === node.id ||
          selectedNode?.id === node.id ||
          pathActive

        return (
          <GraphNode
            key={node.id}
            node={node}
            position={pos}
            dimmed={dimmed || lensDimmed}
            highlighted={inHighlight && !pathActive}
            pathActive={pathActive}
            showLabel={showLabel}
            onSelect={() => selectNodeWithPath(node)}
            onHover={(hover) => setHoveredNodeId(hover ? node.id : null)}
          />
        )
      })}
      <OrbitControls
        enableDamping
        dampingFactor={0.08}
        minDistance={5}
        maxDistance={32}
        maxPolarAngle={Math.PI / 1.75}
      />
    </>
  )
}

type GraphSceneProps = {
  className?: string
}

export function GraphScene({ className = '' }: GraphSceneProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-zinc-800 bg-[#050608] ${className}`}
    >
      <Canvas
        camera={{ position: [0, 2, 14], fov: 48 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        onPointerMissed={() => usePortfolioStore.getState().selectNodeWithPath(null)}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  )
}
