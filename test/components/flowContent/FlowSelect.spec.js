import { mount } from '@vue/test-utils';

import FlowSelect from '@/components/flowContent/FlowSelect.vue';

describe('FlowSelect component', () => {
  xit('should set the v-model value in the select', async () => {
    const wrapper = mount(FlowSelect, {
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
    const wrapper = mount(FlowSelect, {
      slots: [
        '<option value="desc">Descending</option>',
        '<option value="asc">Ascending</option>',
      ],
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
