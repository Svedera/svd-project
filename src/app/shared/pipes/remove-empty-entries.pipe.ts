import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeEmptyEntries'
})
export class RemoveEmptyEntriesPipe implements PipeTransform {

  transform(strings: string[]): string[] {
    return strings.filter(value => value);
  }

}
