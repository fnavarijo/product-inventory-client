import { MutationTree, GetterTree } from 'vuex';

import { RootState } from '@/store';

export const state = () => ({
  message: '',
});

export type NotificationState = ReturnType<typeof state>;

export const getters: GetterTree<NotificationState, RootState> = {
  shouldDisplayNotification: state => !!state.message,
};

export const mutations: MutationTree<NotificationState> = {
  setMessage: (state, message: string) => (state.message = message),
};
