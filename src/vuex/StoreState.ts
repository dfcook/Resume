import EducationItem from '../model/EducationItem'
import ExperienceItem from '../model/ExperienceItem'
import IndustryKnowledge from '../model/IndustryKnowledge'
import KeySkill from '../model/KeySkill'
import Link from '../model/Link'
import ResumeSummary from '../model/ResumeSummary'

export default interface StoreState {
  summary: ResumeSummary
  keySkills: KeySkill[]
  educationHistory: EducationItem[]
  industryKnowledge: IndustryKnowledge[]
  professionalExperience: ExperienceItem[]
  links: Link[]
}
