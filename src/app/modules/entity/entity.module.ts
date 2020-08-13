import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ent1Component } from './components/ent1/ent1.component';
import { Ent2Component } from './components/ent2/ent2.component';


@NgModule({
  declarations: [
  	Ent1Component,
  	Ent2Component
  ],
  imports: [
    CommonModule
  ], 
  exports: [
  	Ent1Component,
  	Ent2Component
  ]
})
export class EntityModule { }
