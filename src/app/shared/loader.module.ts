import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent, ToastComponent } from './components';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [ToastComponent, LoaderComponent, ToolbarComponent, FooterComponent],
  imports: [CommonModule],
  exports: [ToastComponent, LoaderComponent],
})
export class LoaderModule {}
