import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PuestoService } from './shared';
import { take } from 'rxjs';
import { SucursalService } from './shared/services/sucursal/sucursal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private puestoService: PuestoService,
    private sucursalService: SucursalService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: async (param) => {
        const sucursal: string = await param['sucursal'];
        const puesto: string = await param['puesto'];

        this.setData(sucursal, puesto);
      },
      error: () => {
        this.router.navigate(['404']);
      },
    });
  }

  setData = (sucursal: string, puesto: string): void => {
    this.sucursalService.setSucursal(sucursal || 'av');
    this.puestoService.setPuesto(puesto || 'carniceria');
  };
}
