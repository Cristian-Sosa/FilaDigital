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
      text: '',
      show: false,
    };
    this._toast = new BehaviorSubject(this.toast);
  }

  getToastObservable = (): Observable<IToast> => this._toast.asObservable();

  setToastState = (newState: IToast): void => {
    this.toast = newState;
    this._toast.next(this.toast);

    setTimeout(() => {
      this.toast = {
        text: '',
        show: false,
      };
    this._toast.next(this.toast);
    }, 5000)
  };
}
