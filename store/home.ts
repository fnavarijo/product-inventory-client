import { MutationTree, ActionTree } from 'vuex';

import { RootState } from '@/store';
import { Home } from '@/api';

import { HomePage } from '@/api/types';

export const state = () => ({
  banner: '',
});

export type HomeModuleState = ReturnType<typeof state>;

export const mutations: MutationTree<HomeModuleState> = {
  setHomePage (state, homePage: HomePage) {
    state.banner = homePage.banner;
  },
};

export const actions: ActionTree<HomeModuleState, RootState> = {
  async getHomePage ({ commit }): Promise<void> {
    const homePage = await Home.get();
    commit('setHomePage', homePage);
  },
};
