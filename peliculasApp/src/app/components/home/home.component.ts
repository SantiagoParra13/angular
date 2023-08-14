import { Component } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  populares:any;

  constructor (private _ps:PeliculasService){

    this._ps.getPopulares().subscribe(data => {
      console.log(data)
    this.populares=data;})
  }

}
