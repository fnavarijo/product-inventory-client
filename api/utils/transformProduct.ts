import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import pick from 'lodash/fp/pick';
import flow from 'lodash/fp/flow';

import { resetPropsWith } from '@/api/utils';

import { Dictionary } from '@/@types/global';
import { Product } from '@/api/types';

export function transformProduct (productObject: Dictionary<any>): Product {
  const resetStringProps = resetPropsWith('');

  const pickProperties = pick(['id', 'name', 'price', 'description', 'shortDescription', 'images']);
  const resetProps = resetStringProps(['description', 'shortDescription']);
  const getImagesUrls = map(get('url'));

  const transformImagesProperty = ({ images, ...rest }: { images: Array<Dictionary<any>> }) => ({ ...rest, images: getImagesUrls(images) });

  const transformObjectToProduct = flow([
    pickProperties,
    resetProps,
    transformImagesProperty,
  ]);

  return transformObjectToProduct(productObject);
}
