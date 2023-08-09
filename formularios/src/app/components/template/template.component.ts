import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Usuario {
  nombre: string;
  apellido: null;
  correo: null;
  pais: string;
  sexo:String;
  acepta:boolean;
  
}


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})




export class TemplateComponent {

  usuario:Usuario={
    nombre:'',
    apellido:null,
    correo:null,
    pais:'',
    sexo:'Hombre',
    acepta:false
  }

  pais=[{
    codigo:"CRI",
    nombre:"Costa Rica"
  },
{
  codigo:"ESP",
  nombre:"España"
}]
  constructor(){}
  guardar(forma: NgForm) {
    console.log(forma);
  }

  sexos:string[]=["Hombre","Mujer","GAY"]
}
