module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageReporters: ['lcov', 'text', 'text-summary', 'html'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
};
