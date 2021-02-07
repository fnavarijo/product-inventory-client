<template>
  <NuxtLink
    :to="`/catalog/${id}`"
    class="group m-auto cursor-pointer"
  >
    <div class="relative pt-card">
      <img
        class="object-cover absolute"
        :src="image"
        alt=""
      >
      <div class="absolute bottom-0 bg-primary-600 text-white uppercase w-full text-center p-3 opacity-0 group-hover:opacity-100 transition ease-in duration-100">
        Ver
      </div>
    </div>
    <div class="flex flex-col mt-4">
      <span class="uppercase font-light">{{ category }}</span>
      <span class="text-lg text-dark-gray-600 hover:text-primary-600 transition ease-in duration-100">{{ name }}</span>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue';

import { ProductContainerBase } from '@/components/product/ProductContainerBase';

export default Vue.extend({
  mixins: [ProductContainerBase],
});
</script>
