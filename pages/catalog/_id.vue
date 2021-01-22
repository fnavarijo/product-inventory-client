<template>
  <div>
    <SectionLocation path="Product" />
    <div class="flex flex-col lg:flex-row mb-8">
      <div class="h-256 w-256 mr-4">
        <img src="https://portotheme.com/html/porto_ecommerce/demo_23/assets/images/products/product-1.jpg" alt="">
      </div>
      <div>
        <h1 class="text-4xl font-bold text-dark-gray-600">
          {{ product.name }}
        </h1>
        <span class="font-bold text-primary-500 text-2xl">
          Q. {{ product.price }}
        </span>
        <p class="leading-7 max-w-xl mb-4">
          {{ product.shortDescription }}
        </p>
        <AppButton>
          Agregar a carrito
        </AppButton>
      </div>
    </div>
    <div>
      <h2 class="text-xl font-bold border-b-2 border-light-gray-400 relative mb-4 text-dark-gray-600">
        <span class="border-primary-500 border-b-4">Descripción</span>
      </h2>
      <p>
        {{ product.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import AppButton from '@/components/button/AppButton.vue';
import SectionLocation from '@/components/presentational/SectionLocation.vue';

export default Vue.extend({
  name: 'CatalogId',
  components: {
    SectionLocation,
    AppButton,
  },
  layout: 'portfolio',
  async fetch () {
    const { id: productId } = this.$route.params;
    await this.$store.dispatch('products/getProductById', productId);
  },
  computed: {
    ...mapState('products', ['product']),
  },
});
</script>
