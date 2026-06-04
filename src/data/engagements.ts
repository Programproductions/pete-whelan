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
}

/** Contract engagements — dates shown on projects in the graph and platform cards */
export const projectEngagements: Record<string, ProjectEngagement> = {
  aimi: {
    clientCompanyId: 'program-music',
    contractLength: 'Founder project',
    startDate: 'Jun 2023',
    endDate: 'ongoing',
    phase: 'Private beta — invite only',
  },
  tautsec: {
    clientCompanyId: 'tautsec-pty',
    contractLength: 'Contract',
    startDate: 'Jan 2026',
    endDate: 'ongoing',
    website: 'https://tautsec.com.au',
    phase: 'Live',
  },
  lexi: {
    clientCompanyId: 'web4',
    contractLength: 'Contract',
    startDate: 'Jan 2025',
    endDate: 'Jan 2026',
    website: 'https://lexi.tips',
    phase: 'Live',
  },
  'florence-ai': {
    clientCompanyId: 'wici',
    contractLength: 'Contract',
    startDate: 'Sep 2023',
    endDate: 'Mar 2024',
  },
  'big-red-ronnie': {
    clientCompanyId: 'alltasks-it',
    contractLength: 'Contract',
    startDate: 'Jan 2023',
    endDate: 'Mar 2023',
  },
  'my-paralegal': {
    clientCompanyId: 'upwork',
    contractLength: 'Contract',
    startDate: '2021',
    endDate: '2023',
  },
  'paradise-engineering': {
    clientCompanyId: 'program-productions',
    phase: 'In development — Tautsec platform',
  },
  'flight-deck': {
    clientCompanyId: 'program-productions',
    startDate: 'Developed 2026',
  },
  'sage-chatbot': { clientCompanyId: 'program-productions' },
}
