import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils';

import ProductTile from '@/components/product/ProductTile.vue';

import { currencyFilter } from '@/plugins/filters';

const localVue = createLocalVue();
localVue.filter('currency', currencyFilter);

describe('ProductTile component', () => {
  it('should render component with props', () => {
    const wrapper = mount(ProductTile, {
      propsData: {
        category: 'Shoes',
        name: 'Nike Shoes',
        price: 25.50,
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
        id: 1,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      localVue,
    });

    expect(wrapper.text()).toContain('Shoes');
    expect(wrapper.text()).toContain('Nike Shoes');
    expect(wrapper.text()).toContain('25.50');
    expect(wrapper.text()).toContain('Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
