import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./index').then((m) => m.AuthModule),
  },
  {
    path: 'turnero/99', loadChildren: () => import('./index').then((m) => m.TurneroModule),
  },
  {
    path: 'turnero/100', loadChildren: () => import('./index').then((m) => m.TurneroModule),
  },
  {
    path: 'dashboard', loadChildren: () => import('./index').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
