import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { initAxios, Products } from '@/api';
import { mock, mockFilter } from '@/test/api/products/getAll.mock';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

describe('Products.getAll function', () => {
  beforeAll(() => {
    const axiosInstance = new MockAdapter(axios);

    axiosInstance
      .onGet('/products', { params: { isFeatured: true } }).reply(200, mockFilter)
      .onGet('/products').reply(200, mock);

    initAxios({ axios: axios as NuxtAxiosInstance });
  });

  it('should fetch products list without filter', async () => {
    const products = await Products.getAll();

    expect(products[0]).toHaveProperty('id');
    expect(products[0]).toHaveProperty('name');
    expect(products[0]).toHaveProperty('category');
    expect(products[0]).toHaveProperty('featuredImage');
    expect(products[0]).toHaveProperty('isFeatured');

    expect(products).toMatchSnapshot();
  });

  it('should fetch products list with filter', async () => {
    const products = await Products.getAll({ isFeatured: true });

    expect(products[0]).toHaveProperty('id');
    expect(products[0]).toHaveProperty('name');
    expect(products[0]).toHaveProperty('category');
    expect(products[0]).toHaveProperty('featuredImage');
    expect(products[0]).toHaveProperty('isFeatured');

    expect(products).toMatchSnapshot();
  });

  it.todo('Test for checking images gallery');
});
