import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SucursalService, PuestoService } from 'src/app/shared';

@Component({
  selector: 'app-fila-digital',
  templateUrl: './fila-digital.component.html',
  styleUrls: ['./fila-digital.component.sass']
})
export class FilaDigitalComponent {
  constructor(private sucursalService: SucursalService, private puestoService: PuestoService, private router: Router) {}

  volverInicio = () => this.router.navigate(['turnero', this.sucursalService.getCurrentSucursalMin(), this.puestoService.getCurrentPuestoName()])
}
