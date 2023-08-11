import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent {
  pelicula: any;

  constructor(public _ps: PeliculasService, public route: ActivatedRoute) {
    this.route.params.subscribe((parametro) => {
      console.log(parametro);

      this._ps.getPelicula(parametro['id']).subscribe(resultados =>{
        console.log(resultados)
        this.pelicula=resultados;
      })
    });
  }
}
