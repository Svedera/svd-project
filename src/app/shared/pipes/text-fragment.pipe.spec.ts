import { FirstParagraphPipe } from './text-fragment.pipe';

describe('TextFragmentPipe', () => {
  test('create an instance', () => {
    const pipe = new FirstParagraphPipe();
    expect(pipe).toBeTruthy();
  });
});
