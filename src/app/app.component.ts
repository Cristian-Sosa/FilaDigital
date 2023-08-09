import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PuestoService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private puestoService: PuestoService) {}

  ngOnInit(): void {
    
    setTimeout(() => {
      this.puestoService.setSucursal(this.route.snapshot.paramMap.get('sucursal'))
    }, 5000);
  }
}
