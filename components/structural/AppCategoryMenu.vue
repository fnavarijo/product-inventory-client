<template>
  <div class="text-dark-gray-700">
    <div class="py-2 border-b border-gray-500 font-bold mb-2 text-lg">
      Productos
    </div>
    <ul>
      <li
        v-for="(category, index) in productsCategories"
        :key="index"
        class="pl-2 py-1 cursor-pointer"
        @click="select(category)"
      >
        <MenuOption
          :option="category"
          :sub-items="categories[category]"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import MenuOption from '@/components/menu/MenuOption.vue';

import { ProductCategories } from '@/api/types';

export default Vue.extend({
  name: 'AppCategoryMenu',
  components: {
    MenuOption,
  },
  props: {
    categories: {
      type: Object as PropType<ProductCategories>,
      default: () => ({}),
    },
  },
  computed: {
    productsCategories (): Array<string> {
      return Object.keys(this.categories);
    },
  },
  methods: {
    select (option: string): void {
      this.$emit('select', option);
    },
  },
});
</script>
