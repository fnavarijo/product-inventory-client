<template>
  <div>
    <NuxtLink to="/">
      <img
        src="~/assets/img/back.svg"
        alt="Go back to home page"
        class="h-12 w-12 absolute top-0 left-0 mt-10 ml-10"
      >
    </NuxtLink>
    <h1 class="text-6xl uppercase font-bold">Login</h1>
    <section>
      <form class="flex flex-col" @submit="">
        <FormInput class="mt-5" name="username" label="Nombre de usuario" />
        <FormInput class="mt-5" name="password" label="Contraseña" type="password" />
        <button class="bg-orange-400 p-5 text-gray-100 mt-5" type="submit">Iniciar sesion</button>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import FormInput from '@/components/form/FormInput.vue';

export default Vue.extend({
  layout: 'authentication',
  components: {
    FormInput,
  },
});
</script>
