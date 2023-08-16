import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//starts
import { NgxStarsModule } from 'ngx-stars';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TagsComponent } from './components/tags/tags.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { FoodpageComponent } from './components/foodpage/foodpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStarsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
