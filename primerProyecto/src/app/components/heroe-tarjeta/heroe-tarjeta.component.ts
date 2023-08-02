import { Component,OnInit, Input } from '@angular/core';
import { HeroesService,Heroe } from "../../services/heroes.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input () index: number=0;

  constructor(private _heroesService:HeroesService,
    private router:Router){}

  ngOnInit() {
    
  }

  verMas(){
    console.log(this.index)
    this.router.navigate(['/ver-mas',this.index])

   }
}
