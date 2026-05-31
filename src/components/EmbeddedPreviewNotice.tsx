import { openSiteInNewTab } from '../utils/previewEnvironment'

type EmbeddedPreviewNoticeProps = {
  onTry3dAnyway?: () => void
}

export function EmbeddedPreviewNotice({ onTry3dAnyway }: EmbeddedPreviewNoticeProps) {
  return (
    <div className="mb-3 rounded-lg border border-cyan-500/25 bg-cyan-950/30 px-4 py-3">
      <p className="text-sm font-medium text-cyan-100">
        3D needs its own browser tab
      </p>
      <p className="mt-1 text-xs leading-relaxed text-cyan-200/70">
        Vercel and GitHub <strong className="font-medium text-cyan-100/90">preview embeds</strong>{' '}
        block WebGL (GPU) — even when Three.js works on your machine elsewhere. This is not a bug
        in the résumé site. Open the deployment in a full tab for the 3D graph.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={openSiteInNewTab}
          className="rounded-md bg-cyan-500/20 px-3 py-1.5 text-xs font-medium text-cyan-200 ring-1 ring-cyan-500/40 hover:bg-cyan-500/30"
        >
          Open site in new tab
        </button>
        {onTry3dAnyway && (
          <button
            type="button"
            onClick={onTry3dAnyway}
            className="rounded-md px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200"
          >
            Try 3D in this frame anyway
          </button>
        )}
      </div>
    </div>
  )
}
