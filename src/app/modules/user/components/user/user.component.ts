import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

	@Input() name:string;
	@Input() lastname:string;
	@Input() age:number;
	@Input() enabled:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
