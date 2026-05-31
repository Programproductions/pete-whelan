import { motion } from 'framer-motion'
import { projectDeepDives } from '../data/cvContent'
import { nodeById } from '../data/portfolioGraph'
import { usePortfolioStore } from '../store/usePortfolioStore'
import { ArchitectureDiagram } from './ArchitectureDiagram'

export function ProjectDeepDive() {
  const selectNodeWithPath = usePortfolioStore((s) => s.selectNodeWithPath)

  return (
    <section className="border-t border-zinc-800/80 px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">
          Architecture deep dives
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-500">
          Systems thinking for each platform — problem, architecture, AI components and outcome.
        </p>
        <div className="mt-12 space-y-10">
          {projectDeepDives.map((project, i) => {
            const node = nodeById.get(project.id)
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-950/80 p-8 md:p-10"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-zinc-50">
                    {node?.label ?? project.id}
                  </h3>
                  {node && (
                    <button
                      type="button"
                      onClick={() => selectNodeWithPath(node)}
                      className="text-xs font-medium text-cyan-400 hover:text-cyan-300"
                    >
                      View in graph →
                    </button>
                  )}
                </div>

                <ArchitectureDiagram projectId={project.id} />

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Problem
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.problem}</p>
                    <h4 className="mt-6 text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Role
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.role}</p>
                    <h4 className="mt-6 text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Architecture
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {project.architecture}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                      AI components
                    </h4>
                    <ul className="mt-2 space-y-1">
                      {project.aiNative.map((item) => (
                        <li key={item} className="text-sm text-zinc-400">
                          · {item}
                        </li>
                      ))}
                    </ul>
                    <h4 className="mt-6 text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Technologies
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-zinc-800/80 px-2 py-1 text-xs text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h4 className="mt-6 text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Outcome
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.outcome}</p>
                  </div>
                </div>
                <div className="mt-8 rounded-lg border border-cyan-500/15 bg-cyan-500/5 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-cyan-400/70">
                    Regulated platform relevance
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">{project.earthbancRelevance}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
