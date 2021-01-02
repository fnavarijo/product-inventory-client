<template>
  <span class="flex flex-col">
    <label :for="name">{{ label }}</label>
    <input
      class="border-2 border-gray-500 p-3"
      :name="name"
      :type="type"
    >
  </span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
});
</script>
