import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts() : Observable<any> {
  	return this.http.get('https://tincannonica.firebaseio.com/products.json');
  }

  public addProduct(product: any) : Observable<any> {
  	return this.http.post(
  		'https://tincannonica.firebaseio.com/products.json',
  		product
  	);
  }

  public deleteProduct(id: any) : Observable<any> {
    return this.http.delete(`https://tincannonica.firebaseio.com/products/${id}.json`)
  }
  
  public updateProduct(id: any, product: any) : Observable<any> {
    return this.http.put(
      `https://tincannonica.firebaseio.com/products/${id}.json`,
      product
    );
  }

}
