import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { TableModule } from 'primeng/table';

//prime
import { ProductComponent } from './product.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AddEditProductModule } from "./add-edit-product/add-edit-product.module";




@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule, HttpClientModule, TableModule,ButtonModule,DialogModule,BrowserAnimationsModule,AddEditProductModule],
  exports: [ProductComponent],
})
export class ProductModule {}
