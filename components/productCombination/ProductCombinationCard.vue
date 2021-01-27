<template>
  <NuxtLink :to="`/catalog/${id}`" class="group">
    <div
      class="w-full pt-cardRatio relative rounded-md bg-cover"
      :style="{ backgroundImage: `url(${image})` }"
    >
      <div
        class="absolute top-0 bottom-0 left-0 right-0 bg-dark-gray-700 rounded-md opacity-0 transition ease-linear duration-100 group-hover:opacity-25"
      />
      <div
        class="absolute -bottom-16 bg-primary-600 text-white w-full font-bold transition-bottom ease-in-expo duration-500 text-center p-5 opacity-0 invisible rounded-b-md uppercase group-hover:bottom-0 group-hover:opacity-100 group-hover:visible"
      >
        Ver
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProductCombinationCard',
  props: {
    id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
});
</script>
