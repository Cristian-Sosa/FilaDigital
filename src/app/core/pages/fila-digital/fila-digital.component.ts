import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SucursalService, PuestoService } from 'src/app/shared';

@Component({
  selector: 'app-fila-digital',
  templateUrl: './fila-digital.component.html',
  styleUrls: ['./fila-digital.component.sass']
})
export class FilaDigitalComponent {
  public returnModal: boolean = false;
  constructor(private sucursalService: SucursalService, private puestoService: PuestoService, private router: Router) {}

  showReturnModal = (): void => {
    this.returnModal = !this.returnModal
  }

  volverInicio = (volver: boolean): void => {
    if (volver) {
      this.router.navigate(['turnero', this.sucursalService.getCurrentSucursalMin(), this.puestoService.getCurrentPuestoName()])
    } else {
      this.showReturnModal()
    }
  }
    
  
}
