import EducationItem from '../model/EducationItem'
import ExperienceItem from '../model/ExperienceItem'
import IndustryKnowledge from '../model/IndustryKnowledge'
import KeySkill from '../model/KeySkill'
import Link from '../model/Link'
import ResumeSummary from '../model/ResumeSummary'

import StoreState from './StoreState'

class Mutations {
  static get loadSummary() { return 'loadSummary' }
  static get loadKeySkills() { return 'loadKeySkills' }
  static get loadIndustryKnowledge() { return 'loadIndustryKnowledge' }
  static get loadEducationHistory() { return 'loadEducationHistory' }
  static get loadProfessionalExperience() { return 'loadProfessionalExperience' }
  static get loadLinks() { return 'loadLinks' }
}

const mutations = {
  [Mutations.loadSummary](state: StoreState, summary: ResumeSummary) {
    state.summary = summary
  },
  [Mutations.loadKeySkills](state: StoreState, keySkills: KeySkill[]) {
    state.keySkills = keySkills
  },
  [Mutations.loadIndustryKnowledge](state: StoreState, industryKnowledge: IndustryKnowledge[]) {
    state.industryKnowledge = industryKnowledge
  },
  [Mutations.loadEducationHistory](state: StoreState, educationHistory: EducationItem[]) {
    state.educationHistory = educationHistory
  },
  [Mutations.loadProfessionalExperience](state: StoreState, professionalExperience: ExperienceItem[]) {
    state.professionalExperience = professionalExperience
  },
  [Mutations.loadLinks](state: StoreState, links: Link[]) {
    state.links = links
  },
}

export { Mutations, mutations }
