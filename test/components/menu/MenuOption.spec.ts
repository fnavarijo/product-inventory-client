import { mount } from '@vue/test-utils';

import MenuOption from '@/components/menu/MenuOption.vue';

describe('MenuOption component', () => {
  it('should display option without sublist', () => {
    const wrapper = mount(MenuOption, {
      propsData: {
        option: 'Base',
        subItems: ['Sub', 'Item'],
      },
    });

    expect(wrapper.find('.subitems').isVisible()).toBeFalsy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display sublist on click', async () => {
    const wrapper = mount(MenuOption, {
      propsData: {
        option: 'Base',
        subItems: ['Sub', 'Item'],
      },
    });

    await wrapper.find('.option').trigger('click');

    expect(wrapper.find('.subitems').isVisible()).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
