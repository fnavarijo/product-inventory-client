import { mount } from '@vue/test-utils';

import FormSelect from '@/components/form/FormSelect.vue';

describe('FormSelect component', () => {
  xit('should set the v-model value in the select', async () => {
    const wrapper = mount(FormSelect);

    const selectInput = wrapper.find('select');
    await selectInput.setValue('2');

    const selectedValue = selectInput.element.nodeValue;
    
    expect(selectedValue).toBe()
  });
});
