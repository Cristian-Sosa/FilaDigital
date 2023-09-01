import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';

import { UsuarioService, ToastService, LoaderService, PuestoService, ToolbarService } from 'src/app/shared';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.sass'],
})
export class AuthFormComponent implements OnInit {
  public isError: boolean = false;

  constructor(
    private toastService: ToastService,
    private loaderService: LoaderService,
    private usuarioService: UsuarioService,
    private puestoService: PuestoService,
    private toolbarService: ToolbarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('puesto')) {
      this.puestoService.setPuesto(localStorage.getItem('puesto')!);
      this.router.navigate([`turnero/${localStorage.getItem('puesto')}`]);
    }
  }

  authForm = new FormGroup({
    userInput: new FormControl(null, [
      Validators.required,
      Validators.nullValidator,
    ]),
    passwordInput: new FormControl(null, [
      Validators.required,
      Validators.nullValidator,
      Validators.minLength(2),
      Validators.maxLength(16),
    ]),
  });

  validateForm = (event: Event): void => {
    event.preventDefault();
    let usuario: string = this.authForm.get('userInput')?.value!;
    let password: string = this.authForm.get('passwordInput')?.value!;

    if ((usuario === '99' || usuario === '100') && password === '123') {
      this.puestoService.setPuesto(usuario);
      localStorage.setItem('puesto', usuario.toString())
      this.router.navigate([`turnero/${usuario}`]);
    } else {
      this.loaderService.setLoaderState(true);
      this.usuarioService
        .validateUser(usuario, password)
        .pipe(take(3))
        .subscribe((response) => {
          if (response.token !== '') {
            localStorage.setItem('token', response.token)
            
            if (usuario === 'marketing') {
              this.toolbarService.setToolbarTitle('Gestor de turnero - marketing')
            } else {
              this.toolbarService.setToolbarTitle('Gestor de turnero - administrador')
            }
            
            this.router.navigate([`dashboard/${usuario}`]);
          } else {
            this.toastService.setToastState({
              text: 'Usuario o contraseña incorrectos',
              show: true,
            });
          }
        });
      setTimeout(() => {
        this.loaderService.setLoaderState(false);
      }, 1200);
    }
  };
}
