import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { PuestoService, TurneroService } from 'src/app/shared';

@Component({
  selector: 'app-turnero-digital',
  templateUrl: './turnero-digital.component.html',
  styleUrls: ['./turnero-digital.component.sass'],
})
export class TurneroDigitalComponent implements OnInit {
  public turno: string | number = 0;

  constructor(
    private turneroService: TurneroService,
    private puestoService: PuestoService
  ) {}

  ngOnInit(): void {
    this.turneroService
      .getTurnoPuesto(this.puestoService.getCurrentPuesto()!)
      .pipe(take(3))
      .subscribe((res) => {
        this.turneroService.setTurno(res?.data.numero);
      });
    this.turneroService.getTurnoObservable().subscribe((turno) => {
      this.turno = turno;
      this.llamar(this.turno.toString());
    });
  }

  llamar = (msj: string): void => {
    speechSynthesis.cancel();
    let mensaje = new SpeechSynthesisUtterance();
    mensaje.voice = null;
    mensaje.volume = 100;
    mensaje.rate = 0.7;
    mensaje.text = 'Turno numero ' + msj;
    mensaje.pitch = 0.3;
    speechSynthesis.speak(mensaje);
  };
}
