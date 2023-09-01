import { TitleCasePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PuestoService {
  private puesto: number | null = null;
  private _puesto: BehaviorSubject<number | null>;

  private puestoName: string | null = null;
  private _puestoName: BehaviorSubject<string | null>;

  constructor() {
    this._puesto = new BehaviorSubject(this.puesto);
    this._puestoName = new BehaviorSubject(this.puestoName);
  }

  getObservablePuesto = (): Observable<number | null> =>
    this._puesto.asObservable();

  getCurrentPuesto = (): number | null => this.puesto;

  setPuesto = (puesto: string): void => {
    if (puesto) {
      switch (puesto.toLocaleLowerCase()) {
        case 'carniceria':
          this.puesto = 1;
          this.setPuestoName(puesto);
          break;
        case 'fiambreria':
          this.puesto = 2;
          this.setPuestoName(puesto);
          break;

        default:
          break;
      }
      this._puesto.next(this.puesto);
    }
  };

  getObservablePuestoName = (): Observable<string | null> =>
    this._puestoName.asObservable();

  getCurrentPuestoName = (): string | null => this.puestoName;

  setPuestoName = (puesto: string): void => {
    this.puestoName = puesto;
    this._puestoName.next(this.puestoName);
  };
}
