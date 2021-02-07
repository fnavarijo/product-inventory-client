<template>
  <NuxtLink
    :to="`/catalog/${id}`"
    class="group m-auto cursor-pointer w-full"
  >
    <div class="relative pt-card bg-light-gray-400 rounded-md flex justify-center">
      <img
        class="object-cover absolute w-4/5 mx-auto top-1/2 transform -translate-y-1/2 group-hover:w-4/6 transition-width ease-in duration-100"
        :src="image"
        alt=""
      >
      <div class="absolute bottom-0 bg-primary-600 text-white uppercase w-full text-center p-3 opacity-0 rounded-br-md rounded-bl-md group-hover:opacity-100 transition ease-in duration-100">
        Ver
      </div>
    </div>
    <div class="flex flex-col mt-4">
      <span class="uppercase">{{ category }}</span>
      <span class="text-lg text-dark-gray-600 font-bold hover:text-primary-600 transition ease-in duration-100">
        {{ name }}
      </span>
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
