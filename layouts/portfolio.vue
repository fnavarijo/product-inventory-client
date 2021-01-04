<template>
  <div class="font-body text-base grid grid-rows-content">
    <header class="flex items-center justify-between px-10 py-3">
      <img class="h-20 w-20" src="~/assets/img/shirt.svg" alt="">
      <span class="flex">
        <!-- TODO: abstract animation to class -->
        <UserIcon class="w-10 h-10 cursor-pointer hover:stroke-primary transition ease-linear duration-100" />
        <ShoppingCartIcon class="w-10 h-10 ml-4 cursor-pointer transition duration-100 ease-linear hover:stroke-primary" />
      </span>
    </header>
    <div class="grid grid-cols-1 lg:grid-cols-nav">
      <!-- TODO: hide on mobile -->
      <aside class="pl-10 hidden lg:block">
        <ProductCategoryMenu
          :categories="['Accesorios', 'Ropa', 'Zapatos']"
          class="my-5"
          @select="filterProducts"
        />
        <!-- TODO: Move to own component to filter -->
        <div class="bg-primary-200 text-gray-900 py-3 px-2">
          <div class="font-bold border-b border-light-gray-600">
            Talla
          </div>
          <FlowCheckbox id="small" name="small">
            Pequeño
          </FlowCheckbox>
          <FlowCheckbox id="medium" name="medium">
            Mediano
          </FlowCheckbox>
          <FlowCheckbox id="big" name="big">
            Grande
          </FlowCheckbox>

          <div class="font-bold border-b border-light-gray-600">
            Precio
          </div>
        </div>
      </aside>
      <main class="px-10 py-3">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ProductCategoryMenu from '@/components/product/ProductCategoryMenu.vue';
import FlowCheckbox from '@/components/flowContent/FlowCheckbox.vue';

import UserIcon from '@/assets/img/user.svg?inline';
import ShoppingCartIcon from '@/assets/img/shopping.svg?inline';

export default Vue.extend({
  name: 'Portfolio',
  components: {
    ProductCategoryMenu,
    FlowCheckbox,
    UserIcon,
    ShoppingCartIcon,
  },
  data () {
    return {
      smallCheckbox: '',
    };
  },
  methods: {
    filterProducts (category: string): void {
      console.log(`Category: ${category}`);
    },
  },
});
</script>
