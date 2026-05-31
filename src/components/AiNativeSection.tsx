import { motion } from 'framer-motion'
import { aiNativeStatement, methodologySteps } from '../data/cvContent'

export function AiNativeSection() {
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
          <div className="mt-8 flex flex-col items-start gap-2 md:flex-row md:flex-wrap md:items-center md:gap-0">
            {methodologySteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <span className="rounded-md bg-zinc-800/80 px-3 py-1.5 font-mono text-sm text-cyan-300/90">
                  {step}
                </span>
                {i < methodologySteps.length - 1 && (
                  <span className="mx-2 hidden text-zinc-600 md:inline">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-zinc-500">
            AI as a structured engineering partner — not autocomplete. Discovery, architecture,
            implementation, testing and governance connected through specs, agents and platform
            tooling.
          </p>
        </div>
      </div>
    </section>
  )
}
