import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { Test1Component } from './components/test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
