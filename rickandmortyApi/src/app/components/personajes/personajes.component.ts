import { Component, Input, HostListener,Inject,OnDestroy} from '@angular/core';
import { ApiRickService } from 'src/app/services/api-rick.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  @Input() items: any[] = [];
  personajes: any
  showButton: boolean = false;
  characters: any[] = [];
  currentPage: number = 1;
  maxPage = 42;
  charactersPerPage: number = 20;

  constructor(
    private api: ApiRickService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.api.getPersonajes().subscribe((data: any) => {
      console.log(data)
      this.personajes = data;
      this.loadCharacters();
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffSet || scrollTop) > 500;
  }

  onScrollTop() {
    this.document.documentElement.scrollTop = 0;
  }

  loadCharacters() {
    if (this.currentPage <= this.maxPage) {
      this.api.getCharactersByPage(this.currentPage)
        .subscribe((data: any) => {
          const newCharacters = data.results.slice(0, this.charactersPerPage);
          this.personajes = [...this.personajes, ...newCharacters];
          console.log(this.characters)
        });
    }
  }

  onScroll() {
    this.currentPage++;

    this.loadCharacters();
    console.log(this.loadCharacters())
  }
}
