import { Mutations } from './mutations'

class Actions {
  static get loadSummary () { return 'loadSummary' }
  static get loadKeySkills () { return 'loadKeySkills' }
  static get loadIndustryKnowledge () { return 'loadIndustryKnowledge' }
  static get loadEducationHistory () { return 'loadEducationHistory' }
  static get loadProfessionalExperience () { return 'loadProfessionalExperience' }
  static get loadLinks () { return 'loadLinks' }
}

const actions = {
  [Actions.loadSummary] ({ commit }, summary) { commit(Mutations.loadSummary, summary) },
  [Actions.loadKeySkills] ({ commit }, keySkills) { commit(Mutations.loadKeySkills, keySkills) },
  [Actions.loadIndustryKnowledge] ({ commit }, industryKnowledge) { commit(Mutations.loadIndustryKnowledge, industryKnowledge) },
  [Actions.loadEducationHistory] ({ commit }, educationHistory) { commit(Mutations.loadEducationHistory, educationHistory) },
  [Actions.loadProfessionalExperience] ({ commit }, professionalExperience) { commit(Mutations.loadProfessionalExperience, professionalExperience) },
  [Actions.loadLinks] ({ commit }, links) { commit(Mutations.loadLinks, links) }
}

export { actions, Actions }
