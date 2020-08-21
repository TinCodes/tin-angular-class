import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CherryComponent } from './components/cherry/cherry.component';

const routes: Routes = [
	{ path: '', component: CherryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }
