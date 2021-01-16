import { ActionTree, MutationTree, GetterTree } from 'vuex';

import { Auth } from '@/api';
import { RootState } from '@/store';

import { UserInfo, AuthLocalParams } from '@/api/types';

export const state = () => ({
  username: '',
  name: '',
  lastname: '',
  jwt: '',
});

export type UserModuleState = ReturnType<typeof state>;

export const getters: GetterTree<UserModuleState, RootState> = {
  isUserLoggedIn: state => !!state.jwt,
};

export const mutations: MutationTree<UserModuleState> = {
  setUserInformation (
    state,
    { username, name, lastname, jwt }: UserInfo
  ): void {
    state.username = username;
    state.name = name;
    state.lastname = lastname;
    state.jwt = jwt;
  },
};

export const actions: ActionTree<UserModuleState, RootState> = {
  async doLogin (
    { commit },
    params: AuthLocalParams
  ): Promise<void> {
    const response = await Auth.local(params);
    commit('setUserInformation', response);
  },
};
