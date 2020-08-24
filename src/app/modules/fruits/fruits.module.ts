import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { CherryComponent } from './components/cherry/cherry.component';
import { MetalCherryComponent } from './components/metal-cherry/metal-cherry.component';
import { GlowCherryComponent } from './components/glow-cherry/glow-cherry.component';


@NgModule({
  declarations: [
  	CherryComponent,
  	MetalCherryComponent,
  	GlowCherryComponent
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule
  ]
})
export class FruitsModule { }
