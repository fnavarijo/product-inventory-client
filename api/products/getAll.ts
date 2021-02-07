import map from 'lodash/fp/map';

import { getClient } from '@/api/client';
import { transformProduct } from '@/api/utils';

import { Product } from '@/api/types';
import { Dictionary } from '@/@types/global';

export async function getAll (params?: Dictionary<any>): Promise<Array<Product>> {
  const { data } = await getClient()
    .axios
    .get('/products', { params });

  return map(transformProduct)(data);
};
