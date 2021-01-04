import pick from 'lodash/pick';

import { getClient } from '@/api/client';

import { AuthLocalParams } from '@/api/types';

// TODO: validating return types
export const local = async (params: AuthLocalParams) => {
  const { data: { jwt, user } } = await getClient()
    .axios
    .post('/auth/local', params);

  const userInfo = pick(user, ['name', 'lastname', 'username']);

  return {
    jwt,
    ...userInfo,
  };
};
