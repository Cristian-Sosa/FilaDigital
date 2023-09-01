import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.sass'],
})
export class SecondaryButtonComponent {
  @Input() button: IButton = {
    text: 'Enviar',
    disabled: true,
    type: 'button',
  };
}
export interface IButton {
  text: string;
  disabled: boolean;
  type: 'button' | 'submit' | 'menu' | 'reset';
}
