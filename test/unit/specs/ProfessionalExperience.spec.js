import Vue from 'vue'
import ProfessionalExperience from '@/components/ProfessionalExperience'
import Vuetify from 'vuetify'
import { mount } from 'avoriaz'
import { store } from './../mocks'

Vue.use(Vuetify)

describe('ProfessionalExperience.vue', () => {
  it('should render 9 professional experience items', () => {
    const vm = mount(ProfessionalExperience, { store })
    expect(vm.find('.cd-timeline-block').length).to.equal(9)
  })
})
