import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.sass'],
})
export class PrimaryButtonComponent {
  @Input() button: IButton = {
    text: 'Enviar',
    disabled: true,
    type: 'button'
  }
}

export interface IButton {
  text: string;
  disabled: boolean;
  type: 'button' | 'submit' | 'menu' | 'reset';
} 
