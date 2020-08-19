import { Component, AfterContentChecked, AfterContentInit, DoCheck, OnChanges, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';

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

  // Getters y setters
  __tempVar1: string; 

  @Input()
  get var1() {
    return this.__tempVar1;
  }
  set var1(var1: string){
    this.__tempVar1 = var1;
  }
  @Input() var2: string;

  constructor() { }

  ngOnChanges(changes: SimpleChange) {
    if (changes && changes.var2 && changes.var2.currentValue) {
      console.log("I'm executing OnChanges", changes.var2.currentValue);
      const temp = 'Temporal lol';
      changes.var2.currentValue;
      this.var2 = temp;
    }
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
