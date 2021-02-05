<template>
  <div>
    <section
      :style="bannerBackground"
      class="h-screen-4/5 px-4 bg-left-top bg-cover bg-no-repeat"
    />
    <section class="my-10 px-10 lg:px-24">
      <header class="text-center mb-8">
        <h2 class="text-3xl text-gray-900">
          Productos <strong>Destacados</strong>
        </h2>
        <span>Los productos que más le gustan a todos.</span>
      </header>
      <div class="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <ProductCard :id="1" category="Zapatos" name="Nike shoes" :price="25.50" />
        <ProductCard :id="1" category="Zapatos" name="Nike shoes" :price="25.50" />
        <ProductCard :id="1" category="Zapatos" name="Nike shoes" :price="25.50" />
        <ProductCard :id="1" category="Zapatos" name="Nike shoes" :price="25.50" />
      </div>
      <AppButton
        as="nuxt-link"
        to="/catalog"
        class="my-10 mx-auto block"
        color="secondary"
      >
        Ver más
      </AppButton>
    </section>
    <hr class="border-light-gray-400 w-5/6 mx-auto">
    <section class="my-10 px-10 lg:px-24">
      <header class="text-center mb-8">
        <h2 class="text-3xl text-gray-900">Productos <strong>Nuevos</strong></h2>
        <span>Los nuevos productos</span>
      </header>
      <div class="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <ProductCard :id="1" category="Zapatos" name="Nike shoes" :price="25.50" />
        <ProductCard :id="1" category="Zapatos" name="Nike shoes" :price="25.50" />
        <ProductCard :id="1" category="Zapatos" name="Nike shoes" :price="25.50" />
        <ProductCard :id="1" category="Zapatos" name="Nike shoes" :price="25.50" />
      </div>
      <AppButton
        as="nuxt-link"
        to="/catalog"
        class="my-10 mx-auto block"
        color="secondary"
      >
        Ver más
      </AppButton>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ProductCard from '@/components/product/ProductCard.vue';
import AppButton from '@/components/button/AppButton.vue';

import { Dictionary } from '@/@types/global';

export default Vue.extend({
  components: {
    AppButton,
    ProductCard,
  },
  async fetch (): Promise<void> {
    await this.$store.dispatch('home/getHomePage');
  },
  computed: {
    bannerBackground (): Dictionary<String> {
      const { banner } = this.$store.state.home;
      return banner
        ? { backgroundImage: `url(${banner})` }
        : { backgroundColor: this.$twConfig().theme.colors['light-gray']['500'] };
    },
  },
});
</script>
