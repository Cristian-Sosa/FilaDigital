import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarketingDashboardService {
  private oferta: any = null;
  private _oferta: BehaviorSubject<any> = new BehaviorSubject(this.oferta);

  private ofertas: any[] = [];
  private _ofertas: BehaviorSubject<any[]> = new BehaviorSubject(this.ofertas);

  private puesto: number | string | null = '1';
  private _puesto: BehaviorSubject<number | string | null> =
    new BehaviorSubject(this.puesto);

  constructor(private http: HttpClient) {}

  setPuesto = (puesto: string | number): void => {
    this.puesto = puesto;
    this._puesto.next(this.puesto)
  };

  getCurrentPuesto = (): number | string | null => this.puesto;

  getPuestoObservable = (): Observable<number | string | any> =>
    this._puesto.asObservable();

  // Oferta methods
  setOferta = (oferta: any): void => {
    this.oferta = oferta;
    this._oferta.next(this.oferta);
  };

  getCurrentOferta = (): any => this.oferta;

  getOfertaObservable = (): Observable<any> => this._oferta.asObservable();

  // Ofertas Methods
  setOfertas = (ofertas: any): void => {
    this.ofertas = ofertas;
    this._ofertas.next(this.ofertas);
  };

  getCurrentOfertas = (): any => this.ofertas;

  getOfertasObservable = (): Observable<any> => this._ofertas.asObservable();

  // Global methods
  publicarImagen(file: FormData): Observable<any> {
    let url: string = '';
    url = environment.apiReportes.concat(
      `Imagen/PublicarImagen/${this.puesto}`
    );

    return this.http.post<any>(url, file);
  }

  getImages(puesto: any): Observable<any> {
    let url: string = '';
    url = environment.apiReportes.concat(
      `Imagen/VerImagenes?sector_id=${puesto}`
    );
    return this.http.get<any>(url);
  }

  disableImage(imagenId: number | string) {
    let url: string = '';
    url = environment.apiTurnos.concat(
      `Imagen/DeshabilitarImagen?sector_id=${this.puesto}&imagen_id=${imagenId}`
    );
    return this.http.delete<any>(url);
  }

  getActiveImages = (): void => {
    this.getImages(this.getCurrentPuesto()).subscribe({
      next: (res) => {
        if (res?.data.length > 0) {
          this.setOferta(res?.data[0]);
          this.setOfertas(res?.data);
        }
      },
    });
  };
}
