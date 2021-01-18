import { MutationTree, ActionTree } from 'vuex';

import { RootState } from '@/store';
import { Products } from '@/api';

import { Product } from '@/api/types';

export const state = () => ({
  products: [] as Array<Product>,
  product: null as Product | null,
});

export type ProductsModuleState = ReturnType<typeof state>;

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
  async getProductById ({ commit }, productId: number): Promise<void> {
    const product = await Products.getById(productId);
    commit('setProduct', product);
  },
};
