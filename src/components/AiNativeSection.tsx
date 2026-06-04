import { AnimatePresence, motion } from 'framer-motion'
import { aiNativeStatement } from '../data/cvContent'
import { methodologyStages } from '../data/methodologyStages'
import { usePortfolioStore } from '../store/usePortfolioStore'

export function AiNativeSection() {
  const { activeMethodologyStage, setActiveMethodologyStage } = usePortfolioStore()
  const active = methodologyStages.find((s) => s.id === activeMethodologyStage)

  return (
    <section className="border-t border-zinc-800/80 px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl"
        >
          {aiNativeStatement.heading}
        </motion.h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {aiNativeStatement.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="text-base leading-relaxed text-zinc-400">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-10">
          <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            AI-native delivery flow
          </h3>
          <p className="mt-1 text-xs text-zinc-600">Click a stage to see human vs agent responsibilities</p>

          <div className="mt-8 flex flex-col items-start gap-2 md:flex-row md:flex-wrap md:items-center md:gap-0">
            {methodologyStages.map((stage, i) => (
              <div key={stage.id} className="flex items-center">
                <button
                  type="button"
                  onClick={() =>
                    setActiveMethodologyStage(
                      activeMethodologyStage === stage.id ? null : stage.id,
                    )
                  }
                  className={`rounded-md px-3 py-1.5 font-mono text-sm transition ${
                    activeMethodologyStage === stage.id
                      ? 'bg-cyan-500/25 text-cyan-200 ring-1 ring-cyan-400/50'
                      : 'bg-cyan-500/15 text-cyan-300/90 hover:bg-cyan-500/20 hover:text-cyan-200'
                  }`}
                >
                  {stage.label}
                </button>
                {i < methodologyStages.length - 1 && (
                  <span className="mx-2 hidden text-zinc-600 md:inline" aria-hidden>
                    →
                  </span>
                )}
              </div>
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
                className="mt-8 text-sm text-zinc-500"
              >
                AI as a structured engineering partner — not autocomplete. Discovery, architecture,
                implementation, testing and governance connected through specs, agents and platform
                tooling.
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
