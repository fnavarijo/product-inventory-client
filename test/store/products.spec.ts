import { createLocalVue } from '@vue/test-utils';
// import { cloneDeep } from 'lodash';
import Vuex from 'vuex';

import { state, getters, mutations, actions } from '@/store/products';

jest.mock('@/api');

describe('Products store', () => {
  it('should keep track of paginated products', async () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    // TODO: check if we can type it
    const store = new Vuex.Store<any>({
      modules: {
        products: Object.assign({}, { state, getters, mutations, actions, namespaced: true }),
      },
    });

    expect(store.state.products.pagination.start).toBe(0);
    await store.dispatch('products/getPaginatedProducts', { start: 0 });

    expect(store.state.products.pagination.start).toBe(8);
  });
});
