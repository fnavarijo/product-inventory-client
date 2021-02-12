import { mount } from '@vue/test-utils';

import FlowCheckbox from '@/components/flowContent/FlowCheckbox.vue';

describe('FlowCheckbox component', () => {
  it('should let select the value of the checkbox', async () => {
    const StubComponent = {
      template: '<div><FlowCheckbox name="check-filter" v-model="checkFlag">CheckFilter</FlowCheckbox></div>',
      components: { FlowCheckbox },
      data () {
        return { checkFlag: true };
      },
    };

    const wrapper = mount(StubComponent);

    const checkbox = wrapper.find('label');
    await checkbox.trigger('click');

    expect(wrapper.vm.$data.checkFlag).toBeFalsy();
  });

  it('should render component with desired design', () => {
    const wrapper = mount(FlowCheckbox, {
      slots: {
        default: 'CheckFilter',
      },
      propsData: {
        name: 'check-filter',
      },
    });

    expect(wrapper.find('label').text()).toContain('CheckFilter');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
