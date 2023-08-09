import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

interface Usuario {
  nombreCompleto: {
    nombre: string;
    apellido: string;
  };
  correo: string;
  pasatiempos:String[];
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent {
  forma: FormGroup;

  usuario: Usuario = {
    nombreCompleto: {
      nombre: 'Santiago',
      apellido: 'Vidal',
    },
    correo: 'santiago@gmail.com',
    pasatiempos:["Correr","Dormir","Comer"]
  };

  constructor() {
    console.log(this.usuario);

    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl('', [
                                      Validators.required,
                                      Validators.minLength(3),
        ]),
        apellido: new FormControl('', Validators.required),
      }),

      correo: new FormControl('', [
                                    Validators.required,
                                    Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
      ]),
      'pasatiempos': new FormArray([
        new FormControl
      ])
    });

     // this.forma.setValue(this.usuario);
  }

  agregarPasatiempo(){
    this.forma.controls
  }


  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
  }


}
