// Importación de módulos y dependencias necesarias
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductserviceService } from '../productservice.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css'],
})
export class AddEditProductComponent implements OnChanges {
  // Definición de propiedades de entrada y salida
  @Input() displayAddModule: boolean = true; // Propiedad para controlar la visibilidad del módulo
  @Input() selectedProduct: any = null; // Propiedad que recibe el producto seleccionado
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>(); // Evento para cerrar el módulo
  @Output() clickAdd: EventEmitter<any> = new EventEmitter<any>(); // Evento para agregar un producto
  modalType="Añadir";

  // Definición del formulario reactivo
  productForm = this.fb.group({
    title: ['', Validators.required],
    price: [0, Validators.required],
    description: [''],
    category: ['', Validators.required],
    image: ['', Validators.required],
  });

  // Método que se ejecuta cuando cambian las propiedades de entrada
  ngOnChanges(): void {
    if (this.selectedProduct) {
     this.modalType = 'Editar'
      this.productForm.patchValue(this.selectedProduct);
    } else {

      // Si no hay producto seleccionado, restablece el formulario a sus valores iniciales
      this.productForm.reset();
      this.modalType = 'Añadir'
    }
  }

  // Constructor del componente con inyección de dependencias
  constructor(
    private fb: FormBuilder,
    private productService: ProductserviceService,
    private messageService: MessageService
  ) {}

  // Método para cerrar el módulo
  closeModal() {
    this.productForm.reset(); // Restablece el formulario
    this.clickClose.emit(true); // Emite el evento para cerrar el módulo
  }

  // Método para agregar un producto
  AddProduct() {
    // Llama al servicio para guardar el producto
    this.productService.sveProduct(this.productForm.value, this.selectedProduct).subscribe(
      (res) => {
        // Emite el evento para agregar un producto
        this.clickAdd.emit(res);
        // Cierra el módulo y muestra un mensaje de éxito
        this.closeModal();
        const msg= this.modalType === 'Añadir' ? 'Product Añadido' : 'Producto Actualizado'
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: msg,
        });
      },
      (error) => {
        // Muestra un mensaje de error en caso de fallo
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error,
        });
        console.log('Ocurrió un error');
      }
    );
  }
}
