import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'gradePipe'
})
export class GradePipe implements PipeTransform {
	transform(value: unknown, ...args: unknown[]): unknown {
		if (value === "S") {
			return "Secondary";
		} else if (value === "P") {
			return "Primary";
		}
	}
}