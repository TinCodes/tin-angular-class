import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	products = [
		{
			title: "Concept",
			description: "A great idea of something.",
			imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
			ownerId: 1,
			price: 10
		},
		{
			title: "Concept",
			description: "A great idea of something.",
			imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
			ownerId: 1,
			price: 10
		},
		{
			title: "Concept",
			description: "A great idea of something.",
			imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
			ownerId: 1,
			price: 10
		},
		{
			title: "Concept",
			description: "A great idea of something.",
			imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
			ownerId: 1,
			price: 10
		},
		{
			title: "Concept",
			description: "A great idea of something.",
			imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
			ownerId: 1,
			price: 10
		}
	];

  constructor() { }

  ngOnInit(): void {
  }

}
