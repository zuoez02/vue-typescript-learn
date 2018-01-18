const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  "moduleFileExtensions": [
    "js",
    "vue",
    "ts"
  ],
  "moduleNameMapper": {
    "^vue$": "vue/dist/vue.common.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/test/__mocks__/styleMock.js",
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "transform": {
    "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
    ".*": "<rootDir>/node_modules/babel-jest"
  },
  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-serializer-vue"
  ],
  "setupFiles": [
    "<rootDir>/test/unit/setup"
  ],
  "mapCoverage": true,
  "verbose": true,
  "coverageDirectory": "<rootDir>/test/unit/coverage",
  "collectCoverageFrom": [
    "src/**/*.{ts,vue}",
    "test/unit/spec/**/*.spec.ts",
    "!src/module.ts",
    "!src/main.ts",
    "!src/router/index.ts",
    "!src/**/*.d.ts",
    "!src/types/**",
    "!**/node_modules/**"
  ]
}
