import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso-angular';
  
  users = [
    {
      name: "Tincho",
      lastname: "The Great",
      age: 23,
      enabled: true 
    },
    { 
      name: "Cuate",
      lastname: "Cito",
      age: 200,
      enabled: false 
    },
    { 
      name: "Sir",
      lastname: "Firriplin",
      age: 147,
      enabled: true 
    },
    { 
      name: "Ali",
      lastname: "Baba",
      age: 30,
      enabled: true 
    }
  ]

  someVal : number = 2;
  someExp : number = 3;

  nums = [1,2,3,4,5,6,7,8,9,10]; 

  pure(a:number, b:number) {
    return a + b;
  }

  impure(a:number, b:number) {
    return a + b + Math.random();
  }

  ngOnInit(){
    console.log("Pure: ", this.pure(6,2));
    console.log("Impure: ", this.impure(6,2));
  }
}