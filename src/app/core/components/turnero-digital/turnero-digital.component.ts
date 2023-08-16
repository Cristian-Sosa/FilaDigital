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
    private sucursalService: SucursalService,
    private puestoService: PuestoService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.turneroService.clearInterval();
  }

  ngOnInit(): void {
    this.turneroService.getDatosTurnero();
    this.turneroService.getTurnosObservable().subscribe({
      next: (turnos) => {
        this.turnos = turnos;

        if (this.turnos?.numero < this.turnos?.turnoActual?.numero) {
          if (this.turnos?.numero < 20 && this.turnos?.turnoActual?.numero > 80) {
            this.router.navigate([
              'turnero',
              this.sucursalService.getCurrentSucursalMin()?.toUpperCase(),
              this.puestoService.getCurrentPuestoName()?.toLowerCase(),
            ]);
          }
        }
      },
    });
  }
}
