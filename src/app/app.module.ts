import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionExpiredComponent } from './core/pages/session-expired/session-expired.component';
import { TurneroDigitalComponent } from './core/components/turnero-digital/turnero-digital.component';
import { CarrouselComponent } from './core/components/carrousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionExpiredComponent,
    TurneroDigitalComponent,
    CarrouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
