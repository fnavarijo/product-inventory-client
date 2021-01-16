<template>
  <ValidationProvider
    v-slot="{ errors }"
    class="flex flex-col"
    :rules="rules"
  >
    <label :for="name">{{ label }}</label>
    <div class="flex">
      <input
        class="border-2 border-gray-500 p-3 w-full"
        :name="name"
        :type="type"
        :value="value"
        @input="emitInput"
      >
      <div
        v-show="shouldDisplayError(errors)"
        class="bg-red-500 px-2 flex items-center justify-center"
      >
        <WarningIcon class="w-8 h-8 text-white" />
      </div>
    </div>
    <span
      v-show="shouldDisplayError(errors)"
      class="input-error text-red-500 font-bold mt-1"
    >
      {{ errors[0] }}
    </span>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidationProvider } from 'vee-validate';

import WarningIcon from '@/assets/img/warning.svg?inline';

export default Vue.extend({
  name: 'FlowInput',
  components: {
    WarningIcon,
    ValidationProvider,
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    rules: {
      type: String,
      default: '',
    },
  },
  methods: {
    emitInput (event: any): void {
      this.$emit('input', event.target.value);
    },
    shouldDisplayError (errors: Array<any>): boolean {
      return errors.length > 0;
    },
  },
});
</script>
