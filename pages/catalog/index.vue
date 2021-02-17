<template>
  <div>
    <SectionLocation path="home > catalog" />
    <PromotionBanner :images="['https://portotheme.com/html/porto_ecommerce/demo_23/assets/images/banners/category_banner.jpg', 'https://portotheme.com/html/porto_ecommerce/demo_23/assets/images/banners/category_banner.jpg']" />
    <section class="mt-10">
      <div class="flex justify-between mb-8">
        <FlowSelect>
          <option value="desc">Descendente</option>
          <option value="asc">Ascendiente</option>
        </FlowSelect>
        <div class="flex my-5">
          <span class="text-sm">Mostrando 8 resultados de 60</span>
        </div>
      </div>
      <AppMessage v-if="productCards.length === 0">
        Por el momento no hay nada que mostrar
      </AppMessage>
      <div v-else class="px-0 md:px-0 lg:px-4 xl:px-12 2xl:px-32">
        <div class="m-auto grid gap-6 grid-cols-1 md:grid-cols-4">
          <ProductCard
            v-for="(product, index) in productCards"
            :key="index"
            v-bind="product"
          />
        </div>
        <AppButton
          class="my-5 mx-auto block"
          color="secondary"
          @click="loadMoreProducts"
        >
          Cargar más
        </AppButton>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapState } from 'vuex';

import PromotionBanner from '@/components/banner/PromotionBanner.vue';
import ProductCard from '@/components/product/ProductCard.vue';
import SectionLocation from '@/components/presentational/SectionLocation.vue';
import AppButton from '@/components/button/AppButton.vue';
import FlowSelect from '@/components/flowContent/FlowSelect.vue';
import AppMessage from '@/components/structural/AppMessage.vue';

export default Vue.extend({
  components: {
    ProductCard,
    SectionLocation,
    AppButton,
    PromotionBanner,
    FlowSelect,
    AppMessage,
  },
  layout: 'portfolio',
  async fetch () {
    await this.$store.dispatch('products/getPaginatedProducts', { start: 0 });
  },
  computed: {
    ...mapState('products', ['pagination']),
    ...mapGetters('products', ['productCards']),
  },
  methods: {
    async loadMoreProducts (): Promise<void> {
      await this.$store.dispatch('products/getPaginatedProducts', { start: this.pagination.start });
    },
  },
});
</script>
