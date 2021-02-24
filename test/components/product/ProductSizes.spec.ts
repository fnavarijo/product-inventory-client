import { mount } from '@vue/test-utils';

import ProductSizes from '@/components/product/ProductSizes.vue';

describe('ProductSizes component', () => {
  it('should generate sizes component with correct style', () => {
    const wrapper = mount(ProductSizes, {
      propsData: { sizes: ['S', 'L', 'XL'] },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
