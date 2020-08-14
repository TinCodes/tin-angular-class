import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { Test1Component } from './components/test1/test1.component';
import { FormsModule } from '@angular/forms';

import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { AdminModule } from './modules/admin/admin.module';
import { EntityModule } from './modules/entity/entity.module';
import { TestPipe } from './pipes/test.pipe';
import { ExpPipe } from './pipes/exp.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    TestPipe,
    ExpPipe,
    PurePipe,
    ImpurePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    ProductModule,

    AdminModule,
    EntityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
