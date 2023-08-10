import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass'],
})
export class ToolbarComponent {
  public title: string;

  constructor() {
    this.title = 'Turnero digital';
  }
}
