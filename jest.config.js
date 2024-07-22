const nextJest = require('next/jest');

// For some reason nextJest cannot be imported by modules

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
  },
};

module.exports = createJestConfig(config);
