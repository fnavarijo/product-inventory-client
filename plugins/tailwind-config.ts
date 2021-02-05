import Vue from 'vue';
// @ts-ignore
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '@/tailwind.config';

declare module 'vue/types/vue' {
  interface Vue {
    $twConfig(): any
  }
}

Vue.prototype.$twConfig = () => resolveConfig(tailwindConfig);
