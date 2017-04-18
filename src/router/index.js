import Vue from 'vue'
import Router from 'vue-router'
import Summary from '@/components/Summary'
import KeySkills from '@/components/KeySkills'
import Education from '@/components/Education'
import ProfessionalExperience from '@/components/ProfessionalExperience'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Summary',
      component: Summary
    }, {
      path: '/KeySkills',
      name: 'KeySkills',
      component: KeySkills
    }, {
      path: '/Education',
      name: 'Education',
      component: Education
    }, {
      path: '/ProfessionalExperience',
      name: 'ProfessionalExperience',
      component: ProfessionalExperience
    }
  ]
})
