import { Component } from '@angular/core';
import { foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/sevices/food/food.service';
import { CartService } from 'src/app/sevices/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css'],
})
export class FoodpageComponent {
  food!: foods;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService:CartService,
    private router:Router
  ) {
    activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.food = foodService.getFoodById(params['id']);
      }
    });
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
