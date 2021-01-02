<template>
  <div v-swiper="swiperOption">
    <div class="swiper-wrapper">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="swiper-slide"
      >
        <img :src="image" alt="" class="w-full">
      </div>
    </div>
    <div class="swiper-pagination" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { directive as swiper } from 'vue-awesome-swiper';

export default Vue.extend({
  directives: {
    swiper,
  },
  props: {
    images: {
      type: Array as PropType<Array<string>>,
      default: [],
    },
  },
  computed: {
    swiperOption () {
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
  },
});
</script>
