import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddProduct } from './store/home.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	products = [];

  productSub: Subscription;

  homeSub: Subscription;

  cart = [];

  constructor(private productService: ProductService,
              private store: Store<any>) {

  }

  ngOnInit(): void {
  	this.homeSub = this.store.select(s => s.home).subscribe(res => {
      this.cart = Object.assign([], res.items);
    });

    this.productSub = this.productService.getProducts().subscribe(res => {
  		console.log("Response: ", res);
  		console.log("Response (Array): ", Object.entries(res));

  		Object.entries(res).map(p => this.products.push(p[1]));
  	});
  }

  ngOnDestroy(): void {
    this.productSub ? this.productSub.unsubscribe() : '';
    this.homeSub ? this.homeSub.unsubscribe() : '';
  }

  onBuy(product): void {
    this.store.dispatch(AddProduct({product: product}));
  }

}
