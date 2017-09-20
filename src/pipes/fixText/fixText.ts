import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FixTextPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'fixText',
})
export class FixTextPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    value = value.toUpperCase();
    return value.replace(/-/g, ' ');

  }
}
