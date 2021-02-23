import { MutationTree, ActionTree, GetterTree } from 'vuex';
import filter from 'lodash/fp/filter';
import map from 'lodash/fp/map';

import { RootState } from '@/store';
import { Products } from '@/api';
import { renamePropTo } from '@/api/utils';

import { Product, SingleProduct } from '@/api/types';

export const state = () => ({
  products: [] as Array<Product>,
  product: null as SingleProduct | null,
  pagination: {
    start: 0,
  },
});

export type ProductsModuleState = ReturnType<typeof state>;

export const getters: GetterTree<ProductsModuleState, RootState> = {
  productCards: ({ products }) => map(renamePropTo('image')('featuredImage'))(products),
  featuredProducts: (_, getters) => filter('isFeatured')(getters.productCards),
  recentProducts: (_, getters) => getters.productCards,
};

export const mutations: MutationTree<ProductsModuleState> = {
  setAllProducts (state, products: Array<Product>) {
    state.products = products;
  },
  setProduct (state, product: SingleProduct) {
    state.product = product;
  },
  setPaginatedProducts (state, { products, skipped }: { products: Array<Product>, skipped: number }) {
    state.products = state.products.concat(products);
    state.pagination.start = skipped;
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
  async getProductById ({ commit }, productId: string): Promise<void> {
    const product = await Products.getById(productId);
    commit('setProduct', product);
  },
  async getPaginatedProducts ({ commit }, { start }: { start: number }): Promise<void> {
    const products = await Products.getAll({ _start: start, _limit: 8 });
    commit('setPaginatedProducts', { products, skipped: start + 8 });
  },
};
