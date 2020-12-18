<template>
  <div class="font-bold border-b text-gray-900 border-light-gray-400 mb-5 pb-2">
    {{ path }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SectionLocation',
  props: {
    path: {
      type: String,
      required: true,
    },
  },
});
</script>
