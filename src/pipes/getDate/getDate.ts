import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the GetDatePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'spaceIt',
})
export class GetDatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.replace(/_/g,' ');
  }
}
