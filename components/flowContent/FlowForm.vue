<template>
  <ValidationObserver
    v-slot="{ handleSubmit }"
    slim
  >
    <form @submit.prevent="handleSubmit(submitForm)">
      <slot />
    </form>
  </ValidationObserver>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidationObserver } from 'vee-validate';

export default Vue.extend({
  name: 'FlowForm',
  components: {
    ValidationObserver,
  },
  methods: {
    submitForm () {
      this.$emit('valid-submit');
    },
  },
});
</script>
