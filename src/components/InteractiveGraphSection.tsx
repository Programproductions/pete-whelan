import { useRef } from 'react'
import { GraphControls } from './GraphControls'
import { GraphScene } from './GraphScene'
import { MobileGraphFallback } from './MobileGraphFallback'
import { useMediaQuery } from '../hooks/useMediaQuery'

export function InteractiveGraphSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <section
      ref={sectionRef}
      id="graph"
      className="border-t border-zinc-800/80 px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">
          Interactive career graph
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-500">
          Companies, projects, skills and domains as a connected system — click any node for
          detail. Hover to highlight relationships.
        </p>
        <div className="mt-8 hidden md:block">
          <GraphControls />
          <div className="mt-4">
            <GraphScene />
          </div>
        </div>
        <div className="mt-8 md:hidden">
          <MobileGraphFallback />
        </div>
        {isDesktop && (
          <p className="mt-3 text-center text-xs text-zinc-600">
            Drag to orbit · scroll to zoom · click nodes for details
          </p>
        )}
      </div>
    </section>
  )
}
