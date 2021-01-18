import map from 'lodash/fp/map';

import { getClient } from '@/api/client';
import { transformProduct } from '@/api/utils';

import { Product } from '@/api/types';

export async function getAll (): Promise<Array<Product>> {
  const { data } = await getClient()
    .axios
    .get('/products');

  return map(transformProduct)(data);
};
