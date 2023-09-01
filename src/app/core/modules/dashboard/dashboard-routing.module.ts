import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMarketingComponent } from '../../pages/dashboard-marketing/dashboard-marketing.component';
import { DashboardAdministradorComponent } from '../../pages/dashboard-administrador/dashboard-administrador.component';
import { GuardAdminGuard, MktGuard } from 'src/app/shared';

const routes: Routes = [
  { path: 'marketing', component: DashboardMarketingComponent, canActivate: [MktGuard] },
  { path: 'admin', component: DashboardAdministradorComponent, canActivate: [GuardAdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
