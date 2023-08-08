import { Component } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css'],
})
export class ClasesComponent {
  alerta: string = 'alert-danger';
  loading: boolean = false;

  propiedades: boolean = true;

  ejecutar() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false,3000
    });
  }
}
