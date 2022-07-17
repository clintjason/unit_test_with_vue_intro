import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
  test('If user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader) // mounts the component
    expect(wrapper.find('button').isVisible()).toBe(false)
  })
  test('If user is logged in, show logout button', async () => {
    const wrapper = mount(AppHeader) // mounts the component
    await wrapper.setData({ loggedIn: true })
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})