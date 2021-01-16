<template>
  <div class="font-body text-base bg-white h-screen w-screen flex items-center justify-center">
    <NuxtLink to="/" class="absolute top-0 left-0 mt-5 ml-5 md:mt-10 md:ml-10">
      <img
        src="~/assets/img/back.svg"
        alt="Go back to home page"
        class="h-8 w-8 md:h-12 md:w-12"
      >
    </NuxtLink>
    <main class="relative">
      <AppNotificationContainer class="absolute -top-24 w-full" />
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AppNotificationContainer from '@/components/structural/AppNotificationContainer.vue';

export default Vue.extend({
  name: 'Authentication',
  components: {
    AppNotificationContainer,
  },
});
</script>
