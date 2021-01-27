import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import flow from 'lodash/fp/flow';
import pick from 'lodash/fp/pick';

import { getClient } from '@/api/client';
import { transformBy } from '@/api/utils';

import { SingleProductCombination } from '@/api/types';

export async function getById (id: string): Promise<SingleProductCombination> {
  const { data } = await getClient()
    .axios
    .get(`/product-combinations/${id}`);

  // TODO: I'd like to improve naming
  const pickProductBase = pick(['products', 'image']);
  const pickProduct = pick(['code', 'description', 'colors']);
  const pickColor = pick(['name', 'color']);
  const getImageUrl = get('url');

  const pickAllColors = map(pickColor);
  const filterColors = transformBy(pickAllColors)('colors');

  const pickAllProduct = map(flow([pickProduct, filterColors]));

  const filterProducts = transformBy(pickAllProduct)('products');
  const filterImage = transformBy(getImageUrl)('image');

  return flow([
    pickProductBase,
    filterProducts,
    filterImage,
  ])(data);
}
