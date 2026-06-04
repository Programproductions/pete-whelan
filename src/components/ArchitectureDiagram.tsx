import type { ReactNode } from 'react'

type ArchitectureDiagramProps = {
  projectId: string
}

const diagrams: Record<string, ReactNode> = {
  aimi: (
    <svg viewBox="0 0 400 200" className="h-auto w-full" aria-label="AiMi architecture">
      <defs>
        <linearGradient id="aimi-g" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="#0c0d10" rx="8" />
      <rect x="20" y="70" width="90" height="50" rx="6" fill="#181b22" stroke="#22d3ee" strokeOpacity="0.4" />
      <text x="65" y="100" textAnchor="middle" fill="#a1a1aa" fontSize="10">
        Catalogue
      </text>
      <rect x="130" y="40" width="100" height="50" rx="6" fill="#181b22" stroke="#22d3ee" strokeOpacity="0.5" />
      <text x="180" y="70" textAnchor="middle" fill="#67e8f9" fontSize="10">
        LLM Orchestration
      </text>
      <rect x="130" y="110" width="100" height="50" rx="6" fill="#181b22" stroke="#a78bfa" strokeOpacity="0.4" />
      <text x="180" y="140" textAnchor="middle" fill="#a1a1aa" fontSize="10">
        Rights Matching
      </text>
      <rect x="260" y="70" width="120" height="50" rx="6" fill="#181b22" stroke="#34d399" strokeOpacity="0.4" />
      <text x="320" y="92" textAnchor="middle" fill="#a1a1aa" fontSize="10">
        Multi-tenant SaaS
      </text>
      <text x="320" y="108" textAnchor="middle" fill="#71717a" fontSize="9">
        HITL Review
      </text>
      <path
        d="M110 95 L130 65 M110 95 L130 135 M230 65 L260 95 M230 135 L260 95"
        stroke="url(#aimi-g)"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  ),
  tautsec: (
    <svg viewBox="0 0 400 220" className="h-auto w-full" aria-label="Tautsec architecture">
      <defs>
        <linearGradient id="tautsec-flow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="#0c0d10" rx="8" />
      <text x="200" y="22" textAnchor="middle" fill="#71717a" fontSize="9">
        Cyber insurance &amp; protection for Australian SMBs
      </text>
      <rect x="16" y="42" width="72" height="44" rx="6" fill="#181b22" stroke="#22d3ee" strokeOpacity="0.45" />
      <text x="52" y="62" textAnchor="middle" fill="#a1a1aa" fontSize="9">
        SMB /
      </text>
      <text x="52" y="76" textAnchor="middle" fill="#67e8f9" fontSize="9">
        Partner
      </text>
      <rect x="100" y="42" width="78" height="44" rx="6" fill="#181b22" stroke="#34d399" strokeOpacity="0.55" />
      <text x="139" y="62" textAnchor="middle" fill="#6ee7b7" fontSize="9">
        Cyber Pilot
      </text>
      <text x="139" y="76" textAnchor="middle" fill="#71717a" fontSize="8">
        Assessment
      </text>
      <rect x="190" y="42" width="78" height="44" rx="6" fill="#181b22" stroke="#a78bfa" strokeOpacity="0.5" />
      <text x="229" y="62" textAnchor="middle" fill="#c4b5fd" fontSize="9">
        AI risk
      </text>
      <text x="229" y="76" textAnchor="middle" fill="#71717a" fontSize="8">
        &amp; evidence
      </text>
      <rect x="280" y="42" width="52" height="44" rx="6" fill="#181b22" stroke="#22d3ee" strokeOpacity="0.4" />
      <text x="306" y="62" textAnchor="middle" fill="#a1a1aa" fontSize="9">
        Risk
      </text>
      <text x="306" y="76" textAnchor="middle" fill="#71717a" fontSize="8">
        score
      </text>
      <rect x="344" y="42" width="40" height="44" rx="6" fill="#181b22" stroke="#34d399" strokeOpacity="0.4" />
      <text x="364" y="62" textAnchor="middle" fill="#a1a1aa" fontSize="8">
        Insur-
      </text>
      <text x="364" y="74" textAnchor="middle" fill="#a1a1aa" fontSize="8">
        ance
      </text>
      <path
        d="M88 64 H100 M178 64 H190 M268 64 H280 M332 64 H344"
        stroke="url(#tautsec-flow)"
        strokeWidth="1.5"
        fill="none"
      />
      <rect x="24" y="108" width="352" height="48" rx="6" fill="#12151a" stroke="#3f3f46" strokeOpacity="0.8" />
      <text x="200" y="126" textAnchor="middle" fill="#71717a" fontSize="8">
        GCP platform (Terraform)
      </text>
      <text x="200" y="142" textAnchor="middle" fill="#a1a1aa" fontSize="9">
        Identity Platform · MongoDB · BigQuery · LangChain / vector AI
      </text>
      <path
        d="M139 86 V108 M229 86 V108 M306 86 V108"
        stroke="#3f3f46"
        strokeWidth="1"
        strokeDasharray="3 2"
        fill="none"
      />
      <text x="200" y="178" textAnchor="middle" fill="#52525b" fontSize="8">
        Assess → improve posture → insurance-ready outcomes
      </text>
    </svg>
  ),
  lexi: (
    <svg viewBox="0 0 400 200" className="h-auto w-full" aria-label="Lexi architecture">
      <rect width="400" height="200" fill="#0c0d10" rx="8" />
      <rect x="40" y="75" width="90" height="45" rx="6" fill="#181b22" stroke="#22d3ee" strokeOpacity="0.4" />
      <text x="85" y="102" textAnchor="middle" fill="#a1a1aa" fontSize="10">
        Betfair API
      </text>
      <rect x="160" y="50" width="100" height="45" rx="6" fill="#181b22" stroke="#34d399" strokeOpacity="0.5" />
      <text x="210" y="77" textAnchor="middle" fill="#6ee7b7" fontSize="10">
        Event Bus
      </text>
      <rect x="160" y="110" width="100" height="45" rx="6" fill="#181b22" stroke="#a78bfa" strokeOpacity="0.4" />
      <text x="210" y="137" textAnchor="middle" fill="#a1a1aa" fontSize="10">
        Analytics
      </text>
      <rect x="290" y="75" width="80" height="45" rx="6" fill="#181b22" stroke="#22d3ee" strokeOpacity="0.4" />
      <text x="330" y="102" textAnchor="middle" fill="#a1a1aa" fontSize="10">
        Intelligence UI
      </text>
      <path
        d="M130 97 L160 72 M130 97 L160 132 M260 72 L290 97 M260 132 L290 97"
        stroke="#3f3f46"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  ),
  'paradise-engineering': (
    <svg viewBox="0 0 400 200" className="h-auto w-full" aria-label="Paradise Engineering flow">
      <rect width="400" height="200" fill="#0c0d10" rx="8" />
      {['Spec', 'Plan', 'Build', 'Review', 'Ship'].map((label, i) => (
        <g key={label}>
          <rect
            x={30 + i * 72}
            y="75"
            width="60"
            height="45"
            rx="6"
            fill="#181b22"
            stroke="#a78bfa"
            strokeOpacity={0.3 + i * 0.1}
          />
          <text x={60 + i * 72} y="102" textAnchor="middle" fill="#c4b5fd" fontSize="9">
            {label}
          </text>
          {i < 4 && (
            <path
              d={`M${90 + i * 72} 97 L${102 + i * 72} 97`}
              stroke="#22d3ee"
              strokeOpacity="0.5"
              strokeWidth="1.5"
            />
          )}
        </g>
      ))}
      <text x="200" y="155" textAnchor="middle" fill="#71717a" fontSize="10">
        Claude · Agents · Evaluation loops
      </text>
    </svg>
  ),
  'flight-deck': (
    <svg viewBox="0 0 400 200" className="h-auto w-full" aria-label="Flight Deck promotion flow">
      <rect width="400" height="200" fill="#0c0d10" rx="8" />
      {['Dev', 'Staging', 'Prod'].map((env, i) => (
        <g key={env}>
          <rect
            x={50 + i * 115}
            y="70"
            width="85"
            height="55"
            rx="6"
            fill="#181b22"
            stroke="#22d3ee"
            strokeOpacity={0.35 + i * 0.15}
          />
          <text x={92 + i * 115} y="95" textAnchor="middle" fill="#67e8f9" fontSize="11">
            {env}
          </text>
          <text x={92 + i * 115} y="112" textAnchor="middle" fill="#71717a" fontSize="8">
            Approve · Test
          </text>
          {i < 2 && (
            <path
              d={`M${135 + i * 115} 97 L${165 + i * 115} 97`}
              stroke="#34d399"
              strokeWidth="2"
            />
          )}
        </g>
      ))}
      <text x="200" y="155" textAnchor="middle" fill="#a1a1aa" fontSize="10">
        Terraform promotion governance
      </text>
    </svg>
  ),
}

export function ArchitectureDiagram({ projectId }: ArchitectureDiagramProps) {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/80">
      {diagrams[projectId] ?? (
        <div className="flex h-32 items-center justify-center text-xs text-zinc-600">
          Architecture diagram
        </div>
      )}
    </div>
  )
}
