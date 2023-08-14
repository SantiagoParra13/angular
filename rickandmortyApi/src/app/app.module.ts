import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { APP_ROUTING } from "./app.routes";
import { ApiRickService } from './services/api-rick.service';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { SearchComponent } from './components/search/search.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    NavbarComponent,
    PersonajesComponent,
    EpisodiosComponent,
    SearchComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [ApiRickService],
  bootstrap: [AppComponent]
})
export class AppModule { }
