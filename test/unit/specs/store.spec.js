import store from '@/vuex/store'
import { Actions } from '@/vuex/actions'

describe('store', () => {
  it('should update store state - summary', () => {
    store.dispatch(Actions.loadSummary, {
      summary: 'foo'
    })

    expect(store.state.summary.summary).to.equal('foo')
  })

  it('should update store state - keySkills', () => {
    store.dispatch(Actions.loadKeySkills, [{
      id: 1,
      description: 'foo'
    }, {
      id: 2,
      description: 'bar'
    }])

    expect(store.state.keySkills.length).to.equal(2)
  })

  it('should update store state - industryKnowledge', () => {
    store.dispatch(Actions.loadIndustryKnowledge, [{
      id: 1,
      description: 'foo'
    }, {
      id: 2,
      description: 'bar'
    }, {
      id: 3,
      description: 'Baz'
    }])

    expect(store.state.industryKnowledge.length).to.equal(3)
  })

  it('should update store state - educationHistory', () => {
    store.dispatch(Actions.loadEducationHistory, [{
      id: 1,
      description: 'foo'
    }])

    expect(store.state.educationHistory.length).to.equal(1)
  })

  it('should update store state - professionalExperience', () => {
    store.dispatch(Actions.loadProfessionalExperience, [{
      id: 1,
      description: 'foo'
    }])

    expect(store.state.professionalExperience.length).to.equal(1)
  })
})
