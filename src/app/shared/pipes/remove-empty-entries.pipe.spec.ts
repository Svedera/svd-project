import { RemoveEmptyEntriesPipe } from './remove-empty-entries.pipe';

describe('RemoveEmptyEntriesPipe', () => {
  test('create an instance', () => {
    const pipe = new RemoveEmptyEntriesPipe();
    expect(pipe).toBeTruthy();
  });
});
