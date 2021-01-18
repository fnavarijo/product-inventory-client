import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { initAxios, Products } from '@/api';
import { mock } from '@/test/api/products/getAll.mock';

describe('Products.getAll function', () => {
  beforeAll(() => {
    const axiosInstance = new MockAdapter(axios);

    axiosInstance.onGet('/products').reply(200, mock);

    initAxios({ axios });
  });

  it('should fetch products list', async () => {
    const products = await Products.getAll();

    expect(products).toMatchObject([
      {
        id: 1,
        name: 'Nike Sport',
        price: 450,
        description: '',
        shortDescription: '',
        images: [],
      },
      {
        id: 2,
        name: 'Colombian jeans',
        price: 150.35,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dictum odio. Duis accumsan justo at purus sagittis, fermentum laoreet urna tincidunt. Donec fringilla dui eu diam sollicitudin vehicula eget a magna.',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dictum odio.',
        images: ['/uploads/product_c02b1dc005.jpg'],
      },
    ]);
  });
});
