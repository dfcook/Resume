import Vue from 'vue'
import Education from '@/components/Education'
import Vuetify from 'vuetify'
import { mount } from 'avoriaz'
import { store } from './../mocks'

Vue.use(Vuetify)

describe('Education.vue', () => {
  it('should render 2 education items', () => {
    const vm = mount(Education, { store })
    expect(vm.find('li').length).to.equal(2)
  })
})
