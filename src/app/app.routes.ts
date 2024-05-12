import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'busqueda',
    pathMatch: 'full',
  },
  {
    path: 'busqueda',
    loadComponent: () => import('./paginas/busqueda/busqueda.page').then( m => m.BusquedaPage)
  },
  {
    path: 'destinos',
    loadComponent: () => import('./paginas/destinos/destinos.page').then( m => m.DestinosPage)
  },
];
