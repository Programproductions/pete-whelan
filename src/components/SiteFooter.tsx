import { contact, hero, site } from '../data/cvContent'

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800/80 px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-300">{site.brandLabel}</p>
          <p className="mt-1 text-sm text-zinc-500">{hero.title}</p>
        </div>
        <div className="flex gap-6 text-sm">
          <a
            href={`mailto:${contact.email}`}
            className="text-zinc-400 transition hover:text-zinc-200"
          >
            Email
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition hover:text-zinc-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
