import { Component, Input } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {

  vistos:any;
  constructor (private _ps:PeliculasService){

    this._ps.getVistos().subscribe(data=> {
      console.log(data)
      this.vistos=data; 
    })
  }
  

}
