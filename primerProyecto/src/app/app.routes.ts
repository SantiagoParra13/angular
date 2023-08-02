import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; // Importa tus componentes aquí
import {HeroesComponent} from './components/heroes/heroes.component'
import {AboutComponent} from './components/about/about.component'
import {VerMasComponent} from './components/ver-mas/ver-mas.component'
import {BuscadorComponent} from './components/buscador/buscador.component'

const appRoutes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'heroes', component:HeroesComponent},
  { path: 'about', component:AboutComponent},
  {path: 'ver-mas/:id', component:VerMasComponent},
  {path: 'buscar/:termino', component:BuscadorComponent},
  {path:'**', pathMatch: 'full', redirectTo:'home'} // Ruta para la página de inicio
   // Ruta para la página de inicio
   // Ruta para la página de inicio

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
