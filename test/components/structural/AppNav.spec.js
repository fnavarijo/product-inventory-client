import { mount } from '@vue/test-utils';
import AppNav from '@/components/structural/AppNav.vue';

describe('AppNav Component', () => {
  it ('should have User and Cart buttons', () => {
    const wrapper = mount(AppNav);
    expect(wrapper.html()).toMatchSnapshot();
  });
});