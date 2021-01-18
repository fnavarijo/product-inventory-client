<template>
  <nav class="absolute top-0 right-0 h-32 flex items-center p-16">
    <AppSalute v-if="isUserLoggedIn" />
    <NuxtLink to="/login">
      <UserIcon class="nav-icon hover:stroke-primary transition ease-linear duration-75" />
    </NuxtLink>
    <NuxtLink to="/catalog">
      <CatalogIcon class="nav-icon hover:stroke-primary transition ease-linear duration-75" />
    </NuxtLink>
    <ShoppingCart class="nav-icon hover:stroke-primary transition ease-linear duration-75" />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';

import UserIcon from '@/assets/img/user.svg?inline';
import ShoppingCart from '@/assets/img/shopping.svg?inline';
import CatalogIcon from '@/assets/img/catalog.svg?inline';
import AppSalute from '@/components/structural/AppSalute.vue';

export default Vue.extend({
  name: 'AppNav',
  components: {
    UserIcon,
    AppSalute,
    CatalogIcon,
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
