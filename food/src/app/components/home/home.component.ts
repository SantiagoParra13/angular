import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/sevices/food/food.service';
import { foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: foods[] = [];

  constructor(private food: FoodService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['item']) {
        this.foods = this.food.getAll().filter((food) => food.name.toLowerCase().includes(params['item'].toLowerCase()));
        console.log(this.foods)
      }else if(params['tags']){
        this.foods=this.food.getAllFoodByTag(params['tags'])
      }
       else {
        this.foods = this.food.getAll();
      }
    });
  }
}
