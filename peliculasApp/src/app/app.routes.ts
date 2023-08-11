import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

 const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'pelicul/:id/:pag', component: PeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(routes);


