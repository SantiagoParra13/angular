import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';

//prime
import { ProductComponent } from './product.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AddEditProductModule } from './add-edit-product/add-edit-product.module';
import { ToastModule } from 'primeng/toast';
import {MessageService} from 'primeng/api'

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    AddEditProductModule,
    ToastModule,
    
  ],
  exports: [ProductComponent],
  providers:[
    MessageService
  ]
})
export class ProductModule {}
