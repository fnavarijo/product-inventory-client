import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import pick from 'lodash/fp/pick';
import flow from 'lodash/fp/flow';

import { resetPropsWith, transformBy, renamePropWith } from '@/api/utils';

import { Dictionary } from '@/@types/global';
import { Product } from '@/api/types';

export function transformProduct (productObject: Dictionary<any>): Product {
  const resetStringProps = resetPropsWith('');

  const pickProperties = pick(['id', 'name', 'description', 'isFeatured', 'featuredImage', 'images', 'subCategory']);
  const resetProps = resetStringProps(['description']);
  const getImagesUrls = map(get('url'));
  const renameToCategory = renamePropWith('category')('subCategory');

  const transformCategoryProp = transformBy(get('slug'))('category');
  const transformFeaturedImagesProp = transformBy(get('url'))('featuredImage');
  const transformImagesProp = transformBy(getImagesUrls)('images');

  const transformObjectToProduct = flow([
    pickProperties,
    resetProps,
    renameToCategory,
    transformCategoryProp,
    transformFeaturedImagesProp,
    transformImagesProp,
  ]);

  return transformObjectToProduct(productObject);
}
