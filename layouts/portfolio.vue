<template>
  <div class="font-body text-base grid grid-cols-nav">
    <aside class="h-screen float-left">
      <ProductMenu />
    </aside>
    <div class="grid grid-rows-content">
      <div class="flex items-center justify-end px-10">
        <UserIcon class="w-8 h-8 cursor-pointer transition duration-100 ease-linear hover:fill-primary" />
        <ShoppingCartIcon class="w-8 h-8 ml-4 cursor-pointer transition duration-100 ease-linear hover:fill-primary" />
      </div>
      <main class="px-10 py-5">
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
