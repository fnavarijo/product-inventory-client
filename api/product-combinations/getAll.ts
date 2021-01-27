import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import pick from 'lodash/fp/pick';
import flow from 'lodash/fp/flow';

import { getClient } from '@/api/client';

import { Dictionary } from '@/@types/global';
import { ProductCombination } from '@/api/types';

export async function getAll (): Promise<Array<ProductCombination>> {
  const { data } = await getClient()
    .axios
    .get('/product-combinations');

  const pickFields = pick(['id', 'image']);
  const getImagesUrls = get('url');

  const transformImagesProperty = ({ image, ...rest }: { image: Array<Dictionary<any>> }) => ({ ...rest, image: getImagesUrls(image) });

  const transformToProductCombination = flow([
    pickFields,
    transformImagesProperty,
  ]);
  return map(transformToProductCombination)(data);
}
