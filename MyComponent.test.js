import { mount } from '@vue/test-utils'
import MyComponent from './MyComponent.js'
import { readFileSync } from 'node:fs';

test('displays message', () => {
  MyComponent.template = readFileSync('./MyComponent.html', 'utf8')
  const wrapper = mount(MyComponent)
  expect(wrapper.text()).toContain('Hello world')
})