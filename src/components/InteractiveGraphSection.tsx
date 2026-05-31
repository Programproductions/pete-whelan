import { motion } from 'framer-motion'

type InteractiveGraphSectionProps = {
  onOpenGraph: () => void
}

export function InteractiveGraphSection({ onOpenGraph }: InteractiveGraphSectionProps) {
  return (
    <section id="graph" className="border-t border-zinc-800/80 px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">
          Interactive career graph
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-500">
          Companies, projects, skills and domains as a connected 3D system — open the graph to
          explore relationships and click any node for detail.
        </p>

        <motion.button
          type="button"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={onOpenGraph}
          className="group mt-8 w-full overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 via-zinc-950 to-zinc-950 p-8 text-left ring-1 ring-cyan-500/20 transition hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] md:p-10"
        >
          <div
            className="pointer-events-none relative mx-auto mb-6 flex h-40 max-w-md items-center justify-center"
            aria-hidden
          >
            <span className="absolute h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <span
                key={deg}
                className="absolute h-2 w-2 rounded-full bg-zinc-500"
                style={{
                  transform: `rotate(${deg}deg) translateX(72px)`,
                }}
              />
            ))}
            <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 200 160">
              <line x1="100" y1="80" x2="40" y2="40" stroke="#22d3ee" strokeWidth="1" />
              <line x1="100" y1="80" x2="160" y2="50" stroke="#22d3ee" strokeWidth="1" />
              <line x1="100" y1="80" x2="100" y2="130" stroke="#52525b" strokeWidth="1" />
              <line x1="100" y1="80" x2="30" y2="110" stroke="#52525b" strokeWidth="1" />
            </svg>
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400/80">
            3D graph · 48 nodes · 55 connections
          </span>
          <span className="mt-2 block text-xl font-semibold text-zinc-100 group-hover:text-cyan-100">
            Open career graph
          </span>
          <span className="mt-2 block text-sm text-zinc-500">
            Launches full-screen — WebGL renders only when opened so the graph displays reliably.
          </span>
        </motion.button>
      </div>
    </section>
  )
}
