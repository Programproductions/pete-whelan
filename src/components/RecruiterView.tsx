import { hero, site, projectDeepDives, skillClusters } from '../data/cvContent'
import { DownloadCvButtons } from './DownloadCvButtons'
import { nodeById } from '../data/portfolioGraph'

export function RecruiterView() {
  return (
    <div className="px-6 pb-20 pt-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold text-zinc-50">{site.brandLabel}</h1>
        <p className="mt-2 text-lg text-cyan-300/90">{hero.title}</p>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-zinc-200">Executive summary</h2>
          <p className="mt-4 leading-relaxed text-zinc-400">{hero.tagline}</p>
          <p className="mt-4 leading-relaxed text-zinc-400">
            Solutions architect with a career spanning music technology, voice AI, healthcare,
            cyber security and AI-native platform engineering. Builds cloud-native products,
            agent-driven delivery systems and internal governance platforms — including multi-tenant
            SaaS, GCP architectures and Terraform release tooling.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-zinc-200">Key projects</h2>
          <div className="mt-6 space-y-8">
            {projectDeepDives.map((p) => (
              <article key={p.id} className="border-b border-zinc-800 pb-8">
                <h3 className="text-base font-medium text-zinc-100">
                  {nodeById.get(p.id)?.label ?? p.id}
                </h3>
                <p className="mt-2 text-sm text-zinc-500">{p.problem}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.outcome}</p>
                <p className="mt-2 text-xs text-zinc-600">
                  {p.technologies.slice(0, 5).join(' · ')}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-zinc-200">Skills</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {skillClusters.map((cluster) => (
              <div key={cluster.title}>
                <h3 className="text-sm font-medium text-cyan-400/80">{cluster.title}</h3>
                <ul className="mt-2 space-y-1">
                  {cluster.items.map((item) => (
                    <li key={item} className="text-sm text-zinc-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 text-center">
          <p className="text-sm text-zinc-500">Need the traditional version?</p>
          <div className="mt-4 flex justify-center">
            <DownloadCvButtons />
          </div>
          <p className="mt-8 text-xs text-zinc-600">
            Switch to Interactive mode to explore the full relationship graph.
          </p>
        </section>
      </div>
    </div>
  )
}
