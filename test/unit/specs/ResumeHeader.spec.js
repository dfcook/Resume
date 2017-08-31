import Vue from 'vue'
import ResumeHeader from '@/components/ResumeHeader'
import Vuetify from 'vuetify'
import { rendersValueFromStore } from './../helpers'

Vue.use(Vuetify)

describe('ResumeHeader.vue', () => {
  rendersValueFromStore('firstName', ResumeHeader,
    vm => vm.find('h2')[0].text(),
    store => store.state.summary.firstName)

  rendersValueFromStore('lastName', ResumeHeader,
    vm => vm.find('h2')[0].text(),
    store => store.state.summary.lastName)

  rendersValueFromStore('role', ResumeHeader,
    vm => vm.find('p')[0].text(),
    store => store.state.summary.role)

  rendersValueFromStore('company', ResumeHeader,
    vm => vm.find('p')[1].text(),
    store => store.state.summary.companyName)
})
