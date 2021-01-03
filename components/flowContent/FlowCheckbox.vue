<template>
  <div>
    <input :id="id" type="checkbox" :name="name">
    <label :for="id">
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FlowCheckbox',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>
