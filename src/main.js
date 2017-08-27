import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { store, Actions } from './vuex/store'
import getResume from './api/resources'

import('./../node_modules/vuetify/dist/vuetify.min.css')

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
  created () {
    getResume().then(r => {
      store.dispatch(Actions.loadSummary, r.data.summary)
      store.dispatch(Actions.loadKeySkills, r.data.keySkills)
      store.dispatch(Actions.loadIndustryKnowledge, r.data.industryKnowledge)
      store.dispatch(Actions.loadEducationHistory, r.data.educationHistory)
      // store.dispatch(Actions.loadProfessionalExperience, r.data.professionalExperience)
    })
  }
})
