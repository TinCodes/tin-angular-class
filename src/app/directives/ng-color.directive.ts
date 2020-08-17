import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngColor]'
})
export class NgColorDirective {

  constructor(el: ElementRef) { 
  	console.log("Current Element: ", el);
  	
  	el.nativeElement.style.border = '3px solid cyan';
  	el.nativeElement.style.borderRadius = '5px';
  }

}
