import { mount, RouterLinkStub } from '@vue/test-utils';

import LoadMoreButton from '@/components/button/LoadMoreButton.vue';

describe('LoadMoreButton component', () => {
  it('should emit event on click', async () => {
    const wrapper = mount(LoadMoreButton);

    wrapper.vm.$emit('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().click).toBeTruthy();
  });

  it('should render component as NuxtLink when passed prop', () => {
    const wrapper = mount(LoadMoreButton, {
      stubs: {
        'nuxt-link': RouterLinkStub,
      },
      propsData: {
        as: 'nuxt-link',
      },
    });

    const buttonElement = wrapper.find('element');

    expect(buttonElement.exists()).toBeFalsy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
