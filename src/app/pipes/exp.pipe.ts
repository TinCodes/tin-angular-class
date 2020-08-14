import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  transform(val: any, exp?: any, msg?: string): any {
    return msg + " " + Math.pow(val, isNaN(exp) ? 2 : exp);
  }

}
