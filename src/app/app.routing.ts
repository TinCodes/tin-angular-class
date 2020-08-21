import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Home1Component } from './components/home1/home1.component';
import { Home2Component } from './components/home2/home2.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [
	{ 
		path: 'home',
		component: HomeComponent,
		children: [
			{ path: 'home1', component: Home1Component },
			{ path: 'home2', component: Home2Component }
		] 
	},
	{ path: 'admin', component: AdminComponent },
	{ path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
