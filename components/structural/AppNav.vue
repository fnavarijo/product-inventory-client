<template>
  <nav class="absolute top-0 right-0 h-32 flex items-center p-16">
    <!-- <label for="username">Username</label>
    <input type="text" v-model="credentials.username" name="username">
    <label for="password">Password</label>
    <input type="text" v-model="credentials.password" name="password">
    <button @click="doLogin" class="bg-gray-500">Login</button> -->
    <!-- TODO: On hover, paint path white -->
    <NuxtLink to="/login">
      <UserIcon class="nav-icon hover:stroke-primary transition ease-linear duration-75" />
      <!-- <img class="nav-icon" src="~/assets/img/user.svg" alt="Go to shopping cart"> -->
    </NuxtLink>
    <ShoppingCart class="nav-icon hover:stroke-primary transition ease-linear duration-75" />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

import UserIcon from '~/assets/img/user.svg?inline';
import ShoppingCart from '~/assets/img/shopping.svg?inline';

export default Vue.extend({
  name: 'AppNav',
  components: {
    UserIcon,
    ShoppingCart,
  },
  // data () {
  //   return {
  //     credentials: {
  //       username: '',
  //       password: '',
  //     },
  //   },
  // },
  // methods: {
  //   async doLogin () {
  //     const { username, password } = this.credentials;
  //     // TODO: move this to a centralized api management
  //     const { data } = await this.$axios.post('/auth/local', {
  //       identifier: username,
  //       password,
  //     });

  //     localStorage.setItem('session', data.jwt);
  //     this.$router.push('/home');

  //   }
  // }
});
</script>

<style scoped>
.nav-icon {
  @apply h-10 w-10 mx-2;
}
</style>
