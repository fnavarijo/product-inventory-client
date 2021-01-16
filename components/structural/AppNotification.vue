<template>
  <div class="bg-red-500 text-white flex items-center rounded p-2">
    <WarningIcon class="w-8 h-8 mr-4" />
    <span>{{ message }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import WarningIcon from '@/assets/img/warning.svg?inline';

export default Vue.extend({
  name: 'AppNotification',
  components: {
    WarningIcon,
  },
  props: {
    message: {
      type: String,
      required: true,
    },
  },
});
</script>
