import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
  	HomeComponent
	],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class HomeModule { }
