<template>
  <div class="font-body relative text-base">
    <AppNav />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AppNav from '@/components/structural/AppNav.vue';
import AppFooter from '@/components/structural/AppFooter.vue';

export default Vue.extend({
  components: {
    AppNav,
    AppFooter,
  },
});
</script>
