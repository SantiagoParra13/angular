import { Component } from '@angular/core';
import { ApiRickService } from 'src/app/services/api-rick.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  busqueda: string = ''; // Término de búsqueda ingresado en el input
  personajes: any[] = []; // Almacena los personajes encontrados

  constructor(private api: ApiRickService) { }

  buscarPersonajes(termino:string) {
    console.log(termino)
    this.api.buscarPersonajes(termino).subscribe((data: any) => {
      this.personajes = data.results;
      console.log(this.personajes)
    });
  }
}