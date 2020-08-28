import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  public getProducts() : any[] {

  	return [
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
  }

}
