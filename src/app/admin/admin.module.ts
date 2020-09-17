import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input"

import { GradePipe } from '../shared/directives/grades.pipe';
import { StudentService } from '../shared/services/student.service';
@NgModule({
  declarations: [
  	AdminComponent,
  	HeaderComponent,
    StudentComponent,
    SidenavComponent,
    GradePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
  	StudentService
  ]
})
export class AdminModule { }