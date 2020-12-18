<template>
  <button class="py-4 px-10 bg-white text-dark-gray-600 border-4 border-gray-800 hover:text-white hover:bg-dark-gray-600 font-bold transition duration-100 ease-linear">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LoadMoreButton',
});
</script>
