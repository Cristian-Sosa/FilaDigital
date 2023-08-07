import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent, ToastComponent } from './components';


@NgModule({
  declarations: [ToastComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [ToastComponent, LoaderComponent],
})
export class LoaderModule {}
