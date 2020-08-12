import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prod1Component } from './components/prod1/prod1.component';
import { Prod2Component } from './components/prod2/prod2.component';
import { Prod3Component } from './components/prod3/prod3.component';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
  	Prod1Component,
  	Prod2Component,
  	Prod3Component
  ],
  imports: [
    CommonModule,
    UserModule
  ],
  exports: [
  	Prod1Component,
  	Prod2Component,
  	Prod3Component
  ]
})
export class ProductModule { }
