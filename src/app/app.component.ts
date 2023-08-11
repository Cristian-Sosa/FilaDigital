import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoaderService, PuestoService, ToastService } from './shared';
import { SucursalService } from './shared/services/sucursal/sucursal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  public isLoading: boolean = true;
  public isToast: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private puestoService: PuestoService,
    private sucursalService: SucursalService,
    private loaderService: LoaderService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loaderService
      .getLoaderObservable()
      .subscribe((loaderState) => (this.isLoading = loaderState));
      
    this.toastService.getToastObservable().subscribe((toastState) => this.isToast = toastState.show)
    this.route.params.subscribe({
      next: async (param) => {
        const sucursal: string = await param['sucursal'];
        const puesto: string = await param['puesto'];

        this.setData(sucursal, puesto);
      },
      error: () => {
        this.router.navigate(['404']);
      },
    });
    this.sucursalService.setSucursal(
      this.route.snapshot.paramMap.get('sucursal')!
    );
    this.puestoService.setPuesto(this.route.snapshot.paramMap.get('puesto')!);
  }

  setData = (sucursal: string, puesto: string): void => {
    this.sucursalService.setSucursal(sucursal || 'av');
    this.puestoService.setPuesto(puesto || 'carniceria');
  };
}
