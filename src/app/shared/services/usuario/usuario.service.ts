import { Injectable } from '@angular/core';
import { IUsuario } from '../../models/usuario.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UsuarioService {
  private usuario: IUsuario | null = null;
  private _usuario: BehaviorSubject<IUsuario | null>;

  constructor() {
    this._usuario = new BehaviorSubject(this.usuario);
  }

  getCurrentUser = (): Observable<IUsuario | null> =>
    this._usuario.asObservable();

  getCurrentUserData = (): IUsuario | null => this.usuario;

  setCurrentUser = (usuario: IUsuario): void => {
    this.usuario = usuario;
    this._usuario.next(this.usuario);
  };
}
