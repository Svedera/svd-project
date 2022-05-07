import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstParagraph'
})
export class FirstParagraphPipe implements PipeTransform {

  transform(text: string): string {
    if (text == null) {
      return text;
    }

    const startLength = 3;
    const start = text.indexOf('<p>');
    const end = text.indexOf('</p>');

    if (start === -1 || end === -1) {
      return text;
    }

    const fragment = text.substring(start + startLength, end);
    return fragment;
  }

}
