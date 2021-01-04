<template>
  <section>
    <header>
      <h1 class="text-6xl uppercase font-bold text-gray-900">
        Iniciar sesión
      </h1>
    </header>
    <form class="flex flex-col" @submit.prevent="doLogin">
      <FlowInput v-model="user.username" class="mt-5" name="username" label="Nombre de usuario" />
      <FlowInput v-model="user.password" class="mt-5" name="password" label="Contraseña" type="password" />
      <AppButton class="mt-5" type="submit">
        Iniciar sesion
      </AppButton>
    </form>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

import FlowInput from '@/components/flowContent/FlowInput.vue';
import AppButton from '@/components/button/AppButton.vue';

export default Vue.extend({
  components: {
    FlowInput,
    AppButton,
  },
  layout: 'authentication',
  data () {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async doLogin (): Promise<void> {
      await this.$store.dispatch('user/doLogin', this.user);
    },
  },
});
</script>
