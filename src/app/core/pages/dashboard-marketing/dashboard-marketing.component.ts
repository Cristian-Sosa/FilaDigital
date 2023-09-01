import { Component, OnInit, inject } from '@angular/core';
import { LoaderService, MarketingDashboardService, ToolbarService } from 'src/app/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-marketing',
  templateUrl: './dashboard-marketing.component.html',
  styleUrls: ['./dashboard-marketing.component.sass'],
})
export class DashboardMarketingComponent implements OnInit {
  public urlImage: any;
  public caducidadImagen: string | undefined = Date.now().toString();

  public $archivo!: any;
  public formData = new FormData();

  private loaderService = inject(LoaderService);

  constructor(
    private toolbarService: ToolbarService,
    private marketingDashboardService: MarketingDashboardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('/dashboard/marketing')) {
      this.toolbarService.setToolbarTitle('Gestor de turnero - marketing')
    } else if (this.router.url.includes('/dashboard/administrador')) {
      this.toolbarService.setToolbarTitle('Gestor de turnero - administrador')
    }

    this.marketingDashboardService.getOfertaObservable().subscribe(image => this.urlImage = image?.imagen || null)
  }
}
