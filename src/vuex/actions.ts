import { EducationItem, ExperienceItem, IndustryKnowledge, KeySkill, Link, ResumeSummary } from '../model'

import StoreState from './StoreState'

import { Mutations } from './mutations'

import { ActionContext, ActionTree, Store } from 'vuex'

class Actions {
  static get loadSummary() { return 'loadSummary' }
  static get loadKeySkills() { return 'loadKeySkills' }
  static get loadIndustryKnowledge() { return 'loadIndustryKnowledge' }
  static get loadEducationHistory() { return 'loadEducationHistory' }
  static get loadProfessionalExperience() { return 'loadProfessionalExperience' }
  static get loadLinks() { return 'loadLinks' }
}

const actions: ActionTree<StoreState, any> = {
  [Actions.loadSummary]({ commit }: ActionContext<StoreState, any>, summary: ResumeSummary) {
    commit(Mutations.loadSummary, summary)
  },
  [Actions.loadKeySkills]({ commit }: ActionContext<StoreState, any>, keySkills: KeySkill[]) {
    commit(Mutations.loadKeySkills, keySkills)
  },
  [Actions.loadIndustryKnowledge]({ commit }: ActionContext<StoreState, any>, industryKnowledge: IndustryKnowledge[]) {
    commit(Mutations.loadIndustryKnowledge, industryKnowledge)
  },
  [Actions.loadEducationHistory]({ commit }: ActionContext<StoreState, any>, educationHistory: EducationItem[]) {
    commit(Mutations.loadEducationHistory, educationHistory)
  },
  [Actions.loadProfessionalExperience]({ commit }: ActionContext<StoreState, any>,
                                       professionalExperience: ExperienceItem[]) {
    commit(Mutations.loadProfessionalExperience, professionalExperience)
  },
  [Actions.loadLinks]({ commit }: ActionContext<StoreState, any>, links: Link[]) {
    commit(Mutations.loadLinks, links)
  },
}

export { actions, Actions }
