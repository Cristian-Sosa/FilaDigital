import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SucursalService {
  private sucursal: number | null = null;
  private _sucursal: BehaviorSubject<number | null>;

  private sucursalName: string | null = null;
  private _sucursalName: BehaviorSubject<string | null>;

  constructor() {
    this._sucursal = new BehaviorSubject(this.sucursal);
    this._sucursalName = new BehaviorSubject(this.sucursalName);
  }

  // Métodos Sucursal ID
  getObservableSucursal = (): Observable<number | null> =>
    this._sucursal.asObservable();

  getCurrentSucursal = (): number | null => this.sucursal;

  // Métodos Sucursal Name
  getObservableSucursalName = (): Observable<string | null> =>
    this._sucursalName.asObservable();

  getCurrentSucursalName = (): string | null => this.sucursalName;

  // Seteo de sucursal <ID | Name>
  setSucursal = (sucursal: string): void => {
    if (sucursal) {
      switch (sucursal.toLocaleLowerCase()) {
        case 'av':
          this.sucursal = 1;
          this.sucursalName = 'super mami - alto verde';
          break;
        case 'r20':
          this.sucursal = 2;
          this.sucursalName = 'super mami - ruta 20';
          break;
        case 'sv':
          this.sucursal = 3;
          this.sucursalName = 'super mami - san vicente';
          break;

        default:
          this._sucursal.next(this.sucursal);
          this._sucursalName.next(this.sucursalName);
          break;
      }
    }
  };
}
