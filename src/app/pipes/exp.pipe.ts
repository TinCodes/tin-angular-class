import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  transform(val: any, exp?: any): any {
    return Math.pow(val, isNaN(exp) ? 2 : exp);
  }

}
