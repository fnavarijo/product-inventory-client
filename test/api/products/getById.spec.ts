import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { Products, initAxios } from '@/api';

import { mock } from '@/test/api/products/getById.mock';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

describe('Products.getById function', () => {
  beforeAll(() => {
    const adapter = new MockAdapter(axios);

    adapter.onGet('/products/1').reply(200, mock);

    initAxios({ axios: axios as NuxtAxiosInstance });
  });

  it('should fetch and transform product', async () => {
    const product = await Products.getById(1);

    expect(product).toMatchObject({
      id: 1,
      name: 'Colombian jeans',
      price: 150.35,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dictum odio. Duis accumsan justo at purus sagittis, fermentum laoreet urna tincidunt. Donec fringilla dui eu diam sollicitudin vehicula eget a magna.',
      shortDescription: '',
      images: ['/uploads/product_c02b1dc005.jpg'],
    });
  });
});
