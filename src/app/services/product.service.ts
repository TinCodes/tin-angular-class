import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts() : Observable<any> {
  	return this.http.get('https://amazzon-test.firebaseio.com/products.json');
  }

  public addProduct(product: any) : Observable<any> {
  	return this.http.post(
  		'https://amazzon-test.firebaseio.com/products.json',
  		product
  	);
  }

  public deleteProduct(id: any) : Observable<any> {
    return this.http.delete(`https://amazzon-test.firebaseio.com/products/${id}.json`)
  }
  
  public updateProduct(id: any, product: any) : Observable<any> {
    return this.http.put(
      `https://amazzon-test.firebaseio.com/products/${id}.json`,
      product
    );
  }

}
