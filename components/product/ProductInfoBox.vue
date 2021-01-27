<template>
  <div class="text-dark-gray-600 flex items-center">
    <ProductSelect class="mr-8" />
    <div>
      <h2 class="text-2xl lg:text-4xl font-bold">
        {{ type }}
      </h2>
      <h3 class="text-xl lg:text-3xl font-bold text-primary-500">
        {{ code }}
      </h3>
      <!-- TODO: Move it to component -->
      <div v-if="canDisplayColors" class="color-product flex items-center">
        <span class="mr-4">Colores</span>
        <div
          v-for="(color, index) in colors"
          :key="index"
          class="inline-block"
        >
          <div
            class="h-8 w-8 rounded-full mr-4"
            :style="{ backgroundColor: color.color }"
            :title="color.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import ProductSelect from '@/components/product/ProductSelect.vue';

import { Color } from '@/api/types';

export default Vue.extend({
  name: 'ProductInfoBox',
  components: {
    ProductSelect,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    colors: {
      type: Array as PropType<Array<Color>>,
      default: () => ([]),
    },
  },
  computed: {
    canDisplayColors (): boolean {
      return this.colors.length > 0;
    },
  },
});
</script>
