import { Component, OnInit } from '@angular/core';
import { PuestoService, SucursalService } from '../../services';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass'],
})
export class ToolbarComponent implements OnInit {
  public sucursalName: string;
  public puestoName: string;

  constructor(
    private sucursalService: SucursalService,
    private puestoService: PuestoService
  ) {
    this.sucursalName = '';
    this.puestoName = '';
  }
  ngOnInit(): void {
    this.puestoService.getObservablePuestoName().subscribe({
      next: (puestoName) => {
        this.puestoName = puestoName || '';
      },
    });
    this.sucursalService.getObservableSucursalName().subscribe({
      next: (sucursalName) => {
        this.sucursalName = sucursalName || '';
      },
    });
  }
}
