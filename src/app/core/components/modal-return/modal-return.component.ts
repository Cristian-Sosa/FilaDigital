import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-return',
  templateUrl: './modal-return.component.html',
  styleUrls: ['./modal-return.component.sass'],
})
export class ModalReturnComponent {
  @Output() isReturn = new EventEmitter<boolean>();

  isCancelar = (isReturn: boolean): void => {
    this.isReturn.emit(isReturn);
  };
}
