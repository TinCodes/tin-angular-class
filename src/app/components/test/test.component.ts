import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnChanges, OnInit {

  @Input() name: string;
  @Input() age: number;
  @Input() description: string;

  @Output() data = new EventEmitter(); 

  constructor() { }

  ngOnChanges() {
    console.log("I'm executing OnChanges")
  }

  ngOnInit(): void {
    console.log("I'm executing OnInit")
  }

  sendData() {
  	this.data.emit({
  		name: this.name,
  		age: this.age,
  		description: this.description
  	});
  }

}
