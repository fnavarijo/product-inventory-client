import { mount, RouterLinkStub } from '@vue/test-utils';

import ProductCard from '@/components/product/ProductCard.vue';

describe('ProductCard component', () => {
  it('should render card with name, category and price', () => {
    const wrapper = mount(ProductCard, {
      propsData: {
        category: 'Shoes - Nike',
        name: 'Nike shoes',
        image: 'http://domain.com/image.png',
        id: '123456',
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    expect(wrapper.find('#category').text()).toBe('Shoes');
    expect(wrapper.text()).toContain('Nike shoes');
    expect(wrapper.find('img').attributes('src')).toBe('http://domain.com/image.png');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
