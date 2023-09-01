import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loader: boolean;
  private _loader: BehaviorSubject<boolean>;

  constructor() {
    this.loader = false;
    this._loader = new BehaviorSubject(this.loader);
  }

  getLoaderObservable = (): Observable<boolean> => this._loader.asObservable();

  setLoaderState = (newState: boolean): void => {
    this.loader = newState;
    this._loader.next(this.loader);
  };
}
