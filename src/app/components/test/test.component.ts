import { Component, AfterContentChecked, AfterContentInit, DoCheck, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnChanges, OnInit, DoCheck {

  @Input() name: string;
  @Input() age: number;
  @Input() description: string;

  @Output() data = new EventEmitter();

  @Input() exString: string = "lol";

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

  ngDoCheck() {
    // console.log("I'm executing DoCheck")
  }

  ngAfterContentInit() {
    console.log("I'm executing afterContentInit")
  }

  ngAfterContentChecked() {
    console.log("I'm executing AfterContentCheck")
  }

}
