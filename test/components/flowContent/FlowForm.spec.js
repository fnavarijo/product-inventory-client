import { mount } from '@vue/test-utils';

import FlowForm from '@/components/flowContent/FlowForm.vue';
import FlowInput from '@/components/flowContent/FlowInput.vue';

describe('FlowForm component', () => {
  // TODO: Check this work correctly.
  it('should valid form content before submitting', async () => {
    const formComponent = {
      name: 'FormComponent',
      components: {
        FlowInput,
        FlowForm,
      },
      template: '<div><FlowForm><FlowInput label="Wrong input" name="alphaInput" value="" /><button type="submit"></button></FlowForm></div>',
    };

    const wrapper = mount(formComponent, {
      components: { FlowInput },
    });

    const flowFormComponent = wrapper.findComponent(FlowForm);
    const inputElement = wrapper.find('input');
    const submitButton = wrapper.find('button[type="submit"]');

    inputElement.setValue('Wrong value');
    submitButton.trigger('click');

    await wrapper.vm.$nextTick();

    expect(flowFormComponent.emitted().validSubmit).toBeFalsy();
  });
});
