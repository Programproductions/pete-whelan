import { GraphErrorBoundary } from './GraphErrorBoundary'
import { GraphScene } from './GraphScene'

type GraphCanvasProps = {
  className?: string
}

/** Always mount the 3D scene — only fall back if Canvas actually throws. */
export function GraphCanvas({ className }: GraphCanvasProps) {
  return (
    <GraphErrorBoundary className={className}>
      <GraphScene className={className} />
    </GraphErrorBoundary>
  )
}
