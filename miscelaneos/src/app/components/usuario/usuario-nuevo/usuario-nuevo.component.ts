import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent {

  constructor(private router: ActivatedRoute) {
    const parentRoute = this.router.parent;

    if (parentRoute) {
      parentRoute.params.subscribe(parametros => {
        console.log("Ruta Hija");
        console.log(parametros);
      });
    }
  }

}
