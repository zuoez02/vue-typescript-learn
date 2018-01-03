import Vue from 'vue';
import HelloWorld from '../HelloWorld.vue';
import { expect } from 'chai';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const constructor = Vue.extend(HelloWorld);
    const vm = new constructor().$mount();
    const element = vm.$el.querySelector('.hello h1');
    const textContent = element ? element.textContent : undefined;
    expect(textContent).to.equal('Welcome to Your Vue.js App');
  });
});
