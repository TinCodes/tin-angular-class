import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

	productForm: FormGroup;

	// nameControl = new FormControl();
	// Form Control is not suitable for lots of inputs

  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {

  	this.productForm = this.formBuilder.group({
  		title: '',
			description: ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(20) ]],
			imageUrl: [''],
			ownerId: [''],
			price: ['']
  	});

  }

  onSend(): void {
  	console.log('Form group: ', this.productForm.value)
    this.productService.addProduct(this.productForm.value).subscribe(res => {
      console.log('POST Response: ', res)
    });
  }

  // onSend() : void {
  // 	console.log('Control: ', this.nameControl);
  // 	console.log('Value: ', this.nameControl.value);
  // }

}
