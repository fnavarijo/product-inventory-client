import { mount, RouterLinkStub } from '@vue/test-utils';

import AppButton from '@/components/button/AppButton.vue';

describe('AppButton component', () => {
  it('should emit event on click', async () => {
    const wrapper = mount(AppButton);

    wrapper.vm.$emit('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().click).toBeTruthy();
  });

  it('should render component as button as default', () => {
    const wrapper = mount(AppButton);

    const buttonElement = wrapper.find('button');

    expect(buttonElement.exists()).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render component as NuxtLink when passed prop', () => {
    const wrapper = mount(AppButton, {
      stubs: {
        'nuxt-link': RouterLinkStub,
      },
      propsData: {
        as: 'nuxt-link',
      },
    });

    const buttonElement = wrapper.find('button');

    expect(buttonElement.exists()).toBeFalsy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render button component with secondary colors', () => {
    const wrapper = mount(AppButton, {
      propsData: {
        color: 'secondary',
      },
    });

    const buttonElement = wrapper.find('button');

    expect(buttonElement.exists()).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
