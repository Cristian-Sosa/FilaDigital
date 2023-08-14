import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PuestoService, SucursalService, TurneroService } from 'src/app/shared';

@Component({
  selector: 'app-turnero-digital',
  templateUrl: './turnero-digital.component.html',
  styleUrls: ['./turnero-digital.component.sass'],
})
export class TurneroDigitalComponent implements OnInit {
  public turnos: any = null;

  constructor(private turneroService: TurneroService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerDatosTurnero();
    setTimeout(() => this.obtenerDatosTurnero(), 5000);
  }

  obtenerDatosTurnero = (): void => {
    this.turneroService.getTurnero().subscribe({
      next: (datosTurnero) => {
        this.turnos = datosTurnero.data;
      },
      error: () => {
        this.router.navigate(['404']);
      },
    });
  };
}
