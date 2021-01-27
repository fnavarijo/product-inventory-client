<template>
  <label class="check-container block relative cursor-pointer w-8 h-8">
    <input
      type="checkbox"
      class="absolute opacity-0 cursor-pointer h-0 w-0"
    >
    <span class="checkmark absolute top-0 left-0 h-8 w-8 rounded-full border border-dark-gray-700" />
  </label>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProductSelect',
});
</script>

<style scoped>
.check-container {
  user-select: none;
}

.checkmark {
  transition: background-color 250ms linear,
    border-color 250ms linear;
}

.check-container:hover input ~ .checkmark,
.check-container input:checked ~ .checkmark {
  @apply bg-primary-600 border-0;
}

.checkmark::after {
  content: '';
  display: none;
  @apply absolute;
}

.check-container input:checked ~ .checkmark::after {
  display: flex;
  align-items: center;
  justify-content: center;
}

.check-container .checkmark::after {
  width: 10px;
  height: 15px;
  border: solid white;
  border-width: 0 3px 3px 0;
  margin-top: 40%;
  margin-left: 25%;
  transform: rotate(45deg) translate(-25%, -50%);
}
</style>
