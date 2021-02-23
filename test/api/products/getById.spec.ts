import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { Products, initAxios } from '@/api';

import { mock } from '@/test/api/products/getById.mock';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

describe('Products.getById function', () => {
  beforeAll(() => {
    const adapter = new MockAdapter(axios);

    adapter.onGet('/products/601a077f39aaa829dd99de3e').reply(200, mock);

    initAxios({ axios: axios as NuxtAxiosInstance });
  });

  it('should fetch and transform product', async () => {
    const product = await Products.getById('601a077f39aaa829dd99de3e');

    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('category');
    expect(product).toHaveProperty('featuredImage');
    expect(product).toHaveProperty('isFeatured');
    expect(product).toHaveProperty('description');
    expect(product).toHaveProperty('images');
    expect(product).toHaveProperty('colors');
    expect(product).toHaveProperty('availableSizes');

    expect(product).toMatchSnapshot();
  });
});
