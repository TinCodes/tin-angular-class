import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { FruitsModule } from './modules/fruits/fruits.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { Home1Component } from './components/home1/home1.component';
import { Home2Component } from './components/home2/home2.component';

import { AppRouting } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AboutComponent,
    Home1Component,
    Home2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FruitsModule,
    AppRouting,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
