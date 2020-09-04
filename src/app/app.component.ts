import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from './services/product.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'curso-angular';

  products = [];
  calor = [];
  frio = [];

  productForm: FormGroup;

  productSub: Subscription;
  productGetSub: Subscription;
  productPutSub: Subscription;
  productDelSub: Subscription;

  editId : any;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.loadProducts();
  }

  loadProducts() : void {
    this.products = [];
    this.calor = [];
    this.frio = [];
    this.productGetSub = this.productService.getProducts().subscribe(res => {
      console.log("Response: ", res);
      console.log("Response (Array): ", Object.entries(res));

      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
      this.calor = this.products.filter(p => p.type === "calor");       
      this.frio = this.products.filter(p => p.type === "frio");       
      console.log('frio', this.frio);
      console.log('calor', this.calor);
      console.log('all', this.products);
    });
  }

  onCreate(): void {
    console.log('Form group: ', this.productForm.value)
    
    this.productSub = this.productService.addProduct(this.productForm.value).subscribe(
      res => {
        console.log('POST Response: ', res);
        this.loadProducts();
      },
      err => {
        console.log("SERVER ERROR: ", err);
      }
    );
  }

  onEdit(product) : void {
    console.log("Current Product: ", product);

    this.editId = product.id;
    this.productForm.patchValue({
      name: product.name,
      size: product.size,
      stock: product.stock,
      type: product.type,
      urlImage: product.urlImage
    });
  }

  onUpdate() : void {
    this.productPutSub = this.productService.updateProduct(this.editId ,this.productForm.value).subscribe(res => {
      console.log("UPDATE Response: ", res);
      this.loadProducts();
    },
    err => {
      console.log("UPDATE Error: ", err)
    });
  }

  onDelete(id: any) : void {
    // console.log("Item ID: ", id);
    this.productDelSub = this.productService.deleteProduct(id).subscribe(res => {
      console.log("DELETE Response: ", res);
      this.loadProducts();
    },
    err => {
      console.log("DELETE Error: ", err)
    });
  }


  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      size: [''],
      stock: [''],
      type: ['', [Validators.required]],
      urlImage: ['']
    });

  }

  ngOnDestroy(): void {
    this.productSub ? this.productSub.unsubscribe() : '';
    this.productGetSub ? this.productGetSub.unsubscribe() : '';
    this.productDelSub ? this.productDelSub.unsubscribe() : '';
    this.productPutSub ? this.productPutSub.unsubscribe() : '';

  }

}