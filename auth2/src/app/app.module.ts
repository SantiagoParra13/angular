import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

import { AuthModule } from '@auth0/auth0-angular';

import { AuthguardService } from './services/authguard.service';

import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AuthModule.forRoot({
      domain: 'dev-44o2hdxkw6setmf5.us.auth0.com',
      clientId: '07sbcEyRXBfbYMiZxgZPSz9M9RwL3B9r',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
