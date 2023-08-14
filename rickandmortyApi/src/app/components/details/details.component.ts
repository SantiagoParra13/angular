import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRickService } from 'src/app/services/api-rick.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  parametro:any;
  detalles:any;
  constructor(private api:ApiRickService,public route: ActivatedRoute){

    this.route.params.subscribe((parametro) =>{
      this.parametro=parametro
        console.log(parametro)
    })

    this.api.getPeronajeId(this.parametro['id']).subscribe(res =>{
      console.log(res)
      this.detalles=res
    })

   
  }

}
