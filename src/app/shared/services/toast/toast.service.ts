import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IToast } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toast: IToast;
  private _toast: BehaviorSubject<IToast>;

  constructor() {
    this.toast = {
      text: 'Debes ingresar tu turno',
      icon: {
        type: 'exclamation',
        route: '/assets/icons/exclamation-circle.svg'
      },
      show: false,
    };
    this._toast = new BehaviorSubject(this.toast);
  }

  getToastObservable = (): Observable<IToast> =>
    this._toast.asObservable();

  setToastState = (newState: IToast): void => {
    switch (newState.icon.type) {
      case 'bell':
        this.toast.icon.route = '/assets/icons/bell.svg';
        break;

      case 'exclamation':
        this.toast.icon.route = '/assets/icons/exclamation-circle.svg';
        break;

      default:
        this.toast.icon.route = '/assets/icons/bell.svg';
        break;
    }

    this.toast = newState;
    this._toast.next(this.toast);
  };
}
