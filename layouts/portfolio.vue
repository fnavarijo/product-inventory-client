<template>
  <div class="font-body text-base grid grid-rows-content">
    <header class="flex items-center justify-between px-10 py-3">
      <img class="h-20 w-20" src="~/assets/img/shirt.svg" alt="">
      <span class="flex">
        <!-- TODO: abstract animation to class -->
        <AppSalute v-if="isUserLoggedIn" />
        <UserIcon class="w-10 h-10 cursor-pointer hover:stroke-primary transition ease-linear duration-100" />
        <ShoppingCartIcon class="w-10 h-10 ml-4 cursor-pointer transition duration-100 ease-linear hover:stroke-primary" />
      </span>
    </header>
    <div class="grid grid-cols-1 lg:grid-cols-nav">
      <!-- TODO: hide on mobile -->
      <!-- TODO: Finish behavior of this elements -->
      <aside class="pl-10 hidden lg:block">
        <AppCategoryMenu
          :categories="productMenu"
          class="my-5"
          @select="filterProducts"
        />
        <AppPortfolioFilter />
      </aside>
      <main class="px-10 py-3">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import AppSalute from '@/components/structural/AppSalute.vue';
import FlowCheckbox from '@/components/flowContent/FlowCheckbox.vue';
import AppCategoryMenu from '@/components/structural/AppCategoryMenu.vue';
import AppPortfolioFilter from '@/components/structural/AppPortfolioFilter.vue';

import UserIcon from '@/assets/img/user.svg?inline';
import ShoppingCartIcon from '@/assets/img/shopping.svg?inline';

import { ProductCategories } from '@/api/types';

export default Vue.extend({
  name: 'Portfolio',
  components: {
    AppSalute,
    FlowCheckbox,
    AppCategoryMenu,
    AppPortfolioFilter,
    UserIcon,
    ShoppingCartIcon,
  },
  data () {
    return {
      smallCheckbox: '',
    };
  },
  computed: {
    ...mapGetters('user', {
      isUserLoggedIn: 'isUserLoggedIn',
    }),
    productMenu (): ProductCategories {
      return {
        ropa: [
          'blusas',
          'pantalones',
        ],
        accesorios: [
          'Bean bags',
        ],
        zapatos: [],
      };
    },
  },
  methods: {
    filterProducts (category: string): void {
      console.log(`Category: ${category}`);
    },
  },
});
</script>
