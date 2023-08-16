import { Component } from '@angular/core';
import { foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/sevices/food/food.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css'],
})
export class FoodpageComponent {
  food!: foods;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService
  ) {
    activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.food = foodService.getFoodById(params['id']);
      }
    });
  }
}
