// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../build/webpack.test.conf');

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai', 'source-map-support'],
    reporters: ['progress', 'coverage', 'spec', 'html', 'mocha'],
    files: [
      '../node_modules/babel-polyfill/dist/polyfill.js',
      { pattern: './spec.bundle.js', watched: false }
    ],
    preprocessors: {
      './spec.bundle.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      reporters: [
        { type: 'html', dir: '../report/coverage/html-js' },
        { type: 'json', dir: '../report/coverage/json' },
        { type: 'text' },
        { type: 'text-summary' }
      ]
    },
    htmlReporter: {
      outputFile: '../report/unit/units.html'
    },
  })
}
