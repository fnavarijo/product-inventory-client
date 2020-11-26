<template>
  <div>
    <img class="square-256" src="~/assets/img/product.jpg" alt="">
    <div class="flex flex-col mt-5">
      <span class="uppercase font-light">Category</span>
      <span>Product name</span>
      <span class="font-bold text-lg">Q 25.00</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>

<style scoped>
.square-256 {
  @apply h-256 w-256;
}
</style>
