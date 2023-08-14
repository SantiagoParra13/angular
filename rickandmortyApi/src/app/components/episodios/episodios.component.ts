import { Component } from '@angular/core';
import { ApiRickService } from 'src/app/services/api-rick.service';


@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent {
  loading:boolean = false;
  episodios:any[]=[]
  constructor(private api:ApiRickService){
this.loading=true
    this.api.getEpisodes().subscribe(res => {
      console.log(res)
    this.episodios=res})
  this.loading=false

  };
  }


