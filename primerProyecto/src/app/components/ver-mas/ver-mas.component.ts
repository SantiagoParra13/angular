import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Router } from "@angular/router";
import { Heroe, HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
})
export class VerMasComponent {

  heroes:Heroe[]=[];
  img:any;
  heroe:any = {};

  constructor (private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService,
               private regresar:Router
               ){

    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getverMas(params['id'])
      console.log(this.heroe);

    })

  }

  ngOnInit(){
    this.heroes = this._heroesService.getHeores();
    this.imgagen();
   
  }


  volver() {
    this.regresar.navigate(['/heroes'],)
  }

  imgagen() {
    if (this.heroe.casa === 'DC Comics') {
        this.img = 'assets/img/dc.png';
    } else if (this.heroe.casa === 'Marvel Comics') {
        this.img = 'assets/img/marvel.png';
    }
}


  

}
