import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	products = [];

  productSub: Subscription;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
  	this.productSub = this.productService.getProducts().subscribe(res => {
  		console.log("Response: ", res);
  		console.log("Response (Array): ", Object.entries(res));

  		Object.entries(res).map(p => this.products.push(p[1]));
  	});
  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe();
  }

}
