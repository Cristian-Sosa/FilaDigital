import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardAdministradorComponent } from '../../pages/dashboard-administrador/dashboard-administrador.component';
import { DashboardMarketingComponent } from '../../pages/dashboard-marketing/dashboard-marketing.component';
import { DashboardMarketingFormComponent } from '../../components';
import { ButtonsModule } from 'src/app/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardMarketingOfertasComponent } from '../../components/dashboard-marketing-ofertas/dashboard-marketing-ofertas.component';
import { DashboardMarketingActionsComponent } from '../../components/dashboard-marketing-actions/dashboard-marketing-actions.component';
import { CanvasJS,CanvasJSChart } from 'src/assets/canvasjs.angular.component';
import { GraficoComponent } from '../../components/admin-dashboard-tabla/admin-dashboard-tabla.component';

@NgModule({
  declarations: [
    DashboardAdministradorComponent,
    DashboardMarketingComponent,
    DashboardMarketingFormComponent,
    DashboardMarketingOfertasComponent,
    DashboardMarketingActionsComponent,
    CanvasJSChart,
    GraficoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    ButtonsModule,
  ],
  exports: [DashboardAdministradorComponent, DashboardMarketingComponent],
})
export class DashboardModule {}
