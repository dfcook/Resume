import Vue from 'vue'
import Summary from '@/components/Summary'
import Vuetify from 'vuetify'
import { mount } from 'avoriaz'
import { store } from './../mocks'

Vue.use(Vuetify)

describe('Summary.vue', () => {
  it('should render summary from store', () => {
    const vm = mount(Summary, { store })
    expect(vm.find('.summary')[0].text()).to.equal(store.state.summary.summary)
  })
})
