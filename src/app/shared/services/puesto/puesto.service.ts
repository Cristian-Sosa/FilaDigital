import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PuestoService {
  private puesto: number | null = null;
  private _puesto: BehaviorSubject<number | null>;

  constructor() {
    this._puesto = new BehaviorSubject(this.puesto);
  }

  // Manejo de Puestos
  getObservablePuesto = (): Observable<number | null> =>
    this._puesto.asObservable();

  getCurrentPuesto = (): number | null => this.puesto;

  setPuesto = (puesto: string): void => {
    if (puesto) {
      switch (puesto.toLocaleLowerCase()) {
        case 'carniceria':
          this.puesto = 1;
          break;
        case 'fiambreria':
          this.puesto = 2;
          break;

        default:
          this._puesto.next(this.puesto);
          break;
      }
    }
  };
}
