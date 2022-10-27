import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(val1:number ,val2:number): number {
    return val1 * val2 ;
  }

}
