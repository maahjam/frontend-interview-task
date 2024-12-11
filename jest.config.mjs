// jest.config.mjs

export default {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  maxWorkers: "50%",
  resetMocks: true,
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  preset: 'ts-jest/presets/js-with-ts',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "ts", "tsx", "json", "node"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
  verbose: true,
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
};
