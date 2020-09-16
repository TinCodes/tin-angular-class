import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

import { NgElseDirective } from '../shared/directives/ng-else.directive';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";


import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: LoginComponent}
];

@NgModule({
  declarations: [
  	LoginComponent,
  	NgElseDirective
	],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
  ]
})
export class LoginModule { }
