const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'vue',
    'ts'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    // '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor',
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js',
    '.*': '<rootDir>/node_modules/babel-jest',
    // '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,js,vue}',
    '!src/main.ts',
    '!src/router/index.ts',
    '!src/vue-shim.d.ts',
    '!src/types/**',
    '!**/node_modules/**'
  ]
}
