<template>
  <component
    :is="as"
    :to="to"
    class="py-4 px-10 w-max rounded-md font-bold text-sm md:text-base transition duration-100 ease-linear"
    :class="color"
    @click="click"
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
  methods: {
    click (): void {
      this.$emit('click');
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
