import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PuestoService {
  private puesto: number | null = null;
  private _puesto: BehaviorSubject<number | null>;

  private sucursal: number | null = null;
  private _sucursal: BehaviorSubject<number | null>;

  constructor() {
    this._puesto = new BehaviorSubject(this.puesto);
    this._sucursal = new BehaviorSubject(this.sucursal);
  }

  // Manejo de Puestos
  getCurrentPuesto = (): Observable<number | null> =>
    this._puesto.asObservable();

  setPuesto = (puesto: number): void => {
    this.puesto = puesto;
    this._puesto.next(this.puesto);
  };

  // Manejo de Sucursales
  getCurrentSucursal = (): Observable<number | null> =>
    this._sucursal.asObservable();

  setSucursal = (sucursal: number | null): void => {
    this.sucursal = sucursal;
    this._sucursal.next(this.sucursal);
  };
}
