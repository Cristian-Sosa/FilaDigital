import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderModule } from 'src/app/shared';
import { FilaDigitalComponent } from '../../pages';
import { TurneroRoutingModule } from './turnero-routing.module';
import { CarrouselComponent, ModalReturnComponent, TurneroDigitalComponent } from '../../components';
import { ButtonsModule } from 'src/app/shared/buttons.module';

@NgModule({
  declarations: [FilaDigitalComponent, TurneroDigitalComponent, CarrouselComponent, ModalReturnComponent],
  imports: [CommonModule, TurneroRoutingModule, LoaderModule, ButtonsModule],
  exports: [FilaDigitalComponent],
})
export class TurneroModule {}
