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

  ngOnInit(){

  }
}