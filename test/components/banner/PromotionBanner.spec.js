import { shallowMount } from '@vue/test-utils';

import PromotionBanner from '@/components/banner/PromotionBanner.vue';

describe('PromotionBanner component', () => {
  it('should receive images array as prop', () => {
    const wrapper = shallowMount(PromotionBanner, {
      propsData: {
        images: [
          'http://image.test.com/image/1',
          'http://image.test.com/image/2',
        ],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
