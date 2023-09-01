import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  validateUser = (
    usuario: string,
    password: string
  ): Observable<{ token: string }> => {
    let apiUrl: string = environment.apiAuth.concat('Autenticacion/Loggin');
    return this.http.post<{ token: string }>(apiUrl, {
      usuario: usuario,
      contrasenia: password,
    });
  };
}
