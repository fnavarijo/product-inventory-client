import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { initAxios } from '@/api/client';
import { ProductCombinations } from '@/api';
import { mock } from '@/test/api/product-combinations/getAll.mock';

import { NuxtAxiosInstance } from '@nuxtjs/axios';

describe('ProductCombinations.getAll function', () => {
  beforeAll(() => {
    const instance = new MockAdapter(axios);

    instance.onGet('/product-combinations').reply(200, mock);

    initAxios({ axios: axios as NuxtAxiosInstance });
  });

  it('should fetch and transform response', async () => {
    const products = await ProductCombinations.getAll();

    expect(products).toMatchObject([
      { id: '600c90307a05276f744b3a67', image: 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1611434669/Pantalon_Crop_ee7a77ca7e.png' },
      { id: '600c933c7a05276f744b3a6d', image: 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1611436830/combinacion_blanca_min_976c847912.png' },
    ]);
  });
});
