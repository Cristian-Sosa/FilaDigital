import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurneroService {

  constructor(private http: HttpClient) { }

  getTurnoCliente(): Observable<any> {
    let urlPostTurno: string = `http://www.dinosauriorrhh.com.ar/APITurneroCliente/api/TurnoCliente/IngresarTurno`;

    let oClienteReq = {
      id: 1,
      numero: 5,
      sector_Id: 1,
    };

    // Descomentar para hacer pruebas en Testing
    // urlPostTurno = `http://192.169.1.10:81/api/TurneroCliente/IngresarTurno`;

    return this.http.post<any>(urlPostTurno, oClienteReq);
  }
}
