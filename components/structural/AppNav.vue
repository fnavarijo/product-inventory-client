<template>
  <nav class="absolute top-0 right-0 h-32 flex items-center p-16">
    <div class="text-dark-gray-700 text-right border-r border-dark-gray-600 pr-4" v-if="isUserLoggedIn">
      <span class="font-bold block">Bievenido</span>
      {{ userName }}
    </div>
    <NuxtLink to="/login">
      <UserIcon class="nav-icon hover:stroke-primary transition ease-linear duration-75" />
      <!-- <img class="nav-icon" src="~/assets/img/user.svg" alt="Go to shopping cart"> -->
    </NuxtLink>
    <ShoppingCart class="nav-icon hover:stroke-primary transition ease-linear duration-75" />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';

import UserIcon from '@/assets/img/user.svg?inline';
import ShoppingCart from '@/assets/img/shopping.svg?inline';

export default Vue.extend({
  name: 'AppNav',
  components: {
    UserIcon,
    ShoppingCart,
  },
  computed: {
    ...mapState('user', {
      userName: 'name',
    }),
    ...mapGetters('user', {
      isUserLoggedIn: 'isUserLoggedIn',
    }),
  },
});
</script>

<style scoped>
.nav-icon {
  @apply h-10 w-10 mx-2;
}
</style>
