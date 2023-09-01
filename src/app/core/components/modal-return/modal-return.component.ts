import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-return',
  templateUrl: './modal-return.component.html',
  styleUrls: ['./modal-return.component.sass'],
})
export class ModalReturnComponent {
  @Output() isReset = new EventEmitter<boolean>();

  isCancelar = (isReset: boolean): void => {
    this.isReset.emit(isReset);
  };
}
