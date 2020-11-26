<template>
  <nav class="absolute top-0 right-0 h-32 flex items-center p-16">
    <!-- <label for="username">Username</label>
    <input type="text" v-model="credentials.username" name="username">
    <label for="password">Password</label>
    <input type="text" v-model="credentials.password" name="password">
    <button @click="doLogin" class="bg-gray-500">Login</button> -->
    <img class="h-12 w-12 m-5" src="~/assets/img/user.svg" alt="Go to shopping cart">
    <img class="h-12 w-12 m-5" src="~/assets/img/shopping.svg" alt="Go to shopping cart">
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      credentials: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    async doLogin () {
      const { username, password } = this.credentials;
      // TODO: move this to a centralized api management
      const { data } = await this.$axios.post('/auth/local', {
        identifier: username,
        password,
      });

      localStorage.setItem('session', data.jwt);
      this.$router.push('/home');

    }
  }
})
</script>