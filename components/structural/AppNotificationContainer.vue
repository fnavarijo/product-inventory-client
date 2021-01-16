<template>
  <div class="w-full">
    <AppNotification
      v-if="shouldDisplayNotification"
      :message="notificationMessage"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapState } from 'vuex';

import AppNotification from '@/components/structural/AppNotification.vue';

export default Vue.extend({
  name: 'AppNotificationContainer',
  components: {
    AppNotification,
  },
  computed: {
    ...mapState('notification', {
      notificationMessage: 'message',
    }),
    ...mapGetters({
      shouldDisplayNotification: 'notification/shouldDisplayNotification',
    }),
  },
});
</script>
