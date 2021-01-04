import { Context } from '@nuxt/types';

import { initAxios } from '@/api';

export default ({ $axios }: Context) => {
  initAxios({ axios: $axios });
};
