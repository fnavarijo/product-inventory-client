<template>
  <div class="w-full block">
    <SectionLocation path="Producto" />
    <div class="flex flex-col mb-8 items-center lg:flex-row">
      <div class="relative w-64 mb-8 lg:mb-0 lg:mr-8">
        <img
          :src="productCombination.image"
          alt=""
          class="w-full"
        >
      </div>
      <div>
        <!-- TODO: If productCombination is empty, we should handle errors -->
        <!-- TODO: Add not found page -->
        <div
          v-for="(product, index) in productCombination.products"
          :key="index"
          class="mb-8"
        >
          <ProductInfoBox
            :type="product.category"
            v-bind="product"
          />
        </div>
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
        {{ productCombination.description }}
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
    await this.$store.dispatch('products/getProductCombinationById', productId);
  },
  computed: {
    ...mapState('products', ['productCombination']),
  },
});
</script>
