type IterationNoticeProps = {
  className?: string
}

export function IterationNotice({ className = '' }: IterationNoticeProps) {
  return (
    <p
      className={`rounded-lg border border-zinc-800/80 bg-zinc-900/40 px-4 py-3 text-xs leading-relaxed text-zinc-500 ${className}`}
    >
      First live iteration — demonstrative, not exhaustive. Content and graph relationships will
      evolve as projects and tooling develop.
    </p>
  )
}
