import Vue from 'vue'
import Summary from '@/components/Summary'
import Vuetify from 'vuetify'
import { rendersValueFromStore } from './../helpers'

Vue.use(Vuetify)

describe('Summary.vue', () => {
  rendersValueFromStore('summary', Summary,
    vm => vm.find('.summary')[0].text(),
    store => store.state.summary.summary)
})
