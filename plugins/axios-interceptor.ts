import { Context } from '@nuxt/types';

export default function ({ $axios, store }: Context): void {
  $axios.onError((error) => {
    if (error.response) {
      console.error('Response error:', error.response);
    } else if (error.request) {
      console.error('Request error:', error.request);
      store.commit('notification/setMessage', 'Algo ocurrio mientras se hacia la peticion.');
    } else {
      console.error('Something dark happened');
    }
  });
}
