import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ConstraseñaPipe } from './pipes/constraseña.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ConstraseñaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
