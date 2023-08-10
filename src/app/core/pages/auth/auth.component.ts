import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PuestoService, SucursalService } from 'src/app/shared';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
})
export class AuthComponent implements OnInit {
  private currentRoute: Array<string> = [];
  private sucursal: string = '';
  private puesto: string = '';

  constructor(
    private router: Router,
    private sucursalService: SucursalService,
    private puestoService: PuestoService
  ) {
    this.currentRoute = this.router.url.toString().split('/');
    this.sucursal = this.currentRoute[2];
    this.puesto = this.currentRoute[3];
  }

  ngOnInit(): void {
    this.sucursalService.setSucursal(this.sucursal);
    this.puestoService.setPuesto(this.puesto);
  }
}
