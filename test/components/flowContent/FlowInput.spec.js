import { mount } from '@vue/test-utils';

import FlowInput from '@/components/flowContent/FlowInput.vue';

describe('FlowInput component', () => {
  it('should generate input with customs styles', () => {
    const wrapper = mount(FlowInput, {
      propsData: {
        name: 'username',
        label: 'User name',
        value: '',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should handle v-model', () => {
    const MountComponent = {
      template: '<FlowInput name="name" label="name" v-model="inputValue" />',
      components: { FlowInput },
      data () {
        return { inputValue: '' };
      },
    };
    const wrapper = mount(MountComponent);

    const inputElement = wrapper.find('input');
    inputElement.setValue('Hello World');

    expect(wrapper.vm.inputValue).toBe('Hello World');
  });
});
