import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SucursalService } from '../sucursal';
import { UsuarioService } from '../usuario';
import { Router } from '@angular/router';
import { ToastService } from '../toast';
import { IToast } from '../../models';
import { PuestoService } from '../puesto';

@Injectable({
  providedIn: 'root',
})
export class TurneroService {
  public turnos: any = null;
  private _turnos: BehaviorSubject<any>;

  private interval: any = null;

  constructor(
    private sucursalService: SucursalService,
    private usuarioService: UsuarioService,
    private toastService: ToastService,
    private http: HttpClient,
  ) {
    this._turnos = new BehaviorSubject(null);
  }

  getTurnosObservable = (): Observable<any> => this._turnos.asObservable();

  getTurnoCliente(numeroTurno: number | string): Observable<any> {
    let urlPostTurno: string = environment.apiUrl.concat(`IngresarTurno`);

    let oClienteReq = {
      id: 1,
      numero: numeroTurno,
      sector_Id: this.sucursalService.getCurrentSucursal(),
    };

    return this.http.post<any>(urlPostTurno, oClienteReq);
  }

  getTurnero = (): Observable<any> => {
    let turno: number | string =
      this.usuarioService.getCurrentUserData()?.idTurno!;
    let sector: number | string = this.sucursalService.getCurrentSucursal()!;
    let urlGetTurnero: string = environment.apiUrl.concat(
      `VerTurno?cliente_id=${turno}&sector_id=${sector}`
    );
    return this.http.get<any>(urlGetTurnero);
  };

  getDatosTurnero = () => {
    this.getTurnero().subscribe({
      next: (datosTurnero) => {
        this.turnos = datosTurnero.data;
        this._turnos.next(this.turnos);
        this.toastService.isTurnoProximo(
          this.turnos.numero,
          this.turnos.turnoActual.numero
        );
      },
      error: () => {
        this.turnos = undefined;
        this._turnos.next(this.turnos);
      },
    });

    if (this.interval === null) {
      this.interval = setInterval(() => this.getDatosTurnero(), 5500);
    }


    if (this.turnos?.numero < this.turnos?.turnoActual?.numero) {
      if (this.turnos?.numero < 20 && this.turnos?.turnoActual?.numero > 80) {
      } else {
        this.turnos = undefined;
        this._turnos.next(this.turnos);
      }
    }
  };

  clearInterval = (): void => {
    let toast: IToast = {
      text: 'Debes ingresar tu turno',
      icon: {
        type: 'exclamation',
        route: '/assets/icons/exclamation-circle.svg',
      },
      show: false,
    };
    clearInterval(this.interval);
    this.toastService.setToastState(toast);
  };
}
