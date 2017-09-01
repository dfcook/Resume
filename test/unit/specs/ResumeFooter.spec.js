import Vue from 'vue'
import ResumeFooter from '@/components/ResumeFooter'
import Vuetify from 'vuetify'
import { mount } from 'avoriaz'
import { store } from './../mocks'

Vue.use(Vuetify)

describe('ResumeFooter.vue', () => {
  it('should render 1 link', () => {
    const vm = mount(ResumeFooter, { store })
    expect(vm.find('a').length).to.equal(1)
  })
})
