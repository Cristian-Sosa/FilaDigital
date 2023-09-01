import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MarketingDashboardService } from 'src/app/shared';

@Component({
  selector: 'app-dashboard-marketing-form',
  templateUrl: './dashboard-marketing-form.component.html',
  styleUrls: ['./dashboard-marketing-form.component.sass'],
})
export class DashboardMarketingFormComponent implements OnInit {
  public fechaActual: Date = new Date();

  constructor(private dashboardService: MarketingDashboardService) {}

  ngOnInit(): void {
    this.cambiarPuesto('1');
    this.dashboardService.getActiveImages();
  }

  ofertasForm = new FormGroup({
    puestoInput: new FormControl('1', [Validators.required]),
  });

  verOfertas = (): void => {
    this.dashboardService.getActiveImages();
  };

  cambiarPuesto = async (puesto: string | number) => {
    this.dashboardService.setPuesto(puesto);
    this.verOfertas();
  };
}
