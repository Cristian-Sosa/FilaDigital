import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PuestoService, SucursalService, TurneroService } from 'src/app/shared';

@Component({
  selector: 'app-turnero-digital',
  templateUrl: './turnero-digital.component.html',
  styleUrls: ['./turnero-digital.component.sass'],
})
export class TurneroDigitalComponent implements OnInit, OnDestroy {
  public turnos: any = null;

  constructor(
    private turneroService: TurneroService,
    private puestoService: PuestoService,
    private sucursalService: SucursalService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.turneroService.clearInterval();
  }

  ngOnInit(): void {
    this.turneroService.getDatosTurnero();
    this.turneroService.getTurnosObservable().subscribe({
      next: (turnos) => {
        if (turnos === undefined) {
          this.router.navigate([
            'turnero',
            this.sucursalService.getCurrentSucursalMin(),
            this.puestoService.getCurrentPuestoName(),
          ]);
        } else {
          this.turnos = turnos;
        }
      },
      error: () => this.router.navigate(['404']),
    });
  }
}
