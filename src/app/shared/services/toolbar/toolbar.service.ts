import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToolbarService {
  private toolbarTitle: string = '';
  private _toolbarTitle: BehaviorSubject<string>;
  constructor() {
    this._toolbarTitle = new BehaviorSubject(this.toolbarTitle);
  }

  getCurrentToolbarTitle = (): string => this.toolbarTitle;

  getToolbarTitleObservable = (): Observable<string> =>
    this._toolbarTitle.asObservable();

  setToolbarTitle = (newTitle: string): void => {
    this.toolbarTitle = newTitle;
    this._toolbarTitle.next(this.toolbarTitle);
  };
}
