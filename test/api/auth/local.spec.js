import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { Auth, initAxios } from '@/api';

describe('Local Auth method', () => {
  beforeAll(() => {
    const axiosInstance = new MockAdapter(axios);

    axiosInstance.onPost('/auth/local').reply(200, {
      jwt: '1234mockvalue1234',
      user: {
        id: 1,
        username: 'author',
        email: 'author@mail.com',
        provider: 'local',
        confirmed: true,
        blocked: false,
        role: {
          id: 3,
          name: 'Author',
          description: 'This user will be in charge of adding new content',
          type: 'author',
        },
        created_at: '2020-11-09T01:27:02.942Z',
        updated_at: '2021-01-03T20:34:35.393Z',
        name: 'Matt',
        lastname: 'Murdock',
      },
    });

    initAxios({ axios });
  });

  it('should authenticate to backend and get relevant information', async () => {
    const response = await Auth.local({ identifier: 'author', password: 'strapi' });

    expect(response).toMatchObject({
      jwt: '1234mockvalue1234',
      username: 'author',
      name: 'Matt',
      lastname: 'Murdock',
    });
  });
});
