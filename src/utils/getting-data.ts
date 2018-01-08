import Vue from 'vue';

export function GettingData() {
  return function (target: Vue, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target, propertyKey, descriptor);
  };
}
