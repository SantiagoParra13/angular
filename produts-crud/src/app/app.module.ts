import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductModule } from './product/product.module';
import { AddEditProductModule } from './product/add-edit-product/add-edit-product.module';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    AddEditProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
