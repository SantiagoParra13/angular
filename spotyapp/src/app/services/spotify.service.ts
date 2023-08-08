import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer  BQBdW3cOtIWiPKiEPCdhM1soZlpBwq7QuN70pb3y2-EZwFepJsKchR3QHU3RrxQYrtRxi3iWpzfPFXobFxqSlPwPCj1TlsoAfwcyKaDu8Sr4fpTnCoo',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => {
        return data.albums.items;
      })
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => {
        return data.artists.items;
      })
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    //.pipe( map((data: any) => {
      //  return data.artists.items;
      }

      getTopTracks(id:string){
        return this.getQuery(`artists/${id}/top-tracks?country=us`)
        .pipe( map((data:any) => data['tracks']));

      }
  }

