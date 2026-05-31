import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html, Line, OrbitControls } from '@react-three/drei'
import { Suspense, useMemo, useRef, useEffect } from 'react'
import * as THREE from 'three'
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

function CameraRig({ target }: { target: THREE.Vector3 | null }) {
  const { camera } = useThree()
  const desired = useRef(new THREE.Vector3(0, 2, 14))
  const lookAt = useRef(new THREE.Vector3(0, 0, 0))

  useEffect(() => {
    if (target) {
      desired.current.set(target.x + 2, target.y + 1.5, target.z + 6)
      lookAt.current.copy(target)
    } else {
      desired.current.set(0, 2, 14)
      lookAt.current.set(0, 0, 0)
    }
  }, [target])

  useFrame(() => {
    camera.position.lerp(desired.current, 0.06)
    camera.lookAt(lookAt.current)
  })

  return null
}

function GraphNode({
  node,
  position,
  dimmed,
  highlighted,
  onSelect,
  onHover,
}: {
  node: PortfolioNode
  position: NodePosition
  dimmed: boolean
  highlighted: boolean
  onSelect: () => void
  onHover: (hover: boolean) => void
}) {
  const color = getNodeColor(node.type)
  const scale = getNodeScale(node.type, node.featured)
  const emissive = highlighted ? 0.6 : dimmed ? 0.05 : 0.25

  return (
    <group position={[position.x, position.y, position.z]}>
      <mesh
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
        <sphereGeometry args={[scale, 24, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissive}
          transparent
          opacity={dimmed ? 0.25 : 0.95}
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>
      {(highlighted || node.id === 'pete-whelan') && (
        <Html distanceFactor={12} center style={{ pointerEvents: 'none' }}>
          <span className="whitespace-nowrap rounded bg-black/70 px-2 py-0.5 text-[10px] text-zinc-200 backdrop-blur">
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
}: {
  positions: Map<string, NodePosition>
  visibleIds: Set<string>
  highlightIds: Set<string>
}) {
  const lines = useMemo(() => {
    return portfolioEdges
      .filter((e) => visibleIds.has(e.source) && visibleIds.has(e.target))
      .map((edge) => {
        const a = positions.get(edge.source)
        const b = positions.get(edge.target)
        if (!a || !b) return null
        const active =
          highlightIds.has(edge.source) ||
          highlightIds.has(edge.target) ||
          highlightIds.size === 0
        return {
          key: `${edge.source}-${edge.target}`,
          points: [
            [a.x, a.y, a.z] as [number, number, number],
            [b.x, b.y, b.z] as [number, number, number],
          ],
          active,
        }
      })
      .filter(Boolean) as { key: string; points: [number, number, number][]; active: boolean }[]
  }, [positions, visibleIds, highlightIds])

  return (
    <>
      {lines.map((line) => (
        <Line
          key={line.key}
          points={line.points}
          color={line.active ? '#22d3ee' : '#3f3f46'}
          lineWidth={line.active ? 1.2 : 0.5}
          transparent
          opacity={line.active ? 0.5 : 0.15}
        />
      ))}
    </>
  )
}

function SceneContent() {
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
  const allPositions = useMemo(() => computeGraphPositions(portfolioNodes), [])
  const positionMap = useMemo(
    () => new Map(allPositions.map((p) => [p.id, p])),
    [allPositions],
  )

  const focusId = selectedNode?.id ?? hoveredNodeId
  const highlightIds = useMemo(() => {
    if (!focusId) return new Set<string>()
    const ids = getConnectedIds(focusId)
    ids.add(focusId)
    return ids
  }, [focusId])

  const cameraTarget = useMemo(() => {
    if (!selectedNode) return null
    const pos = positionMap.get(selectedNode.id)
    if (!pos) return null
    return new THREE.Vector3(pos.x, pos.y, pos.z)
  }, [selectedNode, positionMap])

  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#22d3ee" />
      <pointLight position={[-8, -4, -6]} intensity={0.4} color="#a78bfa" />
      <CameraRig target={cameraTarget} />
      <GraphEdges
        positions={positionMap}
        visibleIds={visibleIds}
        highlightIds={focusId ? highlightIds : new Set()}
      />
      {filtered.map((node) => {
        const pos = positionMap.get(node.id)
        if (!pos) return null
        const dimmed = focusId !== null && !highlightIds.has(node.id)
        const highlighted = focusId !== null && highlightIds.has(node.id)
        return (
          <GraphNode
            key={node.id}
            node={node}
            position={pos}
            dimmed={dimmed}
            highlighted={highlighted || hoveredNodeId === node.id}
            onSelect={() => selectNodeWithPath(node)}
            onHover={(hover) => setHoveredNodeId(hover ? node.id : null)}
          />
        )
      })}
      <OrbitControls
        enableDamping
        dampingFactor={0.08}
        minDistance={6}
        maxDistance={28}
        maxPolarAngle={Math.PI / 1.8}
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
      className={`h-[min(70vh,640px)] w-full rounded-xl border border-zinc-800 bg-[#050608] ${className}`}
    >
      <Canvas
        camera={{ position: [0, 2, 14], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        onPointerMissed={() => usePortfolioStore.getState().selectNodeWithPath(null)}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  )
}
