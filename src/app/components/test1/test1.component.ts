import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `<div style="border: 1px solid red">
	<input type="text" [(ngModel)]="user">
	<p>User: {{user}}</p>
</div>`,
  styles: [
  	``
  ]
})
export class Test1Component implements OnInit, OnDestroy {

	user: string = "ORAORAORA";

	@Input() exString: string;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy() {
  	console.log("Component destroyed");
  }

}
