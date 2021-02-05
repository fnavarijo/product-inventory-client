import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { Home } from '@/api';
import { initAxios } from '@/api/client';
import { mock } from '@/test/api/home/get.mock';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

describe('Home.get function', () => {
  beforeAll(() => {
    const adapter = new MockAdapter(axios);

    adapter.onGet('/home').reply(200, mock);

    initAxios({ axios: axios as NuxtAxiosInstance });
  });

  it('should fetch home and return object structure', async () => {
    const homeInstance = await Home.get();

    expect(homeInstance).toMatchObject({
      banner: 'https://res.cloudinary.com/dkvtpo8w1/image/upload/v1612416919/photo_1525171254930_643fc658b64e_dd25c511ae.jpg',
    });
  });
});
