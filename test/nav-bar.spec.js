import { mount } from '@vue/test-utils'
import NavBar from '@/components/nav-bar.vue'

describe('NavBar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
