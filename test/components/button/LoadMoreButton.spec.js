import { mount } from '@vue/test-utils';

import LoadMoreButton from '@/components/button/LoadMoreButton.vue';

describe('LoadMoreButton component', () => {
  it('should emit event on click', async () => {
    const wrapper = mount(LoadMoreButton);

    wrapper.vm.$emit('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().click).toBeTruthy();
  });
});
