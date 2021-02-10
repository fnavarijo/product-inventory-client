<template>
  <div>
    <!-- TODO: Add animation on appearing text -->
    <section
      :style="bannerBackground"
      class="h-screen-4/5 px-4 bg-right-top md:bg-left-top bg-cover bg-no-repeat"
    />
    <HomeSection :products="featuredProducts.slice(0, 4)">
      <template #title>
        <strong>Productos</strong> Destacados
      </template>
      <template #subtitle>
        Los productos que más le gustan a todos.
      </template>
    </HomeSection>
    <hr class="border-light-gray-400 w-5/6 mx-auto">
    <!-- TODO: Slice is just a temporary solution to the 4 products on index -->
    <HomeSection :products="recentProducts.slice(0, 4)">
      <template #title>
        <strong>Productos</strong> Nuevos
      </template>
      <template #subtitle>
        Los nuevos productos
      </template>
    </HomeSection>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import HomeSection from '@/components/home/HomeSection.vue';

import { Dictionary } from '@/@types/global';

export default Vue.extend({
  components: {
    HomeSection,
  },
  async fetch (): Promise<void> {
    await this.$store.dispatch('home/getHomePage');
    await this.$store.dispatch('products/getHomePageProducts');
  },
  computed: {
    bannerBackground (): Dictionary<String> {
      const { banner } = this.$store.state.home;
      return banner
        ? { backgroundImage: `url(${banner})` }
        : { backgroundColor: this.$twConfig().theme.colors['light-gray']['500'] };
    },
    ...mapGetters('products', ['featuredProducts', 'recentProducts']),
  },
});
</script>
