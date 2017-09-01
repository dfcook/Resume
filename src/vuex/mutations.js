class Mutations {
  static get loadSummary () { return 'loadSummary' }
  static get loadKeySkills () { return 'loadKeySkills' }
  static get loadIndustryKnowledge () { return 'loadIndustryKnowledge' }
  static get loadEducationHistory () { return 'loadEducationHistory' }
  static get loadProfessionalExperience () { return 'loadProfessionalExperience' }
  static get loadLinks () { return 'loadLinks' }
}

const mutations = {
  [Mutations.loadSummary] (state, summary) { state.summary = summary },
  [Mutations.loadKeySkills] (state, keySkills) { state.keySkills = keySkills },
  [Mutations.loadIndustryKnowledge] (state, industryKnowledge) { state.industryKnowledge = industryKnowledge },
  [Mutations.loadEducationHistory] (state, educationHistory) { state.educationHistory = educationHistory },
  [Mutations.loadProfessionalExperience] (state, professionalExperience) { state.professionalExperience = professionalExperience },
  [Mutations.loadLinks] (state, links) { state.links = links }
}

export { Mutations, mutations }
