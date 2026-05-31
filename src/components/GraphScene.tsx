import { Canvas } from '@react-three/fiber'
import { Html, Line, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import type { NodePosition, PortfolioNode } from '../data/portfolioGraph'
import { usePortfolioStore } from '../store/usePortfolioStore'
import { getNodeColor, getNodeScale } from '../utils/nodeColors'
import { useGraphDisplay } from '../hooks/useGraphDisplay'

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
  const emissive = highlighted ? 0.65 : dimmed ? 0.12 : 0.28

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
          opacity={dimmed ? 0.45 : 0.95}
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>
      {(highlighted || node.id === 'pete-whelan' || node.phase) && (
        <Html distanceFactor={12} center style={{ pointerEvents: 'none' }}>
          <div className="text-center">
            <span className="whitespace-nowrap rounded bg-black/70 px-2 py-0.5 text-[10px] text-zinc-200 backdrop-blur">
              {node.label}
            </span>
            {node.phase && (
              <span className="mt-0.5 block whitespace-nowrap text-[9px] text-cyan-300/90">
                {node.phase}
              </span>
            )}
          </div>
        </Html>
      )}
    </group>
  )
}

function SceneContent() {
  const { selectNodeWithPath, setHoveredNodeId, hoveredNodeId } = usePortfolioStore()
  const { filtered, positionMap, edges, nodeState } = useGraphDisplay()

  return (
    <>
      <color attach="background" args={['#050608']} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.85} color="#22d3ee" />
      <pointLight position={[-8, -4, -6]} intensity={0.45} color="#a78bfa" />
      {edges.map((edge) => {
        const a = positionMap.get(edge.source)
        const b = positionMap.get(edge.target)
        if (!a || !b) return null
        return (
          <Line
            key={`${edge.source}-${edge.target}`}
            points={[
              [a.x, a.y, a.z],
              [b.x, b.y, b.z],
            ]}
            color={edge.active ? '#22d3ee' : '#3f3f46'}
            lineWidth={1}
            transparent
            opacity={edge.active ? 0.55 : 0.28}
          />
        )
      })}
      {filtered.map((node) => {
        const pos = positionMap.get(node.id)
        if (!pos) return null
        const { dimmed, highlighted } = nodeState(node)
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
        makeDefault
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

export function GraphScene({ className = 'h-full w-full' }: GraphSceneProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-zinc-800 bg-[#050608] ${className}`}>
      <Canvas
        camera={{ position: [0, 2, 14], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
        style={{ width: '100%', height: '100%', display: 'block' }}
        onPointerMissed={() => usePortfolioStore.getState().selectNodeWithPath(null)}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  )
}
