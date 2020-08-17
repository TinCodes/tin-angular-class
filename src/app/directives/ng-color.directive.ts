import { Directive, ElementRef, Input, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[ngColor]'
})
export class NgColorDirective {

	@Input()
	@Output()

	@HostListener('mouseenter') onMouseEnter(){
		console.log('Ow');

		this.changeColor('red')
	}

	@HostListener('mouseleave') onMouseLeave(){
		console.log('Thx');

		this.changeColor('yellow');
	}

  constructor(private el: ElementRef) { 
  	console.log("Current Element: ", el);

  	this.changeColor('cyan');
  }

  changeColor(color: string) {
  	this.el.nativeElement.style.border = '3px solid ' + color;
  	this.el.nativeElement.style.borderRadius = '5px';
  }

}
