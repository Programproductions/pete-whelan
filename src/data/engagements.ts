/**
 * Engagement metadata — edit here to set clients, dates and referees.
 * Every project must have a clientCompanyId pointing at a company node.
 */
export type CompanyRole = 'own' | 'client'

export type CompanyEngagement = {
  companyRole: CompanyRole
  refereeName?: string
  refereeEmail?: string
}

export type ProjectEngagement = {
  /** Company / client organisation this delivery was for */
  clientCompanyId: string
  /** Public product site when live */
  website?: string
  /** Release / go-to-market phase (e.g. private beta, live) */
  phase?: string
  contractLength?: string
  startDate?: string
  endDate?: string
}

export const companyEngagements: Record<string, CompanyEngagement> = {
  'program-music': { companyRole: 'own' },
  'program-productions': { companyRole: 'own' },
  web4: { companyRole: 'client' },
  wici: { companyRole: 'client' },
  'tautsec-pty': { companyRole: 'client' },
  upwork: { companyRole: 'client' },
  'alltasks-it': { companyRole: 'client' },
  'aimi-platform': { companyRole: 'client' },
}

/** Review and fill optional dates / contract length as you confirm them */
export const projectEngagements: Record<string, ProjectEngagement> = {
  aimi: {
    clientCompanyId: 'aimi-platform',
    phase: 'Private beta — invite only',
  },
  tautsec: {
    clientCompanyId: 'tautsec-pty',
    website: 'https://tautsec.com.au',
    phase: 'Live',
  },
  lexi: {
    clientCompanyId: 'web4',
    website: 'https://lexi.tips',
    phase: 'Pacesetter live',
  },
  'flight-deck': { clientCompanyId: 'program-productions' },
  'florence-ai': { clientCompanyId: 'wici' },
  'sage-chatbot': { clientCompanyId: 'program-productions' },
  'my-paralegal': { clientCompanyId: 'upwork' },
  'big-red-ronnie': { clientCompanyId: 'alltasks-it' },
}
