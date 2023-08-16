import { Injectable } from '@angular/core';
import {foods} from '../../components/shared/models/food'
import {Tag} from '../../components/shared/models/tag'

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAllFoodByTag(tag:string):foods[]{
  return tag == 'ALL'? this.getAll() : 
                                      this.getAll().filter(food => food.tags?.includes(tag))
}

getFoodById(id:number): foods{
  return this.getAll().find(food => food.id == id)!;

}


getAllTag():Tag[]{
  return [
    {name: 'ALL', count: 8},
    {name: 'comidaRapida', count: 6},
    {name: 'pizza', count: 1},
    {name: 'lunch', count: 4},
    {name: 'comidaLenta', count: 2},
    {name: 'hamburguesa', count: 1},
    {name: 'pasta', count: 1},
    {name: 'taco', count: 1},
    {name: 'soup', count: 1},
    {name: 'papas-fritas', count: 1},
    {name: 'lasaña', count: 1},


  ]
}

  getAll():foods[] {
    return [
      {
        id: 1,
        name: 'Pastas',
        cookTime: '20-50',
        price: 10,
        favorite: false,
        origins: ['italy','france'],
        star: 4.5,
        imageUrl: '/assets/img/food.jpg',
        tags: ['comidaLenta', 'pasta', 'lunch'],
      },
      {
        id: 2,
        name: 'Pastas con Camarón',
        cookTime: '15-25',
        price: 12,
        favorite: false,
        origins: ['france','holanda','piendamo'],
        star: 5.0,
        imageUrl: '/assets/img/food2.jpg',
        tags: ['comidaRapida', 'pasta', 'lunch'],
      },
      {
        id: 3,
        name: 'Tacos',
        cookTime: '5-10',
        price: 8,
        favorite: false,
        origins: ['mexico','singapur','filipinas'],
        star: 5.0,
        imageUrl: '/assets/img/food3.jpg',
        tags: ['comidaRapida', 'taco', 'lunch'],
      },
      {
        id: 4,
        name: 'Lasaña',
        cookTime: '30-40',
        price: 20,
        favorite: false,
        origins: ['italy','america','popayan'],
        star: 3.0,
        imageUrl: '/assets/img/food4.jpg',
        tags: ['comidaLenta', 'lasaña', 'lunch'],
      },
      {
        id: 5,
        name: 'Hamburguesa',
        cookTime: '10-15',
        price: 15,
        favorite: false,
        origins: ['america','medellin','france'],
        star: 5.0,
        imageUrl: '/assets/img/hamburguesa.jpg',
        tags: ['comidaRapida', 'hamburguesa', 'lunch'],
      },
      {
        id: 6,
        name: 'Papas Fritas',
        cookTime: '10-11',
        price: 8,
        favorite: false,
        origins: ['espain','marroco','indi'],
        star: 4.0,
        imageUrl: '/assets/img/patatas-fritas.jpg',
        tags: ['comidaRapida', 'papas-fritas', 'lunch'],
      },
      {
        id: 7,
        name: 'Pizza',
        cookTime: '8-10',
        price: 7,
        favorite: false,
        origins: ['italy','fance','mexico','colombia'],
        star: 4.0,
        imageUrl: '/assets/img/pizza.jpg',
        tags: ['comidaRapida', 'pizza', 'lunch'],
      },

      {
        id: 8,
        name: 'Soup',
        cookTime: '2-50',
        price: 5,
        favorite: false,
        origins: ['marroco','home'],
        star: 2.0,
        imageUrl: '/assets/img/soup.jpg',
        tags: ['comidaRapida','comidaLenta', 'soup', 'lunch'],
      },
    ];
  }
}
