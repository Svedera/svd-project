import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlAsBackgroundImage'
})
export class UrlAsBackgroundImagePipe implements PipeTransform {

  transform(url: string): string {
    return `url('${url}')`;
  }
}
