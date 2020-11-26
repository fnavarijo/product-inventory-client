import { mount } from '@vue/test-utils';

import ProductCard from '@/components/product/ProductCard.vue';

describe('ProductCard component', () => {
  it('should render card with name, category and price', () => {
    const wrapper = mount(ProductCard, {
      propsData: {
        category: 'Shoes',
        name: 'Nike shoes',
        price: 25.50
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});