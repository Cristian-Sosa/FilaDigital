import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TurneroService {
  private http = inject(HttpClient);

  public turno: number = 0;
  private _turno: BehaviorSubject<number> = new BehaviorSubject(this.turno);

  getTurnoObservable = (): Observable<number> => this._turno.asObservable();

  getCurrentTurno = (): number => this.turno;

  setTurno = (turno: number): void => {
    this.turno = turno;
    this._turno.next(this.turno);
  };

  getTurnoPuesto = (sector: number): Observable<any> => {
    let url = '';
    url = environment.apiTurnos.concat(`VerTurnoActual?sector_id=${sector}`);

    return this.http.get<any>(url);
  };

  changeTurno(sector: number, turno: number): Observable<any> {
    let orTurno = {
      id: 0,
      numero: turno,
      sector_id: sector.toString(),
      fechaLlamado: new Date(),
      fechaAtendido: new Date(),
    };

    let url: string = '';
    url = environment.apiTurnos.concat(`LlamarTurno`);

    return this.http.post<any>(url, orTurno);
  }

  getClientes(): Observable<any> {
    let url: string = '';
    url = environment.apiReportes.concat('Reporte/VerClientes');
    // urlClientes = 'http://172.17.2.8:83/api/Reporte/VerClientes';//prod
    return this.http.get<any>(url);
  }

  getTurnos(): Observable<any> {
    let url: string = '';
    url = environment.apiReportes.concat('Reporte/VerTurnos');
    // urlTurnos = 'http://172.17.2.8:83/api/Reporte/VerTurnos';//prod
    return this.http.get<any>(url);
  }
}
