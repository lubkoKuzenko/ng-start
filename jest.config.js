const path = require("path");

module.exports = {
  displayName: "ngl9",
  projects: ["<rootDir>"],
  rootDir: path.resolve("."),

  /**
   * A set of global variables that need to be available in all test environments.
   */
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      allowSyntheticDefaultImports: true,
    },
  },

  /**
   * By default, Jest runs all tests and produces all errors into the console upon completion.
   * The bail config option can be used here to have Jest stop running tests after n failures.
   * Setting bail to true is the same as setting bail to 1
   */
  bail: true,

  /**
   * Indicates whether the coverage information should be collected while executing the test.
   * Because this retrofits all executed files with coverage collection statements,
   * it may significantly slow down your tests.
   */
  collectCoverage: true,

  /**
   * An array of glob patterns indicating a set of files for which coverage
   * information should be collected. If a file matches the specified glob pattern,
   * coverage information will be collected for it even if no tests exist for this file and
   * it's never required in the test suite.
   */
  collectCoverageFrom: [
    "<rootDir>/src/app/**/*.ts",
    "!<rootDir>/src/app/**/index.ts",
    "!<rootDir>/src/app/**/*.module.ts",
  ],

  /**
   * A list of reporter names that Jest uses when writing coverage reports.
   * Any istanbul reporter can be used.
   * https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-reports/lib
   */
  coverageReporters: ["json", "lcov", "lcovonly", "text"],
  coverageDirectory: "coverage",

  /**
   * A preset that is used as a base for Jest's configuration.
   */
  preset: "jest-preset-angular",

  setupFiles: ["jest-localstorage-mock"],

  /**
   * A list of paths to modules that run some code to configure or set up the testing
   * framework before each test. Since setupFiles executes before the test framework
   * is installed in the environment, this script file presents you the opportunity
   * of running some code immediately after the test framework has been installed
   * in the environment.
   */
  setupFilesAfterEnv: ["<rootDir>/jest.base.setup.ts"],

  /**
   * The glob patterns Jest uses to detect test files.
   */
  testMatch: ["<rootDir>/src/**/**/*.spec.ts"],

  /**
   * An array of regexp pattern strings that are matched against all
   * test paths before executing the test. If the test path matches any
   * of the patterns, it will be skipped. These pattern strings match against
   * the full path. Use the <rootDir> string token to include the path to your
   * project's root directory to prevent it from accidentally ignoring all of
   * your files in different environments that may have different root directories.
   */
  testPathIgnorePatterns: ["/node_modules/", "/types/", "/helpers/", "/dist/", "/prebuilt/"],

  /**
   * Indicates whether each individual test should be reported during the run.
   * All errors will also still be shown on the bottom after execution.
   */
  verbose: true,

  /**
   * A number limiting the number of tests that are allowed to run at the same time when
   * using test.concurrent. Any test above this limit will be queued and executed once
   * a slot is released.
   */
  maxConcurrency: 10,

  /**
   * The directory where Jest should store its cached dependency information.
   */
  cacheDirectory: "<rootDir>/.cache",

  /**
   * By default, each test file gets its own independent module registry.
   * Enabling resetModules goes a step further and resets the module registry before running
   * each individual test. This is useful to isolate modules for every test so that local
   * module state doesn't conflict between tests. This can be done programmatically
   * using jest.resetModules().
   */
  resetModules: true,

  /** Automatically reset mock state before every test.
   * Equivalent to calling jest.resetAllMocks() before each test.
   * This will lead to any mocks having their fake implementations removed but does not restore their initial implementation
   */
  resetMocks: false,

  /**
   * Automatically clear mock calls and instances between every test.
   * Equivalent to calling jest.clearAllMocks() between each test.
   * This does not remove any mock implementation that may have been provided.
   */
  clearMocks: true,
  // passWithNoTests: true,
};
