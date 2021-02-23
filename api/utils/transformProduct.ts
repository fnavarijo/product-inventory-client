import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import pick from 'lodash/fp/pick';
import flow from 'lodash/fp/flow';

import { resetPropsWith, transformBy, renamePropTo } from '@/api/utils';

import { Dictionary } from '@/@types/global';
import { Product, SingleProduct } from '@/api/types';

const productBasePropsTransformations = (): Array<any> => {
  const renameSubcategoryToCategory = renamePropTo('category')('subCategory');
  const transformCategoryProp = transformBy(get('slug'))('category');

  const transformFeaturedImageProp = transformBy(get('url'))('featuredImage');

  return [
    renameSubcategoryToCategory,
    transformCategoryProp,
    transformFeaturedImageProp,
  ];
};

export function transformProduct (productObject: Dictionary<any>): SingleProduct {
  const resetStringProps = resetPropsWith('');
  const resetProps = resetStringProps(['description']);

  const pickProductProps = pick(['id', 'name', 'isFeatured', 'featuredImage', 'category', 'description', 'images', 'colors', 'availableSizes']);

  const getImageUrl = map(get('url'));
  const transformImagesProp = transformBy(getImageUrl)('images');

  const getSize = map(get('size'));
  const transformSizesProp = transformBy(getSize)('availableSizes');

  const getColor = map(pick(['name', 'color']));
  const transformColorsProp = transformBy(getColor)('colors');

  return flow([
    ...productBasePropsTransformations(),
    resetProps,
    transformImagesProp,
    transformSizesProp,
    transformColorsProp,
    pickProductProps,
  ])(productObject);
};

export function transformBaseProduct (productObject: Dictionary<any>): Product {
  const pickBaseProductProps = pick(['id', 'name', 'isFeatured', 'featuredImage', 'category']);

  return flow([
    ...productBasePropsTransformations(),
    pickBaseProductProps,
  ])(productObject);
}
