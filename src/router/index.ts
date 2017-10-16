import Vue from 'vue'
import Router from 'vue-router'

import Education from '@/components/Education'
import KeySkills from '@/components/KeySkills'
import ProfessionalExperience from '@/components/ProfessionalExperience'
import Summary from '@/components/Summary'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      component: Summary,
      name: 'Summary',
      path: '/',
    }, {
      component: KeySkills,
      name: 'KeySkills',
      path: '/KeySkills',
    }, {
      component: Education,
      name: 'Education',
      path: '/Education',
    }, {
      component: ProfessionalExperience,
      name: 'ProfessionalExperience',
      path: '/ProfessionalExperience',
    },
  ],
})
