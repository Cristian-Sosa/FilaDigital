import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurneroRoutingModule } from './turnero-routing.module';
import { TurneroComponent } from '../../pages';
import { ButtonsModule } from 'src/app/shared';
import { CarrouselComponent, ModalReturnComponent, TurneroDigitalComponent } from '../../components';

@NgModule({
  declarations: [TurneroComponent, ModalReturnComponent, TurneroDigitalComponent, CarrouselComponent],
  imports: [CommonModule, TurneroRoutingModule, ButtonsModule],
  exports: [TurneroComponent],
})
export class TurneroModule {}
