import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {Product  } from "./product";


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>("https://fakestoreapi.com/products?sort=desc")
  }

  sveProduct(posData:any, selectedPdtt:any):Observable<any>{
    if(!selectedPdtt){
      return this.http.post("https://fakestoreapi.com/products",posData)

    } else {
      return this.http.put(`https://fakestoreapi.com/products/${selectedPdtt.id }`,posData)
    }
  }
}
