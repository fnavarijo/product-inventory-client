import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import AppSalute from '@/components/structural/AppSalute.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('AppSalute component', () => {
  let store;

  beforeAll(() => {
    store = new Vuex.Store({
      modules: {
        user: {
          state: {
            name: 'John',
          },
          namespaced: true,
        },
      },
    });
  });

  it('should render salute for the user', () => {
    const wrapper = mount(AppSalute, {
      localVue,
      store,
    });

    expect(wrapper.html()).toContain('John');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
