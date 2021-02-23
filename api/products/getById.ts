import { getClient } from '@/api/client';
import { transformProduct } from '@/api/utils';

import { Product } from '@/api/types';

export async function getById (productId: string): Promise<Product> {
  const { data } = await getClient()
    .axios
    .get(`/products/${productId}`);

  return transformProduct(data);
}
