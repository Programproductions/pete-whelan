import { Component, type ErrorInfo, type ReactNode } from 'react'
import { isWebGLError } from '../utils/webgl'

type Props = {
  children: ReactNode
  className?: string
  onWebGLFallback?: () => void
}
type State = { error: Error | null; retryKey: number }

export class GraphErrorBoundary extends Component<Props, State> {
  state: State = { error: null, retryKey: 0 }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Career graph failed to render:', error, info)
    if (isWebGLError(error.message)) {
      this.props.onWebGLFallback?.()
    }
  }

  handleRetry = () => {
    this.setState((s) => ({ error: null, retryKey: s.retryKey + 1 }))
  }

  render() {
    if (this.state.error) {
      if (isWebGLError(this.state.error.message)) {
        return null
      }
      return (
        <div className={this.props.className}>
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
        </div>
      )
    }

    return <div key={this.state.retryKey}>{this.props.children}</div>
  }
}
