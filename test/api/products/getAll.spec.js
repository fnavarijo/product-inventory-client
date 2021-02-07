import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { initAxios, Products } from '@/api';
import { mock, mockFilter } from '@/test/api/products/getAll.mock';

describe('Products.getAll function', () => {
  beforeAll(() => {
    const axiosInstance = new MockAdapter(axios);

    axiosInstance
      .onGet('/products', { params: { isFeatured: true } }).reply(200, mockFilter)
      .onGet('/products').reply(200, mock);

    initAxios({ axios });
  });

  it('should fetch products list without filter', async () => {
    const products = await Products.getAll();

    expect(products).toMatchObject([
      {
        id: '601a06288d3ce427a235e38c',
        name: 'Kyler OX',
        description: 'Zapatos comodos hechos desde el corazon del mundo maya.\nCon estos zapatos puedes disfrutar de lo que desees como:\n- Viajar\n- Pasear\n- Correr',
        isFeatured: false,
        featuredImage: 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1612318192/formal_shoes_8d4a69315b.png',
        category: 'Zapatos - Casuales',
        images: [],
      },
      {
        id: '601a072f39aaa829dd99de39',
        name: 'Deportiva para ejercicio',
        description: 'Camisa comoda para que pueda ser utilizada por cuaquier persona para hacer ejercicio.',
        isFeatured: false,
        featuredImage: 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1612318199/shirt_75eb3b9fc2.png',
        category: 'Ropa - Camisas',
        images: [],
      },
    ]);
  });

  it('should fetch products list with filter', async () => {
    const products = await Products.getAll({ isFeatured: true });

    expect(products).toMatchObject([
      {
        id: '601a06288d3ce427a235e38c',
        name: 'Kyler OX',
        description: 'Zapatos comodos hechos desde el corazon del mundo maya.\nCon estos zapatos puedes disfrutar de lo que desees como:\n- Viajar\n- Pasear\n- Correr',
        isFeatured: true,
        featuredImage: 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1612318192/formal_shoes_8d4a69315b.png',
        category: 'Zapatos - Casuales',
        images: [],
      },
    ]);
  });

  it.todo('Test for checking images gallery');
});
