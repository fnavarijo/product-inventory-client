import { mount } from '@vue/test-utils';

import ProductInfoBox from '@/components/product/ProductInfoBox.vue';

describe('ProductInfoBox component', () => {
  it('should render component base information (type and code)', () => {
    const wrapper = mount(ProductInfoBox, {
      propsData: {
        type: 'Blusa',
        code: '5698',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render available colors of the product', () => {
    const wrapper = mount(ProductInfoBox, {
      propsData: {
        type: 'Blusa',
        code: '5589',
        colors: [
          { name: 'Rojo', color: '#b0340e' },
          { name: 'Negro', color: '#000000' },
        ],
      },
    });

    expect(wrapper.find('.color-product')).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
