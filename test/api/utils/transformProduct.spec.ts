import { transformProduct } from '@/api/utils';

import { mock as responseProductObject } from './transformProduct.mock';

describe('transformProduct object utils', () => {
  it('should transform product response object to match Product interface', () => {
    const transformedObject = transformProduct(responseProductObject);

    expect(transformedObject).toMatchObject({
      id: '601a06288d3ce427a235e38c',
      name: 'Kyler OX',
      description: 'Zapatos comodos hechos desde el corazon del mundo maya.\nCon estos zapatos puedes disfrutar de lo que desees como:\n- Viajar\n- Pasear\n- Correr',
      isFeatured: false,
      category: 'Zapatos - Casuales',
      featuredImage: 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1612318192/formal_shoes_8d4a69315b.png',
      images: [],
    });
  });
});
