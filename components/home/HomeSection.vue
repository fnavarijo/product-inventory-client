<template>
  <section class="my-16 px-10 lg:px-24 xl:px-32 2xl:px-56">
    <header class="text-center mb-16">
      <h2 class="section-name text-3xl text-gray-900 relative">
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

<style scoped>
.section-name::before,
.section-name::after {
  content: '';
  height: 1px;

  @apply absolute bg-primary-500 w-1/4 top-1/2 transform -translate-y-1/2;
}

.section-name::before {
  @apply left-0;
}

.section-name::after {
  @apply right-0;
}
</style>
