<template>
  <div class="text-dark-gray-700">
    <div class="py-2 border-b border-gray-500 font-bold mb-2 text-lg">
      Filtro
    </div>

    <div class="mb-2">
      Tallas
    </div>
    <FlowCheckbox v-model="smallCheck" name="small" class="mb-2">
      Pequeño
    </FlowCheckbox>
    <FlowCheckbox name="medium" class="mb-2">
      Mediano
    </FlowCheckbox>
    <FlowCheckbox name="big" class="mb-2">
      Grande
    </FlowCheckbox>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppPortfolioFilter',
  data () {
    return {
      smallCheck: false,
    };
  },
});
</script>
