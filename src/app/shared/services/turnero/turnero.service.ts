import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SucursalService } from '../sucursal';
import { UsuarioService } from '../usuario';

@Injectable({
  providedIn: 'root',
})
export class TurneroService {
  constructor(
    private http: HttpClient,
    private sucursalService: SucursalService,
    private usuarioService: UsuarioService,
  ) {}

  getTurnoCliente(numeroTurno: number | string): Observable<any> {
    let urlPostTurno: string = environment.apiUrl.concat(`IngresarTurno`);

    let oClienteReq = {
      id: 1,
      numero: numeroTurno,
      sector_Id: this.sucursalService.getCurrentSucursal(),
    };

    // Descomentar para hacer pruebas en Testing
    // urlPostTurno = `http://192.169.1.10:81/api/TurneroCliente/IngresarTurno`;

    return this.http.post<any>(urlPostTurno, oClienteReq);
  }

  getTurnero = (): Observable<any> => {
    let turno: number | string = this.usuarioService.getCurrentUserData()?.idTurno!;
    let sector: number | string = this.sucursalService.getCurrentSucursal()!;
    let urlGetTurnero: string = environment.apiUrl.concat(
      `VerTurno?cliente_id=${turno}&sector_id=${sector}`
    );
    return this.http.get<any>(urlGetTurnero);
  };
}
