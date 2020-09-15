import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../shared/services/product.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  products = [];

	productForm: FormGroup;

  productSub: Subscription;
  productGetSub: Subscription;
  productPutSub: Subscription;
  productDelSub: Subscription;

  editId : any;

	// nameControl = new FormControl();
	// Form Control is not suitable for lots of inputs

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.loadProducts();
  }

  loadProducts() : void {
    this.products = [];
    const idUser = localStorage.getItem('userId')
    this.productGetSub = this.productService.getProductsById(idUser).subscribe(res => {
      // console.log("Response: ", res);
      // console.log("Response (Array): ", Object.entries(res));

      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
  }

  onCreate(): void {
  	console.log('Form group: ', this.productForm.value)
    
    this.productSub = this.productService.addProduct({
      ...this.productForm.value,
      ownerId: localStorage.getItem('userId')
    }).subscribe(
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
      title: product.title,
      description: product.description,
      imageUrl: product.imageUrl,
      ownerId: product.ownerId,
      price: product.price
    });
  }

  onUpdate() : void {
    this.productPutSub = this.productService.updateProduct(this.editId, {
      ...this.productForm.value,
      ownerId: localStorage.getItem('userId')
    }).subscribe(res => {
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
  		title: '',
			description: ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(20) ]],
			imageUrl: [''],
			ownerId: [''],
			price: ['']
  	});

  }

  ngOnDestroy(): void {
    this.productSub ? this.productSub.unsubscribe() : '';
    this.productGetSub ? this.productGetSub.unsubscribe() : '';
    this.productDelSub ? this.productDelSub.unsubscribe() : '';
    this.productPutSub ? this.productPutSub.unsubscribe() : '';

  }




  // onSend() : void {
  // 	console.log('Control: ', this.nameControl);
  // 	console.log('Value: ', this.nameControl.value);
  // }

}
