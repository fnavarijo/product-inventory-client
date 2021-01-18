<template>
  <div class="text-dark-gray-700 text-right border-r border-dark-gray-600 pr-4">
    <span class="font-bold block">Bienvenido</span>
    {{ userName }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'AppSalute',
  computed: {
    ...mapState('user', {
      userName: 'name',
    }),
  },
});
</script>
