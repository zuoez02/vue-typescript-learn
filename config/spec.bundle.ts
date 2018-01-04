// Polyfill fn.bind() for PhantonpmmJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind');

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../src', true, /^\.\/(?!main(\.ts)?$)/);
const keys = srcContext.keys();
keys.forEach(function(i) {
  if (i.indexOf('.d') === -1) {
    srcContext(i);
  }
});
// srcContext("./App.vue");

// srcContext.keys().forEach(srcContext);

// require all test files (files that ends with .spec.js)
const testsContext = require.context('../src/', true, /\.spec\.ts/);
testsContext.keys().forEach(testsContext);
