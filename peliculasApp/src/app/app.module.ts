import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule , HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { PeliculasService } from "./services/peliculas.service";

import { APP_ROUTING } from "./app.routes";


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './components/home/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusquedaComponent,
    NavbarComponent,
    PeliculaComponent,
    PeliculaImagenPipe,
    GaleriaComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientJsonpModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
