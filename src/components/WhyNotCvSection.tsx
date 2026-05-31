import { motion } from 'framer-motion'

const paragraphs = [
  'Most CVs describe a career as a list.',
  'I design systems.',
  'This portfolio models my career as a connected graph of projects, technologies, domains, organisations and outcomes.',
  'It was built using the same AI-native, specification-driven engineering approach I use to design products, agent systems and internal platforms.',
  'For recruiters and hiring managers who prefer a traditional format, a PDF version is available.',
  'This website is intended to demonstrate how I think, not simply what I have done.',
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
          Why I Built This Instead Of A CV
        </motion.h2>
        <div className="mt-8 space-y-4">
          {paragraphs.map((text, i) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`leading-relaxed ${
                i === 1 ? 'text-lg font-medium text-cyan-300/90' : 'text-zinc-400'
              }`}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
