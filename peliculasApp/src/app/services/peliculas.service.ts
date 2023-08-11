import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from "@angular/common/http"; 
import {Observable,  map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey:string = "114fa119cd8b29a004233fd34015c6b1";
  private urlMovieDb:string="https://api.themoviedb.org/3";
  peliculas:any[]=[];



  constructor(private jsonp:HttpClientJsonpModule,
              private http:HttpClient) { }

getPopulares(): Observable<any>{
  const url = `${this.urlMovieDb}/movie/popular?api_key=${this.apiKey}`;
  return this.http.get(url).pipe(
    map((res: any) => res.results) // Utiliza pipe y map de rxjs/operators
  );
}


getVistos(): Observable<any>{
  const url = `${this.urlMovieDb}/person/popular?api_key=${this.apiKey}`;
  return this.http.get(url).pipe(
    map((res: any) => res.results) // Utiliza pipe y map de rxjs/operators
  );
}

buscarPelicula(texto: string) {
  let url = `${this.urlMovieDb}/search/movie?query=${texto}&include_adult=false&api_key=${this.apiKey}&language=es`;

 
  return this.http.get(url).pipe(
    map((res: any) => {
  this.peliculas=res.results;
  console.log(this.peliculas)
    return  res.results

    
})
  );
} 

getCartelera(){
  let desde = new Date();
  let hasta = new Date();
  hasta.setDate(hasta.getDate() + 7);


  let desdeStr = `${desde.getFullYear() }-${desde.getMonth()+ 1}-${desde.getDate()}`
  let hastaStr = `${hasta.getFullYear() }-${hasta.getMonth()+ 1}-${hasta.getDate()}`

  let url = `${this.urlMovieDb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&language=es`;

  return this.http.get(url).pipe(
    map((res: any) => res)
  );

 
}
getPelicula(id:string){
  let url = `${this.urlMovieDb}/movie/${id}?&api_key=${this.apiKey}&language=es`;

  return this.http.get(url).pipe(
    map((res: any) => res)
  );

};

}
