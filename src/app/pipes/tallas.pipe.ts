import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tallas'
})
export class TallasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value >= 0 && value <= 20) {
    	return "XS";
    } else if (value >= 21 && value <= 30) {
    	return "S";
    } else if (value >= 31 && value <= 50) {
    	return "M";
    } else if (value >= 51 && value <= 70) {
    	return "L";
    } else if (value >= 71 && value <= 100) {
    	return "XL";
    }
  }
  // XS = 0-20 S= 21 – 30 M= 31- 50 L= 51- 70 XL =71 -100
}
