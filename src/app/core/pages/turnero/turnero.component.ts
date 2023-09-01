import { Component, HostListener, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService, PuestoService, TurneroService } from 'src/app/shared';

@Component({
  selector: 'app-turnero',
  templateUrl: './turnero.component.html',
  styleUrls: ['./turnero.component.sass'],
})
export class TurneroComponent implements OnInit {
  private turneroService = inject(TurneroService);
  private loaderService = inject(LoaderService);
  private puestoService = inject(PuestoService);
  private router = inject(Router);

  private sectorPuesto: number = 0;

  public showModal: boolean = false;

  ngOnInit(): void {
    this.loaderService.setLoaderState(false);
    if (localStorage.getItem('puesto')) {
      this.puestoService.setPuesto(localStorage.getItem('puesto')!);
    } else {
      localStorage.clear();
      this.router.navigate(['login']);
    }
  }

  @HostListener('window:keyup.Enter', ['$event'])
  atenderTurno = ($event: KeyboardEvent) => {
    this.showModal ? this.isReset(true) : this.turnoAtendido($event);
  };

  @HostListener('window:keyup.Dot', ['$event'])
  resetearTurnero = () => {
    this.showModal ? this.isReset(false) : (this.showModal = true);
  };

  @HostListener('window:keyup.Escape', ['$event'])
  salir = ($event: KeyboardEvent) => {
    localStorage.clear();
    this.router.navigate(['login']);
  };

  turnoAtendido = (evento: KeyboardEvent) => {
    if (this.turneroService.getCurrentTurno() == 99) {
      this.turneroService.setTurno(0);
    } else {
      let turno: number = this.turneroService.getCurrentTurno();
      turno++;
      this.turneroService.setTurno(turno);
      this.turneroService
        .changeTurno(
          this.puestoService.getCurrentPuesto()!,
          this.turneroService.getCurrentTurno()
        )
        .subscribe();
    }
  };

  turneroReset(isReset?: boolean) {
    if (isReset && this.turneroService.getCurrentTurno() !== 0) {
      this.turneroService.changeTurno(this.sectorPuesto, 0).subscribe();
    }

    this.showModal = false;
  }

  isReset = (isReturn: boolean) => {
    if (isReturn && this.turneroService.getCurrentTurno() !== 0) {
      this.turneroService
        .changeTurno(this.puestoService.getCurrentPuesto()!, 0)
        .subscribe((res) => this.turneroService.setTurno(res?.data?.numero));
    }
    this.showModal = false;
  };
}
