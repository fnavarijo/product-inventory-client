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
      <div id="category" class="uppercase overflow-hidden">
        {{ categoryName }}
      </div>
      <!-- TODO: Not sure if the h-12 is the way to go to have default height -->
      <p class="text-lg h-12 text-dark-gray-600 font-bold line-clamped hover:text-primary-600 transition ease-in duration-100">
        {{ name }}
      </p>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue';

// TODO: remove it
// import { ProductContainerBase } from '@/components/product/ProductContainerBase';

export default Vue.extend({
  // mixins: [ProductContainerBase],
  props: {
    id: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    categoryName (): string {
      return this.category.split('-')[0].trim();
    },
  },
});
</script>

<style scoped>
.line-clamped {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
}
</style>
