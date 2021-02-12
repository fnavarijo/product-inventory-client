import { MutationTree, ActionTree, GetterTree } from 'vuex';
import filter from 'lodash/fp/filter';
import map from 'lodash/fp/map';

import { RootState } from '@/store';
import { Products } from '@/api';
import { renamePropWith } from '@/api/utils';

import { Product } from '@/api/types';

export const state = () => ({
  // TODO: Evaluate if products can be removed
  products: [] as Array<Product>,
  product: null as Product | null,
});

export type ProductsModuleState = ReturnType<typeof state>;

export const getters: GetterTree<ProductsModuleState, RootState> = {
  productCards: ({ products }) => map(renamePropWith('image')('featuredImage'))(products),
  featuredProducts: (_, getters) => filter('isFeatured')(getters.productCards),
  recentProducts: (_, getters) => getters.productCards,
};

export const mutations: MutationTree<ProductsModuleState> = {
  setAllProducts (state, products: Array<Product>) {
    state.products = products;
  },
  setProduct (state, product: Product) {
    state.product = product;
  },
};

export const actions: ActionTree<ProductsModuleState, RootState> = {
  async getAllProducts ({ commit }): Promise<void> {
    const products = await Products.getAll();
    commit('setAllProducts', products);
  },
  async getHomePageProducts ({ commit }): Promise<void> {
    // TODO: should handle recent products, how?
    const featuredProducts = await Products.getAll({ isFeatured: true, _limit: 4 });
    const recentProducts = await Products.getAll({ _limit: 4 });
    commit('setAllProducts', featuredProducts.concat(recentProducts));
  },
  async getProductById ({ commit }, productId: number): Promise<void> {
    const product = await Products.getById(productId);
    commit('setProduct', product);
  },
};
