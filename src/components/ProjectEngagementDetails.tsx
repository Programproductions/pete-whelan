import {
  formatContractEngagementLines,
  getClientCompany,
  getNodeDisplayLabel,
  type PortfolioNode,
} from '../data/portfolioGraph'

type ProjectEngagementDetailsProps = {
  node: PortfolioNode
  onSelectClient: (client: PortfolioNode) => void
}

export function ProjectEngagementDetails({ node, onSelectClient }: ProjectEngagementDetailsProps) {
  if (node.type !== 'company' && node.type !== 'project') return null

  if (node.type === 'company') {
    const role =
      node.companyRole === 'client'
        ? 'Client company'
        : node.companyRole === 'own'
          ? 'Own company'
          : 'Company'
    return (
      <section className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
        <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          Organisation
        </h3>
        <p className="mt-2 text-sm text-zinc-300">{role}</p>
        {(node.refereeName || node.refereeEmail) && (
          <div className="mt-3 border-t border-zinc-800 pt-3">
            <p className="text-xs text-zinc-500">Referee</p>
            {node.refereeName && (
              <p className="mt-1 text-sm text-zinc-300">{node.refereeName}</p>
            )}
            {node.refereeEmail && (
              <a
                href={`mailto:${node.refereeEmail}`}
                className="mt-1 block text-sm text-cyan-400/90 hover:text-cyan-300"
              >
                {node.refereeEmail}
              </a>
            )}
          </div>
        )}
      </section>
    )
  }

  const client = getClientCompany(node)
  const contractLines = formatContractEngagementLines(node)

  return (
    <section className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
      <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500">
        Engagement
      </h3>
      <dl className="mt-3 space-y-3 text-sm">
        {client && (
          <div>
            <dt className="text-xs text-zinc-500">Client</dt>
            <dd className="mt-0.5">
              <button
                type="button"
                onClick={() => onSelectClient(client)}
                className="text-cyan-400/90 hover:text-cyan-300"
              >
                {getNodeDisplayLabel(client)}
              </button>
            </dd>
          </div>
        )}
        {node.phase && (
          <div>
            <dt className="text-xs text-zinc-500">Phase</dt>
            <dd className="mt-0.5 text-zinc-200">{node.phase}</dd>
          </div>
        )}
        {node.website && (
          <div>
            <dt className="text-xs text-zinc-500">Website</dt>
            <dd className="mt-0.5">
              <a
                href={node.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400/90 hover:text-cyan-300"
              >
                {node.website.replace(/^https?:\/\//, '')}
              </a>
            </dd>
          </div>
        )}
        {contractLines.length > 0 && (
          <div>
            <dt className="text-xs text-zinc-500">Engagement</dt>
            <dd className="mt-0.5 space-y-1 text-zinc-300">
              {contractLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </dd>
          </div>
        )}
      </dl>
    </section>
  )
}
