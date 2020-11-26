<template>
  <div>
    <section class="h-screen bg-gray-400">
      Hi
    </section>
    <section class="mt-10 px-24">
      <h2 class="text-3xl text-center">Productos <strong>Destacados</strong></h2>
      <div>
        <ProductCard />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ProductCard from '@/components/product/ProductCard.vue';

export default Vue.extend({
  layout: 'home',
  components: {
    ProductCard,
  },
})
</script>

