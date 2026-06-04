import { motion } from 'framer-motion'
import { skillClusters } from '../data/cvContent'

export function SkillClusters() {
  return (
    <section className="border-t border-zinc-800/80 px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">
          Skills matrix
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillClusters.map((cluster, i) => (
            <motion.div
              key={cluster.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6"
            >
              <h3 className="text-sm font-medium text-cyan-400/90">{cluster.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cluster.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
