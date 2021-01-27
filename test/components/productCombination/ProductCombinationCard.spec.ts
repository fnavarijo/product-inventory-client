import { mount, RouterLinkStub } from '@vue/test-utils';

import ProductCombinationCard from '@/components/productCombination/ProductCombinationCard.vue';

describe('ProductCombinationCard component', () => {
  it('should render card with style', () => {
    const wrapper = mount(ProductCombinationCard, {
      propsData: {
        id: '123456',
        image: 'http://localhost/image.jpg',
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
