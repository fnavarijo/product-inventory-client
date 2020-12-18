import { mount } from '@vue/test-utils';

import FormInput from '@/components/form/FormInput.vue';

describe('FormInput component', () => {
  xit('should generate input with customs styles', () => {
    const wrapper = mount(FormInput, {
      propsData: {
        name: 'username',
        label: 'User name',
      },
    });

    // TODO: should check elements are rendered with the correct values
    expect(wrapper.html()).toMatchSnaptshot();
  });
});
