import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditProductComponent } from './add-edit-product.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';

import {  ReactiveFormsModule} from "@angular/forms";


//prime

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [AddEditProductComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule
  ],
  exports: [AddEditProductComponent],
})
export class AddEditProductModule {}
