import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App'
import router from './router'

import { Actions } from './vuex/actions'
import store from './vuex/store'

import getResume from './api/resources'

Vue.use(Vuetify)

Vue.config.productionTip = false

const app = new Vue({
  components: { App },
  el: '#app',
  router,
  store,
  template: '<App/>',
  created() {
    getResume().then((r) => {
      store.dispatch(Actions.loadSummary, {
        companyName: r.data.companyName,
        firstName: r.data.firstName,
        lastName: r.data.lastName,
        role: r.data.role,
        summary: r.data.summary,
      })
      store.dispatch(Actions.loadKeySkills, r.data.keySkills)
      store.dispatch(Actions.loadIndustryKnowledge, r.data.industryKnowledge)
      store.dispatch(Actions.loadEducationHistory, r.data.educationHistory)
      store.dispatch(Actions.loadLinks, r.data.links)
    })
  },
})
