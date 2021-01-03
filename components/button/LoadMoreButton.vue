<template>
  <component
    :is="as"
    :to="to"
    class="py-4 px-10 bg-white text-dark-gray-600 border-4 border-gray-800 w-max hover:text-white hover:bg-dark-gray-600 font-bold transition duration-100 ease-linear"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LoadMoreButton',
  props: {
    as: {
      type: String,
      default: 'button',
      validator: value => ['nuxt-link', 'button'].includes(value),
    },
    to: {
      type: String,
      default: '/',
    },
  },
});
</script>
