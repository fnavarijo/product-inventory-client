<template>
  <section class="my-10 px-10 lg:px-24 xl:px-32 2xl:px-56">
    <header class="text-center mb-8">
      <h2 class="text-3xl text-gray-900">
        <slot name="title" />
      </h2>
      <span>
        <slot name="subtitle" />
      </span>
    </header>
    <AppMessage v-if="isProductsEmpty">
      Por el momento no hay nada que mostrar
    </AppMessage>
    <div v-else>
      <div class="grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          v-bind="product"
        />
      </div>
      <AppButton
        as="nuxt-link"
        to="/catalog"
        class="my-10 mx-auto block"
        color="secondary"
      >
        Ver más
      </AppButton>
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import AppButton from '@/components/button/AppButton.vue';
import ProductCard from '@/components/product/ProductCard.vue';

import { Product } from '@/api/types';

export default Vue.extend({
  name: 'HomeSection',
  components: {
    AppButton,
    ProductCard,
  },
  props: {
    products: {
      type: Array as PropType<Array<Product>>,
      default: () => [],
    },
  },
  computed: {
    isProductsEmpty (): boolean {
      return this.products.length === 0;
    },
  },
});
</script>
