import { Component } from '@angular/core';
import { ApiRickService } from 'src/app/services/api-rick.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  busqueda: string = ''; // Término de búsqueda ingresado en el input
  personajes: any[] = []; // Almacena los personajes encontrados
  episodios: any[] = []; // Almacena los personajes encontrados
  loading:boolean = false;

  constructor(private api: ApiRickService) { }

  buscarPersonajes(termino:string) {
    console.log(termino)
  this.loading=true;

    this.api.buscarPersonajes(termino).subscribe((data: any) => {
      this.personajes = data.results;
      console.log(this.personajes)



      this.api.buscarEpisodios(termino).subscribe((res:any) =>{
        this.episodios=res;
        console.log(this.episodios)
      })


    });
    this.loading=false;

  }
}
