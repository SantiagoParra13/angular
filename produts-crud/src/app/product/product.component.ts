// Importación de módulos y dependencias necesarias
import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from './productservice.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // Definición de propiedades
  products: Product[] = []; // Lista de productos
  displayAddModule: boolean = false; // Controla la visibilidad del módulo de agregar/editar
  selectedProduct: any = null; // Producto seleccionado (para editar)

  // Constructor del componente con inyección de dependencias
  constructor(private service: ProductserviceService) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.getProducts(); // Llama al método para obtener la lista de productos
  }

  // Método para obtener la lista de productos desde el servicio
  getProducts() {
    this.service.getProducts().subscribe((res) => {
      this.products = res; // Asigna la lista de productos al arreglo local
      console.log(this.products); // Muestra la lista de productos en la consola
    });
  }

  // Método para mostrar el módulo de agregar producto
  showAddModule() {
    this.displayAddModule = true; // Hace visible el módulo de agregar/editar
    this.selectedProduct = null; // Limpia la selección de producto (para agregar uno nuevo)
  }

  // Método para ocultar el módulo de agregar/editar producto
  hideAddModal(isClosed: boolean) {
    this.displayAddModule = !isClosed; // Oculta el módulo según el valor de isClosed
  }

  // Método para agregar un nuevo producto a la lista
  saveProductToList(newData: any) {
    if(newData.id === this.selectedProduct.id){
      const productIndex = this.products.findIndex(data => data.id === newData.id)
      this.products[productIndex]=newData
    }else
    {

      this.products.unshift(newData); // Agrega el nuevo producto en la parte superior de la lista
    }
    //this.getProducts();
  }

  // Método para mostrar el módulo de edición de producto
  showEditModal(product: Product) {
    this.displayAddModule = true; // Hace visible el módulo de agregar/editar
    this.selectedProduct = product; // Establece el producto seleccionado para edición
  }
}
