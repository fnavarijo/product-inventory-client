import { MutationTree, ActionTree, GetterTree } from 'vuex';
import filter from 'lodash/fp/filter';
import map from 'lodash/fp/map';

import { RootState } from '@/store';
import { ProductCombinations, Products } from '@/api';
import { renamePropWith } from '@/api/utils';

import { Product, ProductCombination } from '@/api/types';

export const state = () => ({
  // TODO: Evaluate if products can be removed
  products: [] as Array<Product>,
  productCombinations: [] as Array<ProductCombination>,
  product: null as Product | null,
  productCombination: null as ProductCombination | null,
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
  setAllProductCombinations (state, productCombinations: Array<ProductCombination>) {
    state.productCombinations = productCombinations;
  },
  setProduct (state, product: Product) {
    state.product = product;
  },
  setProductCombination (state, product: ProductCombination) {
    state.productCombination = product;
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
  async getAllProductCombinations ({ commit }): Promise<void> {
    const productCombinations = await ProductCombinations.getAll();
    commit('setAllProductCombinations', productCombinations);
  },
  async getProductById ({ commit }, productId: number): Promise<void> {
    const product = await Products.getById(productId);
    commit('setProduct', product);
  },
  async getProductCombinationById ({ commit }, productId: string): Promise<void> {
    const product = await ProductCombinations.getById(productId);
    commit('setProductCombination', product);
  },
};
