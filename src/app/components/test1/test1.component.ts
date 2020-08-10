import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
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
