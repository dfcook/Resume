import { mount } from 'avoriaz'
import { store } from './mocks'
import router from '@/router'

function rendersValueFromStore (valueName, component, elementFinder, storeMapper) {
  it(`should render ${valueName} from store`, () => {
    const vm = mount(component, { store, router })
    expect(elementFinder(vm)).to.contain(storeMapper(store))
  })
}

export { rendersValueFromStore }
