<template>
  <div class="font-body text-base grid grid-rows-content">
    <header class="flex items-center justify-between px-10 py-3">
      <img class="h-20 w-20" src="~/assets/img/shirt.svg" alt="">
      <span class="flex">
        <!-- TODO: abstract animation to class -->
        <UserIcon class="w-8 h-8 cursor-pointer transition duration-100 ease-linear hover:fill-primary" />
        <ShoppingCartIcon class="w-8 h-8 ml-4 cursor-pointer transition duration-100 ease-linear hover:fill-primary" />
      </span>
    </header>
    <div class="grid grid-cols-nav">
      <!-- TODO: hide on mobile -->
      <ProductMenu class="pl-10" />
      <main class="px-10 py-3">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ProductMenu from '@/components/product/ProductMenu.vue';
import UserIcon from '@/assets/img/user.svg?inline';
import ShoppingCartIcon from '@/assets/img/shopping.svg?inline';

export default Vue.extend({
  name: 'Portfolio',
  components: {
    ProductMenu,
    UserIcon,
    ShoppingCartIcon,
  },
});
</script>

<style scoped>
.icon {
  fill: aqua;
}
</style>
