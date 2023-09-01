import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InicioSesionRoutingModule } from './inicio-sesion-routing.module';
import { AuthComponent } from '../../pages';
import { AuthFormComponent } from '../../components';
import { ButtonsModule } from 'src/app/shared/buttons.module';

@NgModule({
  declarations: [AuthComponent, AuthFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InicioSesionRoutingModule,
    ButtonsModule,
  ],
  exports: [AuthComponent],
})
export class InicioSesionModule {}
