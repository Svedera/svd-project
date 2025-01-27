import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullOrEmptyArray'
})
export class NullOrEmptyArrayPipe<T> implements PipeTransform {

  transform(value: T[]): boolean {
    return value == null || value.length === 0;
  }

}
