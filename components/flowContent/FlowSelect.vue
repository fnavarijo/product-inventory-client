<template>
  <select class="border border-light-gray-500 bg-white p-5">
    <slot />
  </select>
</template>

<script lang="ts">
// TODO: Can I validate children?
import Vue from 'vue';

export default Vue.extend({
  name: 'FlowSelect',
});
</script>
