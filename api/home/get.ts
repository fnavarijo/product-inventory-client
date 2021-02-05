import pick from 'lodash/fp/pick';
import flow from 'lodash/fp/flow';
import getProp from 'lodash/fp/get';

import { HomePage } from '@/api/types';
import { getClient } from '@/api/client';
import { transformBy } from '@/api/utils';

export async function get (): Promise<HomePage> {
  const { data } = await getClient()
    .axios
    .get('/home');

  const pickHomeProperties = pick(['banner']);
  const transformImage = transformBy(getProp(['url']))('banner');

  const getHomePage = flow([
    pickHomeProperties,
    transformImage,
  ]);

  return getHomePage(data);
}
