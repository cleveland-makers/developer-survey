module.exports = {
  modulePathIgnorePatterns: [
    '<rootDir>/build/',
  ],
  collectCoverageFrom: [
    'lib/**/*.{js,jsx}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/path/to/dir/',
  ],
};
