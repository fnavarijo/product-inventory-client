import { extend } from 'vee-validate';
import { mount } from '@vue/test-utils';
import flushPromises from 'flush-promises';

import FlowInput from '@/components/flowContent/FlowInput.vue';

describe('FlowInput component', () => {
  beforeAll(() => {
    extend('isvalid', {
      validate: (value) => { console.log('Validating'); return value === 'isValid'; },
      message: 'Should be isValid value',
    });
  });

  it('should generate input with custom design', () => {
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

  it('should display error message when input is invalid', async () => {
    // TODO: is not running the validation defined in the rule
    const wrapper = mount(FlowInput, {
      propsData: {
        name: 'inputError',
        label: 'Error input',
        value: '',
        rules: 'isvalid',
      },
    });

    wrapper.find('input').setValue('invalid');

    await flushPromises();

    expect(wrapper.find('.input-error').text()).toContain('Should be isValid value');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
