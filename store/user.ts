import { Auth } from '@/api';

import { UserInfo, AuthLocalParams } from '@/api/types';

export const state = (): UserInfo => ({
  username: '',
  name: '',
  lastname: '',
});

export const mutations = {
  setUserInformation (state: UserInfo, { username, name, lastname }: UserInfo): void {
    state.username = username;
    state.name = name;
    state.lastname = lastname;
  },
};

export const actions = {
  async doLogin (context: any, params: AuthLocalParams): Promise<void> {
    const response = await Auth.local(params);
    context.commit('setUserInformation', response);
  },
};
