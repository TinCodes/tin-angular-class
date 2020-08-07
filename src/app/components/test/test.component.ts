import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() name: string;
  @Input() age: number;
  @Input() description: string;

  @Output() data = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
  	this.data.emit({
  		name: this.name,
  		age: this.age,
  		description: this.description
  	});
  }

}
