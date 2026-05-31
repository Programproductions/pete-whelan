import { motion } from 'framer-motion'

const paragraphs = [
  'Most CVs list roles and tools in sequence. That works for screening, but it rarely shows how experience connects across domains.',
  'I wanted a clearer picture: how music technology, voice AI, cloud platforms and agent-driven delivery relate to each other — and to the work I do today.',
  'So this site models my career as a graph: projects, organisations, technologies and outcomes linked by real relationships.',
  'It was built the same way I build products — with a written spec, structured data, and AI-native tooling in the loop (not as a one-shot demo).',
  'If you prefer a conventional format, the PDF download is there. This page is mainly for people who want to see how the pieces fit together.',
]

export function WhyNotCvSection() {
  return (
    <section className="border-t border-zinc-800/80 px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl"
        >
          Why a graph, not only a CV
        </motion.h2>
        <div className="mt-8 space-y-4">
          {paragraphs.map((text, i) => (
            <motion.p
              key={text.slice(0, 32)}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="leading-relaxed text-zinc-400"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
