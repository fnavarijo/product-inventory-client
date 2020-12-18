import { mount } from '@vue/test-utils';

import AddProductButton from '@/components/button/AddProductButton.vue';

describe('AddProductButton component', () => {
  it('should emit event on click', async () => {
    const wrapper = mount(AddProductButton);

    wrapper.vm.$emit('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().click).toBeTruthy();
  });
});
