import { mount } from '@vue/test-utils';

import ProductCategoryMenu from '@/components/product/ProductCategoryMenu.vue';

describe('ProductCategoryMenu component', () => {
  it('should emit selected option on select', async () => {
    const wrapper = mount(ProductCategoryMenu, {
      propsData: {
        categories: [
          'Accesories',
          'Clothing',
          'Shoes',
        ],
      },
    });

    const categoryElement = wrapper.find('li:nth-child(2)');
    await categoryElement.trigger('click');

    expect(wrapper.emitted('select')[0]).toEqual(['Clothing']);
  });

  it('should match snapshot', () => {
    const wrapper = mount(ProductCategoryMenu, {
      propsData: {
        categories: [
          'Accesories',
          'Clothing',
          'Shoes',
        ],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
