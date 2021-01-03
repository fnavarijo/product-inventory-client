<template>
  <div>
    <SectionLocation path="Product" />
    <div class="flex flex-col lg:flex-row mb-8">
      <div class="h-256 w-256">
        Gallery (TODO)
      </div>
      <div>
        <h1 class="text-4xl font-bold text-dark-gray-600">Product Name</h1>
        <span class="font-bold text-primary-500 text-2xl">Q. 20.00</span>
        <p class="leading-7 max-w-xl mb-4">Duis aute irure dolor in reprehenderit in volupt ate velit esse cillum dolre eu fugiat nulla pariatur excepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        <AddProductButton>
          Agregar a carrito
        </AddProductButton>
      </div>
    </div>
    <div>
      <h2 class="text-xl font-bold border-b-2 border-light-gray-400 relative mb-4 text-dark-gray-600">
        <span class="border-primary-500 border-b-4">Description</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AddProductButton from '@/components/button/AddProductButton.vue';
import SectionLocation from '@/components/presentational/SectionLocation.vue';

export default Vue.extend({
  name: 'CatalogId',
  components: {
    SectionLocation,
    AddProductButton,
  },
  layout: 'portfolio',
});
</script>
