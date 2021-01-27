import { MutationTree, ActionTree } from 'vuex';

import { RootState } from '@/store';
import { ProductCombinations, Products } from '@/api';

import { Product, ProductCombination } from '@/api/types';

export const state = () => ({
  // TODO: Evaluate if products can be removed
  products: [] as Array<Product>,
  productCombinations: [] as Array<ProductCombination>,
  product: null as Product | null,
  productCombination: null as ProductCombination | null,
});

export type ProductsModuleState = ReturnType<typeof state>;

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
