import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { Test1Component } from './components/test1/test1.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from './modules/user/user.module';
import { UserComponent } from './modules/user/components/user/user.component';
import { ProductModule } from './modules/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
