import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SucursalService {
  private sucursal: number | null = null;
  private _sucursal: BehaviorSubject<number | null>;

  constructor(private router: Router) {
    this._sucursal = new BehaviorSubject(this.sucursal);
  }

  getObservableSucursal = (): Observable<number | null> =>
    this._sucursal.asObservable();

  getCurrentSucursal = (): number | null => this.sucursal;

  setSucursal = (sucursal?: string | null): void => {
    if (sucursal !== undefined || sucursal !== null) {
      switch (sucursal) {
        case 'AV':
          this.sucursal = 1;
          break;
        case 'R20':
          this.sucursal = 2;
          break;
        case 'SV':
          this.sucursal = 3;
          break;

        default:
          this._sucursal.next(this.sucursal);
          break;
      }
    } else {
      this.router.navigate(['404']);
    }
  };
}
