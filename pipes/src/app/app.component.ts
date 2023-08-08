import { Component } from '@angular/core';
import {registerLocaleData} from "@angular/common";
import locales from "@angular/common/locales/es";

registerLocaleData(locales);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Santiago Vidal';
  nombre2 = 'saNtiAgo ViDaL';

  arreglo:number[] =[1,2,3,4,5,6,7,8,9,10 ];

  PI:number=Math.PI;

  porcentaje:number=0.1234;

  salario:number=12345;

  fecha:Date = new Date;

  idiona:string= 'es';

  activar:boolean=true;

  heroe:{}={
    "nombre": "Juan",
    "alias": "Juani",
    "edad": 30,
    "direccion": {
      "calle": "Calle Principal",
      "casa": "123"
    }
  };


 
  valorPromesa = new Promise <string>((resolve) =>{

    setTimeout(()=>{
      resolve("Si llego la Data, Mano")
    },5000)
  })


  videoUrl:string='https://www.youtube.com/embed/iLCQf_J65ZQ';
 
  
}
