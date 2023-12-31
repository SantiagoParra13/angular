import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css'],
})
export class ArtistaComponent {
artista:any ={  }
loading:boolean = false;
topTracks:any[]=[];


  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {

    this.route.params.subscribe((params) => {
      this.getArtista(params['id']);
      console.log(params);
      this.getTopTracks(params['id'])
    });
  }

  getArtista(id: string) { 
    this.loading=true;
    this.spotify.getArtista(id).subscribe(artista => {
      console.log(artista);
    this.artista=artista;
  this.loading=false;

  });
}

  getTopTracks(id:string){

    this.spotify.getTopTracks(id).subscribe (topTracks => {
                console.log(topTracks)
                this.topTracks=topTracks;
    })
}
}
