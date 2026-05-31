import { Component, type ErrorInfo, type ReactNode } from 'react'
import { isWebGLError } from '../utils/webgl'
import { Graph2DView } from './Graph2DView'

type Props = { children: ReactNode; className?: string }
type State = { error: Error | null; retryKey: number }

export class GraphErrorBoundary extends Component<Props, State> {
  state: State = { error: null, retryKey: 0 }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Career graph failed to render:', error, info)
  }

  handleRetry = () => {
    this.setState((s) => ({ error: null, retryKey: s.retryKey + 1 }))
  }

  render() {
    if (this.state.error) {
      const webgl = isWebGLError(this.state.error.message)
      return (
        <div className={this.props.className}>
          {webgl ? (
            <>
              <p className="mb-2 rounded-lg border border-amber-500/20 bg-amber-950/30 px-3 py-2 text-xs text-amber-100/90">
                3D view failed to start — showing 2D graph instead.
              </p>
              <Graph2DView className="h-[min(62vh,560px)] w-full" />
            </>
          ) : (
            <div className="rounded-xl border border-amber-500/25 bg-zinc-900/60 p-4">
              <p className="text-sm text-amber-100/90">The graph could not load.</p>
              <p className="mt-1 text-xs text-zinc-500">{this.state.error.message}</p>
              <button
                type="button"
                onClick={this.handleRetry}
                className="mt-3 rounded-md bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:bg-zinc-700"
              >
                Retry
              </button>
            </div>
          )}
        </div>
      )
    }

    return <div key={this.state.retryKey}>{this.props.children}</div>
  }
}
