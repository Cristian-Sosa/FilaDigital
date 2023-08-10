import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InicioSesionRoutingModule } from './inicio-sesion-routing.module';
import { AuthComponent } from '../../pages';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InicioSesionRoutingModule,
  ],
  exports: [AuthComponent],
})
export class InicioSesionModule {}
