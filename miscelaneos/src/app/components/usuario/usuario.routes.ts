import { Routes } from '@angular/router';

import { UsuarioNuevoComponent } from './usuario-nuevo/usuario-nuevo.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';

export const USUARIO_ROUTES: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent },
  { path: 'editar', component: UsuarioEditarComponent },
  { path: 'detalle', component: UsuarioDetalleComponent },
];
