import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../../services';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass'],
})
export class ToolbarComponent implements OnInit {
  public title: string;

  constructor(private sucursalService: SucursalService) {
    this.title = 'Turnero Digital'
  }
  ngOnInit(): void {
    this.sucursalService.getObservableSucursalName().subscribe({
      next: (sucursalName) => this.title = sucursalName || 'Turnero Digital'
    });
  }
}
