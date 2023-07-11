import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberRange'
})
export class NumberRangePipe implements PipeTransform {

  transform(num: number, min: number, max: number): number {
    if(num <= min) return min;
    if(num >= max) return max;
    else return num;
  }

}
