<template>
  <div class="w-full block text-dark-gray-700">
    <SectionLocation :path="product.category" />
    <div class="flex flex-col mb-8 items-center lg:flex-row">
      <div class="relative w-64 mb-8 lg:mb-0 lg:mr-8">
        <img :src="product.featuredImage" alt="" class="w-full" />
      </div>
      <div>
        <h1 class="mb-4 text-2xl lg:text-4xl font-bold">
          {{ product.name }}
        </h1>
        <ProductColors
          v-if="product.colors.length > 0"
          :colors="product.colors"
        />
        <ProductSizes
          v-if="product.availableSizes.length > 0"
          :sizes="product.availableSizes"
        />
        <AppButton class="uppercase"> Agregar a carrito </AppButton>
      </div>
    </div>
    <div>
      <h2
        class="text-xl font-bold border-b-2 border-light-gray-400 relative mb-4 text-dark-gray-600"
      >
        <span class="border-primary-500 border-b-4">Descripción</span>
      </h2>
      <p class="text-base">
        {{ product.description }}
      </p>
    </div>
  </div>
  <!-- TODO: If productCombination is empty, we should handle errors -->
  <!-- TODO: Add not found page -->
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import AppButton from '@/components/button/AppButton.vue';
import SectionLocation from '@/components/presentational/SectionLocation.vue';
import ProductColors from '@/components/product/ProductColors.vue';
import ProductSizes from '@/components/product/ProductSizes.vue';

export default Vue.extend({
  name: 'CatalogId',
  components: {
    SectionLocation,
    AppButton,
    ProductColors,
    ProductSizes,
  },
  layout: 'portfolio',
  async fetch() {
    const { id: productId } = this.$route.params;
    await this.$store.dispatch('products/getProductById', productId);
  },
  computed: {
    ...mapState('products', ['product']),
  },
});
</script>
