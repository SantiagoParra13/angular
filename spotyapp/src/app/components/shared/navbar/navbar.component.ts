import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor (private spotify:SpotifyService){


  }
  artistas:any[]=[];

  buscarse(termino:string){
    console.log(termino)
      this.spotify.getArtistas(termino)
                  .subscribe((data:any)=>{
                    console.log(data);

                    this.artistas=data;
                  })
    };
}
