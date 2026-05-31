import { AnimatePresence, motion } from 'framer-motion'
import { methodologyStages } from '../data/methodologyStages'
import { aiNativeStatement } from '../data/cvContent'
import { usePortfolioStore } from '../store/usePortfolioStore'

export function InteractiveMethodology() {
  const { activeMethodologyStage, setActiveMethodologyStage } = usePortfolioStore()
  const active = methodologyStages.find((s) => s.id === activeMethodologyStage)

  return (
    <section className="border-t border-zinc-800/80 px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl px-6 md:px-0">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">
          {aiNativeStatement.heading}
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {aiNativeStatement.paragraphs.map((p) => (
            <p key={p.slice(0, 36)} className="text-sm leading-relaxed text-zinc-400 md:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-10">
          <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            AI-native delivery — click a stage
          </h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {methodologyStages.map((stage) => (
              <button
                key={stage.id}
                type="button"
                onClick={() =>
                  setActiveMethodologyStage(
                    activeMethodologyStage === stage.id ? null : stage.id,
                  )
                }
                className={`rounded-lg px-3 py-2 font-mono text-xs transition ${
                  activeMethodologyStage === stage.id
                    ? 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-500/40'
                    : 'bg-zinc-800/60 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {stage.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-8 grid gap-6 sm:grid-cols-2"
              >
                <StageBlock title="Human" items={active.human} />
                <StageBlock title="Agent" items={active.agent} accent="violet" />
                <StageBlock title="Artefacts" items={active.artefacts} />
                <StageBlock title="Quality controls" items={active.quality} />
                <StageBlock
                  title="Governance"
                  items={active.governance}
                  className="sm:col-span-2"
                />
              </motion.div>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 text-sm text-zinc-600"
              >
                Select a stage to see how responsibilities split between humans and agents in
                AI-native delivery.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function StageBlock({
  title,
  items,
  accent,
  className = '',
}: {
  title: string
  items: string[]
  accent?: 'violet'
  className?: string
}) {
  return (
    <div className={`rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-4 ${className}`}>
      <p
        className={`text-xs font-medium uppercase tracking-wider ${
          accent === 'violet' ? 'text-violet-400/80' : 'text-zinc-500'
        }`}
      >
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-zinc-400">
            · {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
