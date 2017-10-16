import { EducationItem, ExperienceItem, IndustryKnowledge, KeySkill, Link, ResumeSummary } from '../model'

export default interface StoreState {
  summary?: ResumeSummary
  keySkills: KeySkill[]
  educationHistory: EducationItem[]
  industryKnowledge: IndustryKnowledge[]
  professionalExperience: ExperienceItem[]
  links: Link[]
}
