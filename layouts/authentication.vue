<template>
  <div class="font-body text-base bg-white h-screen w-screen flex items-center justify-center">
    <NuxtLink to="/">
      <img
        src="~/assets/img/back.svg"
        alt="Go back to home page"
        class="h-12 w-12 absolute top-0 left-0 mt-10 ml-10"
      >
    </NuxtLink>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>
