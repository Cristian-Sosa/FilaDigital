import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass'],
})
export class ToolbarComponent implements OnInit {
  public currentTitle: string = '';
  public showCerrarSesion: boolean = false;

  constructor(private toolbarService: ToolbarService, private router: Router) {}

  ngOnInit(): void {
    this.toolbarService.getToolbarTitleObservable().subscribe({
      next: (currentTitle) => {
        this.currentTitle = currentTitle;
        if (
          this.currentTitle.includes('marketing') ||
          this.currentTitle.includes('administrador')
        ) {
          this.showCerrarSesion = true;
        } else {
          this.showCerrarSesion = false;
        }
      },
      error: () => this.router.navigate(['']),
    });
  }

  cerrarSesion(): void {
    localStorage.clear();
    this.router.navigate(['login'])
  }
}
