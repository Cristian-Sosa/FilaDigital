import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  LoaderService,
  ToastService,
  TurneroService,
  UsuarioService,
} from 'src/app/shared';
import { IToast } from 'src/app/shared/models';
import { IUsuario } from 'src/app/shared/models/usuario.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.sass'],
})
export class AuthFormComponent {
  private turnoCliente: string | number = '';
  private usuario: IUsuario | null = null;

  public buttonDisabled: boolean = true;
  private toast: IToast = {
    text: 'Debes ingresar tu turno',
    icon: {
      type: 'exclamation',
      route: '/assets/icons/exclamation-circle.svg',
    },
    show: true,
  };

  constructor(
    private turnosService: TurneroService,
    private usuarioService: UsuarioService,
    private loaderService: LoaderService,
    private toastService: ToastService,
    private router: Router
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
    this.toast.show = false;
    this.toastService.setToastState(this.toast);

    if (Number.isInteger(this.turnoForm.get('turnoInput')?.value)) {
      this.loaderService.setLoaderState(true);
      this.turnosService
        .getTurnoCliente(this.turnoForm.get('turnoInput')?.value!)
        .subscribe((response) => {
          console.log(response)
          if (response?.status === 200 || response?.status === 201) {
            this.usuario = {
              idTurno: response?.data?.id,
              turno: this.turnoForm.get('turnoInput')?.value!,
              fecha_alta: response?.data?.fechaAlta,
              fecha_baja: response?.data?.fechaBaja,
            };
            this.router.navigate(['/turnero/turnos']);
            this.usuarioService.setCurrentUser(this.usuario);
          } else if (response?.status === 204) {
            this.toast.text = `El turno ${this.turnoForm.get('turnoInput')?.value} ya fue atendido`;
            this.toast.show = true;
            this.toastService.setToastState(this.toast);
          } else {
            this.toast.text = `Ingresá tu turno`;
            this.toast.show = true;
            this.toastService.setToastState(this.toast);
          }
        })
        .add(() => {
          setTimeout(() => {
            this.loaderService.setLoaderState(false);
          }, 800);
        });
    } else {
      this.toast.text = `Revisá tu turno`;
      this.toast.show = true;
      this.toastService.setToastState(this.toast);
    }
  };
}
