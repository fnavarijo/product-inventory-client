<template>
  <div class="flex flex-col min-h-6 justify-start">
    <span
      class="p-1 mb-2 option rounded-md capitalize select-none cursor-pointer hover:bg-light-gray-700 hover:bg-opacity-50 transition duration-100 ease-linear"
      @click="displaySubItems"
    >
      {{ option }}
    </span>
    <ul
      class="h-auto relative overflow-hidden transition-all duration-100 ease-in-slide"
      :class="canDisplaySubItems ? 'flex-over-1' : 'flex-over-0'"
    >
      <transition name="slide-down">
        <div
          v-show="canDisplaySubItems"
          class="relative top-0"
        >
          <li
            v-for="(subItem, index) in subItems"
            :key="index"
            class="subitems pl-2 py-1 capitalize border-l-2 border-dark-gray-700"
          >
            <span class="py-1 px-2 rounded-md hover:bg-light-gray-700 hover:bg-opacity-50 transition duration-100 ease-linear">
              {{ subItem }}
            </span>
          </li>
        </div>
      </transition>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'MenuOption',
  props: {
    option: {
      type: String,
      required: true,
    },
    subItems: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
  },
  data () {
    return {
      canDisplaySubItems: false,
    };
  },
  methods: {
    displaySubItems (): void {
      this.canDisplaySubItems = !this.canDisplaySubItems;
    },
  },
});
</script>

<style scoped>
.flex-over-1 {
  flex: 1;
}

.flex-over-0 {
  flex: 0;
}

.slide-down-enter-active,
.slide-down-leave-active {
  @apply transition-top duration-200 ease-in-slide;
}

.slide-down-enter,
.slide-down-leave-to {
  @apply absolute -top-20;
}
</style>
