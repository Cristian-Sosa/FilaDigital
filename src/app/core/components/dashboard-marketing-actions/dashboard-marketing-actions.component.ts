import { Component, inject } from '@angular/core';
import { MarketingDashboardService } from 'src/app/shared';

@Component({
  selector: 'app-dashboard-marketing-actions',
  templateUrl: './dashboard-marketing-actions.component.html',
  styleUrls: ['./dashboard-marketing-actions.component.sass']
})
export class DashboardMarketingActionsComponent {
  public caducidadDate: Date | number = new Date

  private _archivo: any = null;
  private formData: FormData = new FormData;

  private marketingDashboardService = inject(MarketingDashboardService);

  cargarOferta = (input: Event): void => {
    this._archivo = (<HTMLInputElement>input.target).files![
      (<HTMLInputElement>input.target).files!.length - 1
    ];
    
    this.formData.append('file', this._archivo, this.caducidadDate.toString());

    console.log({formData: this.formData.get('file')})

    this.marketingDashboardService.publicarImagen(this.formData)   
  }

  changeDate = (event: Event): void => {
    this.caducidadDate = (<HTMLInputElement>event.target).valueAsDate!
  }
}
