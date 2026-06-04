import type { ReactNode } from 'react'

type ArchitectureDiagramProps = {
  projectId: string
}

const diagrams: Record<string, ReactNode> = {
  aimi: (
    <svg viewBox="0 0 400 200" className="h-auto w-full" aria-label="AIMI architecture">
      <defs>
        <linearGradient id="aimi-g" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="#0c0d10" rx="8" />
      <rect x="12" y="55" width="88" height="42" rx="6" fill="#181b22" stroke="#22d3ee" strokeOpacity="0.4" />
      <text x="56" y="72" textAnchor="middle" fill="#a1a1aa" fontSize="9">
        Catalogue &
      </text>
      <text x="56" y="84" textAnchor="middle" fill="#a1a1aa" fontSize="9">
        rights data
      </text>
      <rect x="12" y="108" width="88" height="42" rx="6" fill="#181b22" stroke="#a78bfa" strokeOpacity="0.4" />
      <text x="56" y="125" textAnchor="middle" fill="#a1a1aa" fontSize="9">
        Creator works
      </text>
      <text x="56" y="137" textAnchor="middle" fill="#a1a1aa" fontSize="9">
        & disputes
      </text>
      <rect x="118" y="48" width="104" height="44" rx="6" fill="#181b22" stroke="#22d3ee" strokeOpacity="0.5" />
      <text x="170" y="68" textAnchor="middle" fill="#67e8f9" fontSize="9">
        LLM + vector
      </text>
      <text x="170" y="80" textAnchor="middle" fill="#71717a" fontSize="8">
        matching
      </text>
      <rect x="118" y="108" width="104" height="44" rx="6" fill="#181b22" stroke="#a78bfa" strokeOpacity="0.45" />
      <text x="170" y="128" textAnchor="middle" fill="#a1a1aa" fontSize="9">
        Pattern AI &
      </text>
      <text x="170" y="140" textAnchor="middle" fill="#a1a1aa" fontSize="9">
        dispute routing
      </text>
      <rect x="248" y="70" width="140" height="50" rx="6" fill="#181b22" stroke="#34d399" strokeOpacity="0.4" />
      <text x="318" y="92" textAnchor="middle" fill="#a1a1aa" fontSize="9">
        Royalty recovery
      </text>
      <text x="318" y="104" textAnchor="middle" fill="#71717a" fontSize="8">
        HITL audit · invite-only beta
      </text>
      <path
        d="M100 76 L118 70 M100 129 L118 130 M222 70 L248 90 M222 130 L248 105"
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
    <svg viewBox="0 0 400 220" className="h-auto w-full" aria-label="Lexi architecture">
      <defs>
        <linearGradient id="lexi-flow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="#0c0d10" rx="8" />
      <text x="200" y="22" textAnchor="middle" fill="#71717a" fontSize="9">
        lexi.tips — AI-powered racing tips
      </text>
      <rect x="12" y="42" width="88" height="44" rx="6" fill="#181b22" stroke="#22d3ee" strokeOpacity="0.45" />
      <text x="56" y="60" textAnchor="middle" fill="#67e8f9" fontSize="9">
        Form &amp; pricing
      </text>
      <text x="56" y="76" textAnchor="middle" fill="#71717a" fontSize="8">
        + race markets
      </text>
      <rect x="112" y="42" width="72" height="44" rx="6" fill="#181b22" stroke="#34d399" strokeOpacity="0.5" />
      <text x="148" y="62" textAnchor="middle" fill="#6ee7b7" fontSize="9">
        Data ingest
      </text>
      <text x="148" y="76" textAnchor="middle" fill="#71717a" fontSize="8">
        &amp; features
      </text>
      <rect x="196" y="42" width="72" height="44" rx="6" fill="#181b22" stroke="#a78bfa" strokeOpacity="0.55" />
      <text x="232" y="62" textAnchor="middle" fill="#c4b5fd" fontSize="9">
        LEXI AI
      </text>
      <text x="232" y="76" textAnchor="middle" fill="#71717a" fontSize="8">
        analysis
      </text>
      <rect x="280" y="42" width="52" height="44" rx="6" fill="#181b22" stroke="#22d3ee" strokeOpacity="0.4" />
      <text x="306" y="62" textAnchor="middle" fill="#a1a1aa" fontSize="9">
        Predict-
      </text>
      <text x="306" y="74" textAnchor="middle" fill="#a1a1aa" fontSize="8">
        ions
      </text>
      <rect x="344" y="42" width="44" height="44" rx="6" fill="#181b22" stroke="#34d399" strokeOpacity="0.4" />
      <text x="366" y="62" textAnchor="middle" fill="#a1a1aa" fontSize="8">
        Tips
      </text>
      <text x="366" y="74" textAnchor="middle" fill="#71717a" fontSize="8">
        &amp; chat
      </text>
      <path
        d="M100 64 H112 M184 64 H196 M268 64 H280 M332 64 H344"
        stroke="url(#lexi-flow)"
        strokeWidth="1.5"
        fill="none"
      />
      <rect x="24" y="108" width="352" height="48" rx="6" fill="#12151a" stroke="#3f3f46" strokeOpacity="0.8" />
      <text x="200" y="126" textAnchor="middle" fill="#71717a" fontSize="8">
        GCP · Terraform · BigQuery · vector DB · LangChain
      </text>
      <text x="200" y="142" textAnchor="middle" fill="#a1a1aa" fontSize="9">
        Twice-daily tips · performance tracking · Australian race calendar
      </text>
      <path
        d="M148 86 V108 M232 86 V108 M306 86 V108"
        stroke="#3f3f46"
        strokeWidth="1"
        strokeDasharray="3 2"
        fill="none"
      />
      <text x="200" y="178" textAnchor="middle" fill="#52525b" fontSize="8">
        Inputs → intelligence → predictions for punters
      </text>
    </svg>
  ),
  'paradise-engineering': (
    <svg viewBox="0 0 400 200" className="h-auto w-full" aria-label="Paradise Engineering 3D architecture view">
      <rect width="400" height="200" fill="#0c0d10" rx="8" />
      <polygon
        points="200,35 280,95 240,165 160,165 120,95"
        fill="#181b22"
        stroke="#a78bfa"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />
      <polygon
        points="200,55 255,100 225,145 175,145 145,100"
        fill="#0f1118"
        stroke="#22d3ee"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <text x="200" y="108" textAnchor="middle" fill="#c4b5fd" fontSize="10">
        3D architecture
      </text>
      <rect x="40" y="78" width="72" height="36" rx="6" fill="#181b22" stroke="#71717a" strokeOpacity="0.5" />
      <text x="76" y="100" textAnchor="middle" fill="#a1a1aa" fontSize="9">
        Docs
      </text>
      <rect x="288" y="78" width="72" height="36" rx="6" fill="#181b22" stroke="#71717a" strokeOpacity="0.5" />
      <text x="324" y="100" textAnchor="middle" fill="#a1a1aa" fontSize="9">
        Security
      </text>
      <rect x="164" y="168" width="72" height="22" rx="4" fill="#181b22" stroke="#22d3ee" strokeOpacity="0.4" />
      <text x="200" y="183" textAnchor="middle" fill="#67e8f9" fontSize="9">
        Spec components
      </text>
      <path d="M112 96 L145 100" stroke="#22d3ee" strokeOpacity="0.4" strokeWidth="1" />
      <path d="M288 96 L255 100" stroke="#22d3ee" strokeOpacity="0.4" strokeWidth="1" />
      <text x="200" y="24" textAnchor="middle" fill="#71717a" fontSize="10">
        Bespoke internal · work in progress
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
      <text x="200" y="24" textAnchor="middle" fill="#71717a" fontSize="10">
        Bespoke internal · CI/CD
      </text>
      <text x="200" y="155" textAnchor="middle" fill="#a1a1aa" fontSize="10">
        Work in progress · Terraform promotion
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
