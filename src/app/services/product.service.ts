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

}
