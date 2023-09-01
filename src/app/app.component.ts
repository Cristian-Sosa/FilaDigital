import { Component, OnInit } from '@angular/core';
import { LoaderService, ToastService, ToolbarService } from './shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  public isLoading: boolean = true;
  public isToast: boolean = false;
  public showFooter: boolean = true;

  constructor(
    private toastService: ToastService,
    private loaderService: LoaderService,
    private toolbarService: ToolbarService
  ) {}

  ngOnInit(): void {
    this.toastService.getToastObservable().subscribe({
      next: (currentState) => (this.isToast = currentState.show),
    });
    this.loaderService.getLoaderObservable().subscribe({
      next: (currentState) => (this.isLoading = currentState),
    });
    this.toolbarService.getToolbarTitleObservable().subscribe((title) => {
      if (title.includes('Carnicer') || title.includes('Fiambre')) {
        this.showFooter = false;
      } else {
        this.showFooter = true;
      }
    })

  }
}
