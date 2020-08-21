import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { CherryComponent } from './components/cherry/cherry.component';


@NgModule({
  declarations: [
  	CherryComponent
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule
  ]
})
export class FruitsModule { }
