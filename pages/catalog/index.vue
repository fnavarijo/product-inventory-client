<template>
  <div class="w-full">
    <SectionLocation path="home > catalog" />
    <section class="w-full h-56 flex items-center justify-center bg-orange-300 mb-10">
      Banner
    </section>
    <section>
      <div class="flex justify-between mb-5">
        <div class="border border-gray-900">
          Input
        </div>
        <div class="flex my-5">
          <span class="text-sm">Mostrando 4 resultados de 60</span>
          <GridIcon
            class="ml-3 h-6 w-6 cursor-pointer transition duration-100 ease-linear hover:fill-primary"
            :class="{ 'fill-primary': isDisplayGrid }"
            @click="displayMode = 'grid'"
          />
          <ListIcon
            class="ml-3 h-6 w-6 cursor-pointer transition duration-100 ease-linear hover:fill-primary"
            :class="{ 'fill-primary': !isDisplayGrid }"
            @click="displayMode = 'list'"
          />
        </div>
      </div>
      <div class="m-auto" :class="gridDesign">
        <component
          :is="componentToRender"
          :id="1"
          category="Zapatos"
          name="Nike shoes"
          :price="25.50"
          description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante."
        />
        <component
          :is="componentToRender"
          :id="2"
          category="Zapatos"
          name="Nike shoes"
          :price="25.50"
          description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante."
        />
        <component
          :is="componentToRender"
          :id="3"
          category="Zapatos"
          name="Nike shoes"
          :price="25.50"
          description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante."
        />
        <component
          :is="componentToRender"
          :id="4"
          category="Zapatos"
          name="Nike shoes"
          :price="25.50"
          description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante."
        />
        <component
          :is="componentToRender"
          :id="5"
          category="Zapatos"
          name="Nike shoes"
          :price="25.50"
          description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante."
        />
      </div>
      <LoadMoreButton class="my-5 mx-auto block">
        Cargar más
      </LoadMoreButton>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ProductCard from '@/components/product/ProductCard.vue';
import ProductTile from '@/components/product/ProductTile.vue';
import SectionLocation from '@/components/presentational/SectionLocation.vue';
import LoadMoreButton from '@/components/button/LoadMoreButton.vue';

import GridIcon from '@/assets/img/grid.svg?inline';
import ListIcon from '@/assets/img/list.svg?inline';

export default Vue.extend({
  name: 'Products',
  components: {
    ProductCard,
    ProductTile,
    SectionLocation,
    GridIcon,
    ListIcon,
    LoadMoreButton,
  },
  layout: 'portfolio',
  data () {
    // TODO: TS validation
    return {
      displayMode: 'grid',
    };
  },
  computed: {
    isDisplayGrid () {
      return this.displayMode === 'grid';
    },
    // TODO: Rename for a better name
    gridDesign () {
      return this.isDisplayGrid
        ? 'grid grid-cols-3 xl:grid-cols-4 gap-5 lg:max-w-screen-lg xl:max-w-screen-xl'
        : 'flex flex-col space-y-6';
    },
    // TODO: improve name
    componentToRender () {
      return this.isDisplayGrid
        ? 'ProductCard'
        : 'ProductTile';
    },
  },
});
</script>
