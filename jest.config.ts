module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['src/pages/*.tsx', 'src/hooks/*.tsx'],
  coveragePathIgnorePatterns: ['node_modules', '<rootDir>/src/index.tsx'],
  coverageReporters: ['lcov', 'text', 'text-summary', 'html'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
};
