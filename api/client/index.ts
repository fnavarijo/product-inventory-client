import { NuxtAxiosInstance } from '@nuxtjs/axios';

let axiosInstance: NuxtAxiosInstance;

export const initAxios = ({ axios }: { axios: NuxtAxiosInstance }) => {
  console.info('Axios instance set up');
  // @ts-ignore
  axiosInstance = axios;
};

export const getClient = () => ({
  axios: axiosInstance,
});
