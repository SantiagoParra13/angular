import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodpageComponent } from './components/foodpage/foodpage.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'search/:item',component:HomeComponent},
  {path: 'tag/:tags',component:HomeComponent},
  {path: 'food/:id',component:FoodpageComponent},
  {path:'**', pathMatch:'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
