import { mount } from '@vue/test-utils';

import SectionLocation from '@/components/presentational/SectionLocation.vue';

describe('SectionLocation component', () => {
  it('should display path set via props', () => {
    const wrapper = mount(SectionLocation, {
      propsData: {
        path: 'home > catalog',
      },
    });

    expect(wrapper.text()).toContain('home > catalog');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
