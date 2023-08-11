import { Component } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  buscar:any =""; 
  peliculas: any[] = [];

  constructor(public _ps:PeliculasService){

  }

  buscarPelicula(){
  if(this.buscar.length == 0){
    return;
  }
  this._ps.buscarPelicula(this.buscar).subscribe((peliculasEncontradas: any[]) => {
    this.peliculas = peliculasEncontradas;
    console.log(this.peliculas);
  });

    
  }



}
