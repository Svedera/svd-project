import 'jest-preset-angular/setup-jest';
import './jest-global-mocks';

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getPropertyValue: (_: any) => {
          return '';
      }
  })
});
