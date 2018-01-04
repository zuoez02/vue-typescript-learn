// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../build/webpack.test.conf');

module.exports = function(config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    reporters: ['progress', 'coverage', 'spec', 'html', 'mocha'],
    // customContextFile: '../index.html',
    files: [
      '../node_modules/babel-polyfill/dist/polyfill.js',
      { pattern: './spec.bundle.ts', watched: false },
    ],
    preprocessors: {
      './spec.bundle.ts': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
    },

    webpackServer: {
      noInfo: true, // prevent console spamming when running in Karma!
    },
    reporters: ['spec', 'coverage', 'progress', 'html', 'mocha'],

    coverageReporter: {
      reporters: [
        { type: 'html', dir: '../report/coverage/' },
        { type: 'text' },
        { type: 'text-summary' },
      ],
    },

    htmlReporter: {
      outputFile: '../report/unit/units.html',
    },

    mime: {
      'text/x-typescript': ['ts'],
    },

    // web server port
    port: 9876,

    // enable colors in the output
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // toggle whether to watch files and rerun tests upon incurring changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // if true, Karma runs tests once and exits
    singleRun: true,

    browserNoActivityTimeout: 20000,
  });
};
