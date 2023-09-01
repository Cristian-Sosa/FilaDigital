import { Component, ViewChild, OnInit } from '@angular/core';
import { GraficoComponent } from '../../components/admin-dashboard-tabla/admin-dashboard-tabla.component';
import { Router } from '@angular/router';
import { ToolbarService } from 'src/app/shared';

@Component({
  selector: 'app-tabla',
  templateUrl: './dashboard-administrador.component.html',
  styleUrls: ['./dashboard-administrador.component.sass'],
})
export class DashboardAdministradorComponent implements OnInit {
  //@ViewChild('svgDownload') svgDownload:
  dataTabla: any;

  constructor(
    public grafico: GraficoComponent,
    private router: Router,
    private toolbarService: ToolbarService
  ) {
    this.dataTabla = grafico.getTabla();
  }
  ngOnInit(): void {
    if (this.router.url.includes('/dashboard/marketing')) {
      this.toolbarService.setToolbarTitle('Gestor de turnero - marketing');
    } else if (this.router.url.includes('/dashboard/admin')) {
      this.toolbarService.setToolbarTitle('Gestor de turnero - administrador');
    }
  }

  text: string = '\uFEFF';
  nombreArchivo = 'tabla.csv';
  type = 'text/plain';
  cont = 0;

  leer(): void {
    const data = document.querySelectorAll<HTMLInputElement>('td');

    data.forEach((a) => {
      this.text += a.textContent;
      if (this.cont <= 4) {
        // corta reglon en 4
        this.text += ';';
        this.cont++;
      } else {
        this.text += '\n';
        this.cont = 0;
      }
    });
  }

  download(): void {
    this.leer();
    const a = document.getElementById('a') as HTMLAnchorElement;
    const file = new Blob([this.text], { type: this.type });
    a.href = URL.createObjectURL(file);
    a.download = this.nombreArchivo;
    a.click();
    this.text = '\uFEFF';
  }
}
