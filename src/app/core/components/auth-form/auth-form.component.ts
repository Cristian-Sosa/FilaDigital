import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  LoaderService,
  PuestoService,
  SucursalService,
  TurneroService,
  UsuarioService,
} from 'src/app/shared';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.sass'],
})
export class AuthFormComponent {
  private turnoCliente: string | number = '';

  public buttonDisabled: boolean = true;

  constructor(
    private sucursalService: SucursalService,
    private puestoService: PuestoService,
    private turnosService: TurneroService,
    private usuarioService: UsuarioService
  ) {}

  public turnoForm = new FormGroup({
    turnoInput: new FormControl(this.turnoCliente, [
      Validators.minLength(1),
      Validators.maxLength(2),
      Validators.min(0),
      Validators.max(99),
      Validators.required,
    ]),
  });

  submitForm = (): void => {
    console.log('submiting form');
    this.turnosService
      .getTurnoCliente()
      .subscribe((res) => console.log(res))
      .add(() => console.log('after submiting form'));
  };
}
