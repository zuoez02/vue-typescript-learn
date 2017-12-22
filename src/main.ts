import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import { router } from '@/router';
import { store } from '@/store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App },
});
