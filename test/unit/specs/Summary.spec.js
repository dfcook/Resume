import Vue from 'vue'
import Summary from '@/components/Summary'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const store = {
      state: {
        summary: 'foo'
      }
    }

    const Constructor = Vue.extend(Summary)
    const vm = new Constructor({ store }).$mount()
    expect(vm.$el.querySelector('.row .xs12 div').textContent)
      .to.equal('foo')
  })
})
