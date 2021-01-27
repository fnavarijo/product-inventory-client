import get from 'lodash/fp/get';
import { transformBy } from '@/api/utils';

describe('TransformBy function', () => {
  it('should apply function to property and return a new object', () => {
    const productResponse = {
      id: '12345',
      color: 'blue',
      image: {
        url: 'http://image.com',
        server: 'localhost.com',
      },
    };

    const pickPropFromProperty = transformBy(get(['url']))('image');
    const product = pickPropFromProperty(productResponse);

    expect(productResponse === product).toBeFalsy();
    expect(product).toMatchObject({
      id: '12345',
      color: 'blue',
      image: 'http://image.com',
    });
  });
});
