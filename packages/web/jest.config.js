module.exports = {
  testEnvironment: 'jsdom',
  verbose: false,
  bail: true,
  notify: true,
  roots: ['<rootDir>/stories', '<rootDir>/ui'],
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  testPathIgnorePatterns: ['<rootDir>/{.next,build,node_modules}/'],
  testMatch: ['<rootDir>/{ui,stories}/**/__tests__/**/*.test.js'],
  collectCoverageFrom: ['ui/**/*.{js,jsx}']
};
