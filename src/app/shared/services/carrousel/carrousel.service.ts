import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, Signal, effect, signal } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, interval, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SucursalService } from '../sucursal';
import { TimerHandle } from 'rxjs/internal/scheduler/timerHandle';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Injectable({
  providedIn: 'root',
})
export class CarrouselService implements  OnDestroy {
  private oferta: string | null = null;
  private _oferta: BehaviorSubject<string | null>;

  private ofertas: Array<string> = [];
  private ofertasLength: number = 0;

  private interval!: any

  constructor(
    private http: HttpClient,
    private sucursalService: SucursalService
  ) {
    this._oferta = new BehaviorSubject(this.oferta);
  }


  ngOnDestroy(): void {
    clearInterval(this.interval)
}

  getOfertasActivas = (): Observable<any> => {
    let sector: number | string = this.sucursalService.getCurrentSucursal()!;
    let urlGet: string = environment.apiUrl.concat(
      `VerImagenes?sector_id=${sector}`
    );

    return this.http.get<any>(urlGet);
  };

  getOfertas = (): void => {
    this.getOfertasActivas()
      .pipe(take(1))
      .subscribe({
        next: (ofertas) => {
          this.ofertas = ofertas.data;
        },
        error: () => {
          this.oferta = 'carniceria-default';
          this._oferta.next(this.oferta);
        },
      });

      this.interval = setInterval(() => this.intervalFunction(), 500);
  };

  intervalFunction = () => {
    this.oferta = this.ofertas[this.ofertasLength];
    console.log(this.oferta);
    this.ofertasLength++;
  };
}
