import { mount } from '@vue/test-utils';

import ProductColors from '@/components/product/ProductColors.vue';

describe('ProductColors component', () => {
  it('should render component with correct styling', () => {
    const wrapper = mount(ProductColors, {
      propsData: {
        colors: [
          { name: 'Black', color: '#000000' },
          { name: 'White', color: '#ffffff' },
        ],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
