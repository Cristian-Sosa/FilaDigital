import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PuestoService } from '../puesto';

@Injectable({
  providedIn: 'root',
})
export class CarrouselService {
  private oferta: string | null = null;
  private _oferta: BehaviorSubject<string | null>;

  private ofertas: any;
  private ofertasLength: number = 0;

  private interval: any;

  constructor(private http: HttpClient, private puestoService: PuestoService) {
    this._oferta = new BehaviorSubject(this.oferta);
  }

  getOfertaObservable = (): Observable<string | null> =>
    this._oferta.asObservable();

  getOfertasActivas = (): Observable<any> => {
    let sector: number | string = this.puestoService.getCurrentPuesto()!;
    let urlGet: string =
      environment.apiReportes + `Imagen/VerImagenes?sector_id=${sector}`;

    return this.http.get<any>(urlGet);
  };

  getOfertas = (): void => {
    this.getOfertasActivas()
      .pipe(take(3))
      .subscribe({
        next: (ofertas) => {
          this.ofertas = ofertas.data;

          this.interval = setInterval(() => this.intervalFunction(), 600000);
        },
        error: () => {
          this.oferta = 'assets/images/carniceria-default.png';
          this._oferta.next(this.oferta);
        },
      });
  };

  intervalFunction = (): void => {
    if (this.ofertas.length > 0) {
      this.oferta = this.ofertas[this.ofertasLength]?.imagen || null;

      if (this.ofertasLength == this.ofertas.length) {
        this.ofertasLength = 0;
        this.oferta = this.ofertas[this.ofertasLength]?.imagen || null;
      }
      this._oferta.next('data:image/png;base64,'.concat(this.oferta!));
      this.ofertasLength++;
    }
  };

  clearInterval = (): void => {
    clearInterval(this.interval);
  };
}
