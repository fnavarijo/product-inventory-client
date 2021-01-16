import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import AppNotification from '@/components/structural/AppNotification.vue';
import AppNotificationContainer from '@/components/structural/AppNotificationContainer.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('AppNotificationContainer component', () => {
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      shouldDisplayNotification: jest.fn(() => true),
    };
    store = new Vuex.Store({
      modules: {
        notification: {
          state: {
            message: 'Something wrong happened',
          },
          getters,
          namespaced: true,
        },
      },
    });
  });

  it('should render notification when message exists on store', () => {
    const wrapper = mount(AppNotificationContainer, {
      components: {
        AppNotification,
      },
      store,
      localVue,
    });

    expect(wrapper.findComponent(AppNotification).exists()).toBeTruthy();
  });
});
