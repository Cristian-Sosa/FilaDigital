import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'turnero',
    children: [
      {
        path: 'AV/carniceria',
        loadChildren: () => import('./index').then((m) => m.InicioSesionModule),
      },
      {
        path: 'AV/fiambreria',
        loadChildren: () => import('./index').then((m) => m.InicioSesionModule),
      },
      {
        path: 'R20/carniceria',
        loadChildren: () => import('./index').then((m) => m.InicioSesionModule),
      },
      {
        path: 'R20/fiambreria',
        loadChildren: () => import('./index').then((m) => m.InicioSesionModule),
      },
    ],
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
  { path: '', redirectTo: '**', pathMatch: 'full' },
  {
    path: '404',
    loadChildren: () => import('./index').then((m) => m.InicioSesionModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
