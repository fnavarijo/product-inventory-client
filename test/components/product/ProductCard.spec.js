import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils';

import ProductCard from '@/components/product/ProductCard.vue';

import { currencyFilter } from '@/plugins/filters';

const localVue = createLocalVue();
localVue.filter('currency', currencyFilter);

describe('ProductCard component', () => {
  it('should render card with name, category and price', () => {
    const wrapper = mount(ProductCard, {
      propsData: {
        category: 'Shoes',
        name: 'Nike shoes',
        price: 25.50,
        id: 1,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      localVue,
    });

    expect(wrapper.text()).toContain('Shoes');
    expect(wrapper.text()).toContain('Nike shoes');
    expect(wrapper.text()).toContain('25.50');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
