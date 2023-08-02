import { Component,OnInit,Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

import { Heroe, HeroesService } from "../../services/heroes.service";



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {



  heroes:any[]=[];
  termino?:String

  constructor (private heroesService:HeroesService,
                private activatedRouet:ActivatedRoute,
                private router:Router

                 ){}

ngOnInit() {
  this.activatedRouet.params.subscribe(params =>{
    this.termino=params['termino']
    this.heroes = this.heroesService.buscarHeroes ( params['termino']);
    console.log(this.heroes);



    
  })
}


 }

