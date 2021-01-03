import { mount } from '@vue/test-utils';

import FlowCheckbox from '@/components/flowContent/FlowCheckbox.vue';

describe('FlowCheckbox component', () => {
  xit('should let select the value to display', () => {
    const wrapper = mount(FlowCheckbox, {
      propsData: {
        input: true,
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.trigger('click');

    expect(checkbox.emitted().change[0]).toEqual([false]);
  });
});
