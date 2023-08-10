import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private puestoService: PuestoService,
    private sucursalService: SucursalService
  ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.params)
    // this.route.url.pipe(take(1)).subscribe((route) => {
    //   this.sucursalService.setSucursal(route[1]?.toString());
    //   this.puestoService.setPuesto(route[2]?.toString());
    // });
    // setTimeout(() => {
    //   console.log(this.puestoService.getCurrentPuesto())
    //   console.log(this.sucursalService.getCurrentSucursal())
    // }, 5000);
  }
}
