<template>
  <div v-swiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="h-16 bg-dark-gray-500 text-white">Slide 1</div>
      </div>
      <div class="swiper-slide">
        <div class="h-16 bg-dark-gray-500 text-white">Slide 2</div>
      </div>
      <div class="swiper-slide">
        <div class="h-16 bg-dark-gray-500 text-white">Slide 3</div>
      </div>
    </div>
    <div class="swiper-pagination" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { directive as swiper } from 'vue-awesome-swiper';

export default Vue.extend({
  directives: {
    swiper,
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        init: true,
        grabCursor: true,
      },
    };
  },
});
</script>
