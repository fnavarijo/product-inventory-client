<template>
  <div>
    <div class="py-3 border-b border-gray-500">
      Categorias
    </div>
    <ul class="mt-2">
      <li
        v-for="(category, index) in categories"
        :key="index"
        class="pl-2 py-3 cursor-pointer text-sm hover:bg-dark-gray-700 hover:bg-opacity-75 hover:text-white transition duration-100 ease-linear"
        @click="select(category)"
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'ProductCategoryMenu',
  props: {
    categories: {
      type: Array as PropType<Array<String>>,
      default: [],
    },
  },
  methods: {
    select (option: string): void {
      this.$emit('select', option);
    },
  },
});
</script>
