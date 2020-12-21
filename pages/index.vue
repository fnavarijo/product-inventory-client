<template>
  <div>
    <section class="h-screen bg-gray-400">
      Hi
    </section>
    <section class="my-10 px-24">
      <h2 class="text-3xl text-center mb-5">
        Productos <strong>Destacados</strong>
      </h2>
      <div class="grid grid-cols-3">
        <ProductCard id="1" category="Zapatos" name="Nike shoes" :price="25.50" />
        <ProductCard id="1" category="Zapatos" name="Nike shoes" :price="25.50" />
        <ProductCard id="1" category="Zapatos" name="Nike shoes" :price="25.50" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ProductCard from '@/components/product/ProductCard.vue';

export default Vue.extend({
  components: {
    ProductCard,
  },
});
</script>
