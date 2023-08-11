import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(pelicula: any, poster:boolean=false): SafeUrl {
    let url = 'https://image.tmdb.org/t/p/w300';

    if(poster=true){
      return this.sanitizer.bypassSecurityTrustUrl(`${url}${pelicula.poster_path}`);
    }

    if (pelicula.backdrop_path) {
      return this.sanitizer.bypassSecurityTrustUrl(`${url}${pelicula.backdrop_path}`);
    } else if (pelicula.poster_path) {
      return this.sanitizer.bypassSecurityTrustUrl(`${url}${pelicula.poster_path}`);
    } else {
      return 'assets/img/no-image.png';
    }
  }
}
