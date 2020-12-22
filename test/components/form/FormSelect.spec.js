import { mount } from '@vue/test-utils';

import FormSelect from '@/components/form/FormSelect.vue';

describe('FormSelect component', () => {
  it('should set the v-model value in the select', async () => {
    const wrapper = mount(FormSelect, {
      slots: [
        '<option value="desc">Descending</option>',
        '<option value="asc">Ascending</option>',
      ],
    });

    const selectInput = wrapper.find('select');
    await selectInput.setValue('asc');

    const selectedValue = selectInput.element.nodeValue;

    expect(selectedValue).toBe('asc');
  });

  it('should match snapshot', () => {
    const wrapper = mount(FormSelect, {
      slots: [
        '<option value="desc">Descending</option>',
        '<option value="asc">Ascending</option>',
      ],
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
