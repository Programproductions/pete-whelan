import { motion } from 'framer-motion'
import {
  PLATFORM_DEEP_DIVE_IDS,
  projectDeepDives,
  type DeliveryContext,
  type ProjectDeepDive,
} from '../data/cvContent'
import { formatContractEngagement, nodeById } from '../data/portfolioGraph'
import { usePortfolioStore } from '../store/usePortfolioStore'
import { ArchitectureDiagram } from './ArchitectureDiagram'

function DeliveryContextBlock({ delivery }: { delivery: DeliveryContext }) {
  return (
    <div className="mt-4 rounded-xl border border-zinc-700/60 bg-zinc-950/50 px-4 py-4">
      <p className="text-xs font-medium uppercase tracking-wider text-violet-400/90">Delivery</p>
      <p className="mt-1 text-sm font-medium text-zinc-200">{delivery.label}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{delivery.summary}</p>
      {delivery.organizations && delivery.organizations.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {delivery.organizations.map((org) => (
            <span
              key={org}
              className="rounded-md border border-zinc-700/80 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-400"
            >
              {org}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function PlatformCard({
  project,
  index,
}: {
  project: ProjectDeepDive
  index: number
}) {
  const selectNodeWithPath = usePortfolioStore((s) => s.selectNodeWithPath)
  const node = nodeById.get(project.id)
  const contractLine = node ? formatContractEngagement(node) : null

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="rounded-2xl border border-cyan-500/15 bg-gradient-to-br from-cyan-950/20 via-zinc-900/50 to-zinc-950/80 p-8 md:p-10"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-zinc-50">{node?.label ?? project.id}</h3>
          {contractLine && (
            <p className="mt-1 font-mono text-xs tracking-wide text-zinc-500">{contractLine}</p>
          )}
        </div>
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

      <DeliveryContextBlock delivery={project.delivery} />

      <ArchitectureDiagram projectId={project.id} />

      <div className="mt-8 space-y-6">
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider text-red-400/80">Problem</h4>
          <p className="mt-2 text-base leading-relaxed text-zinc-300">{project.problem}</p>
        </div>
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider text-cyan-400/80">
            Intelligence
          </h4>
          <p className="mt-2 text-base leading-relaxed text-zinc-300">{project.intelligence}</p>
        </div>
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider text-emerald-400/80">
            Outcome
          </h4>
          <p className="mt-2 text-base font-medium leading-relaxed text-zinc-200">
            {project.outcome}
          </p>
        </div>
      </div>

      <details className="mt-8 group rounded-lg border border-zinc-800/80 bg-zinc-950/40">
        <summary className="cursor-pointer px-4 py-3 text-xs font-medium uppercase tracking-wider text-zinc-500 transition group-open:text-zinc-400">
          Technical stack &amp; delivery
        </summary>
        <div className="border-t border-zinc-800/80 px-4 py-4">
          <p className="text-sm text-zinc-500">{project.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.architecture}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-md bg-zinc-800/80 px-2 py-1 text-xs text-zinc-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </details>
    </motion.article>
  )
}

function SupportingCard({ project, index }: { project: ProjectDeepDive; index: number }) {
  const node = nodeById.get(project.id)
  return (
    <motion.article
      key={project.id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6"
    >
      <h3 className="text-lg font-semibold text-zinc-200">{node?.label ?? project.id}</h3>
      <p className="mt-2 text-sm text-zinc-500">{project.problem}</p>
      <p className="mt-3 text-sm text-zinc-400">{project.outcome}</p>
    </motion.article>
  )
}

export function ProjectDeepDive() {
  const platforms = PLATFORM_DEEP_DIVE_IDS.map((id) =>
    projectDeepDives.find((p) => p.id === id),
  ).filter((p): p is ProjectDeepDive => Boolean(p))

  const supporting = projectDeepDives.filter(
    (p) => !PLATFORM_DEEP_DIVE_IDS.includes(p.id as (typeof PLATFORM_DEEP_DIVE_IDS)[number]),
  )

  return (
    <section
      id="platforms"
      className="border-t border-zinc-800/80 px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">
          Intelligence platforms
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-500">Problem → intelligence → outcome.</p>

        <div className="mt-12 space-y-12">
          {platforms.map((project, i) => (
            <PlatformCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {supporting.length > 0 && (
          <div className="mt-16 border-t border-zinc-800/80 pt-12">
            <h3 className="text-lg font-medium text-zinc-400">Also: delivery systems &amp; tooling</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {supporting.map((project, i) => (
                <SupportingCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
