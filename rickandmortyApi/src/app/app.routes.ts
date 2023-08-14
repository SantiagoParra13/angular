import { Routes,RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component"
import { DetailsComponent } from './components/details/details.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [

    {path:'home',component:HomeComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'episodios',component:EpisodiosComponent},
    {path:'search',component:SearchComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'},
    
]

export const APP_ROUTING = RouterModule.forRoot(routes);
