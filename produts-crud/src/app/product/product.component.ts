import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from './productservice.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  displayAddModule:boolean=false;

  constructor(private service: ProductserviceService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.service.getProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products)
    });
  }

  showAddModule(){
    this.displayAddModule = true;
  }

  hideAddModal(isClosed:boolean){
    this.displayAddModule = !isClosed;
  }
}
