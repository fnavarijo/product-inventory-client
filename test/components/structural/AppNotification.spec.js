import { mount } from '@vue/test-utils';

import AppNotification from '@/components/structural/AppNotification.vue';

describe('AppNotification component', () => {
  it('should display notification with message', () => {
    const wrapper = mount(AppNotification, {
      propsData: {
        message: 'Something happened',
      },
    });

    expect(wrapper.text()).toBe('Something happened');
    expect(wrapper.find('svg').exists()).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
