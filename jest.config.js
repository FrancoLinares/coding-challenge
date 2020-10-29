module.exports = {
  bail: 1,
  verbose: true,
  setupFilesAfterEnv: ['./setupTests.js'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/tests/mocks/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4)$':
      '<rootDir>/tests/mocks/fileMock.js',
    '\\.(ts|tsx)$': '<rootDir>/tests/mocks/tsMock.js',
  },
};
