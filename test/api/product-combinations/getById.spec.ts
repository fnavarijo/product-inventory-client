import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { ProductCombinations } from '@/api';
import { initAxios } from '@/api/client';
import { mock } from '@/test/api/product-combinations/getById.mock';

import { NuxtAxiosInstance } from '@nuxtjs/axios';

describe('product-combinations getById', () => {
  beforeAll(() => {
    const instance = new MockAdapter(axios);

    instance.onGet('/product-combinations/600c90307a05276f744b3a67')
      .reply(200, mock);

    initAxios({ axios: axios as NuxtAxiosInstance });
  });

  it('should get productCombination by id', async () => {
    const productCombination = await ProductCombinations.getById('600c90307a05276f744b3a67');

    const productColors = productCombination.products[0].colors;

    expect(productCombination).toMatchObject({
      products: [
        {
          code: '7002',
          description: 'Blusa blanca de algodon',
          colors: [
            { name: 'Rosado', color: '#f04c4c' },
            { name: 'Negro', color: '#000000' },
          ],
        },
        {
          code: '5008',
          description: 'Pantalón de piel de melocotón',
          colors: [],
        },
      ],
      image: 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1611434669/Pantalon_Crop_ee7a77ca7e.png',
    });
    expect(productColors).toMatchObject([
      { name: 'Rosado', color: '#f04c4c' },
      { name: 'Negro', color: '#000000' },
    ]);
  });

  it('should get products category from productCombination', async () => {
    const { products } = await ProductCombinations.getById('600c90307a05276f744b3a67');

    expect(products[0]).toMatchObject({
      code: '7002',
      description: 'Blusa blanca de algodon',
      category: 'Blusa',
      colors: [
        {
          name: 'Rosado',
          color: '#f04c4c',
        },
        {
          name: 'Negro',
          color: '#000000',
        },
      ],
    });
  });
});
