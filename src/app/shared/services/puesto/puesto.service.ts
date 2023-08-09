import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PuestoService {
  private puesto: number | null = null;
  private _puesto: BehaviorSubject<number | null>;

  private sucursal: string | null = null;
  private _sucursal: BehaviorSubject<string | null>;

  constructor(private router: Router, private route: ActivatedRoute) {
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
  getCurrentSucursal = (): Observable<string | null> =>
    this._sucursal.asObservable();

  setSucursal = (sucursal?: string | null): void => {
  };
}
