import { Component } from '@angular/core';
import { Empleados } from './models/empleados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employeeArray: Empleados[] = [
    { id: 1, name: 'santiago', country: 'Colombia' },
    { id: 2, name: 'Judas', country: 'PEru' },
    { id: 2, name: 'Pedro', country: 'India' },
  ];

  constructor() {
   
  }

  selectEmployee: Empleados = new Empleados();
  openEdit(employee:Empleados){
     this.selectEmployee=employee;
  }

  addOrEdit() {

     if(this.selectEmployee.id === 0){
      this.selectEmployee.id = this.employeeArray.length + 1;
   
      this.employeeArray.push(this.selectEmployee); 
     }
   

    this.selectEmployee=new Empleados();
  }


  delete(){
    if(confirm("Estas Seguro de querer eliminarlo?")){
      this.employeeArray = this.employeeArray.filter(x => x != this.selectEmployee);
    this.selectEmployee=new Empleados();
    }
  }
}
