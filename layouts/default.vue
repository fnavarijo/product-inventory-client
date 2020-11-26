<template>
  <div class="font-body">
    <AppNav />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppNav from '@/components/structural/AppNav.vue';

export default Vue.extend({
  components: {
    AppNav,
  },
})
</script>