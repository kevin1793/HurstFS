import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the GetDesPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'getDes',
})
export class GetDesPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.split(';">').pop().split('</sp').shift();
  }
}
