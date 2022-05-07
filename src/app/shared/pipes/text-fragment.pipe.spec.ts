import { FirstParagraphPipe } from './text-fragment.pipe';

describe('TextFragmentPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstParagraphPipe();
    expect(pipe).toBeTruthy();
  });
});
