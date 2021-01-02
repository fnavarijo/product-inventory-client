import { mount } from '@vue/test-utils';

import FlowInput from '@/components/flowContent/FlowInput.vue';

describe('FlowInput component', () => {
  xit('should generate input with customs styles', () => {
    const wrapper = mount(FlowInput, {
      propsData: {
        name: 'username',
        label: 'User name',
      },
    });

    // TODO: should check elements are rendered with the correct values
    expect(wrapper.html()).toMatchSnaptshot();
  });
});
