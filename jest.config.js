const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
    '^@/utils/(.*)$': '<rootDir>/app/$1',
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
};

module.exports = createJestConfig(config);
