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
  contractLength?: string
  startDate?: string
  endDate?: string
}

export const companyEngagements: Record<string, CompanyEngagement> = {
  'program-music': { companyRole: 'own' },
  'program-productions': { companyRole: 'own' },
  web4: { companyRole: 'client' },
  'florence-medical': { companyRole: 'client' },
  wici: { companyRole: 'client' },
  'tautsec-pty': { companyRole: 'client' },
  'contract-engagements': { companyRole: 'client' },
}

/** Review and fill optional dates / contract length as you confirm them */
export const projectEngagements: Record<string, ProjectEngagement> = {
  aimi: { clientCompanyId: 'program-music' },
  tautsec: { clientCompanyId: 'tautsec-pty' },
  lexi: { clientCompanyId: 'web4' },
  'flight-deck': { clientCompanyId: 'program-productions' },
  'sage-chatbot': { clientCompanyId: 'wici' },
  'legal-voice-apps': { clientCompanyId: 'contract-engagements' },
  'alexa-apps': { clientCompanyId: 'contract-engagements' },
}
