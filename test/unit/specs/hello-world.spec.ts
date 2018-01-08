import { shallow, createLocalVue } from 'vue-test-utils';
import Vuex from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue';
import { store } from '@/store';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('App.vue test', () => {
  it('data typescript = typescript', () => {
    expect(null).toBeNull();
  });
});
