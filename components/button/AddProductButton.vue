<template>
  <button class="py-4 px-10 bg-primary-500 text-white hover:text-white hover:bg-dark-gray-600 font-bold transition duration-100 ease-linear">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LoadMoreButton',
});
</script>
