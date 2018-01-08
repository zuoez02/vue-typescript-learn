import { shallow, createLocalVue } from 'vue-test-utils';
import Vuex from 'vuex';
import App from '@/App.vue';
import { store } from '@/store';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('App.vue test', () => {
  it('data typescript = typescript', () => {
    const wrapper = shallow<App>(App, { store, localVue });
    const el = wrapper.vm.$el.querySelector('#app span');
    if (!el) {
      return;
    }
    expect(el.textContent).toBe('I\'m typescript false');
  });
});
