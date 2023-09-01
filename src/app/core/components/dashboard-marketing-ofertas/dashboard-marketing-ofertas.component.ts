import { Component, OnInit, inject } from '@angular/core';
import { MarketingDashboardService } from 'src/app/shared';

@Component({
  selector: 'app-dashboard-marketing-ofertas',
  templateUrl: './dashboard-marketing-ofertas.component.html',
  styleUrls: ['./dashboard-marketing-ofertas.component.sass'],
})
export class DashboardMarketingOfertasComponent implements OnInit {
  public ofertas: any[] = [];

  private marketingDashboardService = inject(MarketingDashboardService);
  
  ngOnInit(): void {
    this.marketingDashboardService
      .getOfertasObservable()
      .subscribe((ofertas) => {
        this.ofertas = ofertas
      });
  }

  previewOferta = (oferta: any): void => {
    this.marketingDashboardService.setOferta(oferta)
  }

  caducarOferta = (ofertaId: string | number): void => {
    this.marketingDashboardService.disableImage(ofertaId)
    this.marketingDashboardService.getActiveImages();
  }
}
