import { transformProduct } from '@/api/utils';

describe('transformProduct object utils', () => {
  it('should transform product response object to match Product interface', () => {
    const responseProductObject = {
      id: 2,
      name: 'Colombian jeans',
      price: 150.35,
      published_at: '2020-11-29T23:44:28.242Z',
      created_at: '2020-11-29T23:44:17.898Z',
      updated_at: '2021-01-17T02:10:50.890Z',
      category: {
        id: 4,
        name: 'Pantalones',
        published_at: '2020-11-29T23:38:11.751Z',
        created_at: '2020-11-29T23:38:08.539Z',
        updated_at: '2020-11-29T23:38:11.776Z',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dictum odio. Duis accumsan justo at purus sagittis, fermentum laoreet urna tincidunt. Donec fringilla dui eu diam sollicitudin vehicula eget a magna.',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dictum odio.',
      images: [
        {
          id: 1,
          name: 'product.jpg',
          alternativeText: '',
          caption: '',
          width: 360,
          height: 360,
          formats: {
            thumbnail: {
              name: 'thumbnail_product.jpg',
              hash: 'thumbnail_product_c02b1dc005',
              ext: '.jpg',
              mime: 'image/jpeg',
              width: 156,
              height: 156,
              size: 2.76,
              path: null,
              url: '/uploads/thumbnail_product_c02b1dc005.jpg',
            },
          },
          hash: 'product_c02b1dc005',
          ext: '.jpg',
          mime: 'image/jpeg',
          size: 9.84,
          url: '/uploads/product_c02b1dc005.jpg',
          previewUrl: null,
          provider: 'local',
          provider_metadata: null,
          created_at: '2021-01-17T02:10:37.300Z',
          updated_at: '2021-01-17T02:10:37.316Z',
        },
      ],
    };

    const transformedObject = transformProduct(responseProductObject);

    expect(transformedObject).toMatchObject({
      id: 2,
      name: 'Colombian jeans',
      price: 150.35,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dictum odio. Duis accumsan justo at purus sagittis, fermentum laoreet urna tincidunt. Donec fringilla dui eu diam sollicitudin vehicula eget a magna.',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dictum odio.',
      images: ['/uploads/product_c02b1dc005.jpg'],
    });
  });
});