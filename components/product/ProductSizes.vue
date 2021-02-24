<template>
  <div class="my-4 flex">
    <span class="mr-4">Tallas</span>
    <span v-for="(size, index) in sizes" :key="index" class="mx-1 font-bold">{{
      size
    }}</span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'ProductSizes',
  props: {
    sizes: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
  },
});
</script>
