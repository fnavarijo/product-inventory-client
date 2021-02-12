<template>
  <div>
    <label class="select-none cursor-pointer flex items-center group">
      <input
        :name="name"
        type="checkbox"
        class="checkbox absolute left-0 opacity-0"
        :checked="checked"
        @change="changeValue"
      >
      <div class="checkbox-display h-4 w-4 border border-dark-gray-700 rounded inline-block relative mr-2 group-hover:bg-light-gray-400 transition ease-in-slide duration-200">
        <CheckIcon class="invisible" />
      </div>
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import CheckIcon from '@/assets/img/check.svg?inline';

export default Vue.extend({
  name: 'FlowCheckbox',
  components: {
    CheckIcon,
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // TODO: find event type
    changeValue ($event: any): void {
      this.$emit('change', $event.target.checked);
    },
  },
});
</script>

<style scoped>
.checkbox:checked + .checkbox-display {
  @apply bg-dark-gray-700;
}

.checkbox:checked + .checkbox-display > svg {
  @apply visible stroke-white;
}

.checkbox:focus + .checkbox-display {
  @apply shadow-accesible;
}
</style>
