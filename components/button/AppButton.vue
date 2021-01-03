<template>
  <component
    :is="as"
    :to="to"
    class="py-4 px-10 w-max font-bold transition duration-100 ease-linear"
    :class="color"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppButton',
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
    color: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary'].includes(value),
    },
  },
});
</script>

<style scoped>
.primary {
  @apply bg-primary-500 text-white;
}

.secondary {
  @apply bg-white text-dark-gray-600 border-4 border-gray-800;
}

.primary:hover,
.secondary:hover {
  @apply text-white bg-dark-gray-600;
}
</style>
