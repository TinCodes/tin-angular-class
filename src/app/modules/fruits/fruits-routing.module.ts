import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CherryComponent } from './components/cherry/cherry.component';
import { MetalCherryComponent } from './components/metal-cherry/metal-cherry.component';
import { GlowCherryComponent } from './components/glow-cherry/glow-cherry.component';

const routes: Routes = [
	{ 
		path: '',
	 	component: CherryComponent,
	 	children: [
	 		{ path: 'metal-cherry', component: MetalCherryComponent },
	 		{ path: 'glow-cherry', component: GlowCherryComponent }
	 	]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }
