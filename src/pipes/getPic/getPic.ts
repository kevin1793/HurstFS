import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the GetPicPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'getPic',
})
export class GetPicPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.split('img src="').pop().split('"').shift();
  }
}
