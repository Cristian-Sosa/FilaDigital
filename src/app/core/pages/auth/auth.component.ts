import { Component, OnInit } from '@angular/core';
import { LoaderService, ToolbarService } from 'src/app/shared';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
})
export class AuthComponent implements OnInit {
  public isError: boolean = false;

  constructor(
    private toolbarService: ToolbarService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.toolbarService.setToolbarTitle('Gestor de turnero');
    this.loaderService.setLoaderState(false);
  }
}
