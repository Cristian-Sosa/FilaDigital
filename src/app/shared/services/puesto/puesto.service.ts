import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ToolbarService } from '../toolbar';

@Injectable({
  providedIn: 'root',
})
export class PuestoService {
  private puesto: number | null = null;
  private _puesto: BehaviorSubject<number | null>;

  constructor(private toolbarService: ToolbarService) {
    this._puesto = new BehaviorSubject(this.puesto);
  }

  getObservablePuesto = (): Observable<number | null> =>
    this._puesto.asObservable();

  getCurrentPuesto = (): number | null => this.puesto;

  setPuesto = (puesto: string): void => {
    if (puesto) {
      switch (puesto) {
        case '99':
          this.puesto = 1;
          this.toolbarService.setToolbarTitle('Carnicería - Alto Verde')
          break;
        case '100':
          this.puesto = 2;
          this.toolbarService.setToolbarTitle('Fiambrería - Alto Verde')
          break;

        default:
          break;
      }
      this._puesto.next(this.puesto);
    }
  };
}
