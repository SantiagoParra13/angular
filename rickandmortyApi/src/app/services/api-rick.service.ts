import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from "@angular/common/http"; 
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiRickService {

  constructor(private http:HttpClient) { }


  private apiKey:string ="https://rickandmortyapi.com/api/";
  

  getPersonajes():Observable<any>{
    const url = `${this.apiKey}/character`;

   return this.http.get(url).pipe(map((res:any)=> res.results))
  }

  getPeronajeId(id:string){
    const url = `${this.apiKey}/character/${id}`

    return this.http.get(url).pipe(map((res:any)=> res))
  }

  buscarPersonajes(parametro:string){
    const url=`${this.apiKey}/character/?name=${parametro}`
    return this.http.get(url).pipe(map((res:any)=> res))

  }

  buscarEpisodios(parametro:string){
    const url=`${this.apiKey}/episode/${parametro}`
    return this.http.get(url).pipe(map((res:any)=> res))

  
  }

  getEpisodes(){
    const url = `${this.apiKey}/episode`

    return this.http.get(url).pipe(map((res:any) => res.results))


  }
  getCharacterByUrl(characterUrl: string): Observable<any> {
    return this.http.get(characterUrl);
  }


  getCharactersByPage(pageNum: number): Observable<any> {
    const url = `${this.apiKey}/character/?page=${pageNum}`;
    return this.http.get(url).pipe(map((res: any) => res));
  }
  
}

