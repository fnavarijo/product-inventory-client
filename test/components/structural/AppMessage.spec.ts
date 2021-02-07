import { mount } from '@vue/test-utils';

import AppMessage from '@/components/structural/AppMessage.vue';

describe('AppMessage component', () => {
  it('should generate message with proper style', () => {
    const wrapper = mount(AppMessage, {
      slots: {
        default: 'Something wrong happened',
      },
    });

    expect(wrapper.find('span').html()).toContain('Something wrong happened');
    expect(wrapper).toMatchSnapshot();
  });
});
