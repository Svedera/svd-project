const esModules = ['.*\\.mjs$', '@angular', '@storybook', 'tslib', 'rxjs', 'ngx-dropzone'];

globalThis.ngJest = {
  skipNgcc: false,
  tsconfig: 'tsconfig.spec.json',
};

module.exports =
{
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleDirectories: [
    'node_modules',
    '.'
  ],
  // Requered for Msal authentication
  globals: {
    crypto: require('crypto'),
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  testMatch: [
    '**/**.spec.ts'
  ],
  transform: {
    '^.+\\.(js|mjs|html)$': 'jest-preset-angular'
  },
  transformIgnorePatterns: [
    `/node_modules/(?!${esModules.join('|')})`,
  ],
  moduleNameMapper: {
    tslib: 'tslib/tslib.es6.js',
    '^@services/(.*)$': '<rootDir>/src/app/core/services/$1',
    '^@models/(.*)$': '<rootDir>/src/app/core/models/$1',
    '^@backend-models/(.*)$': '<rootDir>/src/app/core/backend-models/$1',
    '^@enums/(.*)$': '<rootDir>/src/app/core/enums/$1',
    '^@shared/(.*)$': '<rootDir>/src/app/shared/$1',

    '^@article/(.*)$': '<rootDir>/src/app/article/$1',
    '^@drawings/(.*)$': '<rootDir>/src/app/drawings/$1',
    '^@game-of-life/(.*)$': '<rootDir>/src/app/game-of-life/$1',
    '^@test/(.*)$': '<rootDir>/src/app/test/$1',

    'jest-preset-angular/build/setup-jest': 'jest-preset-angular/setup-jest',

    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer':
      'jest-preset-angular/build/serializers/no-ng-attributes',

    'jest-preset-angular/build/AngularSnapshotSerializer':
      'jest-preset-angular/build/serializers/ng-snapshot',

    'jest-preset-angular/build/HTMLCommentSerializer':
      'jest-preset-angular/build/serializers/html-comment'
  },
  reporters: [
    'default',
    [
      'jest-trx-results-processor',
      {
        outputFile: './test-results.trx'
      }
    ]
  ]
};
