<template>
  <NuxtLink :to="`/catalog/${id}`" class="flex">
    <img class="square-256" src="~/assets/img/product.jpg" alt="">
    <div class="flex flex-col ml-5 justify-center">
      <span class="uppercase font-light">{{ category }}</span>
      <span class="text-lg text-dark-gray-600 hover:text-primary-600 transition ease-in duration-100">{{ name }}</span>
      <p class="text-sm">{{ description }}</p>
      <span class="font-bold text-xl text-dark-gray-500">Q {{ price | currency }}</span>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue';

import { ProductContainerBase } from '@/components/product/ProductContainerBase';

export default Vue.extend({
  mixins: [ProductContainerBase],
  props: {
    description: {
      type: String,
      required: true,
    },
  },
});
</script>
