import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css'],
})
export class AddEditProductComponent {
  @Input() displayAddModule: boolean = true;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  productForm = this.fb.group({
    title: ['', Validators.required],
    price: [0, Validators.required],
    description: [''],
    category: ['', Validators.required],
    image: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}
  closeModal() {
    this.clickClose.emit(true);
  }

  AddProduct() {}
}
