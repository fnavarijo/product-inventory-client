<template>
  <section>
    <header>
      <h1 class="text-4xl md:text-6xl uppercase font-bold text-gray-900">
        Iniciar sesión
      </h1>
    </header>
    <FlowForm
      class="flex flex-col"
      @valid-submit="doLogin"
    >
      <FlowInput
        v-model.trim="credentials.identifier"
        class="mt-5"
        name="username"
        label="Nombre de usuario"
        rules="required"
      />
      <FlowInput
        v-model="credentials.password"
        class="mt-5"
        name="password"
        label="Contraseña"
        type="password"
        rules="required"
      />
      <AppButton class="mt-5" type="submit">
        Iniciar sesion
      </AppButton>
    </FlowForm>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

import FlowInput from '@/components/flowContent/FlowInput.vue';
import FlowForm from '@/components/flowContent/FlowForm.vue';
import AppButton from '@/components/button/AppButton.vue';

export default Vue.extend({
  components: {
    FlowInput,
    FlowForm,
    AppButton,
  },
  layout: 'authentication',
  data () {
    return {
      credentials: {
        identifier: '',
        password: '',
      },
    };
  },
  methods: {
    async doLogin (): Promise<void> {
      await this.$store.dispatch(
        'user/doLogin',
        this.credentials
      );
      this.$router.push('/');
    },
  },
});
</script>
