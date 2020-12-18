<template>
  <div>
    <img class="h-24 w-24 m-auto mt-5" src="~/assets/img/shirt.svg" alt="">
    <ul class="ml-5 mt-4">
      <li class="py-3 border-b border-gray-500 hover:text-yellow-600">
        Home
      </li>
      <li class="py-3 border-b border-gray-500 hover:text-yellow-600">
        Categories
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProductMenu',
});
</script>
