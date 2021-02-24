<template>
  <div class="my-4 flex items-center">
    <span class="mr-4">Colores</span>
    <div
      v-for="({ color, name }, index) in colors"
      :key="index"
      class="rounded-full h-6 w-6"
      :style="{ backgroundColor: color }"
      :title="name"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { Color } from '@/api/types';

export default Vue.extend({
  name: 'ProductColors',
  props: {
    colors: {
      type: Array as PropType<Array<Color>>,
      default: () => [],
    },
  },
});
</script>
