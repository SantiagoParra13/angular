import { Component, Input } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FoodService } from 'src/app/sevices/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent?:string='center';

  tags?:Tag[]=[];

  constructor (private food:FoodService){}

  ngOnInit(){
    if(!this.foodPageTags)
    this.tags = this.food.getAllTag();
  }

}
