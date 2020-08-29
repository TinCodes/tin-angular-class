import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card';

import { ProductService } from '../../services/product.service';

@NgModule({
  declarations: [
  	HomeComponent
	],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
  	ProductService
  ]
})
export class HomeModule { }
