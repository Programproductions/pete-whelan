import { Component, type ErrorInfo, type ReactNode } from 'react'
import { MobileGraphFallback } from './MobileGraphFallback'

type Props = { children: ReactNode; className?: string }
type State = { error: Error | null }

export class GraphErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Career graph failed to render:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div
          className={`rounded-xl border border-amber-500/30 bg-zinc-900/50 p-4 ${this.props.className ?? ''}`}
        >
          <p className="text-sm font-medium text-amber-200/90">
            3D graph could not load in this browser.
          </p>
          <p className="mt-2 text-xs text-zinc-500">
            {this.state.error.message}
          </p>
          <div className="mt-4">
            <MobileGraphFallback />
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
